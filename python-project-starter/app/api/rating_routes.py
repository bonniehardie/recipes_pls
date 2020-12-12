from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Rating, db
from sqlalchemy.sql import func
import json

rating_routes = Blueprint('ratings', __name__)


@rating_routes.route('/')
@login_required
def all_ratings(userid, recipeid):
    ratings = Rating.query.filter(
        Rating.recipe_id == recipeid).all()
    return {"ratings": [rating.to_dict() for rating in ratings]}


@rating_routes.route('/', methods=['POST'], strict_slashes=False)
@login_required
def create_rating(userid, recipeid):
    req_data = json.loads(request.data)
    tasty = req_data['tasty']
    easy = req_data['easy']
    new_rating = Rating(
        tasty=tasty,
        easy=easy,
        recipe_id=recipeid,
        user_id=2
    )
    db.session.add(new_rating)
    db.session.commit()
    return new_rating.to_dict()


@rating_routes.route('/<int:ratingid>', methods=['PUT'], strict_slashes=False)
@login_required
def edit_rating(userid, recipeid, ratingid):
    req_data = json.loads(request.data)
    tasty = req_data['tasty']
    easy = req_data['easy']
    rating = Rating.query.filter(Rating.id == ratingid).first()
    rating.tasty = tasty
    rating.easy = easy
    rating.updated_at = func.now()
    db.session.commit()
    return rating.to_dict()


@rating_routes.route('/<int:ratingid>', methods=['DELETE'], strict_slashes=False)
@login_required
def delete_rating(userid, recipeid, ratingid):
    rating = Rating.query.filter(Rating.id == ratingid).first()
    db.session.delete(rating)
    db.session.commit()
    return {'id': ratingid}

from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Direction, db
from sqlalchemy.sql import func
import json

direction_routes = Blueprint('directions', __name__)


@direction_routes.route('/')
# @login_required
def all_directions(userid, recipeid):
    directions = Direction.query.filter(Direction.recipe_id == recipeid).all()
    return {"directions": [direction.to_dict() for direction in directions]}


@direction_routes.route('/', methods=['POST'], strict_slashes=False)
# @login_required
def create_direction(userid, recipeid):
    req_data = json.loads(request.data)
    name = req_data['name']
    step_number = req_data['step_number']
    new_direction = Direction(
        name=name,
        step_number=step_number,
        recipe_id=recipeid
    )
    db.session.add(new_direction)
    db.session.commit()
    return new_direction.to_dict()


@direction_routes.route('/<int:directionid>', methods=['PUT'], strict_slashes=False)
# @login_required
def edit_direction(userid, recipeid, directionid):
    req_data = json.loads(request.data)
    name = req_data['name']
    step_number = req_data['step_number']
    direction = Direction.query.filter(Direction.id == directionid).first()
    direction.name = name
    direction.step_number = step_number
    direction.updated_at = func.now()
    db.session.commit()
    return direction.to_dict()


@direction_routes.route('/<int:directionid>', methods=['DELETE'], strict_slashes=False)
# @login_required
def delete_direction(userid, recipeid, directionid):
    direction = Direction.query.filter(Direction.id == directionid).first()
    db.session.delete(direction)
    db.session.commit()
    return {'id': directionid }

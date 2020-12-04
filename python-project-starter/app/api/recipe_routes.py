from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Recipe, db
from sqlalchemy.sql import func
import json

recipe_routes = Blueprint('recipes', __name__)

## For Testing Only


@recipe_routes.route('/')
def test():
# def test(userid, recipeid):
#     return f'{userid} {recipeid}'
    return halo

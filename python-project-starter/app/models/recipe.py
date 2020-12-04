from .db import db
from sqlalchemy.orm import backref
from sqlalchemy.sql import func


class Recipe(db.Model):
    __tablename__ = 'recipes'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    picture_url = db.Column(db.String(), nullable=False)
    backstory = db.Column(db.String(), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=func.now())
    updated_at = db.Column(db.DateTime, nullable=False, default=func.now())

    ingredients = db.relationship('Ingredient', backref=backref('recipes', uselist=False), lazy=True)
    tools = db.relationship('Tool', backref=backref('recipes', uselist=False), lazy=True)
    directions = db.relationship('Direction', backref=backref('recipes', uselist=False), lazy=True)
    ratings = db.relationship('Rating', backref=backref('recipes', uselist=False), lazy=True)

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "picture_url": self.picture_url,
            "backstory": self.backstory,
            "user_id": self.user_id,
            "created_at": self.created_at,
            "updated_at": self.updated_at,
            "ingredient_ids": [ingredient.id for ingredient in self.ingredients],
            "tool_ids": [tool.id for tool in self.tools],
            "direction_ids": [direction.id for direction in self.directions],
            "rating_ids": [rating.id for rating in self.ratings],

        }

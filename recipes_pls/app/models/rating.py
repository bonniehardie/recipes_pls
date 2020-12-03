from .db import db
from sqlalchemy.sql import func


class Rating(db.Model):
    __tablename__ = 'ratings'

    id = db.Column(db.Integer, primary_key=True)
    tasty = db.Column(db.Integer, nullable=False)
    easy = db.Column(db.Integer, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    recipe_id = db.Column(db.Integer, db.ForeignKey('recipes.id'), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=func.now())
    updated_at = db.Column(db.DateTime, nullable=False, default=func.now())

    def to_dict(self):
        return {
            "id": self.id,
            "tasty": self.tasty,
            "easy": self.easy,
            "user_id": self.user_id,
            "recipe_id": self.recipe_id,
            "created_at": self.created_at,
            "updated_at": self.updated_at,
        }

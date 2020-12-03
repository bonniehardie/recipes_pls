from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from sqlalchemy.orm import backref


class User(db.Model):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key=True)
  username = db.Column(db.String(50), nullable=False, unique=True)
  email = db.Column(db.String(255), nullable=False, unique=True)
  hashed_password = db.Column(db.String(255), nullable=False)

  recipes = db.relationship('Recipe', backref='users', lazy=True)

  @property
  def password(self):
    return self.hashed_password

  @password.setter
  def password(self, password):
    self.hashed_password = generate_password_hash(password)

  def check_password(self, password):
    return check_password_hash(self.password, password)

  def to_dict(self):
    return {
        "id": self.id,
        "username": self.username,
        "email": self.email
    }

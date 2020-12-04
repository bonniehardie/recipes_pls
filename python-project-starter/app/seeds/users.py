from app.models import db, User
from datetime import datetime

def seed_users():
    demo = User(
        username='Chef Demo',
        email='chef@demo.io',
        password='omedfehc')
    db.session.add(demo)
    demo = User(
        username='Critic Demo',
        email='critic@demo.io',
        password='omedcitirc')
    db.session.add(demo)
    demo = User(
        username='Critic Demo 2',
        email='critic2@demo.io',
        password='2omedcitirc')
    db.session.add(demo)

    db.session.commit()

def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()

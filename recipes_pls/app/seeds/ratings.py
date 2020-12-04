from app.models import db, Rating

def seed_ratings():
    demo_rating = Rating(
        tasty=5,
        easy=5,
        user_id=2,
        recipe_id=1
    )
    db.session.add(demo_rating)
    demo_rating = Rating(
        tasty=5,
        easy=3,
        user_id=3,
        recipe_id=1
    )
    db.session.add(demo_rating)
    db.session.commit()

def undo_ratings():
    db.session.execute('TRUNCATE ratings RESTART IDENTITY CASCADE;')
    db.session.commit()

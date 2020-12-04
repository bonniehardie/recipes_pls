from app.models import db, Recipe

def seed_recipes():
    demo_recipe = Recipe(
        name='Salmon and Asparagus in Aluminum Foil Pouches',
        picture_url='https://savorandsavvy.com/wp-content/uploads/2019/07/Baked-Salmon-recipe-1.jpg',
        backstory='One of my favorite dishes of all time.  Fast prep, easy clean-up, and delicious! Goes great with mashed potatoes :)',
        user_id=1)
    db.session.add(demo_recipe)

    db.session.commit()


def undo_recipes():
    db.session.execute('TRUNCATE recipes RESTART IDENTITY CASCADE;')
    db.session.commit()

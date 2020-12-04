from app.models import db, Ingredient


def seed_ingredients():
    new_ingredient = Ingredient(
        name='salmon filet',
        quantity=1,
        unit='lbs',
        recipe_id=1
    )
    db.session.add(new_ingredient)
    new_ingredient = Ingredient(
        name='fresh dill',
        quantity=5,
        unit='sprigs',
        recipe_id=1
    )
    db.session.add(new_ingredient)
    new_ingredient = Ingredient(
        name='lemon',
        quantity=2,
        unit='small',
        recipe_id=1
    )
    db.session.add(new_ingredient)
    new_ingredient = Ingredient(
        name='olive oil',
        quantity=4,
        unit='Tbsps',
        recipe_id=1
    )
    db.session.add(new_ingredient)
    new_ingredient = Ingredient(
        name='salt',
        quantity=1,
        unit='tsp',
        recipe_id=1
    )
    db.session.add(new_ingredient)
    new_ingredient = Ingredient(
        name='ground black pepper',
        quantity=1,
        unit='tsp',
        recipe_id=1
    )
    db.session.add(new_ingredient)
    new_ingredient = Ingredient(
        name='garlic',
        quantity=5,
        unit='cloves',
        recipe_id=1
    )
    db.session.add(new_ingredient)
    new_ingredient = Ingredient(
        name='asparagus',
        quantity=1,
        unit='bundle',
        recipe_id=1
    )
    db.session.add(new_ingredient)
    db.session.commit()


def undo_ingredients():
    db.session.execute('TRUNCATE ingredients RESTART IDENTITY CASCADE;')
    db.session.commit()

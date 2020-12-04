from app.models import db, Direction

def seed_directions():
    demo_direction = Direction(
        name='Preheat oven to 400',
        step_number=1,
        recipe_id=1
    )
    db.session.add(demo_direction)
    demo_direction = Direction(
        name='Rinse and snap asparagus',
        step_number=2,
        recipe_id=1
    )
    db.session.add(demo_direction)
    demo_direction = Direction(
        name='Rinse salmon filet(s), leaving skins on, cut in half if necessary (ideal size is 3 in x 5 in)',
        step_number=3,
        recipe_id=1
    )
    db.session.add(demo_direction)
    demo_direction = Direction(
        name='Season salmon filets on both sides with salt and pepper',
        step_number=4,
        recipe_id=1
    )
    db.session.add(demo_direction)
    demo_direction = Direction(
        name='Mince garlic',
        step_number=5,
        recipe_id=1
    )
    db.session.add(demo_direction)
    demo_direction = Direction(
        name='Slice lemon (pretty thin)',
        step_number=6,
        recipe_id=1
    )
    db.session.add(demo_direction)
    demo_direction = Direction(
        name='If necessary, rinse dill (leave dill sprigs on stems)',
        step_number=7,
        recipe_id=1
    )
    db.session.add(demo_direction)
    demo_direction = Direction(
        name='Combine olive oil and garlic in a bowl and mix well, add salt and pepper',
        step_number=8,
        recipe_id=1
    )
    db.session.add(demo_direction)
    demo_direction = Direction(
        name='Take a sheet of aluminum foil, put down like 6 spears of asparagus (keep it pretty light with the asparagus; if you want more asparagus than 6ish spears per person, I recommend grilling some separately. If there’s more asparagus than can be covered by the salmon in the pouch, the final concoction is not as good) in the center of aluminum foil, then drizzle** with your garlic olive oil mixture',
        step_number=9,
        recipe_id=1
    )
    db.session.add(demo_direction)
    demo_direction = Direction(
        name='Stack salmon skin down next, drizzle (the more the better, a heavy drizzle) more olive oil mixture',
        step_number=10,
        recipe_id=1
    )
    db.session.add(demo_direction)
    demo_direction = Direction(
        name='Add 3 lemon slices on top of the salmon, (covering the surface) and several stems of dill (you can’t really overdo it here with the lemon and dill)',
        step_number=11,
        recipe_id=1
    )
    db.session.add(demo_direction)
    demo_direction = Direction(
        name='Wrap up the whole thing making a cute little pouch and tucking it in on the sides.',
        step_number=12,
        recipe_id=1
    )
    db.session.add(demo_direction)
    demo_direction = Direction(
        name='Repeat with second filet.',
        step_number=13,
        recipe_id=1
    )
    db.session.add(demo_direction)
    demo_direction = Direction(
        name='Place pouches on baking sheet and put in oven on top shelf for 15-30 minutes, depending on the size of your salmon filet. ',
        step_number=14,
        recipe_id=1
    )
    db.session.add(demo_direction)
    demo_direction = Direction(
        name='Knowing when it’s done is a little tricky but just peek in your pouch and give it a little more time if needed.',
        step_number=15,
        recipe_id=1
    )
    db.session.add(demo_direction)
    demo_direction = Direction(
        name='Enjoy!',
        step_number=16,
        recipe_id=1
    )
    db.session.add(demo_direction)

    db.session.commit()


def undo_directions():
    db.session.execute('TRUNCATE directions RESTART IDENTITY CASCADE;')
    db.session.commit()

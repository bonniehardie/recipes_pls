from app.models import db, Tool

def seed_tools():
    demo_tool = Tool(
        name='aluminum foil',
        recipe_id=1
    )
    db.session.add(demo_tool)
    db.session.commit()



def undo_tools():
    db.session.execute('TRUNCATE tools RESTART IDENTITY CASCADE;')
    db.session.commit()

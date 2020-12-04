from flask.cli import AppGroup
from .users import seed_users, undo_users
from .recipes import seed_recipes, undo_recipes
from .directions import seed_directions, undo_directions
from .ingredients import seed_ingredients, undo_ingredients
from .ratings import seed_ratings, undo_ratings
from .tools import seed_tools, undo_tools

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_recipes()
    seed_directions()
    seed_ingredients()
    seed_ratings()
    seed_tools()
    # Add other seed functions here

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_recipes()
    undo_directions()
    undo_ingredients()
    undo_ratings()
    undo_tools()
    # Add other undo functions here

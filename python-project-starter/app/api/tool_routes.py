from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Tool, db
from sqlalchemy.sql import func
import json

tool_routes = Blueprint('tools', __name__)


@tool_routes.route('/')
# @login_required
def all_tools(userid, recipeid):
    tools = Tool.query.filter(Tool.recipe_id == recipeid).all()
    return {"tools": [tool.to_dict() for tool in tools]}

@tool_routes.route('/', methods=['POST'], strict_slashes=False)
# @login_required
def create_tool(userid, recipeid):
    req_data = json.loads(request.data)
    name = req_data['name']
    new_tool = Tool(
        name=name,
        recipe_id=recipeid
    )
    db.session.add(new_tool)
    db.session.commit()
    return new_tool.to_dict()


@tool_routes.route('/<int:toolid>', methods=['PUT'], strict_slashes=False)
# @login_required
def edit_tool(userid, recipeid, toolid):
    req_data = json.loads(request.data)
    name = req_data['name']
    tool = Tool.query.filter(Tool.id == toolid).first()
    tool.name = name
    tool.updated_at = func.now()
    db.session.commit()
    return tool.to_dict()


@tool_routes.route('/<int:toolid>', methods=['DELETE'], strict_slashes=False)
# @login_required
def delete_tool(userid, recipeid, toolid):
    tool = Tool.query.filter(Tool.id == toolid).first()
    db.session.delete(tool)
    db.session.commit()
    return {'id': toolid}


# BLUEPRINTS

app.register_blueprint(user_routes, url_prefix='/api/users')
app.register_blueprint(auth_routes, url_prefix='/api/auth')
app.register_blueprint(ingredient_routes, url_prefix='/api/users/<int:userid>/recipes/<int:recipeid>/ingredients')
app.register_blueprint(tool_routes, url_prefix='/api/users/<int:userid>/recipes/<int:recipeid>/tools')
app.register_blueprint(direction_routes, url_prefix='/api/users/<int:userid>/recipes/<int:recipeid>/directions')
app.register_blueprint(recipe_routes, url_prefix='/api/users/<int:userid>/recipes')
app.register_blueprint(rating_routes, url_prefix='/api/users/<int:userid>/recipes/<int:recipeid>/ratings/')


# app/api/user_routes.py

    get user by userid
        @user_routes.route('/<int:userid>')
        @login_required
        def user(userid):
            user = User.query.get(userid)
            return user.to_dict()

# app/api/recipe_routes.py

    create a new recipe
        @recipe_routes.route('/', methods=['POST'], strict_slashes=False)
        @login_required
        def create_recipe(userid):
            req_data = json.loads(request.data)
            name = req_data['name']
            picture_url = req_data['picture_url']
            backstory = req_data['backstory']
            new_recipe = Recipe(
                name = name,
                user_id=userid,
                picture_url = picture_url,
                backstory = backstory,
                updated_at = func.now()
            )
            db.session.add(new_recipe)
            db.session.commit()
            return new_recipe.to_dict()


    edit an existing recipe
        @recipe_routes.route('/<int:recipeid>', methods=['PUT'], strict_slashes=False)
        @login_required
        def edit_recipe(userid, recipeid):
            req_data = json.loads(request.data)
            name = req_data['name']
            picture_url = req_data['picture_url']
            backstory = req_data['backstory']
            recipe = Recipe.query.filter(Recipe.id == recipeid).first()
            recipe.name = name
            recipe.picture_url = picture_url
            recipe.backstory = backstory
            recipe.updated_at = func.now()
            db.session.add(recipe)
            db.session.commit()

            return recipe.to_dict()


    delete an existing recipe
        @recipe_routes.route('/<int:recipeid>', methods=['DELETE'], strict_slashes=False)
        @login_required
        def delete_recipe(recipeid):
            recipe = Recipe.query.filter(Recipe.id == recipeid).first()
            db.session.delete(recipe)
            db.session.commit()
            return { 'id': recipeid }

# app/api/ingredient_routes.py
# use these routes for tools and directions

    create ingredient
        @ingredient_routes.route('/', methods=['POST'], strict_slashes=False)
        @login_required
        def create_ingredient(userid, recipeid):
            req_data = json.loads(request.data)
            ingredient = req_data['ingredient']
            quantity = req_data['quantity']
            unit = req_data['unit']
            new_ingredient = Ingredient(
                ingredient = ingredient,
                quantity = quantity,
                unit = unit,
                recipe_id = recipeid
            )
            db.session.add(new_ingredient)
            db.session.commit()
            return new_ingredient.to_dict()

    edit ingredient
        @ingredient_routes.route('/<int:ingredientid>', methods=['PUT'], strict_slashes=False)
        @login_required
        def edit_ingredient(userid, recipeid, ingredientid):
            req_data = json.loads(request.data)
            ingredient = req_data['ingredient']
            quantity = req_data['quantity']
            unit = req_data['unit']
            ingredient_to_edit = Ingredient.query.filter(Ingredient.id == ingredientid).first()
            ingredient_to_edit.ingredient = ingredient
            ingredient_to_edit.quantity = quantity
            ingredient_to_edit.unit = unit
            ingredient_to_edit.updated_at = func.now()
            db.session.commit()
            return ingredient.to_dict()

    delete ingredient
        @ingredient_routes.route('/<int:ingredientid>', methods=['DELETE'], strict_slashes=False)
        @login_required
        def delete_ingredient(userid, recipeid, ingredientid):
            ingredient = Ingredient.query.filter(Ingredient.id == ingredientid).first()
            db.session.delete(ingredient)
            db.session.commit()
            return { 'id': ingredient}

# finish making backend routes for ratings crud

-------

# FRONT END ROUTES
<Route path="/allrecipes">
    <RecipePanel />
</Route>

# finish front end routes...
<Route path="/recipes/:current_recipe/allingredients/">
    <Box className={ classes.recipeviewcontainer }>
        <RecipeInfoPanel />
    </Box>
</Route>

<ProtectedRoute path="/login" exact={true} authenticated={!isNotLoggedIn}>
    <LoginForm />
</ProtectedRoute>

<ProtectedRoute path="/signup" exact={true} authenticated={!isNotLoggedIn}>
    <SignupForm />
</ProtectedRoute>

<PrivateRoute path="/" authenticated={!isNotLoggedIn}>
    <MainPage />
</PrivateRoute>




_______


klevernote backend
app/api/notebook_routes.py

    # create a new notebook
        @notebook_routes.route('/', methods=['POST'], strict_slashes=False)
        @login_required
        def create_notebook(userid):
            data_title = json.loads(request.data)
            title = data_title["title"]
            user_id = userid
            new_notebook = Notebook(title=title, user_id=user_id)
            db.session.add(new_notebook)
            db.session.commit()

            return new_notebook.to_dict()

    # edit an existing notebook
        @notebook_routes.route('/<int:notebookid>', methods=['PUT'], strict_slashes=False)
        @login_required
        def edit_notebook(userid, notebookid):
            title = json.loads(request.data)
            notebook = Notebook.query.filter(Notebook.id == notebookid).first()
            notebook.title = title
            notebook.updated_at = func.now()
            db.session.commit()

            return notebook.to_dict()

    # delete an existing notebook
        @notebook_routes.route('/<int:notebookid>', methods=['DELETE'], strict_slashes=False)
        @login_required
        def delete_notebook(userid, notebookid):
            notebook = Notebook.query.filter(Notebook.id == notebookid).first()
            db.session.delete(notebook)
            db.session.commit()
            return {'id': notebookid}

app/api/note_routes.py
    ## For Testing Only
        @note_routes.route('/')
        def test(userid, notebookid):
            return f'{userid} {notebookid}'
    ## For Testing Only
        @note_routes.route('/', methods=['POST'], strict_slashes=False)
        @login_required
        def create_note(userid, notebookid):
            new_note = Note(title="Untitled", user_id=userid, notebook_id=notebookid, content="")
            db.session.add(new_note)
            db.session.commit()
            return new_note.to_dict()

    @note_routes.route('/<int:id>', methods=['PUT'], strict_slashes=False)
    @login_required
    def edit_note(userid, notebookid, id):
        req_data = json.loads(request.data)
        title = req_data["title"]
        content = req_data["content"]

        note = Note.query.filter(Note.id == id).first()

        note.title = title
        note.content = content
        note.updated_at = func.now()
        db.session.commit()

        return note.to_dict()

    @note_routes.route('/<int:id>', methods=['DELETE'], strict_slashes=False)
    @login_required
    def delete_note(userid, notebookid, id):
        note = Note.query.filter(Note.id == id).first()
        db.session.delete(note)
        db.session.commit()
        return {
            "id": id,
        }

app/api/tag_routes.py
        @tag_routes.route('/', methods=['POST'])
        @login_required
        def createTag(userid):
            data = json.loads(request.data)
            tag_name = data['name']
            new_tag = Tag(title=tag_name, user_id=userid)
            db.session.add(new_tag)
            db.session.commit()
            return new_tag.to_dict()


        @tag_routes.route('/<int:tagid>', methods=['DELETE'])
        @login_required
        def deleteTag(userid, tagid):
            tag = Tag.query.filter(Tag.id == tagid).first()
            db.session.delete(tag)
            db.session.commit()
            return {'id': tagid}

app/api/user_routes.py
        @user_routes.route('/')
        @login_required
        def users():
            users = User.query.all()
            return {"users": [user.to_dict() for user in users]}


        @user_routes.route('/<int:id>')
        @login_required
        def user(id):
            user = User.query.get(id)
            return user.to_dict()

app/api/auth_routes.py
    mucho complicado


klevernote blueprints
    app.register_blueprint(user_routes, url_prefix='/api/users')
    app.register_blueprint(auth_routes, url_prefix='/api/auth')
    app.register_blueprint(note_routes, url_prefix='/api/users/<int:userid>/notebooks/<int:notebookid>/notes')
    app.register_blueprint(notebook_routes, url_prefix='/api/users/<int:userid>/notebooks')
    app.register_blueprint(tag_routes, url_prefix='/api/users/<int:userid>/tags')
    app.register_blueprint(note_tag_routes, url_prefix='/api/notes/<int:noteid>/tags')

klevernote middlewear
services/auth
  authenticate
        const response = await fetch('/api/auth/',{
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return await response.json();

  login
    const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    });
    return await response.json();


  logout
    const response = await fetch("/api/auth/logout", {
        headers: {
        "Content-Type": "application/json",
        }
    });
    return await response.json();

  signup
    const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username,
            email,
            password,
        }),
  });
  return await response.json();

store/actions/notebooks
  createNotebook
      let newNotebook = await fetch(`/api/users/${userid}/notebooks/`, {
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({title})
        });
        if (newNotebook.ok) {
            newNotebook = await newNotebook.json();
            dispatch(createNotebook(newNotebook));
        }
  renameNotebook
        let renamed = await fetch(`api/users/${userid}/notebooks/${notebookid}`, {
            method: 'PUT',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({title})
        });
        if (renamed.ok) {
            renamed = await renamed.json();
            dispatch(renameNotebook(renamed.title))
        }
  deleteNotebook
    let deleted = await fetch(`api/users/${userid}/notebooks/${notebookid}`, {
        method: 'DELETE'
    });
    if (deleted.ok) {
        deleted = await deleted.json();
        dispatch(deleteNotebook(deleted.id))
        // TODO: have this just refresh the state
    }
store/actions/notes
  createNote
    const response = await fetch(`/api/users/${userId}/notebooks/${notebookId}/notes/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
    });
    if (response.ok) {
        const note = await response.json();
        dispatch(createNoteAction(note));
        dispatch(addNoteToNotebook(note.notebook_id, note.id));
        return note;
    }
  updateNote
    const response = await fetch(`/api/users/${userId}/notebooks/${notebookId}/notes/${noteId}/`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ title, content })
    });

    if (response.ok) {
        const note = await response.json();
        dispatch(updateNoteAction(note));
    }
  deleteNote
       const response = await fetch(`/api/users/${userId}/notebooks/${notebookId}/notes/${noteId}/`, {
            method: 'DELETE'
        });

        if (response.ok) {
            const deletedNote = await response.json();
            dispatch(deleteNoteAction(deletedNote.id));
            dispatch(deleteNoteFromNotebook(notebookId, noteId));
            if (tagIds) dispatch(deleteNoteFromTags(noteId, tagIds));
        }
  addTagToNote
    let newNoteTag = await fetch(`/api/notes/${noteid}/tags/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ tagid })
    });
    if (newNoteTag.ok) {
        newNoteTag = await newNoteTag.json();
        dispatch(addTagToNote(tagid, noteid));
        dispatch(addNoteToTag(noteid, tagid))
    }

  removeTagFromNote
        let removedTagId = await fetch(`/api/notes/${noteid}/tags/${tagid}`, {
            method: 'DELETE'
        });
        if (removedTagId.ok) {
            removedTagId = removedTagId.json();
            dispatch(removeTagFromNote(removedTagId.id, noteid));
            dispatch(removeNoteFromTag(noteid, tagid));
        }



store/actions/tags
  createTag
      const newTag = await fetch(`/api/users/${userid}/tags/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name })
    });
    if (newTag.ok) {
        let data = await newTag.json();
        dispatch(createTag(data));
    }
  deleteTag
      const res = await fetch(`/api/users/${userid}/tags/${tagid}`, {
        method: 'DELETE'
    });
    if (res.ok) {
        const deleted = await res.json();
        dispatch(deleteTag(deleted.id));
    }




front end routes
<Route path="/allnotebooks">
    <NotebookPanel />
</Route>

<Route path="/notebooks/:current_notebook/notes/:current_note/tags/:current_tag">
    <Box className={ classes.noteviewcontainer }>
        <NoteInfoPanel />
        <EditorPanel />
    </Box>
</Route>

<ProtectedRoute path="/login" exact={true} authenticated={!isNotLoggedIn}>
    <LoginForm />
</ProtectedRoute>

<ProtectedRoute path="/signup" exact={true} authenticated={!isNotLoggedIn}>
    <SignupForm />
</ProtectedRoute>

<PrivateRoute path="/" authenticated={!isNotLoggedIn}>
    <MainPage />
</PrivateRoute>

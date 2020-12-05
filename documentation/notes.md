- once login, auth, store work, replace hardcoded user_id inside rating_routes


- use drop downs for many options--research how that will change models
- use float instead of int for ingredients.quantity
- consider plural vs singluar for ingredient.unit
- make ingredient.unit and ingredients.quantity optional
- add recipes.number_of_servings, recipes.blurb, and recipes.footnotes
- think about nullable options, validators, and errors
- reset ids to 0 after deleting
- add user editing and simple profile if I have time
- fixed a typo in ingredients.to_dict() and didn't remigrate--hoping that will suffice (unit = self.unit instead of unit = self.quantity)
- if I use flaticon whisk favicon, credit in footer:
    <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

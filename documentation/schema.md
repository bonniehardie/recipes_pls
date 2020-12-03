
Table users {
  id int [pk, increment] 
  username varchar(50)
  email varchar
  hashed_password varchar
  created_at timestamp
  updated_at timestamp
}

Table recipes {
  id int [pk, increment]
  name varchar
  picture_url varchar
  backstory textarea
  user_id int [ref: > users.id]
  created_at timestamp
  updated_at timestamp
 }

Table ingredients {
  id int [pk, increment]
  ingredient varchar
  quantity int
  unit int
  recipe_id int [ref: > recipes.id]
  created_at timestamp
  updated_at timestamp
 }

Table tools {
  id int [pk, increment]
  name varchar
  recipe_id int [ref: > recipes.id]
  created_at timestamp
  updated_at timestamp
 }

Table directions {
  id int [pk, increment]
  name varchar
  step_number int
  recipe_id int [ref: > recipes.id]
  created_at timestamp
  updated_at timestamp
}

Table ratings {
  id int [pk, increment]
  tasty int
  easy int
  user_id int [ref: > users.id]
  recipe_id int [ref: > recipes.id]
  created_at timestamp
  updated_at timestamp
}

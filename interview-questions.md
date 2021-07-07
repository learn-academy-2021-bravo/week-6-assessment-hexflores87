# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating an API with a model called Animal that has_many Sightings, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

Your answer: A foreign key is a column in a relational database that provides a path between two tables. Its a column that refrences the primary key.

Researched answer: By convention the foreign key should always be the modelname_id and the data type should be integer. The has_many model is singular, the belongs_to model is plural. The foreign key always goes on the belongs_to side.

2. Which RESTful routes must always be passed params? Why?

Your answer: Post, Patch, delete

Researched answer: Post, Patch, Delete, Get. The reason params are passed so the Rails router recognizes URLs and dispatches them to a controller’s action. It can also generate paths and URLs, avoiding the need to hardcode strings in your views.

3. Name three rails generator commands. What is created by each?

Your answer: rails s - runs the server, rails db:create - sets up a database

Researched answer: rails new myapp -d postgresql -T, rails s - runs the server, rails db:create - sets up a database.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

method="GET" /students shows a list of the students

method="GET" /students/2 shows a specfic student

method="GET" /students/new returns HTML form from the student

method="GET" /students/edit/2 edits a student and returns an HTML form

method="POST" /students/ The post sends the student to the DB

method="PATCH" /students/2 THe patch is used to update -student

method="DELETE" /students/2 Delete will destroy what ID number you want to delete(student)

5. As a developer, you want to make an application that will help you manage your to do list. To get started, you want to create the API. Create 10 user stories that will help you get your application started.

Creating an API story using Cars.

As a developer I was to create a to do (list) in the DB. The to do list would have the following info: Tasks, supplies, time.

As a developer when i put Lists.all I should see a list of all my lists in the Db.

As a developer I want to see errors if im unable to add a task to the to do list.

I want to see errors if my to do list doesn't update once a task is complete.

I want to see validation errors if the to do list starts to repeat a task

I want to see errors if i cant add a list to the time.

I want to see errors if my list cant update the supplies.

I want to see errors if my list can add a task to the list.

As a developer I want to be able to retrieve the supplies information if I wanted to enhance the API.

I want to see errors if my to do list cant remove a task when deleted.

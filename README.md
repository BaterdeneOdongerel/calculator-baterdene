# README

 You can visit the app's deployed running version at https://calculator-baterdene.herokuapp.com/
 * Basic Information
    1. Deployed on Heroku.
    2. Results are sent and received via Websocket realtime. Websocket uses Redis.
    
 * How to run locally
  1. clone the repo
  2. install the same ruby version (can be seen in Gemlock)
  3. type "bundle install" to install dependencies 
  4. Configure the database.yml according to your local database connection.
  5. type "rails s -p 8000" to run the app. (you can see the app at "localhost")
  
  
  
This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version
    2.6.6
* System dependencies
    bundle version 1.17.3
    Posgresql
* Configuration
    Need to configure database connection in database.yml file
* Database creation
      1. rake db:create
      2. rake db:migrate
* Database initialization
       
* How to run the test suite
     
* Services (job queues, cache servers, search engines, etc.)
    Redis gem should be commented out when tying to run it in development environment
* Deployment instructions

* ...

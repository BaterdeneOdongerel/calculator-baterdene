# README

 You can visit the app's deployed version at https://calculator-baterdene.herokuapp.com/
 * Basic Information
    1. Ruby on Rails app. Ruby for backend and Javascript for front-end
    1. Deployed on Heroku.
    2. Results are sent and received via Websocket realtime. Websocket uses Redis.
    3. Ruby version 2.6.6
    4. bundle version 1.17.3
    5. Posgresql for Database
    
 * How to run locally
  1. clone the repo
  2. install the same ruby version (can be seen in Gemlock)
  3. Redis gem should be commented out when tying to run it in development environment
  4. type "bundle install" to install dependencies 
  5. configure database connection in config/database.yml file
  6. run "rake db:create" to create database
  7. run "rake db:migrate" to generate tables
  8. type "rails s -p [port]" to run the app. (you can see the app at "localhost:[port]")
  
  9. when deploying in production env, Need to configure ActionCable socket, Redis url , and Cross domain origin in production.rb file
 

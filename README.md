# <Tech-Blog>

## Description

(WIP) There are many features I am still trying to add, but the time crunch I was in meant this had to be submitted in it's current state.  Users can't add comments yet, but are able to make their own posts if they make an account.

This app is a simple (and currently quite ugly) tech blog that was used as an excercise to practice utilizing the MVC (Model, View, Controller) design paradigm, as well as getting used to working with handlebars, express-sessions, and building my own API routes from scratch.  Users can create an account and write posts, as well as view other people's posts on the website.  It will eventually have comment functionality as well, and if you take a look at the seed data you will see that some posts already have some comment data, I have just not been able to implement them yet.  Additionally, the app is not very visually appealing because I was more focused on it's functionality.  

This was the first full-stack project I have worked on that entailed building the stack from scratch so it was a lot more time consuming than I had originally estimated, but I am a lot more comfortable working with the Handlebars view engine as well as building my own API.   

## Installation

- Run `npm install` in the root directory of the repo to grab all of the required packages.  
- Create a .env file with all of your own versions of the information in the example.env file.  The EXP_SESS_SEC can be whatever you'd like.
-Run `npm seeds/seed.js` to seed the website with some very minimal data/example users.  


## Usage

Simply make an account and start posting!  You can see your own posts on the dashboard tab.  Type carefully, as I have yet to implement any delete or editing functionality.  Whatever you post will be there forever! For now... 

## Features

Currently a user can only make an account and add posts.  

In the future I will be implementing:
- User comments
- Post editing/Deletion
- Making everything look nicer
- Automatic post archiving after posts have been up for a specific amount of time
- Adding images to posts

## How to Contribute

Simply fork this repo and do whatever you'd like to it.  If you feel generous enough to contribute to the application then shoot me an email at Umbelth94@gmail.com 

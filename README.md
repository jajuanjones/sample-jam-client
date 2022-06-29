<!-- TODO: UPDATE THE README -->
# Sample Jam

## Introduction

Sample Jam is a forum site built for the musically inclined not only to help garner discussions on musical topics between one another, but to allow its users to share music they've created.

## Motivations

Sample Jam was made for my Capstone Project at NSS. It is part of the conclusion of the back-end portion of the course where we display our understanding of programming in Django, and React as well as our ability to think algorithmicly, to problem solve, and to communicate with other developers in the process of building. Before starting this project I thought it would be cool to have a forum catered to music instead of general topics, so, I thought to myself, why don't I try!

Since reaching MVP I have created a new a way for users to upload their music so that they and other users of the site can listen to their songs. You can find the code for my *MVP* [here](https://github.com/Juulo/musilink/commit/0b24cc2afb63ff34b6686480f2269b0343fb6de6). You can also view my *ERD* [here](https://drawsql.app/juulu/diagrams/samplejam) and my *Figma WireFrame* [here](https://www.figma.com/file/60AUvqrPH3erq0ZhCBf24q/Untitled?node-id=0%3A1).

## The Development Process

I developed this app over the course of about a few weeks with the help of peers and other knowledgable developers. After meeting MVP in about 3-4 days, working on necessary CRUD features. I began implementing stretch goals that I had established for myself. This app is meant to mirror popular forums like reddit that offers a place where people who want a center of information and discussion involving music, as well as SoundCloud, which allows users to upload their own music. 

The hardest part of developing this application was creating that second portal for our "Members". I had to go back to the drawing board to even restructure my ERD to make sure I had the most optimal solution to the problem. Now the app is fully fledged with the ability to create an account or login as a member or a user, which gives whoever is using the app certain features that the other doesn't have.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to install and run this project

If you would like to play around with this project you can use the live site (mwhich may or may not be active). You can also follow these instructions to download it and test it out on your local machine.

- Clone this repo
- Find my "samplejam-server" repo to access the backend side used for this project and clone that repository
- Once cloned run the app either in vs code or in the terminal run the command "python3 manage.py runserver"
- Navigate to the "samplejam-clienth" directory in you terminal
- In the project directory run npm start
- In a browser, open localhost:3000 and you should see the app running.

#### Dev Note

Eventually both sides of this application will be launched through heroku, so launching through the terminal will no longer be necessary.

## How to use this app

After you've gone through the process of cloning both the App repo and the API repo open the app and you'll be presented with a landing page. Simply click the button to login/register. After registering you will be taken to your profile page from which you can either edit your information, view posts you've made, or listen to music you've uploaded.

If you've logged in as an existing user you'll be presented with a list of topics. Click any of these topics to view the posts made in each topic. From there you can either click the button to create you're own post or view the existing posts of the category you clicked on. If you decide to create a post you will see a form asking for a title as well as a text body for your post. After creating a post you will be taken to the page of the post you've just created where you can either delete, edit, or comment on the post. If you decided to view existing posts you will be presented with the post itself, as well as a comment box and a list of comments if any have been made.

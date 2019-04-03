# Clicky-Game


My first React.js app. This is a clicking game where the user needs to click on the five Final Fantasy characters amongst the other images. The game will keep track of how many the user has correct. If the user finds all five, the game tells the user he/she won and then restart so the user can play again. If the user clicks on an incorrect card, the score will reset to 0 and the user will have to try again. The user's top score will update based on how well he/she improves their score. This can easily be changed to reflect any number of correct answers as long as we add it to the images.json file. The images will shuffle around randomly whenever the page is refreshed or if an image is clicked.

Since this is my first React app, I wanted to keep things relatively simple. I utilized three components here, App (where all things come together), Wrapper (which holds the Navbar and Container to hold each image "card"), and Card (the actual image "cards"). Everything is purely client side with a single page, so we are not utilizing servers, routes, or APIs. Just grab some photos, make them do something when click, and update accordingly. As I get better with React, I will attempt to use more components to break down sections of the HTML even further, such as a Navbar component and a Container component.



Deployment URL: https://rawkitman.github.io/Final-Fantasy-Click/

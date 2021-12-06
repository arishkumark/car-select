## Problem statement

Build a simple web app that allows a user to select their car from a directory of registered cars. This data will be provided by the api server in this repo. The api provides a list of available makes, models of each make and specific cars for each model with horsepower and engine capacity info.

## Solution

A simple web app has been implemented using React-Redux as a Single Page Application. React takes care of the UI to render only when there is a change in the application state. Redux has been used to support the state management of the app so that data can be transmitted between all the components without any struggle. By combining React and Redux one can easily build a maintainable SPA and the solution implemented is production ready.

## Implementation details

- The app has been created using 'create-react-app' which helps us to give a robust folder structure and configuration of the project
- The routing mechanism has been implemented as part of this app. Currently, there are two routes available.
  - Dashboard (http://localhost:3000/)
  - Selection (http://localhost:3000/select)
- Dashboard route has an introduction page of what this web app is about.
- The Selection route has the actual product where the user can select the car.
- The app is fully localized. So, when you change the browser's language settings it will change the locale accordingly (Please try changing it to German locale)
- Material UI library has been used to have a rich google's material UI design for all our UI components.
- The app works perfectly on all the mobile devices too.
- All the error scenarios have been handled.
- Basic unit testing has been writtened.
- The app has a simple and clean folder structure so that it is easier to maintain when the app grows in future.
- The app is production ready so when you build using npm run build, it will give you a minified production ready builds that can be deployed

## How to run this App

- Clone the repo and do 'npm install'
- After the successful installation, run 'npm start'
- The app will start on localhost:3000

## How to run the api server

- Download the repo(https://www.dropbox.com/s/i3bjhj90ccbtf1w/friday-code-challenge.zip?dl=0&file_subpath=%2Fapiserver)
- Go to apiserver folder in the cmd
- Run 'node server.js'.
- The server will start on localhost:8080

## Application flow

- When you hit http://localhost:3000/ you will land on the dashboard page where you can see a common app bar with a home button and a link to select
- Also, the dashboard contains some static information about the application and you can navigate to the product using the button in the banner too.
- When you click on the 'Select' button you will land on the /select route where we can see the options to select the car.
- As soon as you land on the select route, we fetch the data to fill the first auto select box with 'api/makes' which will give us the brands to select.
- If there is a 503 error then we will show the user nothing but an error message.
- The model autocomplete is disabled till you select the car brand first.
- Once you select the car brand, we are fetching the 'api/models' with the makes selected.
- If there is no model available for the selected brand then we will show a snackbar with a message to a user to select any other brand to proceed further.
- The get details button would be disabled till you select both the text box.
- Once you select the available model then the button is enabled and clicking on the button you will get the list of vehicles(api/vehicles).
- If you get a vehicles list then we will show that in a table else we display a message to the user about the vehicle unavailability.
- Once the vehicles are listed on the table, one can click on the list to get a confirmation popup.
- If you confirm, then you will land on the success page where you can see the selected vehicle info as well.
- There is a button to go to the dashboard if you wish.

## Improvements needed

- Unit test cases can be written to enhance the coverage to minute features as well provided with a time limit.
- Error pages can be designed with more meaning. So, that users won't be frustrated with the server error.

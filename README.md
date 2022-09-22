# Career path app

## Description

The application provides a wizard with multiple questions and the user is required to submit a score for every step at a time. At the end, the answers are submitted to an API endpoint and the user can see a results section.

The following technologies were used: JavaScript / ReactJS / React-Router-Dom, CSS, NodeJS (14.20.0). React Testing Library, Nock and Jest were used for testing the app.

This project was built using Create React App to minimize the intial setup time. It was developed and tested only against the latest version of Chrome.

The entry point of the application is `src/index.js` which bootstraps the entire application. The state is managed via the `src/data/State` component, which uses `React.createContext` as a State provider and defines 2 states: submissions and questions. Every submitted score from the wizard is set to a local state in the `Wizard` component, managed via the `useState` hook.

Initially, the application checks if the user has already submitted the application. If yes, then the user is redirected to the `See results` section. Otherwise, the user is redirected to the start of the `Wizard`.

React-router-dom is used for routing and for getting the user query parameters from the url. The application has 2 pages: `/wizard` and `/see-results` but before going to any of these pages, a check is made for previous submission status of the user and redirected to the correct page.

All the interactions with the API endpoints are located in `src/data/actions`.

The tests are using stubs for the differents requests made from the app. They check that both pages (`see-results` and `wizard`) are displayed when they should. Additionally, there is a test that goes through the entire wizard, submits the form and then checks that `see-results` is displayed at the end.

## How to install

### `npm install`

## How to run
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000/?user=USER](http://localhost:3000/?user=USER) to view it in your browser.

## How to test

### `npm test`
## How to build
### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

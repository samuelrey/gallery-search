# Fieldwire Image Search

The Fieldwire image search app allows users to search and view images.

## Usage

### Setup

Install the dependencies required to run this project with `npm install`.
The dependencies are specified in `package-lock.json`.

Create a file in the project directory called `.env`.
Add the Imgur API key to the file: `REACT_APP_IMGUR_API_KEY={API key}`.

### Running the Application

Run the project with `npm start`.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will reload when you make changes.

You may find that the service fails with the following message: `Imgur is temporarily over capacity. Please try again later.`
In order to resolve this, navigate to the site through your IP address.
For example: [https://192.168.0.2:3000](https://192.168.0.2:3000).

### Running the Test Suite

Launch the test runner in the interactive watch mode with `npm test`.

## Features

Enter a query into the search bar and submit to be shown a gallery of results.
Click on an image to open it in a larger view.

## Decision Log

-   Transform data from the API to a normalized data structure. The result is the ImageContainer can focus on presentation.
-   Open image in modal on click. The result is that the user can have a larger view of the image and ImageContainer can keep the search results in memory.

## Areas for Improvement

The Imgur API supports pagination.

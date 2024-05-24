# Fieldwire Image Search

The Fieldwire image search app allows users to search and view images.

## Usage

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

You may find that the service fails with the following message: `Imgur is temporarily over capacity. Please try again later.`
In order to resolve this, navigate to the site through your IP address.
For example: https://192.168.0.2:3000

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Decision Log
* Transform data from the API to a normalized data structure. The result is the ImageContainer can focus on presentation.
# Weather app

A weather application that allows users to search for the current weather conditions of a city. It use the WeatherAPI service (https://www.weatherapi.com/) to retrieve weather data.

## Getting Started

### Running the app locally

Clone the repository. Run the following commands in the root of the project:

Install dependencies:

```bash
npm install
```

Add a free WeatherAPI key, from https://www.weatherapi.com/, to a .env.local file at the route of the project (you will need to sign up for an account).

Then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Using the app locally

Search for a city and see the current weather conditions: When searching for a city, you will be redirected to a `/current-weather/city/[city-name]` page, displaying the weather conditions. If the city is not found, an error message will be displayed on the `/current-weather/city/[city-name]` page (see also note about error handling in production in the Future ideas/improvements section lower down).

## Running tests

To run the tests, run the following command in the root of the project:

```bash
npm test
```

## A note on the `SingleInputForm` component

The form component is a client component, as it uses Formik to handle form state and validation. I ultimately felt that it is not necessary to use a server component for this form.
However, I did initially try to use a server component, which was designed to take a server action as a prop. That form still exists in `components/molecules/SingleInputFormServer` and an action at `utils/actions`. Rather than deleting this code, I've left it in as it might be useful for future reference. For example, it could be updated in future if some database operation or other server-side logic were needed.

## Deployed on Vercel

This app is deployed at https://weather-app-realtime.vercel.app/

## Future ideas/improvements:

- I'm currently seeing a warning in the console: `Warning: Extra attributes from the server:...`, which should be investigated in future (perhaps owing to a mismatch between components rendered on the server- and client-sides)
- Add a generator for creating new components from a template - this could be used for example to automatically add the display name and the higher order component wrapper to every new component generated
- Improve styling, e.g. add a dark theme; add spacing values to variables, update favicon icon; add mixin for media query between two breakpoints
- If the request to get current weather fails, provide a way for the user to retry the request or check their input if the error is due to an invalid city name.
- Add more unit tests for better coverage and add integration and e2e tests for the whole application. Note: Cypress currently does not support Next.js version 14 for testing async Server Components :(
- Improve validation on form
- Refactor code associated with replacing characters (spaces/plusses/%20)
- Dockerize the app
- Improve error handling/validation in production: currently, a generic message is being displayed on the current-weather/city/[city] error page, when an error is thrown from the CityCurrentWeather component (page). As it stands, the message can't use the custom error messages that are set during the server-side fetching of data for [this reason](https://nextjs.org/docs/app/building-your-application/routing/error-handling#securing-sensitive-error-information). Again, displaying validation errors on the form itself could help to alieviate this (for example, to show the user an error on the form, via a client-side component, if a valid city is not inputted by the user).

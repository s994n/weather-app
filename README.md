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

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Future ideas/improvements:

- Add a generator for creating new components from a template - this could be used for example to automatically add the display name and the higher order component wrapper to every new component generated
- Improve styling, e.g. add a dark theme; add spacing values to variables, update favicon icon; add mixin for media query between two breakpoints
- If the request to get current weather fails, provide a way for the user to retry the request or check their input if the error is due to an invalid city name.
- Add more unit tests for better coverage and add integration and e2e tests for the whole application. Note: Cypress currently does not support Next.js version 14 for testing async Server Components :(
- Display any validation errors on the form itself (may need useFormState, which will make SingleInputForm a client component). E.g. at the moment, if a city is not found then an error page is displayed. The user then needs to click back to the search form. Would probably be better to show the error on the form itself.
- Dockerize the app
- Improve error handling/validation in production: currently, a generic message is being displayed on the current-weather/city/[city] error page, when an error is thrown from the CityCurrentWeather component (page). As it stands, the message can't use the custom error messages that are set during the server-side fetching of data for [this reason](https://nextjs.org/docs/app/building-your-application/routing/error-handling#securing-sensitive-error-information). Again, displaying validation errors on the form itself could help to alieviate this (for example, to show the user an error on the form, via a client-side component, if a valid city is not inputted by the user).

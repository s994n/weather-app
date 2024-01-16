This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Add a free WeatherAPI key, from https://www.weatherapi.com/, to a .env.local file at the route of the project (you will need to sign up for an account).

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Future ideas:

- Add a generator for creating new components from a template - this could be used for example to automatically add the display name and the higher order component wrapper to every new component generated
- Add mixin for media query between two breakpoints
- Add prettier for code formatting (the project already has eslint)
- Improve styling, e.g. add a dark theme; add spacing values to variables, update favicon icon
- If the request to get current weather fails, provide a way for the user to retry the request or check their input if the error is due to an invalid city name.
- Add more unit tests for better coverage and add integration and e2e tests for the whole application. Note: Cypress currently does not support Next.js version 14 and async Server Components :(
- Display any validation errors in the form (may need useFormState, which will make SingleInputForm a client component). E.g. at the mome nt if a city is not found then an error page is displayed. the user then needs to click back to the search form. Would probably be better to show the error on the form itself.
- If possible from the API, get a list of available cities (possibly via the )
- Improve error handling/validation in production: currently in the built app, a message is being displayed on the current-weather/city/[city] error page, when an error is thrown from the CityCurrentWeather component (page): 'An error occurred in the Server Components render. The specific message is omitted in production builds to avoid leaking sensitive details. A digest property is included on this error instance which may provide additional details about the nature of the error.' This is not occuring in development and should be investigated to allow the error message to be displayed as expected in production.

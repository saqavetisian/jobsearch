Project Documentation

## Getting Started

First, install the packages

```bash
npm i
```

Then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Overview
This is a Next.js 14 application that features server-side rendering, API routes, and includes testing with Jest. The project uses TypeScript and Tailwind CSS for styling.

### Key Technologies:
- Next.js
- TypeScript
- Tailwind CSS (for styling)
- Frame motion

### Fetching
All requests are handled server-side. On each route change, data is fetched from the API on the server, with Next.js managing data caching for optimal performance. Additionally, lazy loading functionality has been implemented to improve efficiency by loading content as needed.

### Caching
Instead of making two separate API requests (`api1 and api2`), I consolidated them into a single request. I also added a 5-second delay to simulate loading for non-cached data. This allows you to observe the difference: when data is cached, fetching is significantly faster as the delay is skipped.


### Project Structure

```bash
public/
src/
  └── __tests__/
      └── page.test.tsx
  └── app/
      └── api/jobs/
          └── route.ts
      └── favicon.ico
      └── globals.css
      └── layout.tsx
      └── page.tsx
      └── components/job/
          └── Card.tsx
          └── Filter.tsx
          └── List.tsx
      └── pages/main.tsx
  └── ui/
      └── animations/
      └── form/
          └── Skeleton.tsx
  └── lib/
      └── utils.ts
  └── requests/
      └── search.ts
  └── utility/
      └── types.ts
      └── utils.ts
.babelrc
.env
.eslintrc.json
.gitignore
jest.config.ts
jest.setup.ts
next.config.mjs
next-env.d.ts
package.json
package-lock.json
postcss.config.js
README.md
tailwind.config.ts
tsconfig.json

```

1. `public/`
   Contains static assets like images, fonts, and the `favicon.ico` file. These files are directly served from the root of the app.

2. `src/`
   Main source folder containing all code for the app.

    - `__tests__/`
      Contains Jest test files. Example: `page.test.tsx` for testing the homepage and components.

    - `app/`
      Houses the core application logic, routing, and components.

        - `api/jobs/route.ts`
          API route for fetching job-related data, such as job listings and search/filter functionality.

        - `favicon.ico`
          The favicon for the app.

        - `globals.css`
          Global styles for the entire application. Tailwind CSS is configured here, and you can add global styles outside of Tailwind if necessary.

        - `layout.tsx`
          Layout component for wrapping page content. Can include elements like navigation bars and footers.

        - `page.tsx`
          Entry point for the homepage. This is the main page of the app.

        - `components/job/`
          Reusable components related to jobs.

            - `Card.tsx`
              Job card component displaying individual job information.

            - `Filter.tsx`
              Component for filtering jobs by different criteria (e.g., location, job title).

            - `List.tsx`
              Component that renders a list of jobs using the `Card` component.

        - `pages/main.tsx`
          Main page of the app.

3. `ui/`
   Contains UI-related components and animations.

    - `animations/`
      Folder where animation-related files live.

    - `form/Skeleton.tsx`
      A skeleton loader component to display while content is loading.

4. `lib/`
   Utility functions and libraries for shared functionality across the app.

    - `utils.ts`
      Utility functions for various general tasks.

5. `requests/`
   Functions that handle API requests.

    - `search.ts`
      Handles job search API calls.

6. `utility/`

    - `types.ts`
      Contains TypeScript type definitions used across the app.

    - `utils.ts`
      Another utility file for generic helper functions.

7. `.babelrc`
   Babel configuration file. This helps in transpiling ES6+ JavaScript code and JSX into browser-compatible JavaScript. Typically used by Next.js for custom Babel setups.

8. `.env`
   Environment variables. Use this file to store sensitive configuration like API keys or secrets.

9. `.eslintrc.json`
   ESLint configuration file. Contains the rules for linting JavaScript/TypeScript code.

10. `.gitignore`
    Specifies files and directories to be ignored by Git (e.g., `node_modules`, build files).

11. `jest.config.ts`
    Jest configuration file. Defines the test setup, including environment and transformations.

12. `jest.setup.ts`
    Setup file for Jest, where custom matchers or mocks can be included. Used for setting up things like `@testing-library/jest-dom`.

13. `next.config.mjs`
    Next.js configuration file. Can be used to modify Webpack, server settings, and other Next.js-specific configurations.

14. `next-env.d.ts`
    TypeScript environment definition for Next.js.

15. `package.json`
    Contains metadata about the project, including dependencies and scripts. Key scripts include:

    - `npm run dev`: Starts the development server.
    - `npm run build`: Builds the application for production.
    - `npm run test`: Runs Jest tests.

16. `postcss.config.js`
    Configuration for PostCSS, which processes CSS files. Tailwind CSS is likely configured here.

17. `README.md`
    Documentation for the project. This file should provide instructions on how to run, build, and test the application.

18. `tailwind.config.ts`
    Tailwind CSS configuration file. You can customize the Tailwind setup (e.g., colors, spacing, themes) here.

19. `tsconfig.json`
    TypeScript configuration file. Contains TypeScript-specific settings for the project, like strict type-checking options.


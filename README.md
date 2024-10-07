Project Documentation

## Getting Started

First, install the packages

```bash
npm i
```

copy .env from .enc.example file using this command

```bash
cp .env.example .env
```

Then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To Build application please run

```bash
npm run build
```


# Overview
This is a Next.js 14 application that features server-side rendering, API routes, and includes testing with Jest. The project uses TypeScript, Framer motion for animations and Tailwind CSS for styling.

### Key Technologies:
- Next.js
- TypeScript
- Tailwind CSS (for styling)
- Frame motion
    
### Fetching
All requests are handled server-side. On each route change, data is fetched from the API on the server, with Next.js managing data caching for optimal performance. Additionally, lazy loading functionality has been implemented to improve efficiency by loading content as needed.
Standard resource: [https://nextjs.org/docs/app/building-your-application/data-fetching/fetching](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching)

### Caching
Instead of making two separate API requests (`api1 and api2`), I consolidated them into a single request. I also added a 5-second delay to simulate loading for non-cached data. This allows you to observe the difference: when data is cached, fetching is significantly faster as the delay is skipped.
please check `route.ts` file todo, the best way to have several API cals is backend
Standard resource: [https://nextjs.org/docs/app/building-your-application/caching](https://nextjs.org/docs/app/building-your-application/caching)
Note: for several api cals version you can find here
[https://next-jobs-pages.vercel.app/](https://next-jobs-pages.vercel.app/)
[https://github.com/saqavetisian/next-jobs-pages](https://github.com/saqavetisian/next-jobs-pages)


### Design solutions
I made this project branding multiuse components, like input label, seperated code by logic, also used  

### Error handling
To see error handling please click to [this](https://jobsearch-peach-nine.vercel.app/?error=1)
Standard resource: [https://nextjs.org/docs/app/building-your-application/routing/error-handling](https://nextjs.org/docs/app/building-your-application/routing/error-handling)

### Jest Tests
Integrated Jest for testing, critical component is Filter so I decided to write only for it 
Standard resource: [https://nextjs.org/docs/app/building-your-application/testing/jest](https://nextjs.org/docs/app/building-your-application/testing/jest)

command to run the Filter tests

```bash
npm run test
```


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

1. `src/`
   Main source folder containing all code for the app.

    - `__tests__/`
      Contains Jest test files. Example: `page.test.tsx` for testing the homepage and components.

    - `app/`
      Houses the core application logic, routing, and components.

        - `api/jobs/route.ts`
          API route for fetching job-related data, such as job listings and search/filter functionality.

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


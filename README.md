# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

<details>

<summary>Read</summary>

In the project directory, you can ru
n:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
</details>

## Learn More

<details>

<summary>Read</summary>

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

</details>

--------------------------------------------------

# Development Notes for [Name TBD] Trivia Game Buildout

## Goals

1. To strengthen my javascript skills and create an MVP for the trivia module of my product.

2. Document the design and development process for future reference.

3. Use as many advanced tools and techniques as I can which are appropriate for the task.

4. Begin at the design process phase by creating:
   * a **paper prototype** - rough sketch for initial idea
   * a **lo-fi wireframe** in Figma - screens that include dimensions, layout, ui elements
   * a **interactive protoype** - linking wires together with click actions
   * a **hi-fi prototype** - adding full design elements to wires such as colors, images, fonts, etc that will serve as design mockups

5. Build a scalable architecture that can support future features and modules.

6. Identify core features for a robust MVP buildout in order to shorten development time and user test sooner for a shorter feedback >> iterate loop.

7. Build componentry in such a way that each component is self contained and can be migrated to a design system so it can be reused in other applications.

8. Build a trivia game in vanilla javascript that uses local data, an API, and a remote database.

9. Make the game question set customizable.

10. Convert the game to ReactJS once it is complete.

11. Wire game for theme switching.

12. Create an option to play the game 'Millionaire Style'.

13. Play test and iterate.

-----------------------------------------------------

## Planning

### Requirements

[Get from Github Projects]

### How will I manage the project?

* **Issues and features:** Github and Github's 'Project Boards' tool
* **Version Control:** Github
* **Repository:** Github
* **Documentation:** Docz/Github Pages? || Confluence?
* **Team Communication:** Zoom, Phone, Slack...
* **Task Management:** Github's 'Project Boards' || Jira

### How will I make the app more accessible and usable?

* **Internationalization:** [react-i18next](https://react.i18next.com/)
* **SEO:** Server-Side Rendering / NextJS? (Should I have use this instead of React? Can I use it WITH React?) Prerendering and Headless Chrome? Isomorphic React App?
* **Cross Browser Support:** BabelJS
* **Accessibility:** Semantic html first, [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/), [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=127&currentsidebar=%23col_customize) AA minimum
* **Cross Platform Native App:** React Native
* **Offline?:** [Service Workers?](https://developers.google.com/web/fundamentals/primers/service-workers/)
* **PWA?:** [[TBD]](https://medium.com/@addyosmani/progressive-web-apps-with-react-js-part-i-introduction-50679aef2b12)
* **CI/CD:** Jenkins? Travis CI? Circle CI?
* **JS Error Logging:** [TrackJS](https://trackjs.com/), [Sentry](https://sentry.io/for/javascript/), Raygun? Bugsnag?
* **State Management:** React Hooks and internal state tools for local data and simple state, Redux for complex or global states
* **API-first Approach:** Build and **`test`** the proprietary API first before writing any dependent application code against it - then consume it during prototype buildout. Be sure to embed security and authentication. Evolve the API as nesessary.
* **Polyfills and Browser Support:** pollyfills and core.js are already dependencies of react-scripts

### Development Process Methodology

* **One-Person Team:** Kanban
* **More than one person team:** Scrum

### Packages and tools

* **MERN Stack**: MongoDB/Atlas, Mongoose?, Express, React, Node
* **Package Management:** NPM
* **Task Runner:** Webpack
* **Auth:** [TBD]
* **Async:** Axios? (Async and Promises already supported)
* **Linting:** ESLint (Javascript | **already a dependency of react-scripts**), StyleLint (CSS)
* **UI Components:** Semantic UI || Custom Library
* **Other Design Assets:** Google Fonts?, React Icons?
* **Styles:** Sass, Tailwind? || Css Grid & Flexbox?
* **Testing:**
  1. **Jest || Cypress Component Testing** - Unit testing to uphold business logic; ensures that your methods return the expected logic for various cases.
  2. **Cypress** - End-to-End (E2E) and workflow UI testing (no backend - calls to backend are stubbed).

* **Accessibility Testing:**
  1. **General Accessibility:**
     * [**@axe-core/react**](https://github.com/dequelabs/axe-core-npm/tree/develop/packages/react) - Accessibility testing library containing rules for `WCAG 2.0 and 2.1 on level A and AA`, as well as a number of best practices; whose results show in the Chrome DevTools console
     * [**eslint-plugin-jsx-a11y**](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y) - static evaluation of your react application's JSX to spot accessibility issues. Use in conjunction with `@axe-core/react`. Requires `ESLint` **(already a dependency of react-scripts)**
     * [**Axe (Pro) Intelligent Guided Tests**](https://www.deque.com/axe/devtools/#:~:text=Intelligent%20Guided%20Testing%20(IGT)&text=With%20embedded%20machine%20learning%20and,the%20most%2Dencountered%20accessibility%20problems.): - catch even more issue that normally wouldn't be identified with automated testing
     * [**axe Accessibility Linter**](https://marketplace.visualstudio.com/items?itemName=deque-systems.vscode-axe-linter) - Configurable development environment (IDE) plugin that identifies accessibility issues earlier in the development process.
     * [**Chrome DevTools Audits panel**](https://developer.chrome.com/blog/new-in-devtools-60/#lighthouse) (Powered by Lighthouse) - Accessibility issues, performance, best practices
  2. **Color Contrast and Color Blindness:**
     * [Wave Browser Extention or standalone](https://wave.webaim.org/) - analyze contrast ratios for all page text elements at once
     * [Are My Colors Accessible?](https://www.aremycolorsaccessible.com/)
     * [Colour Contrast Analyser (CCA)](https://www.tpgi.com/color-contrast-checker/)
     * [Who Can Use](https://whocanuse.com/?b=040876&c=fd4949&f=20&s=)
  3. **Assitive Technology:** [NVDA](https://www.nvaccess.org/download/) Screenreader
  4. **Readability:** [Hemingway Editor](https://hemingwayapp.com/) - Calculates the reading level of you content as you write it - with suggestions to improve it.

* **Lazy Loading Modules:** Load dependent module onlhy when needed to keep initial payloads small and speed up the app loading time. Look into npm packages for this

### SEO: Browser or Server-Side Rendering?



If SEO and performance are concerns, you may want to opt for rendering your react app's views server-side using something like `ReactDOMserver`, `NextJS`, or `Gatsby` and sending the html to the browser.

**Isomorphic React Apps**: 

OR

**Prerendering and Headless Chrome**:

1. **React Helmet** | `npm i react-helmet`:  React document head management tool that makes updating the metadata on both client-side and server-side easier - making your app more SEO friendly.
2. **React Router** | `npm i react-router`: Addresses the biggest SEO issue with SPAs - opening pages as seperate URLs that do not rely on hashtags. Google cannot read hashtag related URLs, which prevents proper indexing.

**More on implementation at:** <https://aglowiditsolutions.com/blog/react-seo/>
and https://yalantis.com/blog/search-engine-optimization-for-react-apps/

**Also check out:** <https://developers.google.com/search/blog/2019/05/the-new-evergreen-googlebot>

-------------------------------------------------

## The Process Step-by-Step

### Install the following

**create-react-app** | `npx create-react-app name-of-app-you-want-to-create`: CLI created to get a react scaffold up and runnning quickly. It installs `jest` for testing and `react-scripts` which carries various dependencies that are commonly used for react development. This tool renders your app on the client side this increases load time and prevents some web crawlers from indexing your site.

**Read more here:**
<https://blog.logrocket.com/improve-app-performance-react-server-side-rendering/>

and

<https://medium.com/eincode/next-js-vs-gatsby-js-frameworks-all-you-need-to-know-4147f36ed915>

**react-router**
**react-helmet**

## Resources

<https://www.24a11y.com/2017/reacts-accessibility-code-linter/>

<https://www.smashingmagazine.com/2021/06/complete-guide-accessibility-tooling/>

<https://www.deque.com/blog/writing-automated-tests-accessibility/>

<https://www.smashingmagazine.com/2015/03/web-accessibility-with-accessibility-api/>

<http://www.html5accessibility.com/>

<https://webaim.org/resources/contrastchecker/>

<https://pauljadam.com/demos/focusvisible.html>

<https://www.pauljadam.com/demos.html>

<https://www.pauljadam.com/resources.html>

<https://www.pauljadam.com/guides.html>

<https://www.w3.org/WAI/ARIA/apg/example-index/landmarks/index.html>

<https://w3c.github.io/using-aria/>

<https://support.microsoft.com/en-us/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1>

<https://www.freecodecamp.org/news/semantic-html5-elements/>

<https://www.codecademy.com/learn/learn-html/modules/learn-semantic-html/cheatsheet>

<https://blog.hubspot.com/website/semantic-html>

<https://dev.to/5t3ph/generate-accessible-ui-colors-with-a11y-color-tokens-28m1>

<https://technology-signals.com/wp-content/uploads/download-manager-files/planningareactapplication_whitepaper_progress.pdf>

<https://aglowiditsolutions.com/blog/react-seo/>

<https://rubygarage.org/blog/design-crowdsourcing-platform>

<https://ahrefs.com/blog/react-seo/>

<https://medium.com/jspoint/a-beginners-guide-to-react-server-side-rendering-ssr-bf3853841d55>

<https://prismic.io/blog/compare-nextjs-vs-gatsby>

<https://briananderson2209.medium.com/best-automation-testing-tools-for-2018-top-10-reviews-8a4a19f664d2>

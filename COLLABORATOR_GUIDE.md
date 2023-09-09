# Node.js Collaborator Guide

- [Issues and Pull Requests](#issues-and-pull-requests)
- [Accepting Modifications](#accepting-modifications)
  - [Involving the Website Team](#involving-the-website-team)
- [Technologies used in the Website](#technologies-used-in-the-website)
- [Code editing](#code-editing)
  - [Adding new pages](#adding-new-pages)
    - [Create the page content](#create-the-page-content)
  - [Translating pages](#translating-pages)
- [Creating Components](#creating-components)
  - [Styling a Component](#styling-a-component)
  - [Best practices when creating a Component](#best-practices-when-creating-a-component)
    - [How a new Component should look like when freshly created](#how-a-new-component-should-look-like-when-freshly-created)
  - [Best practices for Component development in general](#best-practices-for-component-development-in-general)
- [Unit Tests and Storybooks](#unit-tests-and-storybooks)
  - [General Guidelines for Unit Tests](#general-guidelines-for-unit-tests)
  - [General Guidelines for Storybooks](#general-guidelines-for-storybooks)
- [Remarks on Technologies used](#remarks-on-technologies-used)

This document contains information for Collaborators of the Node.js website project regarding maintaining the code, documentation, and issues.

Collaborators should be familiar with the guidelines for new contributors in [CONTRIBUTING.md](./CONTRIBUTING.md).

## Issues and Pull Requests

Courtesy should always be shown to individuals submitting issues and pull requests to the Node.js website project.

Collaborators should feel free to take full responsibility for managing issues and pull requests they feel qualified to handle, as long as this is done while being mindful of these guidelines, the opinions of other Collaborators and guidance of the Website Group.

Collaborators may **close** any issue or pull request they believe is not relevant to the future of the Node.js project.
Where this is unclear, the issue should be left open for several days for additional discussion.
Where this does not yield input from Node.js Collaborators or additional evidence that the issue has relevance, then the issue may be closed.
Remember that issues can always be re-opened if necessary.

> [!IMPORTANT]\
> We recommend Collaborators to avoid Updating/Rebasing PRs unnecessarily, since we use [GitHub Merge Queues](https://github.blog/2023-07-12-github-merge-queue-is-generally-available/)
> to merge Pull Requests, which automatically rebases and runs CI-checks against the latest base branch.

## Accepting Modifications

All Node.js code and documentation modifications should be performed via GitHub pull requests.
Only the Website Team can merge their work and should do so carefully.

All pull requests must be reviewed and accepted by a Collaborator with sufficient expertise who can take full responsibility for the change.
In the case of pull requests proposed by an existing Collaborator, an additional Collaborator is required for sign-off.

Pull Requests can only be merged after all CI Checks have passed.
As usual, CI Checks need to be manually triggered by adding a `github_actions:pull-request` label to the Pull Request.

In some cases, it may be necessary to summon a qualified Collaborator to a pull request for review by @-mention.

If you are unsure about the modification and are not prepared to take full responsibility for the change, defer to another Collaborator.

We recommend collaborators follow the guidelines on the [Contributing Guide](./CONTRIBUTING.md#before-merging) for reviewing and merging Pull Requests.

### Involving the Website Team

Collaborators may opt to elevate pull requests or issues to the group for discussion by mentioning `@nodejs/website`. This should be done where a pull request:

- has a significant impact on the codebase,
- is inherently controversial; or
- has failed to reach a consensus amongst the Collaborators who are actively participating in the discussion.

The Website group should be the final arbiter where needed.

## Technologies used in the Website

The Node.js Website is built upon [React][] and [Next.js][] respectively, the UI Rendering Engine and the Framework that builds the Website;

The Website also uses several other Open Source libraries (not limited to) listed below:

- Styling is done with [SCSS][] and CSS Modules
- [TailwindCSS](https://tailwindcss.com/) is used as our CSS Framework and the Foundation of our Design System
- [Hero Icons](https://heroicons.com/) is an SVG Icon Library used within our Codebase
- [Shiki][] is a Syntax Highlighter used for our Codeboxes
  - A [Rehype Plugin](https://rehype-pretty-code.netlify.app/) is used here for transforming `pre` and `code` tags into Syntax Highlighted Codeboxes
- [MDX][] and Markdown are used for structuring the Content of the Website
- [`react-intl`][] is the i18n Library adopted within the Website
- [`next-sitemap`](https://www.npmjs.com/package/next-sitemap) is used for Sitemap and `robots.txt` Generation
- We use [Rehype](https://github.com/rehypejs/rehype) and [Remark](https://github.com/remarkjs/remark) to extend MDX functionality

## Code Editing

### Structure of this Repository

- React Components are defined on `/components`
- React Templates are defined on `/layouts`
- Global Stylesheets are declared on `/styles`
  - Styles are done with [SCSS][]
- Public files are stored on `/public`
  - Static Images, JavaScript files, and others are stored within `/public/static`
- Internationalisation is done on `/i18n`
  - React Localisation Data is stored within `/i18n/locales`
  - We use the [ICU Message Syntax](https://formatjs.io/docs/core-concepts/icu-syntax/) for Translations
  - Configuration for Locales is done within `/i18n/config.json`
- Website Content is defined within `/pages`
  - Initial development usually happens in English: `/pages/en`
  - Localized versions of `/pages/en` are done within `/pages/{localeCode}`
  - All content is in Markdown and is per locale.
  - The top of each Markdown file is a YAML (Frontmatter) block for page-specific localization information passed to various templates.
  - The bulk of the Markdown content for each page is referenced as `{children}` on their respective JSX Layout (`layouts/`)
- Multi-Purpose React Hooks are defined on `/hooks`
- Multi-Purpose TypeScript definitions are defined on `/types`
- React Context Providers are defined on `/providers`
- Build-time Data Fetching Scripts are defined on `/next-data`
  - Used for Node.js Release data fetching
  - Generation of build-time indexes such as blog data
- Multi-Purpose Scripts are stored within `/scripts`
  - Such as Node.js Release Blog Post generation

### Adding new pages

1. Create new page content including the layout, title and copy.
2. Update the relevant `/layout` to add a link to the new page.

#### Create the page content

Create a new markdown file in `/pages/en`.

At the top of the markdown file, set a page the title and layout.

```markdown
---
title: Events
layout: contribute.hbs
---

[Event copy goes here]
```

### Translating pages

See the [Translation Guidelines](./TRANSLATION.md) for the website translation policy.

## Creating Components

The Node.js Website uses [React][] as a Frontend Library to develop the Website.
React allows us to create user interfaces with a modern take on Web Development.

If you're unfamiliar with React or Web Development in general, we encourage a read before taking on complex issues and tasks as this repository is **not for educational purposes** and we expect you to have a basic understanding of the technologies used.

We also recommend getting familiar with technologies such as [Next.js][], [MDX][], [SCSS][], and "concepts" such as "CSS Modules" and "CSS-in-JS".

### Styling a Component

As mentioned, we write all Component-styles in a separate `.module.scss` files. This is like writing any CSS in a separate file (besides the fact that we use [SCSS][]).

This concept of writing styles on dedicated CSS files and importing them within JavaScript (or React) is a pattern named **[CSS Module](https://github.com/css-modules/css-modules)**.
These allow us to write SCSS (or regular CSS, or any flavor of CSS if you have a way of interpreting it) within a `.module.scss` and import the class names directly to our React Components.
We recommend reading guides on "Styling React Components with CSS Modules", which there are many available on the web.

It's important to mention that we use [TailwindCSS](https://tailwindcss.com/) as a CSS Framework. Hence, margins, paddings, font sizes, font weights, colors, and other sorts of styles are all provided with Tailwind.
We recommend reading [Tailwind Docs](https://tailwindcss.com/docs/preflight) to get familiar with Tailwind's styles.
We also recommend reading [this guide for setting up Tailwind on your IDE](https://tailwindcss.com/docs/editor-setup).

Finally, if you're unfamiliar with how to use Tailwind or how to use Tailwind within CSS Modules, we recommend reading [this guide](https://tailwindcss.com/docs/using-with-preprocessors).

> [!NOTE]\
> Tailwind is already configured for this repository. You don't need to import any Tailwind module within your CSS modules.
> You can apply Tailwind classes by regularly using CSS variables or SCSS's `@apply` statement, for example. If you have questions, please raise them on Pull Requests or Issues.

> [!IMPORTANT]\
> For styling Components, only using Tailwind variables for defining paddings, margins, spacing, flexboxes, and all sorts of CSS classes is mandatory.
> There are times when manual values are allowed, but we recommend setting them in reusable variables. Within the `styles` folder.
> If unsure how to proceed, ask for help within Issues or Pull Requests.

### Best practices when creating a Component

- All React Components should be placed within the `components` folder.
- Each Component should be placed, whenever possible, within a sub-folder, which we call the "Domain" of the Component
  - The domain represents where these Components belong to or where they will be used.
  - For example, Components used within Article Pages or that are part of the structure of an Article or the Article Layouts,
    should be placed within `components/Article`
- Each component should have its folder with the name of the Component
- The structure of each component folder follows the following template:
  ```text
  - ComponentName
    - index.tsx // the component itself
    - index.module.scss // all styles of the component are placed there
    - index.stories.tsx // component Storybook stories
    - __tests__ // component tests (such as unit tests, etc)
      - index.test.mjs // unit tests should be done in ESM and not TypeScript
  ```
- React Hooks belonging to a single Component should be placed within the Component's folder
  - If the Hook as a wider usability or can be used by other components, it should be placed in the root `hooks` folder.
- If the Component has "sub-components" they should follow the same philosophy as the Component itself.
  - For example, if the Component `ComponentName` has a sub-component called `SubComponentName`,
    then it should be placed within `ComponentName/SubComponentName`

#### How a new Component should look like when freshly created

```tsx
import styles from './index.module.scss';
import type { FC } from 'react';

type MyComponentProps = {}; // The types of the Props of your Component

const MyComponent: FC<MyComponentProps> = ({ prop1, prop2... }) => (
  // Actual code of my Component
);

export default MyComponent;
```

### Best practices for Component development in general

- Only spread props `{ ... }` on the definition of the Component (Avoid having a variable named `props`)
- Avoid importing `React`, only import the modules from React that you need
- When importing types, use `import type { NameOfImport } from 'module'`
- When defining a Component, use the `FC` type from React to define the type of the Component
  - When using `children` as a prop, use the `FC<PropsWithChildren<MyComponentProps>>` type instead
  - Alterenatively you can define your type as `type MyComponentProps = PropsWithChildren<{ my other props}>`
- Each Props type should be prefixed by the name of the Component
- Components should always be the `default` export of a React Component file
- Avoid using DOM/Web APIs/`document`/`window` API access within a React Component.
  Use utilities or Hooks when you need a Reactive state
- Avoid making your Component too big. Deconstruct it into smaller Components/Hooks whenever possible

## Unit Tests and Storybooks

Each new feature or bug fix should be accompanied by a unit test (when deemed valuable).
We use [Jest][] as our test runner and [React Testing Library][] for our React unit tests.

We also use [Storybook][] to document our components.
Each component should have a storybook story that documents the component's usage.

Visual Regression Testing is automatically done via [Chromatic](https://www.chromatic.com/) to ensure that Components are rendered correctly.

### General Guidelines for Unit Tests

Unit Tests are fundamental to ensure that code changes do not disrupt the functionalities of the Node.js Website:

- Unit tests should be written as `.mjs` files.
- We recommend adding unit tests for content covering `util`, `scripts`, `hooks`, and `components` whenever possible.
- Unit Tests should ensure that a given change's functionality is working as expected.
- When creating unit tests for React components, we recommend that the tests cover all the possible states of the component.
- We also recommend mocking external dependencies, if unsure about how to mock a particular dependency, raise the question on your Pull Request.
  - We recommend using [Jest's Mock Functions](https://jestjs.io/docs/en/mock-functions) for mocking dependencies.
  - We recommend using [Jest's Mock Modules](https://jestjs.io/docs/en/manual-mocks) for mocking dependencies unavailable on the Node.js runtime.
  - Common Providers and Contexts from the lifecycle of our App, such as [`react-intl`][] should not be mocked but given an empty or fake context whenever possible.
- We recommend reading previous unit tests from the codebase for inspiration and code guidelines.

### General Guidelines for Storybooks

Storybooks are an essential part of our development process. They help us to document our components and to ensure that the components are working as expected.

They also allow Developers to preview Components and be able to test them manually/individually to the smallest unit of the Application. (The individual Component itself).

**Storybooks should be fully typed and follow the following template:**

```tsx
import type { Meta as MetaObj, StoryObj } from '@storybook/react';
import NameOfComponent from './index';

type Story = StoryObj<typeof NameOfComponent>;
type Meta = MetaObj<typeof NameOfComponent>;

// If the component has any props that are interactable, they should be passed here
// We recommend reading Storybook docs for args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {};

// If the Component has more than one State/Layout/Variant, there should be one Story for each variant
export const AnotherStory: Story = {
  args: {},
};

export default { component: NameOfComponent } as Meta;
```

- Stories should have `args` whenever possible, we want to be able to test the different aspects of a Component
- Please follow the template above to keep the Storybooks as consistent as possible
- We recommend reading previous Storybooks from the codebase for inspiration and code guidelines.
- If you need to decorate/wrap your Component/Story with a Container/Provider, please use [Storybook Decorators](https://storybook.js.org/docs/react/writing-stories/decorators)

## Remarks on Technologies Used

The Node.js Website is a somewhat complex application and at times non-trivial solutions have been implemented to solve certain technical challenges.
Historical decision making can be largely found on past issues, conversations on Slack and GitHub discussions. However, we also wish to highlight some of the notable development decisions that we have made here.

### Why Next.js?

We've found that Next.js is simply versatile, hackable, stable, community-maintained and has a great ecosystem.
The reasoning goes deeper, but as a long-term Framework it is the most suitable choice.

#### Why do we continue to support static builds?

It was decided together with the TSC (Technical Steering Committee) that the Node.js Website should always support fully static builds that do not depend on any 3rd party services.
This is to ensure that the Website is always available and that we do not depend on any 3rd party services to serve our content.

(For example, if we abandon Vercel, our Website should still completely work as standalone as possible)

#### What is `next.dynamic.mjs`?

Our whole Website uses a custom renderer for rendering the pages.
As you might have seen, within the `pages` directory we have [Next.js Dynamic Route](https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes) named `[...path].tsx` that matches against all possible routes of the Website.

This means that each `.md(x)` file within `pages/` is not rendered by Next.js regular App Tree (`pages/_document.tsx` and `pages/_app.tsx`) but a custom render tree.

This custom render uses `getStaticPaths` and [Incremental Static Generation](https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration) to generate the full list of supported pages of the Website.
For example, this allows us to generate Localized Pages for every page that is not translated, by telling Next.js to create a localised path.
`next.dynamic.mjs` is responsible for getting a full list of the source pages (`pages/en`) and identifying which pages have been translated.

Non-translated pages will have their Localized contexts and translated React message-bags (`react-intl`) but the content will be the same as the source page (English).
Whereas localized pages will have localized context and content.

This custom solution is also able to decide what paths should be compiled during runtime.
This is a combination of rules defined on `next.constants.mjs` and `[...path].tsx`.

The `[...path].tsx` file ultimately utilizes the `theme.tsx` file as its layout source.
This setup enables the loading of the Layout Provider and MDX Provider, which in turn, encapsulate and manage the rendering of any child content or components. This includes both content and components provided by the Layout Provider and the transformed MDX content originating from the `.md(x)` source page.

#### What is `next.data.mjs`?

This file is responsible for loading, fetching and generating build-time required information such as Node.js Release data, Blog Posts Metadata (for pagination and indexation), RSS feeds, etc.

#### What is `site.json`?

This file is used for defining Website Metadata, such as which RSS feeds should be generated, Social Media Information and other Metadata used during the Website build-time.
We use a JSON format to ease collaboration.

#### What is `next.locales.mjs` and why not use Next.js built-in i18n?

While Next.js provides a built-in i18n feature, it doesn't offer the flexibility we require. Our specific needs include the ability to generate comprehensive lists of supported locales and pages for each locale. Additionally, we operate with a subfolder-based approach for content, as opposed to the extension-based approach (e.g., `filename.language.md(x)`) that is compatible with Next.js's built-in i18n.

We opted for the subfolder approach to maintain consistency with our previous Node.js website's content structure and to ensure long-term maintainability, rather than relying on Next.js's i18n functionality.

#### What is `next.rewrites.mjs`?

This file is responsible for defining the rewrite rules for the Website.
It is used for defining redirects and other rewrite rules. (Such as Internal Redirects and External ones).

The `redirects.json` file specifies two types of operations: rewrites and redirects.

- Rewrites: These operations do not alter the original URL but instead render the content from the rewritten URL. It's important to note that the rewritten URL path must be valid and exist on the website.
- Redirects: Redirect operations, on the other hand, change the original URL to a new one. While these new URLs can be either internal (within the website) or external (leading to a different domain), it is more common for redirects to point externally.

This file contains a simple template engine that supports `/:locale` to indicate that this path should also be available under all available locales as prefix.

#### Our Next.js Middleware

We have a simple Next.js Middleware that is responsible for handling initial Locale detection and redirection.
It detects browser locales and redirects to the most suitable locale for the user. And it fallbacks to `/en` if no suitable locale is found.

#### How do layouts work?

Layouts Wrap the content of the Markdown files.
They are responsible for adding additional styling and structure surrounding the content of the Markdown files.

Layouts are defined within the `layouts` folder.
They are React Components that receive the `children` prop, which is the transformed MDX content of the Markdown file.

Each Page layout is decided within their Markdown's Frontmatter as `layout: name-of-layout.hbs`.

### Why MDX?

MDX is an extension on Markdown that allows us to add JSX Components within Markdown.
Besides that, MDX is also a pluggable parser built on top of `unified` which supports Rehype and Remark Plugins.
MDX is becoming the standard for parsing human-content on React/Next.js-based Applications.

Some of the plugins that we use include:

- `remark-gfm`: Allows us to use GitHub Flavored Markdown
- `remark-headings`: Generates Metadata for Markdown Headings
  - This allows us to build the Table of Contents for each Page, for example.
- `rehype-autolink-headings`: Allows us to add Anchor Links to Markdown Headings
- `rehype-slug`: Allows us to add IDs to Markdown Headings
- `rehype-pretty-code`: Allows us to transform `pre` and `code` tags into Syntax Highlighted Codeboxes by using [Shiki][]

#### Shiki and Vercel

Since we use Incremental Static Rendering and Serverless Functions, Vercel attempts to simplify the bundled Node.js runtime by removing all unnecessary dependencies.
This means that Shiki's Themes and Languages are not bundled by default.

Hence the `shiki.config.mjs` file, where we define our custom set of supported Languages and we bundle them directly by using [Shiki's Grammar Property](https://github.com/shikijs/shiki/blob/main/docs/languages.md#supporting-your-own-languages-with-shiki) which allows us to embed the languages directly.

### Tailwind

Tailwind is a great CSS Framework. It allows us to create a Design System that is easy to maintain and extend. It also allows us to create a consistent Design Language across the Website.

For example, it automatically integrates with PostCSS and Next.js, which allows us to use Tailwind's utilities within our Components and Pages.

It also integrates with Sass allowing to use Tailwind classes directly within our SCSS Modules.

**Note:** On that remark, we use CSS Modules as a way to define our Styles.
This allows us to scope our styles to a specific Component or Page, without having to worry about CSS Class Name Collisions.
This also means that we don't use CSS-in-JS solutions such as Styled Components or Emotion.

#### Next Fonts and Tailwind

We use `next/fonts` Open Sans as the default font for the Node.js Website.
The font is configured as a CSS variable and then configured on `tailwind.config.js` as the default font for the Website.

#### Sass Support / IDE Support

We recommend the usage of [Tailwind's Official VS Code Extension](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) for IntelliSense Support. You might need to set `.scss` files to use Tailwind as the Interpreter.

### Vercel

We use Vercel as our hosting provider. It is a great platform that offers an excellent CI/CD pipeline which allows us to deploy our website with ease.

It is important to mention that there are some rules on our Vercel Deployments such as:

- Branches starting with `dependabot` (Dependabot Automated PRs) or `gh` (GitHub Merge Queues) are not deployed to Vercel.
- Vercel Deployments are triggered for all other branches during `push` activities.
- We have a custom install script that executes `npm ci --omit=dev` (the same way we do on our CI Pipelines)
  - Hence if Builds fail unexpectedly, make sure that your dependency that is being used during build-time is on `dependencies` and not `devDependencies`. Checkout out [DEPENDENCY_PINNING.md](./DEPENDENCY_PINNING.md) for more information.
- Our sponsorship with Vercel is maintained by the OpenJS Foundation

### Seeking additional clarification

A lot of the current structure is due to retro-compatibility, keeping a simple and familiar file structure and keeping files that have historical reasons or needs.

If you're unfamiliar or curious about something, we recommend opening a Discussion on this GitHub Repository.

[Jest]: https://jestjs.io/
[React Testing Library]: https://testing-library.com/docs/react-testing-library/intro/
[Storybook]: https://storybook.js.org/
[`react-intl`]: https://formatjs.io/docs/react-intl/
[Next.js]: https://nextjs.org/
[MDX]: https://mdxjs.com/
[SCSS]: https://sass-lang.com/
[React]: https://react.dev/
[Shiki]: https://github.com/shikijs/shiki

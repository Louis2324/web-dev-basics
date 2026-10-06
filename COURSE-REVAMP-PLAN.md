# Web Development Foundations 2026

## Course and Repository Revamp Plan

**Status:** Approved design
**Date:** 2026-10-06
**Repository branch:** `dev`

## 1. Purpose

This repository will become a single, project-driven eight-week web-development foundation program. It will contain:

- The guided course website
- The weekly lessons and exercises
- The revised project codebases
- The final project-submission showcase
- Documentation explaining what each project teaches

The program is intended for beginners. It should establish durable browser and web-platform skills before introducing modern tooling and framework concepts.

The course is a foundation, not a promise of full-stack mastery or guaranteed employment after eight weeks. Learners should finish with the ability to understand, build, test, document, and deploy a small web project independently.

## 2. Guiding principles

### Fundamentals before frameworks

Learners will first understand HTML, CSS, JavaScript, browser behavior, accessibility, and responsive design. TypeScript and React will be presented after the core course as next steps, not required prerequisites for the capstone.

This follows the [MDN Front-end Developer Curriculum](https://developer.mozilla.org/en-US/curriculum/), which treats semantic HTML, CSS, JavaScript, accessibility, testing, and tooling as the baseline skill set.

### Build something every week

Each week combines:

1. A short explanation
2. A guided example
3. A small challenge
4. A project milestone
5. A review and reflection

Projects should be small enough to finish but meaningful enough to demonstrate a real skill.

### Teach quality as part of development

Accessibility, responsive behavior, performance, debugging, Git, documentation, and testing should appear throughout the course instead of being left until the final week.

The program will use [WCAG 2.2](https://www.w3.org/WAI/standards-guidelines/wcag/) as its accessibility reference and introduce the Core Web Vitals concepts of LCP, INP, and CLS using [web.dev Web Vitals guidance](https://web.dev/articles/vitals).

### Keep the tooling proportional

Tooling should help learners understand how projects are developed and shipped. It should not obscure the underlying technologies or turn setup into the main lesson.

## 3. Target repository structure

The long-term monorepo structure should be:

```text
web-dev-basics/
├── COURSE-REVAMP-PLAN.md
├── README.md
├── package.json
├── astro.config.mjs
├── projects/
│   ├── week-01/
│   │   └── hello-web/
│   ├── week-02/
│   │   └── personal-site/
│   ├── week-03/
│   │   ├── grid-basics/
│   │   ├── structured-grid/
│   │   ├── asymmetrical-layout/
│   │   ├── holy-grail/
│   │   ├── masonry/
│   │   └── editorial-layout/
│   ├── week-04/
│   │   └── interactive-ui-playground/
│   ├── week-05/
│   │   ├── personal-organizer/
│   │   └── accessible-gallery/
│   ├── week-06/
│   │   ├── quote-generator/
│   │   └── api-explorer/
│   ├── week-07/
│   │   └── vite-migration-exercise/
│   └── week-08/
│       └── capstone-submissions/
├── src/
│   ├── components/
│   ├── content/
│   │   ├── weeks/
│   │   ├── lessons/
│   │   └── project-guides/
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── public/
│   ├── images/
│   └── project-previews/
└── imported-projects/
```

`imported-projects/` is the untouched source archive during migration. It should remain until every project has been reviewed, copied into its final location, and verified. It can later be removed or retained as an archive after the migration is complete.

## 4. Weekly curriculum and project work

## Week 1 — The web and semantic HTML

### Target project

**Hello Web 2026:** a small, accessible introduction page that teaches how a browser loads and presents a document.

### Concepts

- Files, folders, editors, browsers, and DevTools
- A high-level view of requests, responses, and browser rendering
- HTML document structure
- Headings, paragraphs, lists, links, and images
- Semantic elements: `header`, `nav`, `main`, `section`, `article`, and `footer`
- Form labels and native validation
- Basic Git and GitHub workflow
- Alternative text and document structure

### Existing project findings

- The page is intentionally simple, but the animated background is currently inline JavaScript rather than a separate lesson file.
- It is missing a viewport meta tag.
- The README describes `script.js` and an `assets/` directory that do not exist.
- The project teaches very little semantic structure in its current form.

### Required revision

- Replace the timer-only page with a small semantic introduction page.
- Keep the animation as an optional enhancement, not the primary lesson.
- Add an accessible form and a clearly structured document.
- Move JavaScript into a separate module if interactivity remains.
- Rewrite the README to match the actual project.
- Add a basic deployment and Git checkpoint.

## Week 2 — CSS fundamentals and responsive design

### Target project

**Personal Site 2026:** a responsive personal profile or portfolio page.

### Concepts

- Cascade, inheritance, specificity, and the box model
- Typography and custom fonts
- CSS custom properties and design tokens
- Flexbox
- Mobile-first responsive design
- Relative units and `clamp()`
- Focus states and reduced-motion preferences
- Basic visual hierarchy and spacing systems

### Existing project findings

- The existing personal bio has a useful multi-section structure and responsive CSS.
- The projects section is referenced but not actually implemented.
- The contact form does not send data; JavaScript only clears fields and displays an alert.
- The subject field uses the wrong `name` value.
- The `Let's talk` and project buttons use alerts instead of useful navigation.
- Social links and icon dependencies need consistent labels and current metadata.

### Required revision

- Build an actual projects section.
- Replace fake form behavior with either a clearly labelled demonstration or a real submission integration later.
- Correct form field names and native validation.
- Improve small-screen navigation instead of hiding it completely.
- Add keyboard focus styles and accessible social-link labels.
- Replace filler copy with clear project content.
- Document the design system used in the project.

## Week 3 — Modern CSS layout lab

### Target project

**Layout Lab:** a group of focused layout exercises that explain when to use Grid, Flexbox, columns, and responsive composition.

### Existing projects

The imported Week 3 repository contains six projects:

1. Grid Basics
2. Stark Enterprises / 12-column grid
3. Nishinoya / asymmetrical grid
4. Holy Grail layout
5. Express Yourself / masonry-style layout
6. Miles Morales / editorial multi-column layout

### Concepts

- CSS Grid tracks and areas
- `minmax()`, `auto-fit`, and `auto-fill`
- Responsive layout decisions
- Multi-column content
- Masonry-like composition
- Container-query awareness
- Image sizing and aspect ratios
- Choosing layout techniques based on content

### Required revision

- Keep all six, but classify Grid Basics and Holy Grail as guided exercises.
- Treat the other four as polished layout showcases.
- Replace Lorem Ipsum with purposeful content.
- Replace or verify copyrighted/fandom assets and record asset sources.
- Fix navigation links that currently point to `/`.
- Fix the masonry page’s reference to a missing `script.js`.
- Correct invalid list structure in the Holy Grail page.
- Add a meaningful `alt` value where an image communicates content; use empty alt only for genuinely decorative images.
- Add a README section for each layout explaining the design decision and trade-off.

## Week 4 — JavaScript fundamentals and DOM interaction

### Target project

**Interactive UI Playground:** a small collection of components built with vanilla JavaScript.

### Concepts

- Variables, values, arrays, objects, functions, conditionals, and loops
- DOM selection and updates
- Events and event handlers
- Keyboard input
- CSS class manipulation
- Modules and separation of responsibilities
- State versus rendered UI
- Debugging with DevTools

### Existing projects

- Counter
- Theme switcher

### Required revision

- Combine both projects into one guided playground while keeping each component independently understandable.
- Use an `output` element or accessible status region for the counter instead of a read-only text input.
- Add a visible heading to the counter page.
- Use descriptive button names and status messages.
- Make keyboard shortcuts optional and clearly documented.
- Add `prefers-reduced-motion` handling to animated styles.
- Explain the timer and interval lifecycle instead of treating it as unexplained magic.

## Week 5 — State, persistence, and accessible interaction

### Target projects

- **Personal Organizer:** the primary project
- **Accessible Gallery:** an extension project

### Concepts

- Rendering from data
- State transitions
- `localStorage`
- JSON serialization
- Filtering and sorting
- Empty, loading, and error states
- Dialogs and modal interaction
- Focus management
- Keyboard navigation
- Event delegation

### Existing project findings

- The to-do app already stores tasks in `localStorage` and displays completion progress.
- It has no edit flow, filtering, task-specific labels, or storage error handling.
- The gallery supports modal navigation, Escape, and arrow keys.
- Gallery cards are clickable `div` elements, so they are not naturally keyboard accessible.
- The modal does not manage focus or restore focus to the triggering item.
- Some icon-only or symbol-only controls need accessible names.

### Required revision

- Give every task control a meaningful accessible name.
- Use a semantic progress indicator or appropriate ARIA semantics.
- Add edit, filter, and clear-completed behavior.
- Protect against invalid or corrupted `localStorage` data.
- Use `keydown` for modern keyboard handling.
- Build gallery items as buttons or links.
- Consider the native `dialog` element.
- Add focus trapping or a clearly documented focus strategy.
- Restore focus after closing the gallery modal.
- Add reduced-motion behavior.

## Week 6 — APIs and asynchronous JavaScript

### Target projects

- **Quote Generator:** small guided API exercise
- **API Explorer:** larger project, such as weather or public discovery data

### Concepts

- `fetch`
- Promises and `async`/`await`
- JSON responses
- Loading, error, and empty states
- API response validation
- Fallback data
- Request cancellation
- Debouncing user input
- Clipboard interaction
- Avoiding secrets in frontend code

### Existing project findings

- The quote generator already includes an API call, loading state, clipboard copying, and fallback quotes.
- The code logs response data to the console.
- Copy success is communicated by changing button text, but there is no live status region.
- A `textarea` is being used as the quote display instead of a semantic output or blockquote.
- The course README calls this Week 7 even though it is currently the sixth imported repository.

### Required revision

- Keep the quote generator as the first API lesson.
- Add a larger API project with search and meaningful data states.
- Remove development logging from the finished project.
- Add status announcements for loading, failure, and copy success.
- Validate the shape of API responses before rendering them.
- Use `AbortController` where requests can overlap.
- Explain API reliability and fallback behavior.
- Rewrite the README with the correct week number and setup instructions.

## Week 7 — Tooling around HTML, CSS, and JavaScript

### Target project

**Vite Migration Exercise:** convert one earlier project into a modern local-development project.

### Concepts

- Command line navigation
- npm and `package.json`
- Dependencies and scripts
- Vite development server
- ES modules
- Source files versus public assets
- Development and production builds
- Environment variables
- Formatting and linting
- Basic project organization
- Git branches and meaningful commits

### Required work

- Add a clean `dev`, `build`, and `preview` workflow.
- Move JavaScript into modules where appropriate.
- Add a production build script.
- Explain what the bundler does and what it does not do.
- Add a basic formatter and linting strategy once the course platform is ready.
- Teach learners how to read `package.json` rather than only copying commands.

Vite is a good fit for this week because it provides a development server and optimized production build process while remaining close to standard HTML, CSS, and JavaScript. See the [official Vite guide](https://vite.dev/guide/).

## Week 8 — Deployment and independent capstone

### Concepts

- Production builds
- Netlify, GitHub Pages, or Vercel
- Deployment configuration
- Environment variables
- Custom domains
- Basic performance checks
- Lighthouse and browser DevTools
- Accessibility checks on the deployed site
- README writing
- Release and submission workflow

### Student-chosen capstone

Students choose their own project. They should define:

- The problem, idea, or experience they are building
- The intended audience
- The main features
- The technologies they plan to use
- How they will test the project

The capstone must:

- Use HTML, CSS, and JavaScript
- Be responsive
- Include at least one meaningful interaction
- Be publicly deployed
- Include a repository README
- Demonstrate skills from the program

React and TypeScript are not required for the capstone. Students may use vanilla JavaScript and Vite so that the assessment measures understanding instead of framework-following.

### Required submission

The course website will ask students to submit:

1. A link to the project repository
2. A link to the live website
3. A short testimonial describing what they built and what the program helped them learn

The public showcase should also display the project title and author name. Submission moderation and consent should be included before any testimonial is published.

## 5. FCC-style course website

The current Web Dev Basics website should evolve from a project catalog into a guided learning platform.

### Learner flow

```text
Choose a week
    ↓
Read a short lesson
    ↓
Edit starter code
    ↓
See a live preview
    ↓
Complete a small challenge
    ↓
Run a check
    ↓
Read the explanation
    ↓
Continue to the next lesson
```

### Lesson page structure

Each lesson should contain:

- Learning objective
- Short explanation in plain language
- Key vocabulary
- Starter code
- Editable code area
- Live preview
- Challenge instructions
- Hint button
- Reset button
- Check or test button
- Expected outcome
- Common mistakes
- Next lesson link

### Progressive editor scope

Weeks 1–3 should use a simple HTML/CSS editor and preview.

Weeks 4–6 should add JavaScript, console output, and small behavior checks.

Week 7 should explain how the same work moves into a local Vite project.

Week 8 should focus on deploying a complete project rather than learning a more complex editor.

The first version should not require user accounts. Progress can be stored locally in the browser. A later version can add authentication and server-side progress if the course grows.

### Editor safety requirements

- Run learner previews in a sandboxed iframe.
- Do not allow lesson code to access the parent course application.
- Keep lesson tests isolated from the main page.
- Never expose private API keys in lesson examples.
- Provide a clear reset action.
- Ensure the editor and preview are usable with keyboard navigation.

## 6. Astro recommendation

Astro is recommended for the redesigned course website.

### Why Astro fits

- The course is mostly content-driven.
- Lessons, project guides, and weekly pages can live in Markdown or MDX.
- Astro content collections provide structured, typed content with validation and editor support.
- Static pages can be generated efficiently.
- Interactive features can be isolated into small client-side islands.
- React can be added later only for components that genuinely benefit from it.
- The course will avoid shipping a large JavaScript runtime to every lesson page.

Astro’s [content collections](https://docs.astro.build/en/guides/content-collections/) are a good match for lesson and project metadata. Astro’s [integration system](https://docs.astro.build/en/guides/integrations/) also allows a future editor component or React island without converting the entire website into a React application.

### Proposed Astro content model

```text
src/content/
├── weeks/
│   ├── week-01.md
│   ├── week-02.md
│   └── ...
├── lessons/
│   ├── week-01/
│   ├── week-02/
│   └── ...
├── project-guides/
│   ├── hello-web.md
│   ├── personal-site.md
│   └── ...
└── submissions/
    └── approved-projects.json
```

Each lesson entry should have a schema containing fields such as:

```text
title
week
order
summary
objectives
prerequisites
estimatedMinutes
starterFiles
challenge
```

Each project entry should have:

```text
title
week
description
skills
technologies
repositoryUrl
liveUrl
previewImage
status
```

### Interactive Astro islands

The first interactive islands should be:

- Lesson progress tracker
- Project filters
- In-browser code editor
- Challenge checker
- Capstone submission form

The rest of the course pages should remain normal Astro-rendered content wherever possible.

## 7. Capstone submission architecture

### Initial version

Use a moderated submission flow. Students submit their project links and testimonial through a form. Approved submissions are added to the site’s structured content data.

This avoids building a full account system before the course has validated the learning experience.

### Later version

Possible future options:

- GitHub pull-request submissions
- Netlify or another hosted form service
- A small database-backed submission system
- Student accounts and progress synchronization

The public site must validate URLs, escape testimonial content, and require explicit consent before publishing a learner’s name or testimonial.

## 8. “What’s next?” section

The final week should end with a calm, ordered roadmap rather than an overwhelming technology list.

### Frontend path

1. Deeper JavaScript
2. TypeScript
3. React
4. Component design
5. State management
6. Testing with tools such as Vitest and Playwright
7. Frameworks such as Next.js

TypeScript should follow JavaScript fundamentals. The [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html) explicitly expects learners to understand core JavaScript concepts before studying TypeScript deeply.

React should be introduced as a component model involving components, data, conditions, lists, events, and shared state. The [official React learning path](https://react.dev/learn) is a suitable next resource.

### Full-stack path

1. Node.js
2. HTTP and REST APIs
3. Databases
4. Authentication
5. Server-side validation
6. Security
7. Deployment and monitoring

### Quality and design path

1. Accessibility
2. Advanced CSS
3. Design systems
4. Performance
5. Core Web Vitals
6. Automated testing
7. Progressive Web Apps

Possible follow-up resources include [web.dev Learn](https://web.dev/learn), [The Odin Project Foundations](https://www.theodinproject.com/paths/foundations/courses/foundations), [freeCodeCamp certifications](https://www.freecodecamp.org/), [Scrimba’s frontend path](https://scrimba.com/learn/frontend), and [Full Stack Open](https://fullstackopen.com/en/).

## 9. Migration plan

### Phase 1 — Normalize the imported projects

- Rename `week1-main` through `week6-main` to `week-01` through `week-06`.
- Copy selected projects into the final `projects/` structure.
- Keep the original imported folders temporarily.
- Rewrite inaccurate READMEs.
- Replace broken links and missing references.
- Record asset sources and permissions.

### Phase 2 — Modernize the guided projects

- Revise Week 1 first.
- Add accessibility and responsive checks to Week 2.
- Reclassify Week 3 exercises and showcases.
- Combine Week 4 into the Interactive UI Playground.
- Upgrade Week 5 state and interaction behavior.
- Expand Week 6 into a small and large API exercise.

### Phase 3 — Build the course platform

- Introduce Astro at the repository root.
- Add content collections and schemas.
- Build the weekly overview pages.
- Build lesson and project-guide routes.
- Add project cards and filtering.
- Add the first simple editor island.

### Phase 4 — Tooling, deployment, and submissions

- Add the Week 7 Vite tooling lessons.
- Add Week 8 deployment lessons.
- Add the capstone submission form.
- Add moderation and approved-submission content.
- Add the “What’s next?” pathways.

### Phase 5 — Cleanup

- Remove obsolete duplicate files.
- Remove `imported-projects/` only after verification.
- Update the root README.
- Add a production build script.
- Add automated checks.
- Deploy the course website.

## 10. Quality gates

Every revised project should satisfy:

- Valid document structure
- One clear page heading
- Responsive behavior at mobile, tablet, and desktop widths
- Keyboard-accessible controls
- Visible focus states
- Useful image alternative text
- No placeholder or Lorem Ipsum content
- No broken local links or missing assets
- No unexplained console errors
- Clear README and setup instructions
- Meaningful Git commit history after migration

The course website should additionally satisfy:

- Successful production build
- No broken lesson routes
- Typed and validated content collections
- Accessible editor and navigation
- Sandboxed learner previews
- Responsive course pages
- Strong Lighthouse accessibility and performance results
- Capstone links validated before publication
- Testimonials moderated before appearing publicly

## 11. Success criteria

The revamp is successful when:

1. A complete beginner can start Week 1 without prior framework knowledge.
2. Each week has a clear skill objective and a finished project outcome.
3. Learners can follow lessons and practice inside the course website.
4. The weekly projects are understandable, accessible, responsive, and deployable.
5. Students can choose and submit their own capstone.
6. The final website explains the course rather than only listing projects.
7. Future lessons and projects can be added by editing structured content instead of rewriting the application.
8. The repository has one clear source of truth for the curriculum and projects.

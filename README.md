# Live coding: User posts

- For senior developers using modern Angular, use the default app (`ng serve`).
- For senior developers using legacy code, use the [senior-dev-legacy project](./projects/senior-dev-legacy) (`ng serve senior-dev-legacy`).
- For junior developers, use the [junior-dev project](./projects/junior-dev) (`ng serve junior-dev`).

## Steps to follow (for senior developers using modern Angular)

- empty the app component template, but keep the router related tag

- add minimal global CSS

- create layout component
- insert layout component into app component

- create user-menu component
- insert user-menu component into app component

- create home component
- add routing for home component

- create not-found component
- add routing for not-found component (including "catch-all" route)

- create user-posts component
- add routing for user-posts component

- create user-post types
- create user-posts resolver
- add user-posts resolver to the user-posts route

- create user-post-item component
- insert user-post-item component into user-posts component

### Nice to have

- create ellipsis pipe
- use ellipsis pipe for the body in user-post-item component

## Concepts covered in this coding game

- App creation
- Component implementation (HTML, CSS and TS)
- Property binding and event listener in templates
- Content projection (ng-content)
- Component communication (input)
- Routing (Route, Resolver, withComponentInputBinding, Lazy loading)
- HttpClient (including some RxJS operators)
- Signal
- Pipe (nice to have)

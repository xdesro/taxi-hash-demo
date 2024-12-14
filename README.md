# Steps To Reproduce

> [!Note]  
> Thanks for taking a look at this, especially near the holidays. I know this is a scrappy little repo and PR and you probably do this work for free — just want to say I really appreciate it.

As a user:
1. **`npm install` to install dependencies.** I’m using Rollup and one plugin for JS — tried doing this with CDN but I get an error about `e` being undefined! 
2. **`npm run start` to run a dev server.** Runs Rollup real quick and `http-server` to serve the site.
3. **Visit the localhost URL given.**
4. **Use either the nav link or the post-\<h1> link to navigate to `/path`.** Transition plays as expected, as indicated by either the text changing color or the presence of "playing transition" logs in the browser console.
5. **Click any one of the "Table of contents" links**, which all have the same `href="#anchor"` attribute. The transition still plays, as indicated above. Clicking any other TOC link after this will work without the transition.
6. **Use the top link to go back to the homepage.**
7. **Use any link to return to `/path`.**
8. **Click a different anchor link in the Table of contents.** The transition will play again, which is not expected.

Let me know what you think. In my project to get this working I added a check to see if the `currentLocation` pathname and `window.location` pathname are the same *after* removing trailing slashes from the `window.location` pathname.
# React

By Facebook.

## What it does

- the server passes JSON to React. This server contains the entire state of the page.
- React has the HTML templates to render that JSON with
- the entire website only makes AJAX requests for data, only the very first request gets a full webpage back
- React keeps polling the server for the current JSON state (TODO can it handle only diffs as well?)
- given a new state, React re-renders the entire page. But it does so smartly, skipping items whose state hasn't changed.

Advantages:

- only the modified `body` content needs to be reloaded via AJAX.
- don't need to pass rendered templates to AJAX or re-write templates in for AJAX. Every template is AJAX. Server only sends JSON.
- don't duplicate API access and website endpoints: there is *only* the API, JavaScript talks to it and AJAX renders requests.

## Vs Angular

TODO

## Demos

Lists:

- <https://github.com/facebook/react/wiki/Examples>

Reviews:

- <https://github.com/reactjs/react-tutorial> official, servers in multiple languages. Too basic, not very interesting. Restrictive copyright by Facebook.
- <https://github.com/ruanyf/react-demos>

## Users

Lists:

- <https://github.com/facebook/react/wiki/Sites-Using-React>

Notable for me:

- Facebook: <https://www.quora.com/How-is-Facebooks-React-JavaScript-library> Re-writing parts of the website with it progressively.
- Reddit mobile: <https://www.reddit.com/r/reactjs/comments/456aw0/how_is_reddit_using_reactjs/>

## JSX

JavaScript extension that allows you to embed XML into JavaScript directly, e.g. to write things like:

    var myDivElement = <div className="foo" />;

Compiles to JavaScript.

Insanity, why not just pass strings literals to some library?

The React tutorial uses it: <https://github.com/reactjs/react-tutorial/blob/4fa16fde3795ff7047322f28320cffc3b2b385ec/public/scripts/example.js#L77>

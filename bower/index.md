---
title: Bower
---

Live demo: run `make` then open <test.html>.

Bower is a package manager for web front-end.

Bower was created by Twitter and open sourced.

Bower is similar to Ruby Bundler and Node NPM, but it is specialized for web front end files.

Bower downloads the desired version of packages into the current project tree, where they can be linked from `script` or `style` tags.

Sample directory structure:

    bower_components
        jquery
            jquery.js
            jquery.min.js
            jquery.min.map
        modernizr
            modernizr.js

TODO: why not use Git submodules instead?

In most cases, it is possible to package JavaScript both with NPM and Bower. The main difference is that Bower is focused on front-end, and can also handle HTML and CSS, while NPM deals only with backend JavaScript.

Install:

    npm install -g bower

Search for package:

    bower search <package>

Install package:

    bower install <package>

Install packages in `bower.json`:

    bower install

Configuration file: `bower.json`. Used to be called `components.json`.

## Create a package

Bower integrates tightly with Git.

You must Git version control you package.

Only Git tracked files can be published: <http://stackoverflow.com/questions/19029726/dealing-with-git-generated-files-and-bower> This means that you have to Git track output files like compiled CoffeeScript ...

Some programmers favor tracking even `bower_components` in case GitHub is down or dependencies become unavailable. <http://stackoverflow.com/questions/22327758/should-bower-components-be-gitignored>

---
title: Firefox
permalink: web/firefox/
---

## Trouble shooting

Update to the latest version.

Starts with disabled extensions in case they are causing problems:

    firefox --safe-mode

Do a "Firefox Refresh":

## Keyboard shortcuts

- `'`: search for link text. Enter click will go to the destination.
- `Ctrl + L`: location bar
- `Ctrl + K`: search bar
- `F6`: web page

Development:

- `Ctrl + Shift + C`: open inspector on element selection mode. Hover over elements to analyse them
- `Ctrl + Shift + I`: toggle inspector

## Tools without shortcut

-   <http://stackoverflow.com/questions/13158083/take-a-full-page-screenshot-with-firefox>

## Preferences

Restore old linear search engines interface: <https://support.mozilla.org/en-US/questions/1033968> on `about:config` set `browser.search.showOneOffButtons` to `False`

Useful `about:config` options:

- `toolkit.scrollbox.verticalScrollDistance`: change how much the down key scrolls up and down. Default `3` was too little for me: `10` was good.

Disable `Ctrl + Q` from closing the app: <http://askubuntu.com/questions/10880/disable-ctrlq-in-firefox-without-keyconfig-extension> Only seems possible with extensions. There is an extension just to do it: <https://addons.mozilla.org/en-US/firefox/addon/disable-ctrl-q-shortcut/>

Enable spell check in `input text` fields (by default only on `textarea`) <http://superuser.com/questions/599284/is-there-a-way-to-have-firefoxs-spell-check-check-the-spelling-in-all-text-inpu/599303#599303>

### Developer tools

#### Tamper data

<https://addons.mozilla.org/en-US/firefox/addon/tamper-data/>

Allows you to view and modify a request after triggering it on the website, but before it gets sent: a popup opens, the and request waits for you to modify it.

Great to try and hack websites. Better than curl when there is authentication because the authenticity tokens and cookies are all there.

#### Auto Reload

<https://addons.mozilla.org/en-US/firefox/addon/auto-reload/>

Automatically reload page if local file was modified.

Great for previewing HTML output from lightweight markups like Markdown.

## Plugins

### Mouseless browsing

<https://addons.mozilla.org/en-us/firefox/addon/mouseless-browsing/>

Permanently show little unique numeric ID boxes for each link.

You can configure:

- which characters can be used for the IDs.
- only show link numbers on a given key press. Tip: use the same key that you use to open the links, e.g. Ctrl or Alt.

## Multiple profiles

- <https://developer.mozilla.org/en-US/docs/Mozilla/Multiple_Firefox_Profiles>
- <https://support.mozilla.org/en-US/questions/981405?fpa=1>

Argg, so easy in Chrome: <http://www.howtogeek.com/100999/how-to-use-multiple-profiles-in-google-chrome-like-a-ninja/>

## Open tab next to old one

- https://support.mozilla.org/en-US/questions/1053542?fpa=1 Tab Mix Plus?

# GreaseMonkey-Redirect

This is a collection of user created GreaseMonkey scripts that will convert privacy disrespecting websites to FLOSS frontends.

There is also included some of my own GreaseMonkey scripts here as well. See the **Personal Scripts** section.

# Why?

There are many awful websites on the internet. That's why there have been many projects that allow us to still make use of them but in a more privacy respecting way. Also it gives you the ability to customize to your heart's content.

# Frontends Supported

<!-- *WARNING: Some of these projects are hosted on Github, which uses proprietary JavaScript. Fortunately, it is not necessary to view repositories, so you can disable it.* -->

- [Nitter](https://github.com/zedeus/nitter), a libre frontend to Twitter.
- [Invidious](https://github.com/iv-org/invidious), a libre frontend to YouTube.
- [Teddit](https://codeberg.org/teddit/teddit), a libre frontend to Reddit.
- [Librarian](https://codeberg.org/librarian/librarian), a libre frontend to Odysee.
- [Bibliogram](https://sr.ht/~cadence/bibliogram/), a libre frontend to Instagram. **(Bibliogram is abandoned)**
- [BiblioReads](https://codeberg.org/nesaku/BiblioReads), a libre frontend to Goodreads.
- [SimplyTranslate](https://codeberg.org/ManeraKai/simplytranslate), a libre frontend to Google Translate and other translation SaaSS.
- [LingvaTranslate](https://github.com/thedaviddelta/lingva-translate), a libre frontend to Google Translate.
- [ProxiTok](https://github.com/pablouser1/ProxiTok), a libre frontend to TikTok.
- [Rimgo](https://codeberg.org/video-prize-ranch/rimgo), a libre frontend to Imgur.
- [Scribe](https://git.sr.ht/~edwardloveall/scribe), a libre frontend to Medium websites.
- [Quetre](https://github.com/zyachel/quetre), a libre frontend to Quora.
- [Libremdb](https://github.com/zyachel/libremdb), a libre frontend to IMDB.

# Scripts here?
These aim to acheive what something like Privacy-Redirect/Libredirect does. All these do is change your URL's domain to a different one.

You could be using Privacy-Redirect/Libredirect. But this is a fun DIY (do-it-yourself) project to make fun of bad privacy disrespecting websites.

**Note:** This script will work the best in terms of privacy if using a plugin such as uBlock Origin to block all JavaScript on privacy disrespecting websites.

# WARNING!
These scripts will may break sometimes because instances of these websites will break from user load or other issues causing servers to crash. This is why these websites have multiple instances. If an instance breaks you can easily replace it with a different instance.

## NOT TO FEAR! Just modify!
These scripts don't require coding knowledge to understand what they do. However knowing a bit of JavaScript or maybe python can help.
This is a script example to show you how many of these scripts work. Some scripts might be more complicated than this example.

1. Description of what the script does
```javascript
/*
DESCRIPTION:
This is a file that after installing a greasemonkey extension can
be used to convert youtube.com to any invidious instance.
NOTE: I might change this really often because instances may fail.
```

2. This is the license
```javascript
Copyright (C) 2021 Troler Jeans and other contributors

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or (at
your option) any later version.

This program is distributed in the hope that it will be useful, but
WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.
*/
```

3. The name of the script
```javascript
// ==UserScript==
// @name           YouTube to Invidous
```

4. Then there is a @namespace write that YOU made this script. If you make a PR with some interesting modification to the script I will try to keep your name and other contributers on it.
```javascript
// @namespace      Troler's Youtubvious
```
5. The websites the code will apply to, including `http` and `www` variants. Change these in your code to the website your trying to redirect from (leave it if you are only changing the instance).
```javascript
// @match          http://youtube.com/*
// @match          https://youtube.com/*
// @match          http://www.youtube.com/*
// @match          https://www.youtube.com/*
// @run-at         document-start
```

6. Then there is a big block of code this where the magic happens. Just change the link, e.g. <youtube.com>, to something you want to replace it with, e.g. <vid.puffyan.us>.
```javascript
// ==/UserScript==
url = location.href
url = url.replace(/\bwww\.\b/, "")
url = url.replace("youtube.com","vid.puffyan.us")
location.href = url
```

# Scripts that don't work anymore
## Instagram
`instagram-bibliogram.user.js` no longer works. Instagram is taking down frontends such as bibliogram for a variety of reasons. Take a look at this [article](https://cadence.moe/blog/2022-09-01-discontinuing-bibliogram) by the bibliogram developer. Other frontends such as [dumpor](https://dumpor.com) and [imginn](https://imginn.org) work more frequently but often break. They also have problems with playing videos. So for the time being use `instagram-bibliogram.user.js` with caution.

# Similar projects
- https://codeberg.org/izzy/userscripts/src/branch/master/yt2invidio.user.js <br>
Very well coded **MEGA** script for redirecting different websites to libre frontends. Redirections are done with a keyboard shortcut
	- https://codeberg.org/ltGuillaume/yt2invidio/src/branch/master/yt2invidio.user.js <br>
	Forked version where redirections are done automaticly.

## **Not** GreaseMonkey, Great Redirection Projects
- https://github.com/libredirect/libredirect <br>
A fork of [Privacy Redirect](https://github.com/SimonBrazell/privacy-redirect), which supports a lot more frontends and is very active.
- https://github.com/einaregilsson/Redirector

# Personal Scripts
These are seperate from the redirection scripts.
- `Deviant_Art_Age_Bypass.user.js`
    - Let's you bypass Deviant Art's age restrictions and see some features without account
- `github-pages.user.js`
    - Gets the link for a github pages project and redirects you there on `Alt+g` I want to make this an extention one day. Github should have this feature. Codeberg implemented a simple link.
- `YouTube_Distraction_Blocker.user.js`
    - Blocks some youtube distractions/recomendations. Better extentions exist out there
- `Percentage_Complete_myanimelist.user.js`
    - Finds your Percentage complete of an anime on MyAnimeList

# Contribute
I hope those that contribute and help maintain these scripts have great times with them. As the web changes, so should we.

# Contact me
- Email: zortazert@gmail.com
- Matrix: @trueauracoral:tchncs.de

# Legal notice
This repository is not affiliated with any of the mentioned companies. Trademarks belong to their respective owners.

Twitter is a trademark of Twitter Inc. YouTube and Google Translate are trademarks of Google LLC. Reddit is a trademark of Reddit Inc. Odysee is a trademark of Odysee, Inc. Instagram is a trademark of Meta Platforms. Goodreads is a trademark of Amazon Technologies, Inc. TikTok is a trademark of Bytedance Ltd. Imgur is a trademark of IMGUR, INC. Medium is a trademark of A Medium Corporation. Quora is a trademark of Quora Inc.

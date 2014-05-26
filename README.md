Web Engeneering Notes
====

Mostly "notes to self"

General
---

### Repo Setup

- lowercase all filenames & folders; will cause issues if you use any Capitals
- should provide tested minified files
- [repo CONTRIBUTING tips](https://github.com/necolas/issue-guidelines/blob/master/CONTRIBUTING.md#using-the-issue-tracker)
- [Design and development standards and best practices](https://github.com/Snugug/north#table-of-contents)
- [package.json](http://browsenpm.org/package.json) interactive guide 
 
git
---

- [aaronshaf's git notes](https://github.com/aaronshaf/web-development/blob/master/git.md)

Engeneering
---

[know-your-http](https://github.com/bigcompany/know-your-http) posters

### Investagate


+ [JavaScript: The Right Way](http://www.jstherightway.org/)  JS linkfarm
+ [Secure Software Requirements](https://github.com/deekayen/secure_software_requirements/blob/master/questionnaire.md) ~ David Norman
+ [List of minimalist frameworks](https://github.com/neiesc/ListOfMinimalistFrameworks#list-of-minimalist-frameworks) ~ Brian Ketelsen

### Package Manageers

[UMD (Universal Module Definition)](https://github.com/umdjs/umd#umd-universal-module-definition)

#### Frontend

+ [Wil's comparison](https://github.com/wilmoore/frontend-packagers)

### Reduce 'Time To Glass'

+ [Pageload Mimdmap checklist](http://www.mindmeister.com/333549208/page-load-time-components-and-performance-tips)
+ [making Trello boards load fast](https://news.ycombinator.com/item?id=7096466): jQuery, reducing DOM writing & CSS


#### HTTP

- cookies{1}
  - below 400byts
  - cookie-free domain for static assets
- sharding/CDN
  - HTTP2.0 may reduce benifit{1}
- [Browserify](https://github.com/substack/browserify-handbook)
- [HTML DNS prefetching](https://developer.mozilla.org/en-US/docs/Controlling_DNS_prefetching)

#### Image

- sprites > dataURI{1} (as of Dendroid 4.2, iOS6)
- small enough to cache

#### CSS

- minor improvement in avoiding to use complex child & decendant rules{1}
- `* { -webkit-backface-visibility: visible }` kills rendering


JavaScript
---

### ES6

* [Addy's tool list](https://github.com/addyosmani/es6-tools)

### Browser Storage

* [localStorage key namespacing convention](https://github.com/joelarson4/LSNS)

UI
----

### Clearinghouse

* [dypsilon/frontend-dev-bookmarks](https://github.com/dypsilon/frontend-dev-bookmarks) linkfarm
+ [Effeckt.css](http://h5bp.github.io/Effeckt.css/)
+ [favicon-cheat-sheet](https://github.com/audreyr/favicon-cheat-sheet) by audreyr
+ [ARIA usablity notes](https://github.com/aaronshaf/web-development/blob/master/aria.md)
+ [Web Components Resources](https://gist.github.com/ebidel/6314025)

### How2

#### Fullscreen

+ [MDN Using fullscreen mode](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Using_full_screen_mode)
+ [CSS :fullscreen](https://developer.mozilla.org/en-US/docs/Web/CSS/:fullscreen) watch funky prefixing

### Touch (mobile)

#### Feedback

##### Button

`:active` might not work in mobile:
+ `document.addEventListener("touchstart", function(){}, true);` + `-webkit-tap-highlight-color: rgba(0,0,0,0);`{2}
+ `.btn {
  display: block;
  width: px;
  height: px;
  background: url(../i/btn.png) no-repeat;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-tap-highlight-color: transparent; /* For some Androids */
}.btn:active {-webkit-transform: scale3d(0.9, 0.9, 1)}` + `<a class="btn" href="javascript:void(0)" ontouchstart="return true"></a>"`{3}
+ `::selection 	 	{background: rgba(165,55,22,1.0);color:#fdfdfd;}
::-moz-selection 	{background: rgba(165,55,22,1.0);color:#fdfdfd;}
img::selection 	{background: transparent;}
img::-moz-selection {background: transparent;}
body 	{-webkit-tap-highlight-color: rgba(165,55,22,1.0);}`@andrewjaustin

+ elminate 300ms delay [GH:ftlabs/fastclick](https://github.com/ftlabs/fastclick)

##### Overflow

+ iOS5+ `-webkit-overflow-scrolling: touch;`, automatic in Android4+{2}


Reference
----

- [free programming books](https://github.com/vhf/free-programming-books/blob/master/free-programming-books.md)

### Coding Style

#### My thoughts:

+ Compleated files should be minified versions, with no `.min.` extention
  * sources available as `*.src.*` or in `/src`
  * exceptions: test files, build scripts
 
##### CSS  

+ order of *-[sides] in CSS order, eg: `margin-top: 0;margin-right: 1px;margin-bottom: 2px;margin-left: 3px;`

#### Others' thoughts:

- [TMW-frontend-guidelines
](https://github.com/tmwagency/TMW-frontend-guidelines/blob/master/Front-End%20development%20guidelines.mdown#section-6)
- [Necolas ~ idiomatic CSS](https://github.com/necolas/idiomatic-css#table-of-contents)  coding style

- [JavaScript/Node Sytle Guide](https://github.com/felixge/node-style-guide)
- [idiomatic.js](https://github.com/rwaldron/idiomatic.js/)
- [node-jscs](https://github.com/mdevils/node-jscs)  Enforce JavaScript style, use with jshint
- [Unquoted property names / object keys in JavaScript](http://mathiasbynens.be/notes/javascript-properties)
- [JavaScript/ECMAScript reserved words](http://mathiasbynens.be/notes/reserved-keywords)
+ Conventions:
  + $ DOM manipulation libraries
  + _ utility libraries @odytrice

### CSS

- [Webkit CSS properties](http://css-infos.net/properties/webkit) all -webkit-* with version appeared
- [Normalize.css](http://necolas.github.io/normalize.css/) reset


### Colors

[Alt named colors](https://github.com/mrmrs/colors/blob/master/hex.txt)

#### [BrandColors](http://brandcolors.net/)

- #   hex(        RGB)            CYMK URL
- #007ee5(           )  79, 48,  0,  0 [Dropbox](https://www.dropbox.com/branding)
- #3b5998( 59, 89,152)                 [Facebook](https://www.facebookbrand.com/)
- #dd4b39(221, 75, 57)                 [Google+](https://developers.google.com/+/branding-guidelines)
- #55acee( 85,172,238)                 [Twitter](https://about.twitter.com/press/brand-assets) most get this wrong

### Font

+ Joe Larson's [Useful Unicode resources](http://joewlarson.com/blog/2014/01/01/useful-unicode-resources/)


### Numbers

##### Ratio

+ [Golden Ratio](http://mathworld.wolfram.com/GoldenRatio.html)=1/2(1+sqrt(5))=φ~=1.61803398874989484820458683436563811772030917980576286213
+ Reciprocal Golden Ratio=(1/2(1+sqrt(5))-1=Φ~=0.61803398874989484820458683436563811772030917980576286213

#### Hex

##### %/ratio

(Used in RGBA alpha values)

- 0.60 = 99
- 0.70 =
- 0.75 = bf
- 0.80 = cc
- 0.90 = e5


Tools
----

### CLI

* gzipped [byte count](http://stackoverflow.com/questions/9468511/how-can-i-estimate-the-size-of-my-gzipped-script): `gzip -c filename.min.js | wc -c`


### Test

#### Design

- http://lab.maltewassermann.com/viewport-resizer/
- http://www.whatsmybrowser.org/


Refrences
----

May be long proof, or first seen

{1} [CascadiaJS 2013 - Peter McLachlan](http://www.youtube.com/watch?feature=player_detailpage&v=GtebW-K2D-8#t=755) of Mobify
{2} [mobify.com/blog](http://www.mobify.com/blog/beginners-guide-to-perceived-performance/)
{3} [phonegap-tips.com](http://phonegap-tips.com/articles/essential-phonegap-css-webkit-tap-highlight-color.html)


ToDo
----
[H5BP lazyweb requests](https://github.com/h5bp/lazyweb-requests) - project ideas


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/tomByrer/webengeneeringnotes/trend.png)](https://bitdeli.com/free "Bitdeli Badge")


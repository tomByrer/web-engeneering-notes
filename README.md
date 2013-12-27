Web Engeneering Notes
====

Mostly "notes to self"

- [repo CONTRIBUTING tips](https://github.com/necolas/issue-guidelines/blob/master/CONTRIBUTING.md#using-the-issue-tracker)

Reduce 'Time To Glass'
----

### HTTP

- cookies{1}
  - below 400byts
  - cookie-free domain for static assets
- sharding/CDN
  - HTTP2.0 may reduce benifit{1}

### Image

- sprites > dataURI{1} (as of Dendroid 4.2, iOS6)
- small enough to cache
 
### CSS

- minor improvement in avoiding to use complex child & decendant rules{1}
- `* { -webkit-backface-visibility: visible }` kills rendering


UI
----

### Clearinghouse

+ [Effeckt.css](http://h5bp.github.io/Effeckt.css/dist/)


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

### Coding Style

- [node-jscs](https://github.com/mdevils/node-jscs)  Enforce JavaScript style, use with jshint
- [Necolas ~ idiomatic CSS](https://github.com/necolas/idiomatic-css#table-of-contents)  coding style

### CSS

- [Webkit CSS properties](http://css-infos.net/properties/webkit) all -webkit-* with version appeared
- [Normalize.css](http://necolas.github.io/normalize.css/) reset


### Colors

- #dd4b39 (221, 75, 57) [Google+](https://developers.google.com/+/branding-guidelines)
- #3b5998 ( 59, 89,152) [Facebook](https://www.facebookbrand.com/)
- #55acee ( 85,172,238) [Twitter](https://about.twitter.com/press/brand-assets) most get this wrong

### Numbers

### Hex

#### %/ratio

(Used in RGBA alpha values)

- 0.6 = 99
- 0.7 =
- 0.75  = bf
- 0.9 = e5


Refrences
----

May be long proof, or first seen

{1} [CascadiaJS 2013 - Peter McLachlan](http://www.youtube.com/watch?feature=player_detailpage&v=GtebW-K2D-8#t=755) of Mobify
{2} [mobify.com/blog](http://www.mobify.com/blog/beginners-guide-to-perceived-performance/)
{3} [phonegap-tips.com](http://phonegap-tips.com/articles/essential-phonegap-css-webkit-tap-highlight-color.html)


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/tomByrer/webengeneeringnotes/trend.png)](https://bitdeli.com/free "Bitdeli Badge")


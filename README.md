Web Engeneering Notes
====

Mostly "notes to self"

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

Colors
----

- #dd4b39 (221, 75, 57) [Google+](https://developers.google.com/+/branding-guidelines)
- #3b5998 ( 59, 89,152) [Facebook](https://www.facebookbrand.com/)
- #55acee ( 85,172,238) [Twitter](https://about.twitter.com/press/brand-assets)

Numbers
----

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

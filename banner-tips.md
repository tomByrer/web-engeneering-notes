## Mini Banner

### Reasoning

* Assume that the filename will be dropped:
	* web files are often collated (Browserify, Polymer, X-Tag)
	* relayed via CDN
* minimal info kept with each file can help:
	* secure copyright, licence
	* find project/author for contact, support, upgrades

### Contains
* start with `/*!`, have `@license` inside somewhere, & end with `*/`
	* many minifer tools will keep this text if these flags are present; universal commenting
* project name
* project owner
* short url
* version
* copyright year
* licence abreviation
* If you output more than one file in a repo, then you should add in a [filename in your banner](https://github.com/ractivejs/ractive/commit/7f8ee58b1174352a1f9e622abd023fc851bad750).
	* Reduces confusion

### Tips

* small as possible; should respect the spirt of minification
* don't educate; that what websites are for
* mini banner is ideal for all relased minified files, but could be used in all source files

#### Not needed
* `v` for Version; standardize to [SemVer](http://semver.org/), programmers can figure it out
* owner & project name more than once; Google can fill in the blanks if something changes
* anything else that Google can find for you

### Optimal

#### IF filename.js = projectname(js|'')
(This is fine for files with `.src` or `.min`.)

`/*! github.com/PROJECT_OWNER/PROJECT_NAME SemVer (c)YYYY @license licence */`

Combines project name, project owner, & short url into one blob.<br>
Dummy example: `/*! github.com/owner/project 0.1.0 (c)2014 @license MIT */`

#### ELSE filename != projectname

Add the filename to the start of the comment.  Often you'll see specialized builds distributed with the main file:<br>
`/*! project-legacy.js github.com/owner/project 0.1.0 (c)2014 @license MIT */`<br>
`/*! script.node.js github.com/owner/scriptjs 0.7.0 (c)2014 @license GPL */`

#### Alternate examples

* `/*! thing 0.1.0 (c)2014 owner-website.com/projects/thing  @license GPL */`</br>
* If said file is not the main file: `/*! github.com/owner/project additional.css 0.1.0 (c)2014 @license MIT */`

### Extra tips
* use `filename.extention` for the released minified files, & `filename.src.extention` for your pre-minified source files

## Scripts

### Grunt/Lo-Dash
General banners template ([inspiration](https://github.com/helpers/banners/blob/master/index.js)):
```JavaScript
uglify: {
  options: {
    banner: '/*! <%= pkg.name %> v<%= pkg.version %> <%= pkg.homepage %>' (c)' + opts.year + ' ' + opts.author + ', contributors @licence ' + opts.license + ' */\n'
...
```



### Find keeper comments

#### JavaScript, CSS [RegEx](http://regexr.com/38nul)
```javascript
/\/(\/|(\*\*?))!|(@[Ll]icen[sc]e|@[Pp]reserve)/g
```

#### HTML `<!--!`?

## ToDo
* check HTML minifcation
* alt good examples
* bad examples
* merge in [Jon Schlinkert's](https://github.com/jonschlinkert) https://github.com/helpers/banners



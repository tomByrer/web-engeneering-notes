## Mini Banner

### Reasoning

* Assume that the filename can be dropped:
	* web files are often collated (Browserify, Polymer, X-Tag, [CDN](https://github.com/jsdelivr/jsdelivr#url-structure)
* minimal info kept with each file can help:
	* secure copyright, licence
		* clear file for use when handed off to new programmer or buisness owner
	* find project/author for support, upgrades

### Contains
* start with `/*!`, have `@license` inside somewhere, & end with `*/`
	* many minifer tools will keep this text if these flags are present; universal commenting
* project name
* project owner
* short URL as needed, leave out if want to shorten (can cover project name & owner in URL)
* version
* copyright year
* licence abreviation
* If you output more than one file in a repo, then you should add in a [filename in your banner](https://github.com/ractivejs/ractive/commit/7f8ee58b1174352a1f9e622abd023fc851bad750).
	* Reduces confusion

#### Should NOT contain
* items easlily found on the web; developers know how to search ;)
	* project description
	* full licencing text
* `v` for Version; standardize to [SemVer](http://semver.org/), programmers can figure it out
* owner & project name more than once

### Tips

* small as possible; should respect the spirt of minification
* don't educate; that what websites are for
* mini banner is ideal for all relased minified files, but could be used in all source files

### Optimal Example

`/*! project.js 1.2.3 (c)2014 Author Name  @license MIT*/`

#### Alternate examples

* `/*! project-extra-file.css 1.1.0  (c)2014 owner-website.com/projects/thing @license GPL */`</br>
* If copyright is held by different name than repo owner: `/*! script.jquery.js code.google.com/p/script.jquery/ 2.0.0 (c)2014 John Author  @license GPL */`

### Extra tips
* use `filename.extention` for the released minified files, & `filename.src.extention` for your pre-minified source files
* incluse project URL if project is hard to find via web/GitHub search

## Scripts

### [Grunt](https://github.com/gruntjs/grunt-contrib-uglify#readme)
Terse banners template:
```JavaScript
uglify: {
  options: {
    banner: '/*! <%= pkg.name %> <%= pkg.version %> (c)2015 Tom Byrer  @licence <%= pkg.licence %>*/\n'
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
* bad examples
* merge in [Jon Schlinkert's](https://github.com/jonschlinkert) https://github.com/helpers/banners



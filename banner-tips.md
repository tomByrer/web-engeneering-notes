## Mini Banner
Best for all relased minified files, but could be used in all source files.

* minimal important information to be found when filename or rest of project is missing 
	* filesnames may be dropped when collated or relayed via CDN.
* start with `/*!`, have `@license` inside somewhere, & end with `*/`; most minifer tools will keep this text & is universal commenting.
* small as possible; should respect the spirt of minification
* don't educate; that what websites are for

##### Contains
* project name
* project owner
* short url
* version
* copyright year
* licence abreviation
 
##### Not needed
* `v` for Version; standardize to [SemVer](http://semver.org/), programmers can figure it out
* owner & project name more than once; Google can fill in the blanks if something changes
* anything else that Google can find for you

### Optimal

#### IF filename.js = projectname(js|'')
(This is fine for files with `.src` or `.min`.)

`/*! github.com/PROJECT_OWNER/PROJECT_NAME SemVer (c)YYYY @license licence */`

Combines project name, project owner, & short url into one blob.
Dummy example: `/*! github.com/owner/project 0.1.0 (c)2014 @license MIT */`

#### ELSE filename != projectname

Add the filename to the start of the comment.  Often you'll see specialized builds distributed with the main file:
`/*! project-legacy.js github.com/owner/project 0.1.0 (c)2014 @license MIT */`
`/*! script.node.js github.com/owner/scriptjs 0.7.0 (c)2014 @license GPL */`

#### Alternate examples

* `/*! thing 0.1.0 (c)2014 owner-website.com/projects/thing  @license GPL */`
* If said file is not the main file: `/*! github.com/owner/project additional.css 0.1.0 (c)2014 @license MIT */`

### Extra tips
* use `filename.extention` for the released minified files, & `filename.src.extention` for your pre-minified source files



## ToDo
* check HTML minifcation
* alt good examples
* bad examples

### Grunt code
```JavaScript
'/*! <%= pkg.name %> v<%= pkg.version %>',
    '<%= pkg.homepage %>',
    '(c) ' + opts.year + ' ' + opts.author + ', contributors',
    'Licensed under the ' + opts.license + '. */\n'
```

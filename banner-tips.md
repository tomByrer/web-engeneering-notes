## Mini Banner
Best for all relased minified files, but could be used in all source files.

* minimal important information to be found when filename or rest of project is missing 
	* filesnames may be dropped when collated or relayed via CDN.
* start with `/*!` & end with `*/`; most minifer tools will keep this text & is universal commenting.
* small as possible; should respect the spirt of minification
* don't educate; that what websites are for

##### Contains
* project name
* project owner
* short url
* version
* copyright year
* licence abreviation

### Optimal

` github.com/PROJECT_OWNER/PROJECT_NAME SemVer (c)YYYY; LICENCE licence`

Combines project name, project owner, & short url into one blob.
Dummy example: `github.com/person/project 0.0.1 (c)2014; MIT licence`





## ToDO
* check HTML minifcation
* alt good examples
* bad examples


'/*! <%= pkg.name %> v<%= pkg.version %>',
    '<%= pkg.homepage %>',
    '(c) ' + opts.year + ' ' + opts.author + ', contributors',
    'Licensed under the ' + opts.license + '. */\n'

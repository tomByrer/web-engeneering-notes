## Mini Banner

* list version & terse URL; if inside the file your code is able to be found when filename is lost
	* filesnames may be dropped when collated or relayed via CDN.
* start with `/*!` & end with `*/; most minifer tools will keep this text & is universal commenting.
* small as possible; Should respect the spirt of minification
* don't educate; that what websites are for

##### Contains
* project name
* project owner
* short url
* version
* copyright year
* licence abreviation

### Optimal

` github.com/PROJECT_OWNER/PROJECT_NAME SemVer (c)YYYY LICENCE licence`
Combines project name, project owner, & short url into one blob

    

## ToDO
* check HTML minifcation
* alt good examples
* bad examples


'/*! <%= pkg.name %> v<%= pkg.version %>',
    '<%= pkg.homepage %>',
    '(c) ' + opts.year + ' ' + opts.author + ', contributors',
    'Licensed under the ' + opts.license + '. */\n'

/**
 * mage2theme grunt scaffold
 * heavily based on the grunt-wp-them
 * Copyright (c) 2018 Aaron Ware, Maxwell Morgan, Linchpin
 * Updated by aware on 4/18/18.
 *
 * grunt-wp-theme
 * https://github.com/10up/grunt-wp-theme
 *
 * Copyright (c) 2013 Eric Mann, 10up
 * Licensed under the MIT License
 *
 */

'use strict';

// Basic template description
exports.description = 'Create a base Magento 2 theme.';

// Template-specific notes to be displayed before question prompts.
exports.notes = '_Project Classes and Namespaces_ should not contain "Magento" and ' +
    'should be a unique ID not already in use in Magento modules or themes. _Theme ' +
    'name_ should be a human-readable title, and doesn\'t need to contain ' +
    'the word "Magento", although it may. For example, a theme named "Awesome ' +
    'Theme" might have the name space "awesome-theme".';

exports.after = 'You should now _cd to_your_base_path' +
    '_ and install project dependencies with _npm ' +
    'install_.  After that, you may execute project tasks with _gulp_. For ' +
    'more information about installing and configuring Gulp, please see ' +
    'the Getting Started guide:' +
    '\n\n' +
    'https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md';

// Any existing file or directory matching this wildcard will cause a warning.
// exports.warnOn = '*';

exports.warnOn = ['*.php', '*.js'];

// The actual init template
exports.template = function( grunt, init, done ) {

    var base_path = '';

    init.process( {}, [
        // Prompt for these values.
        {
            name   : 'title',
            message: 'Magento Theme Name / Client Name',
            default: 'My New Theme'
        },
        {
            name   : 'parent_theme',
            message: 'Magento Parent Theme Location (Vendor/theme_name)',
            default: 'Magento/blank'
        },
        {
            name   : 'theme_vendor',
            message: 'Theme vendor name',
            default: 'Linchpin'
        },
        {
            name   : 'theme_identifier',
            message: 'Theme folder, CSS, and JS identifier',
            default: 'mynewtheme'
        },
        init.prompt( 'base_version', '1.0.0' ),
        init.prompt( 'description', 'A brief description about the theme or client.' ),
        init.prompt( 'homepage', 'http://linchpin.agency' ),
        init.prompt( 'author_name' ),
        init.prompt( 'author_email' ),
        init.prompt( 'author_url', 'http://linchpin.agency' ),
    ], function( err, props ) {
        props.keywords = [];
        props.version = '1.0.0';
        props.devDependencies = {
            "browser-sync": "^2.23.6",
            "gulp": "^3.9.1",
            "gulp-autoprefixer": "^3.1.0",
            "gulp-concat": "^2.6.0",
            "gulp-minify": "0.0.15",
            "gulp-sass": "^2.3.2",
            "gulp-watch": "^4.3.5",
            "gulp-wrap-js": "^0.4.1"
        };

        props.name               = props.title.replace( /\s+/g, '-' ).toLowerCase();
        props.parent_theme_lower = props.parent_theme.toLowerCase();

        // Files to copy and process
        var files = init.filesToCopy( props );

        // Update the path the files correctly
        for ( var file in files ) {
            if ( file.indexOf( 'theme/' ) > -1 ) {
                var path = files[ file ],
                    newFile = file.replace( 'theme/', base_path );
                files[ newFile ] = path;
                delete files[ file ];
            }
        }

        // Actually copy and process files
        init.copyAndProcess( files, props );

        // Generate package.json file
        init.writePackageJSON( base_path + '/web/package.json', props );

        // Done!
        done();
    });
};
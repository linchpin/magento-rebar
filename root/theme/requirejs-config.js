var config = {
    paths : {
        'slick' : 'js/slick.min'
    },

    deps: [
        'js/{%= theme_identifier %}',
        'js/slick.min'
    ],

    map : {
        '*' : {
            'slick' : 'js/slick.min'
        }
    },

    shim: {
        'slick': {
            deps: ['jquery']
        }
    }
};
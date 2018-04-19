/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-touchevents-setclasses !*/
!function(e,n,t){function o(e,n){return typeof e===n}function s(){var e,n,t,s,a,i,r;for(var l in c)if(c.hasOwnProperty(l)){if(e=[],n=c[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(s=o(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)i=e[a],r=i.split("."),1===r.length?Modernizr[r[0]]=s:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=s),f.push((s?"":"no-")+r.join("-"))}}function a(e){var n=u.className,t=Modernizr._config.classPrefix||"";if(p&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),p?u.className.baseVal=n:u.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):p?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function r(){var e=n.body;return e||(e=i(p?"svg":"body"),e.fake=!0),e}function l(e,t,o,s){var a,l,f,c,d="modernizr",p=i("div"),h=r();if(parseInt(o,10))for(;o--;)f=i("div"),f.id=s?s[o]:d+(o+1),p.appendChild(f);return a=i("style"),a.type="text/css",a.id="s"+d,(h.fake?h:p).appendChild(a),h.appendChild(p),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(n.createTextNode(e)),p.id=d,h.fake&&(h.style.background="",h.style.overflow="hidden",c=u.style.overflow,u.style.overflow="hidden",u.appendChild(h)),l=t(p,e),h.fake?(h.parentNode.removeChild(h),u.style.overflow=c,u.offsetHeight):p.parentNode.removeChild(p),!!l}var f=[],c=[],d={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){c.push({name:e,fn:n,options:t})},addAsyncTest:function(e){c.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=d,Modernizr=new Modernizr;var u=n.documentElement,p="svg"===u.nodeName.toLowerCase(),h=d._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];d._prefixes=h;var m=d.testStyles=l;Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var o=["@media (",h.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");m(o,function(e){t=9===e.offsetTop})}return t}),s(),a(f),delete d.addTest,delete d.addAsyncTest;for(var v=0;v<Modernizr._q.length;v++)Modernizr._q[v]();e.Modernizr=Modernizr}(window,document);

var {%= theme_identifier %} = {%= theme_identifier %} || {};

{%= theme_identifier %}.theme = function ( $ ) {
    // Private Variables
    var $window, $doc, $body, $clickable, $equalizer, self;

    return {
        /*
         * function init
         *
         * Kick off all of the business.
         */

        init: function() {
            self = {%= theme_identifier %}.theme;
            $window    = $(window);
            $doc       = $(document);
            $body      = $('body');
            $clickable = $('.clickable');
            $equalizer = $('.lp-equalizer');

            $clickable.on( 'click', self.clickable );

            if ( $equalizer.length ) {
                $equalizer.each( self.lp_equalize );

                $window.on('resize', function () {
                    $equalizer.each( self.lp_equalize );
                } );
            }
        },


        /**
         * function clickable
         *
         * Open link in new tab or new window.
         */
        clickable : function ( event ) {
            event.preventDefault();

            var $this = $(this),
                $link = $this.find('a:first'),
                uri   = $link.attr('href'),
                new_window = $this.hasClass('external-link') || $link.hasClass('external-link') || event.metaKey || event.ctrlKey;

            if ( new_window ) {
                window.open( uri );
            } else {
                window.location = uri;
            }
        },


        /**
         * function lp_equalize
         */
        lp_equalize : function () {
            var set_height = 0,
                $items = $(this).find('.lp-equalizer-watch');

            $items.each(function () {
                $(this).height('auto');
            } );

            if ( $window.width() < 640 ) {
                return;
            }

            if ( $(this).hasClass('equalize-large') && window.innerWidth < 1024 ) {
                return;
            }


            $items.each(function () {
                var item_height = $(this).height();

                set_height = (item_height > set_height) ? item_height : set_height;
            } ).height(set_height);
        }
    };
} ( jQuery );

jQuery(function( $ ) {
    {%= theme_identifier %}.theme.init();
});
Package.describe({
    summary: 'Foundation with SCSS'
});

Package.on_use(function (api) {
    var path = Npm.require('path');

    // Use jquery for zurb foundation
    api.use('jquery', 'client');

    // CSS files
    //api.add_files(path.join('scss', 'normalize.scss'), 'client');
    //api.add_files(path.join('scss', 'foundation.scss'), 'client');

    // JS files
    api.add_files(path.join('foundation', 'js', 'vendor',
                            'custom.modernizr.js'), 'client');

    // Skip Fastclick, as it's currently embedded in foundation.js
    //api.add_files(path.join('js', 'vendor', 'fastclick.js'), 'client');

    api.add_files(path.join('foundation', 'js', 'vendor',
                            'jquery.autocomplete.js'),'client');
    api.add_files(path.join('foundation', 'js', 'vendor',
                            'jquery.cookie.js'), 'client');
    api.add_files(path.join('foundation', 'js', 'vendor',
                            'placeholder.js'), 'client');

    // Add foundation
    console.log(api.add_files(path.join('foundation', 'js', 'foundation',
                            'foundation.js'), 'client')) 

    // Add plugins
    api.add_files(path.join('foundation', 'js', 'foundation',
                            'foundation.abide.js'), 'client');
    api.add_files(path.join('foundation', 'js', 'foundation',
                            'foundation.interchange.js'), 'client');
    api.add_files(path.join('foundation', 'js', 'foundation',
                            'foundation.topbar.js'), 'client');
    api.add_files(path.join('foundation', 'js', 'foundation',
                            'foundation.offcanvas.js'), 'client');
    api.add_files(path.join('foundation', 'js', 'foundation',
                            'foundation.orbit.js'), 'client');
    api.add_files(path.join('foundation', 'js', 'foundation',
                            'foundation.tab.js'), 'client');
    api.add_files(path.join('foundation', 'js', 'foundation',
                            'foundation.dropdown.js'), 'client');
    api.add_files(path.join('foundation', 'js', 'foundation',
                            'foundation.magellan.js'), 'client');
    api.add_files(path.join('foundation', 'js', 'foundation',
                            'foundation.accordion.js'), 'client');
    api.add_files(path.join('foundation', 'js', 'foundation',
                            'foundation.tooltip.js'), 'client');
    api.add_files(path.join('foundation', 'js', 'foundation',
                            'foundation.joyride.js'), 'client');
    api.add_files(path.join('foundation', 'js', 'foundation',
                            'foundation.reveal.js'), 'client');
    api.add_files(path.join('foundation', 'js', 'foundation',
                            'foundation.alert.js'), 'client');
    api.add_files(path.join('foundation', 'js', 'foundation',
                            'foundation.clearing.js'), 'client');

    api.add_files('activate-foundation.js', 'client');

});
Package.describe({
    summary: 'Foundation with SCSS'
});

Package.on_use(function (api) {
    var path = Npm.require('path');

    // Use jquery for zurb foundation
    api.use(['jquery', 'scss'], 'client');

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
    api.add_files(path.join('foundation', 'js',
                            'foundation.js'), 'client');

    // Add plugins
    api.add_files(path.join('foundation', 'js',
                            'foundation.abide.js'), 'client');
    api.add_files(path.join('foundation', 'js',
                            'foundation.interchange.js'), 'client');
    api.add_files(path.join('foundation', 'js',
                            'foundation.topbar.js'), 'client');
    api.add_files(path.join('foundation', 'js',
                            'foundation.offcanvas.js'), 'client');
    api.add_files(path.join('foundation', 'js',
                            'foundation.orbit.js'), 'client');
    api.add_files(path.join('foundation', 'js',
                            'foundation.tab.js'), 'client');
    api.add_files(path.join('foundation', 'js',
                            'foundation.dropdown.js'), 'client');
    api.add_files(path.join('foundation', 'js',
                            'foundation.magellan.js'), 'client');
    api.add_files(path.join('foundation', 'js',
                            'foundation.accordion.js'), 'client');
    api.add_files(path.join('foundation', 'js',
                            'foundation.tooltip.js'), 'client');
    api.add_files(path.join('foundation', 'js',
                            'foundation.joyride.js'), 'client');
    api.add_files(path.join('foundation', 'js',
                            'foundation.reveal.js'), 'client');
    api.add_files(path.join('foundation', 'js',
                            'foundation.alert.js'), 'client');
    api.add_files(path.join('foundation', 'js',
                            'foundation.clearing.js'), 'client');
});
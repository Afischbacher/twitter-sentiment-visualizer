/*
 config.set({
 files: [
 '<path/to/module files you need>' --> 'build/angular.min.js' etc.
 'build/angular-mocks.js',
 '<path/to/application/files>',
 '<path/to/spec/files>'
 ]
 });

 */

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'tests/test-dependencies/angular.min.js',
            'tests/test-dependencies/angular-mocks.min.js',
            'public/app.js',
            'public/controllers/*.js',
            'tests/*.js'

        ],
        autoWatch: true,
        browsers: ['Chrome', 'ChromeCanary'],
        port: 9876,
        colors: true
    });
};

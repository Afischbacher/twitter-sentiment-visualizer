module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'tests/*.js'
        ],
        autoWatch: true,
        browsers: ['Chrome', 'ChromeCanary'],
        port: 9876,
        colors: true
    });
};

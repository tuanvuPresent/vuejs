module.exports = {
    "transpileDependencies": [
        "vuetify"
    ],
    chainWebpack: (config) => {
        config.plugin('html').tap((options) => {
            options[0].title = 'Demo Example';
            return options;
        });
    },
}

module.exports = {
    "transpileDependencies": [
        "vuetify"
    ],
    devServer: {
        disableHostCheck: true
    },
    chainWebpack: (config) => {
        config.plugin('html').tap((options) => {
            options[0].title = 'Demo Example';
            return options;
        });
    },
}

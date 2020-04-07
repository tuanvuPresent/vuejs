module.exports ={
    chainWebpack: config => {
        const svgRule = config.module.rule("svg");

        svgRule.uses.clear();
        svgRule
            .oneOf("external")
            .resourceQuery(/external/)
            .use("file-loader")
            .loader("file-loader")
            .end()
            .end()
            .oneOf("inline")
            .use("vue-svg-loader")
            .loader("vue-svg-loader");
    },
    transpileDependencies: ["vuetify"]
};


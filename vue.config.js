const path = require("path");
// const VuetifyLoaderPlugin = require("vuetify-loader/lib/plugin");
module.exports = {
    publicPath: "/",
    // devServer: {
    //   proxy: "https://www.stg-cyurica2.cyurica.biz/"
    // },
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
    pluginOptions: {
        "style-resources-loader": {
            preProcessor: "scss",
            patterns: [path.resolve(__dirname, "./src/styles/normalize.scss")]
        }
    },
    transpileDependencies: ["vuetify"]
    // configureWebpack: {
    //   plugins: [
    //     new VuetifyLoaderPlugin({
    //       /**
    //        * This function will be called for every tag used in each vue component
    //        * It should return an array, the first element will be inserted into the
    //        * components array, the second should be a corresponding import
    //        *
    //        * originalTag - the tag as it was originally used in the template
    //        * kebabTag    - the tag normalised to kebab-case
    //        * camelTag    - the tag normalised to PascalCase
    //        * path        - a relative path to the current .vue file
    //        * component   - a parsed representation of the current component
    //        */
    //       match(originalTag, { kebabTag, camelTag, path, component }) {
    //         if (kebabTag.startsWith("core-")) {
    //           return [
    //             camelTag,
    //             `import ${camelTag} from '@/components/core/${camelTag.substring(
    //               4
    //             )}.vue'`
    //           ];
    //         }
    //       }
    //     })
    //   ]
    // }
};

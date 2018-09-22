const webpack = require("webpack");
const { parsed: localEnv } = require("dotenv").config();
const withSourceMaps = require("@zeit/next-source-maps");
const withImages = require("next-images");
const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");
const path = require("path");

const plugins = [
    withSourceMaps,
    withImages,
    [
        withBundleAnalyzer,
        {
            analyzeServer: ["server", "both"].includes(
                process.env.BUNDLE_ANALYZE
            ),
            analyzeBrowser: ["browser", "both"].includes(
                process.env.BUNDLE_ANALYZE
            ),
            bundleAnalyzerConfig: {
                server: {
                    analyzerMode: "static",
                    reportFilename: "../server-analyze.html"
                },
                browser: {
                    analyzerMode: "static",
                    reportFilename: "client-analyze.html"
                }
            }
        }
    ]
];

module.exports = withPlugins([...plugins], {
    webpack: (config, { dev, isServer }) => {
        const conf = config;
        // Fixes npm packages that depend on `fs` module
        conf.node = {
            fs: "empty"
        };

        // Resolve styled components multiple instances error
        // when importing components from a lib that user styled components
        conf.resolve.alias = {
            "styled-components": path.resolve(
                __dirname,
                "node_modules",
                "styled-components"
            )
        };

        conf.plugins.push(new webpack.EnvironmentPlugin(localEnv));

        return conf;
    }
});

import React from "react";
import App, { Container } from "next/app";
import { ThemeProvider, injectGlobal } from "styled-components";
import { theme } from "resources/theme";
import withReduxStore from "lib/withReduxStore";
import { Provider } from "react-redux";

injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700');
    * { padding: 0; margin: 0}
    html {font-size: 14px}
    body { font-size: 1rem}
    a {text-decoration: none}

    #__next, html, body {
        height: 100% !important;
        margin: 0;
        font-family: 'Roboto', sans-serif;
        padding-right: 0 !important;
    }
`;
class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    createUrl = router => {
        // This is to make sure we don't references the router object at call time
        const { pathname, asPath, query } = router;
        return {
            get query() {
                return query;
            },
            get pathname() {
                return pathname;
            },
            get asPath() {
                return asPath;
            },
            back: () => {
                router.back();
            },
            push: (url, as) => router.push(url, as),
            pushTo: (href, as) => {
                const pushRoute = as ? href : null;
                const pushUrl = as || href;

                return router.push(pushRoute, pushUrl);
            },
            replace: (url, as) => router.replace(url, as),
            replaceTo: (href, as) => {
                const replaceRoute = as ? href : null;
                const replaceUrl = as || href;

                return router.replace(replaceRoute, replaceUrl);
            }
        };
    };

    render() {
        const { Component, pageProps, router, reduxStore } = this.props;
        const url = this.createUrl(router);
        return (
            <Container>
                <Provider store={reduxStore}>
                    <ThemeProvider theme={theme}>
                        <Component {...pageProps} url={url} />
                    </ThemeProvider>
                </Provider>
            </Container>
        );
    }
}

export default withReduxStore(MyApp);

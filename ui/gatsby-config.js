module.exports = {
    siteMetadata: {
        title: '',
        description: ''
    },
    pathPrefix: '/',
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/../content`,
                name: 'pages'
            },
        },
        {
            resolve: 'gatsby-plugin-favicon',
            options: {
                logo: './src/favicon.ico',
                injectHTML: true,
                icons: {
                    android: true,
                    appleIcon: true,
                    appleStartup: true,
                    coast: false,
                    favicons: true,
                    firefox: true,
                    twitter: false,
                    yandex: false,
                    windows: false
                }
            }
        },
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: []
            }
        }
    ],
}
;

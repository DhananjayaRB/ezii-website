module.exports = {
    siteUrl: 'https://ezii-website.vercel.app',
    generateRobotsTxt: false, // We'll keep our custom robots.txt
    changefreq: 'weekly',
    priority: 0.7,
    exclude: [
        '/api/*',
        '/_next/*',
        '/static/*',
        '/admin/*',
        '/private/*',
        '/onboarding/*',
        '/paymentConfirmationSuccess/*',
        '/paymentConfirmationFailure/*'
    ],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
                disallow: [
                    '/api/',
                    '/_next/',
                    '/static/',
                    '/admin/',
                    '/private/',
                    '/onboarding/',
                    '/paymentConfirmationSuccess/',
                    '/paymentConfirmationFailure/'
                ]
            }
        ],
        additionalSitemaps: [
            'https://ezii-website.vercel.app/sitemap.xml'
        ],
        sitemapSize: 5000
    }
}

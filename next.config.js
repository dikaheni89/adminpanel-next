/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        esmExternals: 'loose'
    },
    poweredByHeader: false,
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN'
                    }
                ],
            },
        ]
    },
    async redirects() {
        return [
            {
                source: '/admin',
                destination: '/admin/dashboard',
                permanent: true,
            }
        ]
    }
}

module.exports = nextConfig

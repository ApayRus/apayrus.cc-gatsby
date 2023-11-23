import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
	siteMetadata: {
		title: `ApayRus.cc`,
		subtitle: `цифровизация знаний`,
		siteUrl: `https://apayrus.cc`
	},
	// More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
	// If you use VSCode you can also use the GraphQL plugin
	// Learn more at: https://gatsby.dev/graphql-typegen
	graphqlTypegen: true,
	plugins: [
		'gatsby-plugin-postcss',
		{
			resolve: 'gatsby-plugin-google-gtag',
			options: {
				trackingIds: [
					'G-Z4CR0LH6DP', // Google Analytics / GA
					'AW-CONVERSION_ID', // Google Ads / Adwords / AW
					'DC-FLOODIGHT_ID' // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
				]
			}
		},
		'gatsby-plugin-image',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		'gatsby-plugin-sitemap',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				icon: 'src/images/icon.png'
			}
		},
		'gatsby-plugin-mdx',
		'gatsby-transformer-remark',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/'
			},
			__key: 'images'
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'pages',
				path: './src/pages/'
			},
			__key: 'pages'
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'data',
				path: './src/data/'
			},
			__key: 'data'
		},
		{
			resolve: `gatsby-omni-font-loader`,
			options: {
				enableListener: true,
				preconnect: [
					`https://fonts.googleapis.com`,
					`https://fonts.gstatic.com`
				],
				web: [
					{
						name: `Comfortaa`,
						file: `https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;600;700&display=swap`
					},
					{
						name: `Roboto`,
						file: `https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap`
					}
				]
			}
		}
	]
}

export default config

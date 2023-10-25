import * as React from 'react'
import MdBlock from '../components/MdBlock'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

const IndexPage = ({ data }: { data: any }) => {
	return (
		<Layout>
			<main>
				{data.allMarkdownRemark.nodes.map((data: any) => {
					return <MdBlock {...{ data }} />
				})}
			</main>
		</Layout>
	)
}

export default IndexPage

export const query = graphql`
	query MainPageMdBlocks {
		allMarkdownRemark(
			filter: { frontmatter: { slug: { in: ["mission", "product", "about"] } } }
			sort: { frontmatter: { order: ASC } }
		) {
			nodes {
				frontmatter {
					image
					slug
					title
				}
				html
			}
		}
	}
`

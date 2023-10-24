import React from 'react'
import SocialIcons from './SocialIcons'
import { graphql, useStaticQuery } from 'gatsby'
import * as styles from './Header.module.css'
import socialMedia from '../data/socialMedia'

const Header = () => {
	const data = useStaticQuery(graphql`
		query SiteInfo {
			site {
				siteMetadata {
					title
					subtitle
				}
			}
		}
	`)

	const { title, subtitle } = data.site.siteMetadata

	return (
		<div className={styles.headerWrapper}>
			<div className={styles.logoAndTitles}>
				<div className={styles.logo}>
					<img src='/icon.png' alt='site logo' />
				</div>
				<div className={styles.titles}>
					<h1 className={styles.title}>{title}</h1>
					<h2 className={styles.subtitle}>{subtitle}</h2>
				</div>
			</div>
			<div className={styles.socialMedias}>
				<SocialIcons socialMedias={socialMedia} />
			</div>
		</div>
	)
}

export default Header

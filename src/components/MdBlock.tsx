import React from 'react'
import * as styles from './MdBlock.module.css'

interface Props {
	data: any
}

const MdBlock: React.FC<Props> = ({ data }) => {
	const {
		frontmatter: { image, title },
		html
	} = data

	return (
		<section className={styles.container}>
			<div className={styles.cover}>
				<img src={image} alt={title} />
			</div>
			<h2>{title}</h2>
			<div dangerouslySetInnerHTML={{ __html: html }} />
		</section>
	)
}

export default MdBlock

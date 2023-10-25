import React from 'react'
import * as styles from './Layout.module.css'
import Header from './Header'

interface Props {
	children: JSX.Element | JSX.Element[]
}

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<div className={styles.container}>
			<Header />
			{children}
		</div>
	)
}

export default Layout

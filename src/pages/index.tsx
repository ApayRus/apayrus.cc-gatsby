import * as React from 'react'
import Header from '../components/Header'

const IndexPage = () => {
	return (
		<main>
			<Header />
			<img
				src='/my-photo.jpg'
				alt='my photo'
				style={{ width: 100, borderRadius: '50%' }}
			/>
		</main>
	)
}

export default IndexPage

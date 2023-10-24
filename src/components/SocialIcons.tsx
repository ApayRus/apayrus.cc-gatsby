import React from 'react'
import { Button, SvgIcon } from '@mui/material'
import socialIcons from '../data/SocialIcons'
import { SocialMedia } from './types'

interface SocialMediaProps {
	socialMedias: SocialMedia[]
}

const SocialIcons: React.FC<SocialMediaProps> = props => {
	const { socialMedias } = props

	return (
		<div style={{ display: 'flex', justifyContent: 'space-around' }}>
			{socialMedias.map((elem, index) => {
				const { title, path } = elem
				return (
					<Button
						style={{ minWidth: 'unset' }}
						size='small'
						variant='text'
						href={path}
						key={`socialButton-${index}`}
						title='title'
					>
						<SvgIcon color='primary'>{socialIcons[title]}</SvgIcon>
					</Button>
				)
			})}
		</div>
	)
}

export default SocialIcons

type SocialMediaNames =
	| 'instagram'
	| 'telegram'
	| 'youtube'
	| 'habr'
	| 'twitter'
	| 'devto'
	| 'substack'
	| 'medium'

export interface SocialMedia {
	title: SocialMediaNames
	path: string
}

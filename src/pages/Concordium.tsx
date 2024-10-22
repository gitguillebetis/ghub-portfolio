import React from 'react';
import CompanyPageTemplate from '../components/ExperiencePageTemplate';
import Container from '../components/Container';
import Grid from '../components/Grid';
import Paragraph from '../components/Paragraph';
import MasonryGrid from '../components/MansoryGrid';

const concordiumMasonryData = {
	breakpoints: {
		'xs': {
			parallaxSpeed: [20, 55],
			columns: 2,
			parentClasses: 'grid grid-cols-2 gap-2 mx-auto',
			childClasses: 'grid gap-2',
		},
		'sm': {
			parallaxSpeed: [50, 20, 80],
			columns: 3,
			parentClasses: 'grid grid-cols-3 gap-3',
			childClasses: 'grid gap-3',
		},
		'md': {
			parallaxSpeed: [20, 55, 15, 40],
			columns: 4,
			parentClasses: 'grid grid-cols-4 gap-4',
			childClasses: 'grid gap-4',
		},
		'lg': {
			parallaxSpeed: [20, 90, 0, 60, 40],
			columns: 5,
			parentClasses: 'grid grid-cols-5 gap-4',
			childClasses: 'grid gap-4',
		},
		'xl': {
			parallaxSpeed: [20, 90, 0, 60, 40, 110],
			columns: 6,
			parentClasses: 'grid grid-cols-6 gap-4',
			childClasses: 'grid gap-4',
		}
	},
	images: [
		{ imgSrc: '/assets/images/concordium/masonry/Account-detail-dark.avif', alt: '' },
		{ imgSrc: '/assets/images/concordium/masonry/Intro.avif', alt: '' },
		{ imgSrc: '/assets/images/concordium/masonry/Concordium-credentials-light.avif', alt: '' },
		{ imgSrc: '/assets/images/concordium/masonry/AI-Assistance-light.avif', alt: '' },
		{ imgSrc: '/assets/images/concordium/masonry/Account-list-light.avif', alt: '' },
		{ imgSrc: '/assets/images/concordium/masonry/Home-light.avif', alt: '' },
		{ imgSrc: '/assets/images/concordium/masonry/Account-detail-light.avif', alt: '' },
		{ imgSrc: '/assets/images/concordium/masonry/Notification-light.avif', alt: '' },
		{ imgSrc: '/assets/images/concordium/masonry/News-dark.avif', alt: '' },
		{ imgSrc: '/assets/images/concordium/masonry/Recover.avif', alt: '' },
		{ imgSrc: '/assets/images/concordium/masonry/Notification-dark.avif', alt: '' },
		{ imgSrc: '/assets/images/concordium/masonry/Profile.avif', alt: '' },
		{ imgSrc: '/assets/images/concordium/masonry/Home-dark.avif', alt: '' },
		{ imgSrc: '/assets/images/concordium/masonry/Web3ID-credentials.avif', alt: '' },
		{ imgSrc: '/assets/images/concordium/masonry/Setup-finish.avif', alt: '' },
		{ imgSrc: '/assets/images/concordium/masonry/Setup-seedphrase.avif', alt: '' },
		{ imgSrc: '/assets/images/concordium/masonry/Widget-center-light.avif', alt: '' },
		{ imgSrc: '/assets/images/concordium/masonry/Widget-center-dark.avif', alt: '' },
		{ imgSrc: '/assets/images/concordium/masonry/Setup-security.avif', alt: '' },
		{ imgSrc: '/assets/images/concordium/masonry/News-light.avif', alt: '' },
		{ imgSrc: '/assets/images/concordium/masonry/Logo.avif', alt: '' },
	]
};


const concordium: React.FC = () => {

	return (
		<div className="concordium-background">

			<CompanyPageTemplate id={6}/>
			
			<Container layout="width-2xl">
					<MasonryGrid data={concordiumMasonryData} />
			</Container>
	
			<Container layout="width-xl" background='lighter'>
				<Grid layout="1column" padding={true}>
					<Paragraph
						title="My Time at Concordium"
						paragraphs={[
							"At Concordium, "
						]}
					/>
				</Grid>
			</Container>

		</div>	
	);
};

export default concordium;

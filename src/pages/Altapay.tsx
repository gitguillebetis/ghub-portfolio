import React from 'react';
import CompanyPageTemplate from '../components/CompanyPageTemplate';
import Container from '../components/Container';
import Grid from '../components/Grid';
import Image from '../components/Image';
import Paragraph from '../components/Paragraph';
import MasonryGrid from '../components/MansoryGrid';
import ScreenshotsSpread from '../components/ScreenshotsSpread';

const Altapay: React.FC = () => { 

	const imagesMansory = Array.from({ length: 15 }, (_, idx) => `/assets/images/altapay/mansory/New Project-${idx + 1}.avif`);
	const imagesScreenshots = {
		column1: [
			{ image: '/assets/images/altapay/screenshots/desktop-1.avif', rotate: '-7deg', zindex: '4' },
			{ image: '/assets/images/altapay/screenshots/desktop-2.avif', rotate: '-3deg', zindex: '1' },
			{ image: '/assets/images/altapay/screenshots/desktop-3.avif', rotate: '4deg', zindex: '2' },
			{ image: '/assets/images/altapay/screenshots/desktop-4.avif', rotate: '-8deg', zindex: '1' },
			{ image: '/assets/images/altapay/screenshots/desktop-5.avif', rotate: '-4deg', zindex: '3' },
		],
		column2: [
			{ image: '/assets/images/altapay/screenshots/desktop-6.avif', rotate: '9deg', zindex: '3' },
			{ image: '/assets/images/altapay/screenshots/desktop-7.avif', rotate: '1deg', zindex: '3' },
			{ image: '/assets/images/altapay/screenshots/desktop-8.avif', rotate: '-5deg', zindex: '1' },
			{ image: '/assets/images/altapay/screenshots/desktop-9.avif', rotate: '3deg', zindex: '3' },
		]
	};
	

	return (
		<div className="altapay-background">

			<CompanyPageTemplate id={3} />

			<Container layout="width-full">
				<Grid layout="2column" padding={true}>				
					<Paragraph
						title="Desktop"
						TitleLarge={true}
						classes='container-padding-gutters md:w-[90%] 2xl:w-[600px] lg:justify-self-end lg:self-center'
						paragraphs={[
							"For the desktop version of the AltaPay website, I focused on enhancing visual hierarchy and usability by taking full advantage of the larger screen space. I strategically organized content to improve clarity and navigation, ensuring an intuitive user experience. The design leveraged high-quality visuals and responsive elements to maintain consistency with the brand’s new corporate image while maximizing functionality and engagement on larger displays."
						]}
					/>					
					<Image 
                        imageSrc="/assets/images/altapay/ipad-mobile-payments.avif"
                        altText="New Profile Card for People @ Grundfos Insite"
                        containerClasses='w-[80%] md:w-[60%] lg:w-[800px] xl:w-[900px] 2xl:w-[1000px] justify-self-center lg:justify-self-start'
                    />
				</Grid>
			</Container>

			<Container layout="width-full">
				<ScreenshotsSpread imagesSrc={imagesScreenshots} />
			</Container>
			
			<Container layout="width-full">
                <Grid layout="2column" classes="md:grid-cols-[40%,60%] lg:grid-cols-[35%,65%] md:gap-5 lg:gap-20">               
                    <Image 
                        imageSrc="/assets/images/altapay/iphone-home.avif"
                        altText="New Profile Card for People @ Grundfos Insite"
                        containerClasses="order-2 md:order-1 justify-self-center md:justify-self-end w-[50%] md:w-[90%] lg:w-[370px]"
						imageClasses=""
                        slideDirection="left"
                    />
                    <Paragraph
                        title="Mobile"
                        TitleLarge={true}
                        classes='container-padding-gutters order-1 md:order-2 md:self-center md:w-[90%] lg:w-[600px]'
                        paragraphs={[
                            "For the mobile version of the AltaPay website, I applied a mobile-first approach, readjusting elements to fit smaller screens without compromising content or quality. This involved optimizing the layout and interactions to ensure a seamless, user-friendly experience, while maintaining the integrity of the design and functionality."
                        ]}
                    />
                </Grid>
			</Container>

			<Container layout="width-xl">
				<Grid layout="1column" padding={true}>
					<MasonryGrid images={imagesMansory} />
				</Grid>
			</Container>

			<Container layout="width-xl" background='darker'>
				<Grid layout="1column" padding={true}>
					<Paragraph
						title="My Time at Altapay"
						paragraphs={[
							"At AltaPay, I found myself truly at my fullest, tapping into the full range of my skills. I had the opportunity to design across various mediums, including print, digital ads, interior design for the office in Søborg, web and mobile design, and stands for company events. To top it off, I even developed the company’s website and initiated work on the design system. AltaPay was a place where I could use all my abilities at 100%, allowing me to grow as both a designer and a developer."
						]}
					/>
				</Grid>
			</Container>
		</div>	
	);
};

export default Altapay;

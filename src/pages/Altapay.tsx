import React from 'react';
import Container from '../components/Container';
import ImageParagraph from '../components/ImageParagraph';
import CompanyPageTemplate from '../components/CompanyPageTemplate';

const altapay: React.FC = () => {

	return (
		<div className="altapay-background">
			<CompanyPageTemplate id={3}/>

			<Container layout="width-xl" background='darker'>
				<ImageParagraph
					padding={true}
					layout="no-image"
					title="My Time at Altapay"
					paragraphs={[
						"At AltaPay, I found myself truly at my fullest, tapping into the full range of my skills. I had the opportunity to design across various mediums, including print, digital ads, interior design for the office in Søborg, web and mobile design, and stands for company events. To top it off, I even developed the company’s website and initiated work on the design system. AltaPay was a place where I could use all my abilities at 100%, allowing me to grow as both a designer and a developer."
					]}
				/>
			</Container>

		</div>	
	);
};

export default altapay;

import React from 'react';
import Container from '../components/Container';
import ImageParagraph from '../components/ImageParagraph';
import CompanyPageTemplate from '../components/CompanyPageTemplate';

const philips: React.FC = () => {

	return (
		<div className="philips-background">

			<CompanyPageTemplate id={2} />

			<Container layout="width-xl" background='darker'>
				<ImageParagraph
					padding={true}
					layout="no-image"
					title="My Time at Philips"
					paragraphs={[
						""
					]}
				/>
			</Container>

		</div>	
	);
};

export default philips;

import React from 'react';
import Container from '../components/Container';
import ImageParagraph from '../components/ImageParagraph';
import CompanyPageTemplate from '../components/CompanyPageTemplate';

const concordium: React.FC = () => {

	return (
		<div className="concordium-background">
			<CompanyPageTemplate id={6}/>


			<Container layout="width-xl" background='lighter'>
				<ImageParagraph
					padding={true}
					layout="no-image"
					title="My Time at Concordium"
					paragraphs={[
						""
					]}
				/>
			</Container>

		</div>	
	);
};

export default concordium;

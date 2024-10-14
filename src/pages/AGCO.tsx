import React from 'react';
import Container from '../components/Container';
import ImageParagraph from '../components/ImageParagraph';
import CompanyPageTemplate from '../components/CompanyPageTemplate';

const agco: React.FC = () => {

	return (
		<div className="agco-background">
			<CompanyPageTemplate id={5}/>


			<Container layout="width-xl" background='darker'>
				<ImageParagraph
					padding={true}
					layout="no-image"
					title="My Time at AGCO"
					paragraphs={[
						""
					]}
				/>
			</Container>

		</div>	
	);
};

export default agco;

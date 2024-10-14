import React from 'react';
import Container from '../components/Container';
import ImageParagraph from '../components/ImageParagraph';
import CompanyPageTemplate from '../components/CompanyPageTemplate';

const vass: React.FC = () => {

	return (
		<div className="vass-background">
			<CompanyPageTemplate id={1}/>


			<Container layout="width-xl" background='darker'>
				<ImageParagraph
					padding={true}
					layout="no-image"
					title="My Time at Vass"
					paragraphs={[
						""
					]}
				/>
			</Container>

		</div>	
	);
};

export default vass;

import React from 'react';
import Maintenance from '../components/Maintenance';
import Container from '../components/Container';
import Grid from '../components/Grid';
import CompanyPageTemplate from '../components/ExperiencePageTemplate';

const concordium: React.FC = () => {

	return (
		<div className="vass-background">
			<CompanyPageTemplate id={1}/>

			<Container layout='width-xl'>
				<Grid layout='1column' classes='mb-[200px] justify-items-center'>
					<Maintenance date={false} message="we are currently uploading content for this page. Thank you for your patience, and we apologize for any inconvenience caused." />
				</Grid> 
			</Container>

		</div>	
	);
};

export default concordium;

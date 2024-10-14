import React from 'react';
import CompanyPageTemplate from '../components/CompanyPageTemplate';
import Container from '../components/Container';
import Grid from '../components/Grid';
import Image from '../components/Image';
import Paragraph from '../components/Paragraph';

const Grundfos: React.FC = () => {

	return (
		<div className="grundfos-background">
			
			<CompanyPageTemplate id={4}/>

			<Container layout="width-xl" background="lighter" padding={true}>
				<Grid layout="2column" padding={true}>
					<Image 
						classes="order-2 lg:order-1 w-full sm:w-3/4 lg:w-full"
						shadowRounded={true}
						imageSrc="/assets/images/grundfos/new-people-popup.avif"
						altText="New Profile Card for People @ Grundfos Insite"
						slideDirection="left"
					/>
					<Paragraph
						classes="order-1 lg:order-2" 
						title="People @ Grundfos INSITE"
						paragraphs={[
							"Even though my main focus was on Front-End development, after two months, I was tasked with designing and developing the new People section @ Grundfos INSITE. This involved working closely with the back-end team using Java, while I managed the UI Design and the Front-End implementation.  The designs were created in Photoshop, ensuring a user-friendly experience that aligned with the platform's overall design.",
							"This experience showcased my ability to swiftly adapt to new challenges, balancing both design and development to deliver a seamless, user-friendly experience that aligned with the platform’s goals.",
						]}
					/>
				</Grid>
				<Grid layout="1column">
					<Image
						slideDirection="fade"
						classes="w-full lg:w-4/5"
						shadowRounded={true}
						imageSrc="/assets/images/grundfos/new-people-search.avif"
						altText="New Search Page for People @ Grundfos Insite"
					/>
				</Grid>
			</Container>

			<Container layout="width-xl">
				<Grid layout="1column">
					<Paragraph
						padding={true}
						classes="w-full lg:w-4/5 container-padding-top-large"
						title="Where to Buy issue"
						paragraphs={[
							"The initial design of the Where to Buy page on the mobile version had a significant issue: the collapsible list of distributors covered most of the map. As soon as a user clicked on one of the distributors to expand the details, the map would be completely blocked, leaving no visibility. This created a poor user experience, as the map was a key element for users trying to locate distributors.",
							"The Product Owner reached out to me to find a solution, specifically requesting that we address the problem without involving the Grundfos Design team due to timeline constraints. The challenge was to keep the map visible while retaining the full collapsible list of distributors. Additionally, when expanding the distributor information, the map still needed to remain partially visible to avoid fully obstructing the view.",
						]}
					/>
					<Image
						padding={true}
						imageSrc="/assets/images/grundfos/Where-to-buy-before.avif"
						altText="Where to buy page with issue"
					/>
				</Grid>
				<Grid layout="2column" padding={true}>
					<Image 
						classes="order-2 lg:order-1 w-full sm:w-3/4 lg:w-full"
						imageSrc="/assets/images/grundfos/Where-to-buy-after.avif"
						altText="Where to buy page with the solution"
						slideDirection="left"
					/>
					<Paragraph
						classes="order-1 lg:order-2"
						title="The solution"
						paragraphs={[
							"To solve the problem, I designed a horizontal, scrollable list that allowed the map to remain visible. This interaction pattern is something mobile users are accustomed to, providing a familiar experience. When a user clicked on a distributor, the information would expand, covering only half of the map, ensuring that the map was still partially visible for reference. Additionally, when the user clicked again, the information would collapse, fully restoring the map’s visibility.",
							"The solution was user tested and passed successfully, resulting in a positive user experience and addressing the initial concerns effectively. ",
						]}
					/>
				</Grid>
			</Container>

			<Container layout="width-xl" background='darker'>
				<Grid layout="1column" padding={true}>
					<Paragraph
						title="My Time at Grundfos"
						paragraphs={[
							"These are just two examples out of the many challenges I encountered during my time at Grundfos. I believe I contributed significantly to the company and my colleagues, and I’m proud to have left with many lasting friendships. Additionally, I received a lot of great feedback and references from my ex-colleagues, which further affirms the positive impact I made during my time there."
						]}
					/>
				</Grid>
			</Container>

		</div>
	);
};

export default Grundfos;

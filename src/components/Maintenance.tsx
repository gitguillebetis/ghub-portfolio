import React from 'react';

interface MaintenanceProps {
	message: string;
	date: boolean;
}

const getFormattedDate = () => {
	const today = new Date();
	const options: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric' };
	return today.toLocaleDateString('en-US', options);
};

const Maintenance: React.FC<MaintenanceProps> = ({ message, date }) => {
	const todayDate = date ? getFormattedDate() : '';

	return (
		<div className="bg-yellow-200 text-yellow-800 p-10 mx-5 my-12 sm:m-20 rounded-lg max-w-lg text-center">
			<p>
				<strong>Notice:</strong> {date && `Today, ${todayDate},`} {message}
			</p>	
		</div>
	);
};

export default Maintenance;
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Employer.module.scss';

interface EmployerProps {
	logo: string;               // Mandatory logo prop
	link?: string;              // Optional link
	altText?: string;           // Optional altText
	id?: string;                // Optional ID
}

const Employer: React.FC<EmployerProps> = ({ logo, link = "#", altText = "", id }) => {
	return (
		<Link 
			to={link}
			id={id}
			className={`${styles['employer']} transition-colors duration-200`}>
			<img src={logo} alt={altText} />
		</Link>
	);
};

export default Employer;

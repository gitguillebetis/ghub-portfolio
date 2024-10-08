import React from 'react';
import { Link } from 'react-router-dom';

interface EmployerProps {
  logo: string;
  link: string;
  altText: string;
}

const Employer: React.FC<EmployerProps> = ({ logo, link, altText }) => {
  return (
    <Link to={link} className="bg-gray-200 p-4 rounded-lg transition-colors duration-200 hover:bg-blue-500">
      <img src={logo} alt={altText} className="w-24 h-24" />
    </Link>
  );
};

export default Employer;

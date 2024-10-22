import { useState, useEffect } from 'react';

export const breakpointsOrder = ['3xl', '2xl', 'xl', 'lg', 'md', 'sm', 'xs']; // Define the order of breakpoints from largest to smallest

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

const getBreakpoint = (): Breakpoint => {
	const width = window.innerWidth;

	if (width >= 1920) return '3xl';
	if (width >= 1536) return '2xl';
	if (width >= 1280) return 'xl';
	if (width >= 1024) return 'lg';
	if (width >= 768) return 'md';
	if (width >= 640) return 'sm';
	return 'xs';
};

export const useBreakpoint = () => {
	const [breakpoint, setBreakpoint] = useState<Breakpoint>(getBreakpoint());

	useEffect(() => {
		const handleResize = () => {
		setBreakpoint(getBreakpoint());
	};

	window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return breakpoint;
};

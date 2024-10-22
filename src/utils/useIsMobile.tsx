import { useBreakpoint } from './useBreakpoint';

const useIsMobile = () => {
	const breakpoint = useBreakpoint();
	return breakpoint === 'sm' || breakpoint === 'xs';
};

export default useIsMobile;

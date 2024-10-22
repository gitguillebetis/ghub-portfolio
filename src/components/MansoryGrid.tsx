import React, { useState, useEffect } from 'react';
import { useBreakpoint, breakpointsOrder } from '../utils/useBreakpoint';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

interface Image {
    imgSrc: string;
    alt: string;
}

interface BreakpointConfig {
    parallaxSpeed: number[];
    columns: number;
    parentClasses: string;
    childClasses: string;
}

interface MasonryGridProps {
    data: {
        breakpoints: { [key: string]: BreakpointConfig };
        images: Image[];
    };
}

const MasonryGrid: React.FC<MasonryGridProps> = ({ data }) => {
    // Get current breakpoint
    const breakpoint = useBreakpoint();  

    // Define a state variable to store the rendered breakpoint
    const [renderedBreakpoint, setRenderedBreakpoint] = useState<string | null>(null);
    const [columnedImages, setColumnedImages] = useState<Image[][]>([]);

    // Function to find the closest available smaller or matching breakpoint
    const getSmallerBreakpoint = (currentBreakpoint: string) => {
        const index = breakpointsOrder.indexOf(currentBreakpoint);

        // Loop from the current breakpoint downwards
        for (let i = index; i < breakpointsOrder.length; i++) {
            const bp = breakpointsOrder[i];
            if (data.breakpoints[bp]) {
                return bp;  // Return the closest available smaller or matching breakpoint
            }
        }

        return breakpointsOrder[breakpointsOrder.length - 1];  // Fallback to the smallest breakpoint (xs)
    };

    // Get the closest available breakpoint configuration
    const smallerBreakpoint = getSmallerBreakpoint(breakpoint);
    const currentConfig = data.breakpoints[smallerBreakpoint];

    useEffect(() => {
        if (renderedBreakpoint === null || renderedBreakpoint !== smallerBreakpoint) {
            
            // Split images into columns for the current configuration
            const columns = currentConfig.columns;
            const newColumnedImages = Array.from({ length: columns }, () => [] as Image[]);
            
            data.images.forEach((image, index) => {
                newColumnedImages[index % columns].push(image);  // Distribute images across columns
            });

            // Set the columned images and update the renderedBreakpoint
            setColumnedImages(newColumnedImages);
            setRenderedBreakpoint(smallerBreakpoint);  
        }
    }, [smallerBreakpoint, renderedBreakpoint, data.images, currentConfig.columns]);

    // Image rendering logic (extracted to avoid duplication)
    const renderImages = (column: Image[]) => (
        <div className={`${currentConfig.childClasses} content-start`}>
            {column.map((image, imgIndex) => (
                <img
                    key={`img-${imgIndex}`}
                    src={image.imgSrc}
                    alt={image.alt}
                    className="rounded-2xl"
                />
            ))}
        </div>
    );

    return (
        <div className={currentConfig.parentClasses}>
            {currentConfig.columns > 1 ? (
                <ParallaxProvider>
                    {columnedImages.map((column, colIndex) => (
                        <Parallax key={`col-${colIndex}`} speed={currentConfig.parallaxSpeed[colIndex]}>
                            {renderImages(column)}
                        </Parallax>
                    ))}
                </ParallaxProvider>
            ) : (
                columnedImages.map((column, colIndex) => (
                    <div key={`col-${colIndex}`}>
                        {renderImages(column)}
                    </div>
                ))
            )}
        </div>
    );
};

export default MasonryGrid;

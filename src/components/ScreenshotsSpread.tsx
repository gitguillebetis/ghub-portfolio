import React from 'react';

interface ImageConfig {
    image: string;
    rotate: string;
    zindex: string;
}

interface ScreenshotsSpreadProps {
    imagesSrc: {
        column1: ImageConfig[];
        column2: ImageConfig[];
    };
}

const ScreenshotsSpread: React.FC<ScreenshotsSpreadProps> = ({ imagesSrc }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 overflow-hidden relative items-start py-[32px] sm:py-[50px]">
            <div className="grid gap-5 lg:gap-10 justify-items-center 2xl:justify-items-end">
                {imagesSrc.column1.map((config, index) => (
                    <img
                        key={`column1-image-${index}`}
                        src={config.image}
                        alt={`Screenshot ${index + 1}`}
                        className="image-rounded-shadow w-[90%] md:w-[550px] lg:w-[750px]"
                        style={{
                            transform: `rotate(${config.rotate})`,
                            zIndex: parseInt(config.zindex),
                        }}
                    />
                ))}
            </div>
            <div className="grid gap-5 lg:gap-10 justify-items-center 2xl:justify-items-start md:pt-[150px]">
                {imagesSrc.column2.map((config, index) => (
                    <img
                        key={`column2-image-${index}`}
                        src={config.image}
                        alt={`Screenshot ${index + 1}`}
                        className="image-rounded-shadow w-[90%] md:w-[550px] lg:w-[750px]"
                        style={{
                            transform: `rotate(${config.rotate})`,
                            zIndex: parseInt(config.zindex),
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default ScreenshotsSpread;

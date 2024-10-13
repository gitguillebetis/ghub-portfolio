'use client'

interface HeroImageProps {
    imageSrc: string;
    altText?: string; // Optional
}

export default function HeroImage({ imageSrc, altText }: HeroImageProps) {

    return (                  
        <div className="relative h-[400px] sm:h-[500px] lg:h-[550px] xl:h-[600px] 2xl:h-[700px] w-full">
            <img 
                src={`/assets/heroImages/${imageSrc}`} 
                alt={altText || "Background Image"}
                className="absolute inset-0 w-full h-full object-cover object-top lg:object-[0_-40px] xl:object-[0_-70px] 2xl:object-[0_-100px] 3xl:object-[0_-160px]" />
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent h-[300px]"></div>
        </div>
    )
}

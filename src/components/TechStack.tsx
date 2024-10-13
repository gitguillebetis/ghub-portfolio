import React from 'react';

interface TechStackProps {
  title?: string;
  items: string[];
}

const iconMap: { [key: string]: string } = {
  react: '/assets/techLogo/React.svg',
  vuejs: '/assets/techLogo/VueJS.svg',
  angular: '/assets/techLogo/Angular.svg',
  nodejs: '/assets/techLogo/NodeJS.svg',
  typescript: '/assets/techLogo/Typescript.svg',
  javascript: '/assets/techLogo/Javascript.svg',
  html: '/assets/techLogo/HTML.svg',
  css: '/assets/techLogo/CSS.svg',
  sass: '/assets/techLogo/SASS.svg',
  less: '/assets/techLogo/LESS.svg',
  webpack: '/assets/techLogo/Webpack.svg',
  docker: '/assets/techLogo/Docker.svg',
  figma: '/assets/techLogo/Figma.svg',
  photoshop: '/assets/techLogo/Photoshop.svg',
  illustrator: '/assets/techLogo/Illustrator.svg',
  invision: '/assets/techLogo/Invision.svg',
  gulp: '/assets/techLogo/Gulp.svg',
  aftereffects: '/assets/techLogo/AfterEffects.svg',
  premiere: '/assets/techLogo/Premiere.svg',
  jenkins: '/assets/techLogo/Jenkins.svg',
  azure: '/assets/techLogo/Azure.svg',
  npm: '/assets/techLogo/NPM.svg',
  jquery: '/assets/techLogo/Jquery.svg',
  aem: '/assets/techLogo/AEM.svg'
};

const TechStack: React.FC<TechStackProps> = ({ title, items }) => {
	return (
		<section className="flex flex-col gap-8 p-12 rounded-xl bg-white/10">
			{title && <h2 className="text-white self-start">{title}</h2>}
			<div className="flex flex-row flex-wrap justify-center gap-x-8 gap-y-16">
				{items.map((item, idx) => (
					<img src={iconMap[item.toLowerCase()]} key={idx} alt={item} className="w-12 h-12" />
				))}
			</div>
		</section>
	);
};

export default TechStack;

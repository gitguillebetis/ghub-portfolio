import React from 'react';
import styles from './TechStack.module.scss';

import ReactIcon from '../assets/icons/React.svg';
import VueJSIcon from '../assets/icons/VueJS.svg';
import AngularIcon from '../assets/icons/Angular.svg';
import NodeJSIcon from '../assets/icons/NodeJS.svg';
import TypescriptIcon from '../assets/icons/Typescript.svg';
import JavascriptIcon from '../assets/icons/Javascript.svg';
import HtmlIcon from '../assets/icons/HTML.svg';
import CssIcon from '../assets/icons/CSS.svg';
import SassIcon from '../assets/icons/SASS.svg';
import LessIcon from '../assets/icons/LESS.svg';
import WebpackIcon from '../assets/icons/Webpack.svg';
import DockerIcon from '../assets/icons/Docker.svg';
import FigmaIcon from '../assets/icons/Figma.svg';
import PhotoshopIcon from '../assets/icons/Photoshop.svg';
import IllustratorIcon from '../assets/icons/Illustrator.svg';
import InvisionIcon from '../assets/icons/Invision.svg';
import GulpIcon from '../assets/icons/Gulp.svg';
import AfterEffectsIcon from '../assets/icons/AfterEffects.svg';
import PremiereIcon from '../assets/icons/Premiere.svg';
import JenkinsIcon from '../assets/icons/Jenkins.svg';
import AzureIcon from '../assets/icons/Azure.svg';
import NpmIcon from '../assets/icons/NPM.svg';
import JqueryIcon from '../assets/icons/Jquery.svg';
import AemIcon from '../assets/icons/AEM.svg';

interface TechStackProps {
    title: string;
    items: string[];
}

const iconMap: { [key: string]: string } = {
    react: ReactIcon,
    vuejs: VueJSIcon,
    angular: AngularIcon,
    nodejs: NodeJSIcon,
    typescript: TypescriptIcon,
    javascript: JavascriptIcon,
    html: HtmlIcon,
    css: CssIcon,
    sass: SassIcon,
    less: LessIcon,
    webpack: WebpackIcon,
    docker: DockerIcon,
    figma: FigmaIcon,
    photoshop: PhotoshopIcon,
    illustrator: IllustratorIcon,
    invision: InvisionIcon,
    gulp: GulpIcon,
    aftereffects: AfterEffectsIcon,
    premiere: PremiereIcon,
    jenkins: JenkinsIcon,
    azure: AzureIcon,
    jquery: JqueryIcon,
    npm: NpmIcon,
    aem: AemIcon
};

const TechStack: React.FC<TechStackProps> = ({ title, items }) => {
    return (
      <section className={`${styles.cmpTechStack}`}>
        <h2>{title}</h2>
        <div className="flex justify-center gap-10">
            {items.map((item, idx) => (
                <span key={idx} className={styles['icon-wrapper']}>
                    <img src={iconMap[item.toLowerCase()]} alt={item} className="w-full h-full" />
                </span>
            ))}
        </div>
      </section>
    );
  };

export default TechStack;

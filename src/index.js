import React from 'react';
import ReactDOM from 'react-dom';
import { Application } from 'asab-webui';
import { HashRouter } from 'react-router-dom';

// SCSS
import './index.scss'

// Configuration
let ConfigDefaults = {
	title: "ASAB App",
	brand_image: {
		full: "media/logo/header-full.svg",
		minimized: "media/logo/header-minimized.svg",
	},
	footer_image: {
		src: "media/logo/footer.svg",
		alt: "Created by TeskaLabs",
		href: "https://teskalabs.com/",
	},
	default_help_url: "https://github.com/TeskaLabs/asab-webui",
};

// Modules
const modules = [];

// Load custom modules
import HomeModule from './modules/home';
modules.push(HomeModule)


// Render
ReactDOM.render((
	<HashRouter>
		<Application modules={modules} defaultpath="/catfacts" configdefaults={ConfigDefaults}/>
	</HashRouter>
), document.getElementById('app'));

import { lazy } from 'react';
import Module from 'asab-webui/abc/Module';

const CatFacts = lazy(() => import('./containers/CatFacts'));

export default class HomeModule extends Module {
	constructor(app, name){
		super(app, "HomeModule");
		app.Router.addRoute({ path: '/catfacts', exact: true, name: 'Cat facts', component: CatFacts });
		app.Navigation.addItem({
			name: 'Cat facts',
			url: '/catfacts',
			icon: 'cil-cat',
		});
	}
}

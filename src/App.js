import React from 'react';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './pages/Home'
import Art from './pages/Art'
import Index from './pages/Index'

export default () => {
  return (
		<div>
			<Router>
				<Switch>
					<Route path='/art'>
						<Art/>
					</Route>
					<Route path='/freelance'>
						<Home/>
					</Route>
					<Route path='/'>
						<Index/>
					</Route>
				</Switch>
			</Router>
		</div>
  );
}

import React from 'react';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Freelance from './pages/freelance/Freelance'
import Art from './pages/art/Art'
import Index from './pages/Index'

export default () => {
  return (
		<>
			<Router>
				<Switch>
					<Route path='/art'>
						<Art/>
					</Route>
					<Route path='/freelance'>
						<Freelance/>
					</Route>
					<Route path='/'>
						<Index/>
					</Route>
				</Switch>
			</Router>
		</>
  );
}

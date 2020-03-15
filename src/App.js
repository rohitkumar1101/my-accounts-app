import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import store from './store'
import Homepage from './Components/Homepage'
import Profile from './Components/Profile'
import Posts from './Components/Posts';
import Gallery from './Components/Gallery'
import Photos from './Components/Photos'
import ToDoList from './Components/ToDoList'

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Switch>
					<Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
					
					<Route path={`${process.env.PUBLIC_URL}/profile/:id`} component={Profile} />
					<Route path={`${process.env.PUBLIC_URL}/posts/:id`} component={Posts} />
					<Route exact path={`${process.env.PUBLIC_URL}/gallery/:id`} component={Gallery} />
					<Route exact path={`${process.env.PUBLIC_URL}/gallery/:id/:albumId`} component={Photos} />
					<Route path={`${process.env.PUBLIC_URL}/todo/:id`} component={ToDoList} />

				</Switch>
			</BrowserRouter>
		</Provider>
	);
}

export default App;

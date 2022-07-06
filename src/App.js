import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes } from './Routers';
import { DefaultLayout } from './component/Layout'

function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					{publicRoutes.map((route, index) => {
						console.log(route)
						const Page = route.component;
						let Layout = DefaultLayout;

						if (route.layout) {
							Layout = route.layout
						} else if (route.layout === null) {
							Layout = Fragment
						}

						return (
							<Route
								key={index.toString()}
								path={route.path}
								element=
								{
									<Layout>
										<Page />
									</Layout>
								}
							/>
						);
					})}
				</Routes>
			</div>
		</Router>
	);
}

export default App;

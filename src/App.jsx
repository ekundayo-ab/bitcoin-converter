import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header'
import routes from './routes';

function App() {
  return (
    <>
      <Header />
      <Switch>
        {routes.map(({exact, path, component }, index) =>
            <Route key={index} exact={exact} path={path} component={component} />)}
      </Switch>
    </>
  );
}

export default App;
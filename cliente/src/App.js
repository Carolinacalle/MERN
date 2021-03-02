import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import RegistroUsuario from './components/auth/RegistroUsuario';
import Deudores from './components/proyectos/Deudores';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/registro-usuario" component={RegistroUsuario}/>
        <Route exact path="/Deudores" component={Deudores}/>
      </Switch>
    </Router>
  );
}

export default App;

import { React, useState, useEffect } from 'react';
import { Route, Switch, useHistory, Redirect } from 'react-router-dom';
import Header from '../Header/Header';
import Main from "../Main/Main";
import './App.css';
import api from '../../utils/Api';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {

  const [cards, setCards] = React.useState([]);


  React.useEffect(() => {
    const promises = [api.];
  }, []);

    return (
        <>
        <main className="app">
            <Switch>
              <Route exact path="/">
              <Header/>
                <Main
                  cards={cards}
                />
                </Route>
              <Route exact path="/pvp1">
                <Header/>
                <Main/>
              </Route>
              </Switch>
        </main>
        </>
    )
  }

  export default App;

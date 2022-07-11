import { React, useState, useEffect } from 'react';
import { Route, Switch, useHistory, Redirect } from 'react-router-dom';
import Header from '../Header/Header';
import Main from "../Main/Main";
import './App.css';

function App() {


    return (
        <>
        <main className="app">
            <Switch>
              <Route exact path="/">
              <Header/>
                <Main
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

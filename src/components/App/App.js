import { React, useState, useEffect } from 'react';
import { Route, Switch, useHistory, Redirect } from 'react-router-dom';
import Header from '../Header/Header';
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import TP1 from "../TP1/TP1";
import PageNotFound from "../PageNotFound/PageNotFound";
import './App.css';

function App() {

    return (
        <>
        <main className="app">
          <Header/>
            <Switch>
              <Route exact path="/">
                <Main/>
                </Route>
              <Route path="/TP1">
                <TP1/>
              </Route>
              <Route path="*">
                <PageNotFound />
              </Route>
              </Switch>
          <Footer/>
        </main>
        </>
    )
  }

  export default App;

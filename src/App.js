import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './css/style.css';

import Navbar from './components/navbar';
import Home from './components/home';
import ActorsContainer from './components/actorsContainer';
import SeasonsContainer from './components/seasonsContainer';

class App extends Component {
    
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar />
                    <Route exact path="/" render={() => <Home title="Game Of Thrones" />} />
                    <Route path="/seasons/" render={() => <SeasonsContainer title="Seasons" />} />
                    <Route path="/actors/" render={() => <ActorsContainer title="Actors" />} />
                    
                </div>
            </BrowserRouter>
        );
  }
}

export default App;

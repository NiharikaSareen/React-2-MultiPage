import React from 'react';
import {SeasonList} from '../data/seasons';
import Season from './season';
import Seasons from './seasons';
import { Route} from 'react-router-dom';

const SeasonsContainer = (props) => {
    let seasonUrl = SeasonList.map((season,i) => {
        return (
          <Route key={i} path={`/seasons/${season.url}`} render={() => <Season name={season.name} image={season.profile_img} details={season.description}/>} />
        );
      });

    return (
        <React.Fragment>
          <Route exact path="/seasons" render={() => <Seasons title="Seasons"/>} />
          {seasonUrl}
        </React.Fragment>
    );
}

export default SeasonsContainer;
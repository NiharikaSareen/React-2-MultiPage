import React from 'react';
import {SeasonList} from '../data/seasons';
import { Link } from 'react-router-dom';

const Seasons = (props) => {
    let seasons = SeasonList.map((season) => {
      return (
        <div className="actor-container">
          <Link to={`/seasons/${season.url}`}><div className="actor-image" style={{ backgroundImage: "url(" + season.img_src + ")" }}></div></Link>
          <h3>{season.name}</h3>
        </div>
      );
    });

    return (
      <div className="main-content">
        <div><Link className="back" to="/">BACK</Link></div>
        <h2>{props.title}</h2>
        <div className="container">
          {seasons}
        </div>
      </div>
    );
}

export default Seasons;
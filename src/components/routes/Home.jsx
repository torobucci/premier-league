import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import photo from '../assets/skysports.png';

const Home = () => {
  const { league } = useSelector((state) => state.league);
  // console.log(league.leng);
  // if (league.length === 0) {
  //   return (
  //     <div className="spinner-container">
  //       <div className="spinner" />
  //       <div className="loading-text">Loading...</div>
  //     </div>
  //   );
  // }
  return (
    <>
      <div className="heading-content">
        <img
          src={photo}
          alt="league stars"
          className="world-image"
        />
        <div className="league-details">
          <h2>Season: 2022/2023</h2>
          <p>Teams: 20</p>
        </div>
      </div>
      <div className="stat-divide">
        <p>Stats by points</p>
      </div>
      <div className="contents">
        {league.length === 0
            && (
            <div className="spinner-container">
              <div className="spinner" />
              <div className="loading-text">Loading...</div>
            </div>
            )}
        {league.map((team) => (
          <NavLink to={`/team/${team.Name}`} className="details-link" key={team.Name}>
            <div className="cont">
              <div className="img-ico">
                <img src={team.SquadLogo} alt="team logo" className="flags" />
                <i className="fa-solid fa-circle-arrow-right" />
              </div>
              <div className="text-desc">
                <p className="team-name">{team.Name}</p>
                <p className="points">{`${team.Points} pts`}</p>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </>

  );
};

export default Home;

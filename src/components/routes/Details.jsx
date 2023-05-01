import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';

const Details = () => {
  const params = useParams();
  const { league } = useSelector((state) => state.league);
  const team = league.find((team) => team.Name === params.teamName);
  useEffect(() => window.scrollTo(0, 0), []);
  if (!team) {
    return (
      <div className="spinner-container">
        <div className="spinner" />
        <div className="loading-text">Loading...</div>
      </div>
    );
  }
  return (
    <>
      <div className="heading-content-details">
        <img
          src={team.SquadLogo}
          alt={`Flag of ${team.name}`}
          className="flags detail"
          height="40px"
        />
        <h2>
          {team.Name}
        </h2>
        <NavLink to="/">
          <i className="fa-solid fa-chevron-left" />
        </NavLink>
      </div>
      <div className="ar-characters">
        <table>
          <caption>Team&apos;s Stats</caption>
          <tbody>
            <tr>
              <td>Team Position</td>
              <td>{team.Position}</td>
            </tr>
            <tr>
              <td>Points</td>
              <td>{team.Points}</td>
            </tr>
            <tr>
              <td>Games Won</td>
              <td>{team.Winned}</td>
            </tr>
            <tr>
              <td>Games Lost</td>
              <td>
                {team.Loosed}
              </td>
            </tr>
            <tr>
              <td>Premier Leageue Titles</td>
              <td>{team.Tie}</td>
            </tr>
            <tr>
              <td>Goal Difference</td>
              <td>{team['Goal Difference']}</td>
            </tr>
            <tr>
              <td>Games Played</td>
              <td>{team.Played}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Details;

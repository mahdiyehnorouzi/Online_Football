import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [matches, setMatches] = useState([]);
  useEffect(() => {
    const fecthData = async () => {
      try {
        const { data } = await axios.get('https://api.football-data.org/v2/matches', {
          headers: {
            'X-Auth-Token': 'ea7cb0230e764362aef72269a19ed9d5'
          }
        });
        setMatches(data.matches);
      } catch (err) {
        alert(err);
      }
    };
    fecthData();
  }, []);
  return (
    <div className="App">
      <div className="grid-container">
        <header className="row center">
          <div>
            Enland League Football Matches
          </div>
        </header>
        <main>
          <div className="row top">
            <div className="col-body">
              <ul>
                {matches.map((match) => (
                  <li>
                    <div className="match-box">
                      <div className="spec row center bg-smoke">
                        <span>{match.utcDate}</span>
                      </div>
                      <div className="row top">
                        <div className="col-1 pictureStyle">
                          <img src={`https://crests.football-data.org/${match.homeTeam.id}.svg`} alt="Trulli" width="180" height="150" />
                          <br/>
                          <span>{match.homeTeam.name}</span>
                        </div>
                        <div className="col-1">
                          <div >
                          <span className="result">{match.stage}</span>
                          </div>
                          <br />
                          <div>
                          <span className="score">{match.score.fullTime.homeTeam ? match.score.fullTime.homeTeam : 0} - {match.score.fullTime.awayTeam ? match.score.fullTime.awayTeam : 0}</span>
                          </div>
                          <div>
                          <span className="status">{match.status}</span>
                          </div>
                        </div>
                        <div className="col-1 pictureStyle">
                          <img src={`https://crests.football-data.org/${match.awayTeam.id}.svg`} alt="Trulli" width="180" height="150" />
                          <br/>
                          <span>{match.awayTeam.name}</span> 
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </main>
        <footer className="row center">
          <div>
            By Mahdiyeh Norouzi - Student Number 981003150
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;

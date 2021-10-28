import axios from 'axios';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './index.css';

const GameCard = (props) => {
  const [basicInfo, setBasicInfo] = useState([]);
  const [stats, setStats] = useState([]);
  const [visual, setVisual] = useState([]);

  useEffect(() => {
    axios
      .get(props.heroApi)
      .then((resp) => resp.data)
      .then((data) => setBasicInfo(data));
  }, []);

  useEffect(() => {
    axios
      .get(props.heroApi)
      .then((resp) => resp.data)
      .then((data) => setStats(data.powerstats));
  }, []);

  useEffect(() => {
    axios
      .get(props.heroApi)
      .then((resp) => resp.data)
      .then((data) => setVisual(data.image));
  }, []);

  return (
    <article className="gameCard">
      <section className="cardVisual">
        <img src={visual.url} alt="" />
      </section>
      <section className="playValue">
        <p className="battleStat">
          {Math.round(
            (parseInt(stats.power, 10) +
              parseInt(stats.speed, 10) +
              parseInt(stats.intelligence, 10)) /
              3
          )}
        </p>
        <p className="rarityStat">Rarity</p>
        <p className="summonStat">{parseInt(stats.combat, 10)}</p>
      </section>
      <section className="charaName">
        <p>{basicInfo.name}</p>
      </section>
    </article>
  );
};

GameCard.propTypes = {
  heroApi: PropTypes.string.isRequired,
};

export default GameCard;

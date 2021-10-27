import axios from 'axios';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const GameCard = ({ heroApi }) => {
  const [basicInfo, setBasicInfo] = useState([]);
  const [stats, setStats] = useState([]);
  const [visual, setVisual] = useState([]);

  useEffect(() => {
    axios
      .get({ heroApi })
      .then((resp) => resp.data)
      .then((data) => setBasicInfo(data));
  }, []);

  useEffect(() => {
    axios
      .get({ heroApi })
      .then((resp) => resp.data)
      .then((data) => setStats(data.powerstats));
  }, []);

  useEffect(() => {
    axios
      .get({ heroApi })
      .then((resp) => resp.data)
      .then((data) => setVisual(data.image));
  }, []);

  return (
    <article className="gameCard">
      <section>
        <img src={visual.url} alt="" />
      </section>
      <section>
        <p>
          {(parseInt(stats.power, 10) +
            parseInt(stats.speed, 10) +
            parseInt(stats.intelligence, 10)) /
            3}
        </p>
        <p>Rarity</p>
        <p>{parseInt(stats.combat, 10)}</p>
      </section>
      <section>
        <p>{basicInfo.name}</p>
      </section>
    </article>
  );
};

GameCard.propTypes = {
  heroApi: PropTypes.string.isRequired,
};

export default GameCard;

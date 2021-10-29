import axios from 'axios';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './index.css';

const GameCard = ({ heroApi, cardSize }) => {
  const [basicInfo, setBasicInfo] = useState([]);
  const [stats, setStats] = useState([]);
  const [visual, setVisual] = useState([]);
  const [borderColor, setBorderColor] = useState('');

  useEffect(() => {
    axios
      .get(`https://www.superheroapi.com/api.php/10226516634046414/${heroApi}`)
      .then((resp) => resp.data)
      .then((data) => setBasicInfo(data));
  }, []);

  useEffect(() => {
    axios
      .get(`https://www.superheroapi.com/api.php/10226516634046414/${heroApi}`)
      .then((resp) => resp.data)
      .then((data) => setStats(data.powerstats));
  }, []);

  useEffect(() => {
    axios
      .get(`https://www.superheroapi.com/api.php/10226516634046414/${heroApi}`)
      .then((resp) => resp.data)
      .then((data) => setVisual(data.image));
  }, []);

  const rarityLevel = Math.round(
    (parseInt(stats.power, 10) +
      parseInt(stats.intelligence, 10) +
      parseInt(stats.speed, 10) +
      parseInt(stats.strength, 10) +
      parseInt(stats.durability, 10) +
      parseInt(stats.combat, 10)) /
      6
  );

  useEffect(() => {
    if (rarityLevel >= 80) {
      setBorderColor('legendaryCard');
    } else if (rarityLevel >= 60 && rarityLevel < 80) {
      setBorderColor('epicCard');
    } else if (rarityLevel >= 40 && rarityLevel < 60) {
      setBorderColor('ultraCard');
    } else if (rarityLevel >= 20 && rarityLevel < 40) {
      setBorderColor('rareCard');
    } else {
      setBorderColor('commonCard');
    }
  });

  return (
    <article className={`${borderColor} gameCard card${cardSize}`}>
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
        <p className="rarityStat">{rarityLevel}</p>
        <p className="summonStat">
          {Math.round(
            (parseInt(stats.combat, 10) +
              parseInt(stats.speed, 10) +
              parseInt(stats.durability, 10)) /
              3
          )}
        </p>
      </section>
      <section className="charaName">
        <p>{basicInfo.name}</p>
      </section>
    </article>
  );
};

GameCard.propTypes = {
  heroApi: PropTypes.number.isRequired,
  cardSize: PropTypes.string.isRequired,
};

export default GameCard;

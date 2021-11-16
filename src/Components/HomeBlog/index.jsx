import './index.css';
import ArticleHomeBlog from '../ArticleHomeBlog';
import fight from './Images/fight.png';
import cardsgame from './Images/cardsGame.png';
import heroeslist from './Images/heroesList.png';

function HomeBlog() {
  return (
    <section className="homeNews">
      <h1> News </h1>
      <div className="articleList">
        <ArticleHomeBlog title="Enter the fight" image={fight} />
        <ArticleHomeBlog title="Find all our cards" image={heroeslist} />
        <ArticleHomeBlog title="Next card releases" image={cardsgame} />
      </div>
    </section>
  );
}

export default HomeBlog;

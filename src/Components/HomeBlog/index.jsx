import './index.css';
import ArticleHomeBlog from '../ArticleHomeBlog/index';
import fight from './Images/fight.png';
import cardsgame from './Images/cardsgame.png';
import heroeslist from './Images/heroeslist.png';

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

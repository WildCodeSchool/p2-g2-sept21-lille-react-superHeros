import './Index.css';
import ArticleHomeBlog from '../ArticleHomeBlog/index';
import fight from './Images/fight.jpg';
import cardsgame from './Images/cardsgame.jpg';
import héroslist from './Images/héroslist.jpg';

function HomeBlog() {
  return (
    <section className="HomeNews">
      <h1> News </h1>
      <div className="articleList">
        <ArticleHomeBlog title="Enter the fight" image={fight} />
        <ArticleHomeBlog title="Find all our cards" image={héroslist} />
        <ArticleHomeBlog title="Next card releases" image={cardsgame} />
      </div>
    </section>
  );
}

export default HomeBlog;

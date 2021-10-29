import './Index.css';
import Articles from '../ArticleHomeBlog/index';

function HomeBlog() {
  return (
    <section className="HomeNews">
      <h1> News </h1>
      <div className="articleList">
        <Articles
          title="Find all our cards"
          image="https://blog.comic-con-paris.com/wp-content/uploads/2019/07/super-heros-marvel-min.jpg"
        />
        <Articles
          title="Enter the fight Now"
          image="https://static.hitek.fr/img/actualite/2016/04/28/fb_mvdc.jpg"
        />
        <Articles
          title="Next card releases"
          image="https://vonguru.fr/wp-content/uploads/2020/02/dc-base-cartes-vonguru-images-culturegeek.jpg"
        />
      </div>
    </section>
  );
}

export default HomeBlog;

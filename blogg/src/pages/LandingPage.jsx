import { ArticleContext } from '../context/ArticleContext';
import { useContext, useState } from 'react';
import Article from '../components/Article/Article';
import CreateArticle from '../components/CreateArticle/CreateArticle';

const LandingPage = () => {
  const { articles } = useContext(ArticleContext);
  const [showCreatePost, setShowCreatePost] = useState(false); // ändra till false

  const toggleShowCreatePost = () => {
    if (showCreatePost === false) {
      setShowCreatePost(true);
    } else {
      setShowCreatePost(false);
    }
  };

  const hideCreatePost = () => {
    setShowCreatePost(false);
  };

  return (
    <div className="create-container">
      <button className="create-post-btn" onClick={toggleShowCreatePost}>
        {showCreatePost ? 'Cancel post' : 'Create post'}
      </button>

      {showCreatePost ? <CreateArticle hideCreatePost={hideCreatePost} /> : null}

      {articles.map((article, index) => {
        return (
          <Article
            key={article.id}
            author={article.author}
            title={article.title}
            text={article.text}
            comments={article.comments}
            index={index}
            id={article.id}
          />
        );
      })}
    </div>
  );
};

export default LandingPage;

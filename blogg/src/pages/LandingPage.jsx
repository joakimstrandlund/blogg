import { ProductContext } from '../context/ProductContext';
import { useContext, useState } from 'react';
import Article from '../components/Article/Article';
import CreateArticle from '../components/CreateArticle/CreateArticle';

const LandingPage = () => {
  const { products } = useContext(ProductContext);
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
    <div>
      <button onClick={toggleShowCreatePost}>{showCreatePost ? 'Cancel post' : 'Create post'}</button>

      {showCreatePost ? <CreateArticle hideCreatePost={hideCreatePost} /> : null}

      {products.map((product, index) => {
        return <Article key={product.id} author={product.author} title={product.title} text={product.text} comments={product.comments} index={index} />;
      })}
    </div>
  );
};

export default LandingPage;

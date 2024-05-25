import './CreateArticle.css';
import { useState, useContext } from 'react';
import { ArticleContext } from '../../context/ArticleContext';

const CreateArticle = (props) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const { addArticle } = useContext(ArticleContext);

  const addPost = () => {
    const id = Date.now();
    addArticle(title, text, id);
    setTitle('');
    setText('');
    props.hideCreatePost();
  };

  return (
    <div className="create-post">
      <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} value={title} />
      <textarea placeholder="Type post" rows={5} onChange={(e) => setText(e.target.value)} value={text}></textarea>
      <button className="post-btn" onClick={addPost}>
        Post
      </button>
    </div>
  );
};

export default CreateArticle;

import './CreateArticle.css';
import { useState, useContext } from 'react';
import { ArticleContext } from '../../context/ArticleContext';

const CreateArticle = (props) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const { addArticle } = useContext(ArticleContext);

  const addPost = () => {
    const id = Date.now();
    addArticle(title, text, id); // om du lägger in ID blir det fucked då får du upp nummer
    setTitle('');
    setText('');
    props.hideCreatePost();
  };

  return (
    <div className="create-post">
      <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} value={title} />
      <textarea placeholder="Type post" rows={5} onChange={(e) => setText(e.target.value)} value={text}></textarea>
      <button onClick={addPost}>Post</button>
      {/* TEST  */}
      {/* <button onClick={removeArticle}>Remove</button> Ta bort detta */}
      {/* test */}
      {/* <button onClick={editArticle}>Edit</button> ta bort detta */}
    </div>
  );
};

export default CreateArticle;

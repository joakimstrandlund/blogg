import './CreateArticle.css';
import { useState, useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';

const CreateArticle = (props) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const { addProduct } = useContext(ProductContext);

  const addPost = () => {
    const id = Date.now();
    addProduct(title, text);
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

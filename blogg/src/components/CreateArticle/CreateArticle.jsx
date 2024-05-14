import './CreateArticle.css';
import { useState, useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';

const CreateArticle = (props) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const { addProduct } = useContext(ProductContext);

  const addPost = () => {
    addProduct(title, text);

    setTitle('');
    setText('');
    props.hideCreatePost();
  };

  //   const removeArticle = () => {
  // const [editedText, setEditedText] = useState(text)

  //   }

  // Function to remove article
  const removeArticle = () => {
    // Assuming you have the ID of the article you want to remove
    // You need to replace articleId with the actual ID of the article you want to remove
    removeProduct(props);
  };

  const editArticle = () => {
    // Here, you can navigate to a page where you can edit the article,
    // or you can show a modal for editing, etc.
    // For example, you can redirect to an edit page:
    // history.push(`/edit-article/${articleId}`);
  };

  return (
    <div className="create-post">
      <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} value={title} />
      <textarea placeholder="Type post" rows={5} onChange={(e) => setText(e.target.value)} value={text}></textarea>
      <button onClick={addPost}>Post</button>
      {/* TEST  */}
      <button onClick={removeArticle}>Remove</button>
      {/* test */}
      <button onClick={editArticle}>Edit</button>
    </div>
  );
};

export default CreateArticle;

import './Article.css';
import { useState, useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';
import { UserContext } from '../../context/UserContext';
import { AuthContext } from '../../context/AuthContext';

const Article = (props) => {
  const { removeProduct, addComment, editProduct } = useContext(ProductContext);
  const { currentUser } = useContext(AuthContext);
  const canEdit = currentUser.email === props.author;
  const canRemove = currentUser.email === props.author;

  const [editMode, setEditMode] = useState(false);
  const [editTitle, setEditTitle] = useState(props.title);
  const [comment, setComment] = useState('');

  const [showCreateComment, setShowCreateComment] = useState(false);

  const handleRemove = () => {
    removeProduct(props.id); // Ta bort inlägg med id
  };

  const handleEdit = () => {
    // const newText = ('Edit your post:', props.text);
    // if (newText) {
    //   editProduct(props.id, newText); // Redigera inlägg med id och nytt textinnehåll
    // }
    setEditMode(true);
  };

  const toggleShowCreateComment = () => {
    setShowCreateComment((prevState) => !prevState);
  };

  const handleAddComments = () => {
    addComment(comment, props.index);
    setComment('');
  };

  return (
    <div className="Article">
      <p>{props.author}</p>
      {editMode ? <input type="text" value={props.title} /> : <h2>{props.title}</h2>}
      {/* <p>{ props.text}</p> */}
      {/* <h2>{props.title}</h2> */}
      {editMode ? <textarea value={props.text} /> : <p>{props.text}</p>}

      {canEdit ? <button onClick={handleEdit}>Edit</button> : null}
      {canRemove ? <button onClick={handleRemove}>Remove</button> : null}

      <h2>Comments</h2>

      <div className="comments">
        {props.comments.map((comment, i) => {
          return (
            <div key={i}>
              <p>{comment.author}</p>
              <p>{comment.text}</p>
            </div>
          );
        })}
      </div>
      <button onClick={toggleShowCreateComment}>Add comment</button>
      {showCreateComment ? (
        <div>
          <input type="text" onChange={(e) => setComment(e.target.value)} value={comment} /> <button onClick={handleAddComments}>Comment</button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Article;

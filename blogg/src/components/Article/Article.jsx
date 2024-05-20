import './Article.css';
import { useState, useContext, useEffect } from 'react';
import { ProductContext } from '../../context/ProductContext';
import { UserContext } from '../../context/UserContext';
import { AuthContext } from '../../context/AuthContext';

const Article = (props) => {
  const { removeArticle, addComment, editProduct } = useContext(ProductContext);
  const { currentUser } = useContext(AuthContext);
  const canEdit = currentUser.email === props.author;
  const canRemove = currentUser.email === props.author;

  const [editMode, setEditMode] = useState(false);
  const [editTitle, setEditTitle] = useState(props.title);
  const [editText, setEditText] = useState(props.text);
  const [comment, setComment] = useState('');

  const [showCreateComment, setShowCreateComment] = useState(false);

  // Update local state when props change// chat gpt // du kan ta bort detta
  useEffect(() => {
    setEditTitle(props.title);
    setEditText(props.text);
  }, [props.title, props.text]);

  // const handleRemove = () => {
  //   console.log('Removing article with id:', props.id);
  //   removeArticle(props.id); // Ta bort inlägg med id
  // };

  // const handleRemove = (id) => {
  //   removeArticle((props) => props.id !== id);
  // };

  const handleRemove = () => {
    console.log('Removing article with id:', props.id);
    removeArticle(props.id);
  };

  // const handleRemove = () => {
  //   if (window.confirm('Are you sure you want to delete this article?')) {
  //     removeArticle(props.id);
  //   }
  // };

  const handleEdit = () => {
    // const newText = ('Edit your post:', props.text);
    // if (newText) {
    //   editProduct(props.id, newText); // Redigera inlägg med id och nytt textinnehåll
    // }
    setEditMode(true);
  };

  const handleSave = () => {
    editProduct(props.id, { title: editTitle, text: editText }); // Redigera inlägg med id och nytt textinnehåll
    setEditMode(false);
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
      {editMode ? (
        <div>
          <input type="text" value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
          <textarea value={editText} onChange={(e) => setEditText(e.target.value)} />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setEditMode(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <h2>{props.title}</h2>
          <p>{props.text}</p>
          {canEdit && <button onClick={handleEdit}>Edit</button>}
        </div>
      )}
      {canRemove && <button onClick={handleRemove}>Remove</button>}
      {/* <button onClick={handleRemove}>Remove</button> */}

      <h3>Comments</h3>
      <div className="comments">
        {props.comments.map((comment, i) => (
          <div key={i}>
            <p>{comment.author}</p>
            <p>{comment.text}</p>
          </div>
        ))}
      </div>
      <button onClick={toggleShowCreateComment}>Add comment</button>
      {showCreateComment && (
        <div>
          <input type="text" onChange={(e) => setComment(e.target.value)} value={comment} />
          <button onClick={handleAddComments}>Comment</button>
        </div>
      )}
    </div>
  );
};

export default Article;

//   return (
//     <div className="Article">
//       <p>{props.author}</p>
//       {editMode ? <input type="text" value={props.title} /> : <h2>{props.title}</h2>}
//       {/* <p>{ props.text}</p> */}
//       {/* <h2>{props.title}</h2> */}
//       {editMode ? <textarea value={props.text} /> : <p>{props.text}</p>}

//       {canEdit ? <button onClick={handleEdit}>Edit</button> : null}
//       {canRemove ? <button onClick={handleRemove}>Remove</button> : null}

//       <h3>Comments</h3>

//       <div className="comments">
//         {props.comments.map((comment, i) => {
//           return (
//             <div key={i}>
//               <p>{comment.author}</p>
//               <p>{comment.text}</p>
//             </div>
//           );
//         })}
//       </div>
//       <button onClick={toggleShowCreateComment}>Add comment</button>
//       {showCreateComment ? (
//         <div>
//           <input type="text" onChange={(e) => setComment(e.target.value)} value={comment} /> <button onClick={handleAddComments}>Comment</button>
//         </div>
//       ) : (
//         <></>
//       )}
//     </div>
//   );
// };

// export default Article;

import './Article.css';
import { useState, useContext, useEffect } from 'react';
import { ArticleContext } from '../../context/ArticleContext';
import { UserContext } from '../../context/UserContext';
import { AuthContext } from '../../context/AuthContext';
import { ArticleProvider } from '../../context/ArticleContext';

const Article = (props) => {
  const { removeArticle, addComment, editArticle } = useContext(ArticleContext);
  const { currentUser } = useContext(AuthContext);
  const canEdit = currentUser.email === props.author;
  const canRemove = currentUser.email === props.author;

  const [editMode, setEditMode] = useState(false);
  const [editTitle, setEditTitle] = useState(props.title);
  const [editText, setEditText] = useState(props.text);
  const [comment, setComment] = useState('');

  const [showCreateComment, setShowCreateComment] = useState(false);

  const handleRemove = () => {
    console.log('Removing article with id:', props.id);
    removeArticle(props.id);
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    editArticle(props.id, { title: editTitle, text: editText }); // Redigera inlägg med id och nytt textinnehåll
    console.log(handleSave);
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
    <div className="article">
      <div className="author-info">
        <p className="author">{props.author}</p>
      </div>
      {editMode ? (
        <div>
          <input type="text" value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
          <textarea value={editText} onChange={(e) => setEditText(e.target.value)} />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setEditMode(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <h2 className="title">{props.title}</h2>
          <p>{props.text}</p>
          {canEdit && (
            <button className="edit-btn" onClick={handleEdit}>
              Edit post
            </button>
          )}
        </div>
      )}
      {canRemove && (
        <button className="remove-btn" onClick={handleRemove}>
          {' '}
          Delate post
        </button>
      )}

      <div className="comment-box">
        <h3>Comments {props.comments.length}</h3>
        <div className="comments">
          {props.comments.map((comment, i) => (
            <div className="comment" key={i}>
              <p className="comment-author">{comment.author}</p>
              <p className="comment-text">{comment.text}</p>
            </div>
          ))}
        </div>
        <button className="add-comment-btn" onClick={toggleShowCreateComment}>
          Add comment
        </button>
        {showCreateComment && (
          <div className="create-comment">
            <input type="text" onChange={(e) => setComment(e.target.value)} value={comment} />
            <button onClick={handleAddComments}>Comment</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Article;

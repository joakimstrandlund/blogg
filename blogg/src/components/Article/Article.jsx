import './Article.css';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const Article = (props) => {
  // const { userName } = useContext(UserContext);
  // const canEdit = userName === author; // kolla upp hur du gör detta. Men det betyder att username är = användare som gör att man kan edit och remove

  return (
    <div className="Article">
      <p>{props.author}</p>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </div>
  );
};

export default Article;

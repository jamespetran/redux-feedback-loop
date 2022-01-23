import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';



function Comment() {
  const commentValue = useSelector(store => store.comment);
  const [commentInput, setCommentInput] = useState(commentValue);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('submitting comment:', commentInput);
    dispatch({
      type: "SUBMIT_COMMENT",
      payload: commentInput,
    })
    history.push('/review');
  }


  return (
    <div id="comment" className="page-content">
      <h1>
        Any comments you would like to leave?
      </h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="submit">
          <Link to="/support">
            <button value="PREV">PREV</button>
          </Link>
        </div>
        <div className="input-box">
          <h3 className="question">Comments?</h3>
          <textarea
            name="Text1"
            cols="30"
            rows="6"
            value={commentInput}
            onChange={evt => { setCommentInput(evt.target.value); }}
          />
        </div>
        <div className="submit">


          <Link to="/support">
            <button value="NEXT" onClick={handleSubmit}>NEXT</button>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Comment;
import { useState } from 'react';


const CommentForm = (props) => {
  const [commentData, setCommentData] = useState({
    content:''
  })

  return (
    <>
      <div className={styles.commentArea}>
        <h1 className={styles.tab}>Comments</h1>
          {props.comments.map((comment, idx) =>
            <div key={idx}>
              <li>
                {comment.author?.name} - "{comment.content}"
                {props.user?.profile === comment?.author?._id &&
                  <button className={styles.delete} onClick={() => props.handleDeleteComment(comment._id, props.movie._id)}>
                    Delete
                  </button>}
              </li>
              <br/>
            </ div>,
          )}
        </div>
      <form autoComplete="off" ref={formElement} onSubmit= >
        <label htmlFor="comment-input"></label>
        <textarea 
          type="text" 
          name="content"
          value={commentData.content}
          onChange=
          required={true}
        />
        <button type='submit'>
          Add Comment
        </button>
      </form>

    </>
  );
}

export default CommentForm;
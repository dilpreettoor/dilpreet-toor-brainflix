import React, { useEffect, useState } from "react";
import axios from "axios";
import "./comments.css";
import profile from "../../assets/images/Mohan-muruge.jpg";

function Comments(props) {
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([null]);

  useEffect(() => {
    if (props.selectedVideo) {
      axios
        .get(
          `http://localhost:5050/videos/${props.selectedVideo.id}`
        )
        .then((response) => {
          setComments(response.data.comments);
          setLoading(false);
        })
        .catch((error) => {
          console.log("Error fetching comments:", error);
        });
    }
  }, [props.selectedVideo]);
  if (!props.selectedVideo || loading) {
    return <div>Loading...</div>; 
  }

  const handleCommentBtn = (event) => {
    event.preventDefault();

    console.log("New Comment added");
  }


  
  return (
    <section className="comments">
      <h2 className="comments__count">
      {comments.length} Comment{comments.length !== 1 ? "s" : ""}
      </h2>
      <div className="comments__wrapper-row">
        <img
          className="comments__form-profile"
          src={profile}
          alt="profile picture"
        ></img>

        <form className="comments__form" onSubmit={handleCommentBtn}>
          <div className="comments__form-container">
            <div className="comments__comment-info">
            <h3 className="comments__comment-box-title">JOIN THE CONVERSATION</h3>
            <textarea
              className="comments__form-txt"
              type="text"
              placeholder="Add a new comment"
            ></textarea>
            </div>
            <button className="comments__btn">Comment</button>
          </div>
        </form>
      </div>

      <div className="comments__comments-list">
        
            {comments.map((comment, index) => (
                <div key={index} className="comments__comment">
                <img
            className="comments__comment-profile"
            src={profile}
            alt="profile picture"
          ></img>
          <div className="comments__comment-body">
            <div className="comments__comment-title">
              <h2 className="comments__comment-title--name">{comment.name}</h2>

              <span className="comments__comment-title--date">{new Date(comment.timestamp).toLocaleDateString('en-US')}</span>
            </div>

            <p className="comments__comment-text">
            {comment.comment}
            </p>
          </div>
        </div>
            ))}
          
      </div>
    </section>
  );
}

export default Comments;

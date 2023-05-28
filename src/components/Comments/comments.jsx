import "./comments.scss";
import profile from "../../assets/images/Mohan-muruge.jpg";

function Comments(props) {
  const date = new Date(props.selectedVideo.comments[0].timestamp);
  const formatedDate = date.toLocaleDateString("en-US");
  return (
    <section className="comments">
      <h2 className="comments__count">
        {" "}
        {props.selectedVideo.comments.length} Comments
      </h2>
      <div className="comments__wrapper-row">
        <img
          className="comments__form-profile"
          src={profile}
          alt="profile picture"
        ></img>

        <form className="comments__form">
          <div className="comments__form-container">
            <h3>JOIN THE CONVERSATION</h3>
            <textarea
              className="comments__form-txt"
              type="text"
              placeholder="Add a new comment"
            ></textarea>
            <button className="comments__btn">Comment</button>
          </div>
        </form>
      </div>

      <div className="comments__comments-list">
        <div className="comments__comment">
          <img
            className="comments__comment-profile"
            src={profile}
            alt="profile picture"
          ></img>
          <div className="comments__comment-body">
            <div className="comments__comment-title">
              <span className="comments__comment-title--name">{props.selectedVideo.comments[0].name}</span>

              <span className="comments__comment-title--date">{formatedDate}</span>
            </div>

            <p className="comments__comment-text">
            {props.selectedVideo.comments[0].comment}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Comments;

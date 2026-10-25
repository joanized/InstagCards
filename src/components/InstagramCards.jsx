import "./InstagramCards.css";
import { FaHeart, FaRegComment } from "react-icons/fa";
import { FiSend, FiBookmark } from "react-icons/fi";
const InstagramCard = (props) => {
  return (
    <section className="Instagram_wrapper">
      <article className="insta_header">
        <div className="insta_profile">
          <img src={props.ProfileImage} alt={`${props.UserName}'s profile`} />
        </div>

        <div className="insta_name">
          <h4>
            {props.UserName}
            <span className="insta_tick">✔</span>
          </h4>
          <p>{props.UserLocation}</p>
        </div>

        <div className="insta_dots">
          <h3>...</h3>
        </div>
      </article>

      <article className="insta_post">
        {props.PostIsVideo ? (
          <video src={props.PostImage} autoPlay loop muted playsInline />
        ) : (
          <img src={props.PostImage} alt={`${props.UserName}'s post`} />
        )}
      </article>

      <article className="insta_icons">
        <div className="icon_left">
          <span style={{ color: "red" }}>
            <FaHeart />
          </span>

          <span>
            <FaRegComment />
          </span>
          <span>
            <FiSend />
          </span>
        </div>

        <div className="icon_right">
          <FiBookmark />
        </div>
      </article>

      <article className="insta_text">
        <p className="insta_likes">{props.LikesCount} likes</p>

        <p className="insta_caption">
          <b>{props.UserName}</b>
          <span className="insta_tick">✔</span>
          {props.PostCaption}
        </p>

        {props.CommentsCount > 0 ? (
          <p className="insta_comments">
            View all {props.CommentsCount} comments
          </p>
        ) : (
          <p className="insta_comments">No comments yet</p>
        )}
      </article>
    </section>
  );
};

export default InstagramCard;

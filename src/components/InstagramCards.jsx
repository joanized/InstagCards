import "./InstagramCards.css";

const instaCard = () => {
  return (
    <section className="insta_body">
      <article className="insta_wrapper">
        <div className="insta_header">
          <article className="profile_holder">
            <div className="profile">
              <img src="" alt="" />
            </div>
          </article>
          <article className="username_holder">
            <span>username</span>
            <p>Location here</p>
          </article>
        </div>
        <article className="pic_holder"></article>
        <div className="icons_hoder"></div>
        <article className="likes_holder"></article>
        <div className="text_holdert"></div>
        <article className="comment_holder"></article>
      </article>
    </section>
  );
};

export default instaCard;

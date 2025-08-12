import { useState } from "react";

export function TwitterFollowCard({ userName, children }) {
  const [isFollowing, setIsFollowing] = useState(false);
  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followcard-followButton following"
    : "tw-followcard-followButton";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };
  return (
    <article className="tw-followcard">
      <header className="tw-followcard-header">
        <img
          className="tw-followcard-avatar"
          alt="videogamedunkey pp"
          src={`https://unavatar.io/youtube/${userName}`}
        />
        <div className="tw-followcard-info">
          <strong>{children}</strong>
          <span className="tw-followcard-username">@{userName}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followcard-text">{text}</span>
          <span className="tw-followcard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}

import React from 'react';
import styles from './UserCard.module.css';

const UserCard = ({ name, tag, location, avatar, stats }) => (
  // <li>
  //   <p>{name}</p>
  //   <span>{email}</span>
  //   <p>{country}</p>
  // </li>
  <div className={styles.profileContainer}>
    <div className={styles.profile}>
      <div class="description">
        <img src={avatar} alt="user avatar" class="avatar" />
        <p class="name">{name}</p>
        <p class="tag">@{tag}</p>
        <p class="location">{location}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{stats.followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{stats.views}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  </div>
);

export default UserCard;

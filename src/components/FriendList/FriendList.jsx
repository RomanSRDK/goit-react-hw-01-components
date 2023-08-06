import PropTypes from 'prop-types';
import styles from './FriendList.module.css';
import 'modern-normalize/modern-normalize.css';

export const FriendList = ({ friends }) => {
  const friendsCard = friends.map(({ avatar, name, isOnline, id }) => (
    <li className={styles.item} key={id}>
      <span
        className={styles.status}
        width="20"
        height="20"
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      ></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  ));

  return <ul className={styles.friendList}>{friendsCard}</ul>;
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
};
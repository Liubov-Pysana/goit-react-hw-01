import css from "./FriendListItem.module.css";

export default function FriendListItem({ image, name, status }) {
    return (
        <div className={css.friendListItem}>
            <img className={css.image} src={image} alt="Avatar" width="48" />
            <p className={css.name}>{name}</p>
            {status ? <p className={css.online}>Online</p> : <p className={css.offline}>Offline</p>}
        </div>
    );
}

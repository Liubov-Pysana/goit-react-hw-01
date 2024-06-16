import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

export default function FriendList({ friends }) {
    const render = friends.map((friend) => {
        return (
            <li key={friend.id} className={css.friendListLi}>
                <FriendListItem image={friend.avatar} name={friend.name} status={friend.isOnline} />
            </li>
        );
    });

    return <ul className={css.friendListContainer}>{render}</ul>;
}

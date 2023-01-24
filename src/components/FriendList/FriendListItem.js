import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export function FriendListItem ({id, avatar, name, isOnline}) {
    return (<li key={id} className={css.item}>
                {isOnline === true ? <span className={css.statusGreen}></span> : <span className={css.statusRed}></span>}
                <span className={css.status}></span>
                <img className={css.avatar} src={avatar} alt={name} width="48" />
                <p className={css.name}>{name}</p>
            </li>
)
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};
import { useContext } from 'react';
import {useHistory} from 'react-router-dom' 

import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import FavoritesContext from '../../store/favorite-context';

function MeetupItem(props) {
    const history = useHistory();

    const favoritesCtx = useContext(FavoritesContext);

    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

    function toggleFavoriteStatusHandler() {
        if (itemIsFavorite) {
            favoritesCtx.removeFavorite(props.id);
        } else {
            favoritesCtx.addFavorite({
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                address: props.address,
            });
        }
    }

    
    function deleteMeetupHandler() {
        
        fetch(`https://fir-react-scheduler-default-rtdb.firebaseio.com/meetups/${props.id}.json`, 
        {
            method: 'DELETE',
            headers: {
                'Contype-Type': 'application/json'
            }
        }).then(() => {
            history.go('/');
        });
    
       }

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavoriteStatusHandler}>
                        {itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}
                    </button>
                    <button onClick={()=>{window.location.href ="update"}}>
                        Update
                    </button>
                    <button onClick={deleteMeetupHandler}>
                        Delete
                    </button>
                </div>
            </Card>
        </li>
    );
}

export default MeetupItem;
import { useHistory } from 'react-router-dom';
//import NewMeetupForm from "../components/meetups/NewMeetupForms";
import UpdateMeetupForm from '../components/meetups/UpdateMeetupForm';

function UpdateMeetupPage(props) { 
    const history = (useHistory);
    


    function updateMeetupHandler(updateMeetupData) {
        
        fetch(`https://fir-react-scheduler-default-rtdb.firebaseio.com/${props.id}meetups.json`, 
        {
            method: 'PUT',
            body: JSON.stringify(updateMeetupData),
        headers: {
            'Contype-Type': 'application/json'
        }
    }).then(() => {
        history.replace('/');
    });
    
       }


    return (
        <section>
        <h1>Update Meetup</h1>
        <UpdateMeetupForm onUpdateMeetup={updateMeetupHandler}/>
        </section>
    
        );


}

export default UpdateMeetupPage;
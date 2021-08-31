import { useRef } from 'react';  // I believe this is the problem 
                                //I may need to return the history and the props

import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

function UpdateMeetupForm(props) { // THIS IS WHAT NEEDS TO CHANGE!!!!!
    
    const titleInputRef = useRef(props.title);
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    
    
    function submitHandler(event) { // I believe the submit will remain remotely the same
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const updateMeetupData = { //this will update the changed values
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription, 
        };

        props.onUpdateMeetup(updateMeetupData);

    }
    //once all the data above is corrected I believe that this information will not need to change
    return(
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='title'>Meetup Title</label>
                    <input type='text' required id='title' ref={props.title}/>
                    <p>{props.title}</p>
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Meetup Image</label>
                    <input type='url' required id='image' ref={imageInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='address'>Meetup Address</label>
                    <input type='text' required id='address' ref={addressInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='Description'>Description</label>
                    <textarea id='description' required rows='5' ref={descriptionInputRef}/>
                </div>
                <div className={classes.actions}>
                    <button>Update Meetup</button> 
                </div>

            </form>


        </Card>



    );

}

export default UpdateMeetupForm;


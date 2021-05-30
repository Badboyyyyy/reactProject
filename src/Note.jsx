import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
const Note = (props) =>{
    const dele = () => {
        props.deleteItem(props.id);
    }
    return(
        <>
        
        <div className="card__left">
            <h4>{props.title}</h4>
            <p>{props.description}</p>
            <Button onClick = {dele}> < DeleteIcon /> </Button>
        </div>
       
        </>
    )
}
export default Note;
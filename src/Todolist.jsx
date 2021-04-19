import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import './Todo.css';
const Todolist = (props) =>{
    return(
        <>
        
         <div className="taskli"  >
        <li> {props.text} </li> <IconButton color="secondary"  variant="contained" size="large" onClick={()=>{
            props.onSelect(props.id)
        }
            
            }  aria-label="delete" 
            
            >
             <DeleteIcon />
        </IconButton> </div>
        </>
    )
}
export default Todolist;
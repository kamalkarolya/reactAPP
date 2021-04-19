import React, { useState } from 'react';
import "./Btn.css";
import './Todo.css';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Todolist from './Todolist';

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));
const Todo = () => {

    const classes = useStyles();

    const [tasks, setTasks] = useState("");
    const [tasklist, setTasklist] = useState([]);

    const Submite = () => {
        //  event.preventDefault();
        if (tasks === "") {
            alert("Todo Task can't be empty");

        } else {
            setTasklist((olditems) => {
                return [...olditems, tasks];
            });
            setTasks("");
        }



    }
    const taskDel = (id) => {

        setTasklist((olditems) => {
            return olditems.filter((arr, index) => {
                return index !== id;
            });
        });
    };
    const inputs = (event) => {
        setTasks(event.target.value);
    }
    return (
        <>
            <div className="main">
                <div className="page"  >
                    <h1>ToDo List</h1>
                    <hr />
                    <input type="text" onChange={inputs} value={tasks} className="forum" placeholder="Add items" />
                    <Fab color="primary" onClick={Submite} className={classes.margin} aria-label="add">
                        <AddIcon />
                    </Fab>
                    <hr />
                    <div>
                        <ol style={{ padding: "28px" }}  >
                            {
                                tasklist.map((taskval, index) => {
                                    return (
                                        <Todolist
                                            key={index}
                                            id={index}
                                            text={taskval}
                                            onSelect={taskDel}
                                        />


                                    );
                                })
                            }
                          
                        </ol>
                    </div>

                </div>
            </div>
        </>

    )
}

export default Todo;
import React, { Component } from 'react'
import firebase from '../config/firebase'



export class Todo extends Component {

    state = {
        todos: [{ title: "eat", bol: false }, { title: "sleep", bol: false }, { title: "bath", bol: false }],
        value: "",
        editValue: "",


    }


    /////handlechange = store new thing in value


    handleChange = (e) => {
        this.setState({
            value: e.target.value,
        })
    }



    //// submitTODOS = push upper value in todos


    submitTODOS = () => {

        const obj = { title: this.state.value };

        firebase.database().ref('/').child("todos").set(obj)

        this.setState({
            todos: [...this.state.todos, obj],
            value: ""



        })

    }




    ///deleteTodo = by splice delete specific todo by i



    deleteTodo = (i) => {
        this.state.todos.splice(i, 1);
        this.setState({
            todos: this.state.todos
        })
    }


    /////EditTodo =  enable update button

    EditTodo = (i) => {

        this.state.todos[i].bol = true;

        this.setState({

            todos: this.state.todos,


        })


    }

    ////EditChange = saving editing in  specific todo title by i

    EditChange = (e, i) => {




        this.state.todos[i].title = e.target.value;

        this.setState({
            todos: this.state.todos
        })




    }


    //// updateTodo = disable update button 

    updateTodo = (i) => {




        this.state.todos[i].bol = false;


        this.setState({

            todos: this.state.todos,
            editValue: ""

        })





    }







    render() {
        return (
            <div className="todojsx">

                <div>

                    <h1>TO DO APP</h1>

                </div>



                <div>

                    <input value={this.state.value} type="text" placeholder="enter your todos item" onChange={this.handleChange} />
                    <button onClick={this.submitTODOS}>TODOS</button>



                </div>












                <div>

                    {this.state.todos.map((v, i) => {
                        return (
                            <div key={i}>

                                <li>

                                    {v.bol ? <input value={v.title} type="text" onChange={(e) => this.EditChange(e, i)} />
                                        : v.title}

                                    {v.bol ? <button onClick={() => this.updateTodo(i)}>Update</button>
                                        : <button onClick={() => this.EditTodo(i)}>Edit</button>}




                                    <button onClick={() => this.deleteTodo(i)}>Delete</button>









                                </li>



                            </div>
                        )

                    })}

                </div>

            </div>
        )
    }
}

export default Todo

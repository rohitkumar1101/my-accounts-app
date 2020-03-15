import React, { Component } from 'react'
import { connect } from 'react-redux'
import Sidebar from './Sidebar'
import '../css/todo.css'
import ProfileHeader from './ProfileHeader'
import ProfileDropdown from './ProfileDropdown'


import square from '../img/square.svg'
import checkSquare from '../img/correct.svg'
import greenCheck from '../img/tick.svg'

class ToDoList extends Component {
    render() {
        const { list, hidden} = this.props
        const id = this.props.match.params.id-1

        let ToDo = [] 
        let complete = []
        list.map((item, index)=>{
            if( item.userId === Number(id+1))
            return(
                <div key={index}>
                    { item.completed ?  complete.push(item) : ToDo.push(item) }
                </div>
            )
        })
        return (
            <div className="flex-container">
                <div className="sidebar-profile">
                    <Sidebar id={this.props.match.params.id} />
                </div>

                <div className="todo-content">
                    <h4>ToDo</h4>
                    <ProfileHeader id={id} />
                    <hr />
                    { hidden ? null : <ProfileDropdown id={id} /> }

                    <div className="todo-body">
                        <div className="todo">
                            <div className="card">
                                <h4>ToDo</h4>
                            </div>
                            <div className="card" id="tasks">
                                {
                                    ToDo.map((item,index) => {
                                        return(
                                            <div key={index} > 
                                                <img src={square} />
                                                <li>{item.title}</li>
                                            </div>
                                        ) 
                                    })
                                }
                            </div>
                        </div>

                        <div className="complete">
                            <div className="card">
                                <h4>Completed</h4>
                                {/* <img src={greenCheck} id="tick" /> */}
                            </div>
                            <div className="card" id="tasks">
                                {
                                    complete.map((item,index) => {
                                        return(
                                            <div  key={index}> 
                                                <img src={checkSquare} />
                                                <li> {item.title} </li>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    users: state.usersData.users,
    list: state.todoData.todo,
    hidden: state.dropdown.hidden,
})


export default connect(mapStateToProps)(ToDoList)
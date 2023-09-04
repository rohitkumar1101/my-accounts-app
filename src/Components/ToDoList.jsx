import React, { Component } from 'react'
import { connect } from 'react-redux'
import Sidebar from './Sidebar'
import ProfileHeader from './ProfileHeader'
import ProfileDropdown from './ProfileDropdown'

import '../scss/todo.scss'

// import checkSquare from '../img/correct.svg'
// import greenCheck from '../img/tick.svg'

class ToDoList extends Component {
    render() {
        const { list, hidden } = this.props
        const id = this.props.match.params.id - 1

        let ToDo = []
        let complete = []
        list.map((item, index) => {
            if (item.userId === Number(id + 1)) {
                return (
                    <div key={index}>
                        {item.completed ? complete.push(item) : ToDo.push(item)}
                    </div>
                )
            }
            return item
        })
        return (
            <div className="todo-content">
                <aside>
                    <Sidebar id={this.props.match.params.id} />
                </aside>

                <div className="header">
                    <h4>ToDo</h4>
                    <ProfileHeader id={id} />
                    <hr />
                    {hidden ? null : <ProfileDropdown id={id} />}
                </div>

                {/* <div className="todo-body"> */}
                <div className="todo">
                    <h4 className="heading">ToDo</h4>
                    <div className="tasks">
                        {
                            ToDo.map((item, index) => {
                                return (
                                    <div key={index} className="task-item">
                                        <input type="checkbox" id={`task${index + 1}`} value={item.title} readOnly />
                                        <label htmlFor={`task${index + 1}`}>{item.title}</label>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="completed">
                    <h4 className="heading">Completed</h4>
                    <div className="tasks">
                        {
                            complete.map((item, index) => {
                                return (
                                    <div key={index} className="task-item">
                                        <input type="checkbox" id="task" value={item.title} checked readOnly />
                                        <label htmlFor="task">{item.title}</label>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                {/* </div> */}
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
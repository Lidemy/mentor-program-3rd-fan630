import React, {Component} from 'react'
import './hw1.css'

class Todo extends Component{
    constructor(){
        super()
        this.state = {
            newtext: ""
        }
        this.delete = this.delete.bind(this)
        this.mark = this.mark.bind(this)
        this.edit = this.edit.bind(this)
        this.save = this.save.bind(this)
    }

    delete(){
        const {todo, deleteTodo} = this.props
        deleteTodo(todo.id)
    }

    mark(){
        const { todo, markTodo } = this.props
        markTodo(todo.id)
    }

    //分辨我現在傳的是哪一個id
    edit() {
        const { todo, editTodo } = this.props
        editTodo(todo.id);

    }
    //把我現在的值存下來
    save(e){
        const { todo, saveTodo } = this.props
        const { newText } = this.state
        this.setState({
            newText: e.target.value
        })
        saveTodo(newText, todo.id)
    }


    render(){
        const {todo, text, unEdit} = this.props
        const {newText} = this.state
        return(
            <li className =  {todo.isCheck ? 'checked':'undone'} >
                <input type='checkbox' onClick= {this.mark}/>
                    <span>{todo.text}</span>
                        <button type="button" className="delete" onClick={this.delete}>Delete</button>
                        <button type="button" className="unEdit" onClick={this.edit}>Edit</button>
                <span> 
                    <input type="text" value={newText}
                    onChange={this.save} className={todo.unEdit ? 'unEdit' : 'editTodo'} />
                </span>
            </li>
        )
    }
}

export default Todo
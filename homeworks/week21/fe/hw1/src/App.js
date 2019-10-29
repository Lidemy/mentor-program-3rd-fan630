import React, {Component} from 'react'
import './hw1.css'
import Todo from './Todo'
import _ from 'lodash';

class App extends Component{
    constructor(){
        super()
        this.state={
            todos:[],
            unEdit: true,
            isCheck:false, 
            text:'',
        }
        this.id = 1
        this.handleAdd= this.handleAdd.bind(this)
        this.addTodo = this.addTodo.bind(this)
        this.deleteTodo = this.deleteTodo.bind(this)
        this.markTodo = this.markTodo.bind(this)
        this.editTodo = this.editTodo.bind(this)
        this.saveTodo = this.saveTodo.bind(this)
    }

    componentDidMount(){
        const {todos} = this.state
        const todoData = window.localStorage.getItem('todoApp')
        if(todoData){
            const oldTodos = JSON.parse(todoData)
            this.setState({
                todos: oldTodos
            })
            this.id = oldTodos[oldTodos.length - 1].id + 1
        }

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.todos !== this.state.todos) {
            window.localStorage.setItem('todoApp', JSON.stringify(this.state.todos))
        }
    }

    handleAdd(e) {
        const { text } = this.state
        this.setState({
            text: e.target.value
        })
    }


    addTodo(){
        const{todos, unEdit, isCheck, text} = this.state
        this.setState({
            todos:[
                ...todos,
                {
                id: this.id,
                unEdit: true,
                isCheck: false,
                text:text,
                unSave: true
            }],
            text:''
        })
        this.id++
    }

    deleteTodo(id){
        const{todos} = this.state
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }

    markTodo(id){
        const { todos } = this.state
        this.setState({
            todos: todos.map((todo)=>{
                if(todo.id !==id) return todo

                return{
                    ...todo, 
                    isCheck: !todo.isCheck
                }
            })
        })
    }

    editTodo(id) {
        const {todos} = this.state
        this.setState({
            todos: todos.map((todo) => {
                if (todo.id !== id) return todo

                return {
                    ...todo,
                    unEdit: !todo.unEdit
                }
            })
        })
        console.log(todos)
        // 作法2
        // let todoItem = _.find(todos, (item)=>{
        //     return item.id = id;
        // });
        // let newItem = {
        //     ...todoItem,
        //     unEdit: !todoItem.unEdit
        // };
        // //這邊可以確認到已經改了unEdit. 
        // console.log("1", newItem);
        // let newList =[];
        // newList.push(newItem);
        // this.setState({todos: newList});
    }


    saveTodo(newText, id){
        const {todos} = this.state
        this.setState({
            todos: todos.map((todo)=>{
                if(todo.id !== id) return todo 

                return{
                    ...todo, 
                    text: newText
                }
            })
        })
    }
    

    render(){
        const {todos, text} = this.state
        return(
            <div className="container">
                <div className="wrapper">
                    <div className="title">
                        To Do List
                    </div>
                    <div className="section">
                        <input className="text" placeholder="請輸入待辦事項"  value={this.state.text} onChange={this.handleAdd} />
                        <button className="send" onClick={this.addTodo}>提交</button>
                    </div>
                    <ul className="list">
                        {todos.map((todo) => <Todo 
                                               unEdit = {this.state.unEdit}
                                               unSave = {this.state.unSave}
                                               key={todo.id} 
                                               todo={todo} 
                                               deleteTodo={this.deleteTodo} 
                                               markTodo={this.markTodo} 
                                               editTodo={this.editTodo}
                                               saveTodo={this.saveTodo}
                                               />)}
                    </ul>
                </div>
            </div>
        )
    }
}

export default App
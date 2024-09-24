"use client"
import React,{useState} from 'react'
import { useSelector, useDispatch} from 'react-redux'
import {addTodo,removeTodo} from '../reducers/todoSlice'
import { RootState } from '../store'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const TodoList:React.FC = ()=>{
    const [input,setInput] = useState<string>('')
    const todos = useSelector((state:RootState)=>state.todos.todos)
    const dispatch = useDispatch()
    
    const handleAddTodo =()=>{
        if(input){
            dispatch(addTodo(input))
            setInput('')
        }
    }

    const handleRemoveTodo = (index:number)=>{
        dispatch(removeTodo(index))
    }

    return (
       <div style={ 
        {
            backgroundImage:'url(/top-view-spiral-notepad-diary-pen-tee-cup-keyboard-dual-background.jpg)',
            backgroundSize:'cover',
            backgroundPosition:'center',
            backgroundRepeat:'no-repeat',
            width:'100%',
            height:'100vh',
        }
       } >
        <div className='flex flex-col items-center   w-[550px] h-[300px] mx-auto  '
        >

            <h1 className='text-3xl mt-2 font-serif'>Todo List</h1>
            <Input
            className='mt-8 w-[300px] h-[30px] flex '             
            type="text"
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            placeholder='Add a todo'/>
          
          <Button variant="default" className='mt-4 rounded-md p-1 h-[30px] bg-blue-600 hover:bg-blue-700 flex items-center' onClick={handleAddTodo}>Add Todo</Button>
          <ul>
            {todos.map((todo,index)=>(
                <li key={index}>
               {todo}
               <Button variant="default" className='mt-4 rounded-md bg-blue-600 p-1 h-[30px] hover:bg-blue-700 ml-10' onClick={()=>handleRemoveTodo(index)}>Remove</Button>
                </li>
            ))}
          </ul>



        </div>
        </div>
    )
}
export default TodoList
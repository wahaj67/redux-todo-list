"use client"
import React from 'react'
import TodoList from '@/app/components/todoList'
import { Provider } from 'react-redux'
import store from '@/app/store'

const Home = () => {
  return (
    <Provider store={store}>
    <div>
      <TodoList/>

    </div>
    </Provider>
    
  )
}

export default Home
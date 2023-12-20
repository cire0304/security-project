import React, { useState } from 'react';

import "./App.css";
import List from "./components/list/List";
import Form from "./components/Form";

export interface TodoData {
  id: string;
  title: string;
  completed: boolean;
}

const App = () => {

  const [todoData, setTodoData] = useState<TodoData[]>([]);
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let newTodo = {
        id: Date.now().toString(),
        title: value,
        completed: false
    }

    setTodoData(prev => [...prev, newTodo]);
    setValue("");
}

  return (
    <div className='container'>
      <div className='todoBlock'>
        <div className='title'>
          <h1>할 일 목록</h1>
        </div>

        <List todoDatas={todoData} setTodoData={setTodoData}/>
        <Form handleSubmit={handleSubmit} value={value} setValue={setValue}></Form>
        
      </div>

    </div>
  )

}

export default App;
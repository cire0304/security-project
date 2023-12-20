import React, { useState }from 'react'
import { TodoData } from '../../App'
import * as S from './styles'

interface Props {
    todoDatas: TodoData[];
    setTodoData: React.Dispatch<React.SetStateAction<TodoData[]>>;
}

const List = ({todoDatas, setTodoData}: Props) => {     
    const handleClick = (id: string) => {
        let newTodoData = todoDatas.filter(d => d.id !== id);
        setTodoData(newTodoData);
    }

    const handleComplete = (id: string) => {
        let newTodoData = todoDatas.map(d => {
            if (d.id === id) {
                return {
                    ...d,
                    completed: !d.completed
                }
            }
            return d;
        });
        setTodoData(newTodoData);
    };

    const [isEditing, setIsEditing] = useState(false);
    const [editingTitle, setEditingTitle] = useState('');

    if (isEditing) {
        return <div>editing</div>
    }

    return (
        <div>
            {
                todoDatas.map((item) => {
                    return (
                        <S.Div completed={item.completed} key={item.id}>
                            <input type='checkbox'
                                defaultChecked={item.completed}
                                onChange={() => handleComplete(item.id)}
                            />
                            {item.title}
                            
                            <S.Button onClick={() =>handleClick(item.id)}>X</S.Button>

                            <S.Button onClick={() =>setIsEditing(true)}>Edit</S.Button>
                        </S.Div>
                    )
                })
            }
        </div>
    )
};

export default List

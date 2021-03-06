import React, {useState, useEffect} from 'react'
import './App.css'
import Header from './Components/Header'
import CreateInput from './Components/CreateInput'
import List from './Components/List'


const App = () => {

    const [dataList, setDataList] = useState([])

    useEffect(() => {
        const localTodos = localStorage.getItem('todos')
        if (localTodos) {
            setDataList(JSON.parse(localTodos))
        }
    }, [])

    const addTodos = (data) => {
        setDataList([...dataList, data])
    }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(dataList))
    }, [dataList])

    const deleteItem = (id) => {
        console.log(id)
        setDataList(dataList.filter(list => list.id !== id))
        
    }


    return (
        <>
            <Header />
            <CreateInput addTodos = {addTodos} />
            <List dataList={dataList} deleteItem={deleteItem}/>            
        </>
    )
}

export default App;
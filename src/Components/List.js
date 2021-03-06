import React from 'react'

const List = ({dataList, deleteItem}) => {
    return (
        <div className="listWrapper">
            {dataList.map((list, index) => (
                <div className="list" key={index}>
                    <h2>{list.title}</h2>
                    <p>{list.desc}</p>
                    <div><i onClick={()=> deleteItem(list.id)} className="fa fa-trash"></i></div>
                </div>
            ))}
        </div>
        
    )
}

export default List

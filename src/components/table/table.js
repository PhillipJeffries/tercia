import React from "react";
import { useState, useEffect } from "react";
import "./table.scss";


const Table = ({items, deleteItem}) => {   

    
    const [tableItems, setTableItems] = useState(items)
    
    
    useEffect(()=>{
        setTableItems(items)
    },[items])


    
    console.log(items)
    let countSum = 0
    let priceSum = 0
    
    const sortItems = (key) => {
        let sortedByName = [...tableItems]
        sortedByName.sort((a, b) => a[key] > b[key] ? 1 : -1)
        setTableItems(sortedByName)
        
        
    }


    
    
    return(
        <div className="table-wrapper">
            <h1>Table</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th onClick={()=>{sortItems("maker"); console.log('click')}}>Производитель</th>
                        <th onClick={()=>{sortItems("name"); console.log('click')}}>Наименование</th>
                        <th onClick={()=>{sortItems("price"); console.log('click')}}>Цена</th>
                        <th onClick={()=>{sortItems("count"); console.log('click')}}>Количество</th>
                    </tr>
                </thead>
                <tbody>
                {
                    tableItems.map((item, i)=>{
                        countSum+= +item.count
                        priceSum+= +item.price
                        return (
                            <tr title="данные товара" key={item.id} id={item.id} onClick={(e)=> deleteItem(e.currentTarget.id)}>
                                <td>{item.maker}</td>
                                <td>{item.name}</td>
                                <td>{item.price} $</td>
                                <td>{item.count}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
                <tfoot>
                <tr>
                    <td colSpan="2"></td>
                    <td>{priceSum} $</td>
                    <td>{countSum}</td>
                </tr>
                </tfoot>
            </table>
        
        </div>
    )
};

export default Table;
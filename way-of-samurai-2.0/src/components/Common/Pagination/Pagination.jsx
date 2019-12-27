import React, { useState } from 'react'
import cls from './Pagination.module.css'
 
const Pagination = ({totalUsersCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
    let countPages = Math.ceil(totalUsersCount / pageSize);
    let pages = []
    for(let i = 1; i <= countPages; i++){
        pages.push(i)
    }
    let portionCount = Math.ceil(countPages / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize



    return (<div className={cls.wrapper}>
    {portionNumber > 1 && 
    <button className={cls.button} onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button> }
    <ul className={cls.pagination}>
    {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
    .map((el)=>{
        return <li onClick={()=>{onPageChanged(el)}}
                    key={el} 
                    className={el === currentPage 
                        ? `${cls.pagination__item_active} ${cls.pagination__item}` 
                        : cls.pagination__item}>{el}</li>
    })}
    </ul>
    {portionCount > portionNumber && 
    <button className={cls.button} onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button>}
    </div>
    )
}
export default Pagination
import React from 'react'
import './SearchList.css'
import { FaSearch } from 'react-icons/fa'

export default function SearchList({TitleArray ,setSearchQuery}) {
  return (
    <>
    <div className="Container_SearchList">
        {
            TitleArray.map(m=>{
                return <p 
                key = {m}
                onClick={e=>setSearchQuery(m)}
                className='titleItem'>
                <FaSearch/>
                {m}
            </p> 
            })
        }
    </div>
    </>
  )
}

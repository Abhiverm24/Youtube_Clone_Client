import React, { useState } from 'react'
import './SearchBar.css'
import {FaSearch} from 'react-icons/fa'
import {BsMicFill} from 'react-icons/bs'
import SearchList from './SearchList'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function SearchBar() {
  const[searchQuery, setSearchQuery] = useState("")
  const[searchList, setsearchList] = useState(false)
  // const TitleArray = ["video", "video2","Animation video","Movies"].filter(q=>q.toUpperCase().includes(seachQuery.toUpperCase()))
  const TitleArray = useSelector(s=>s.videoReducer)?.data?.filter((q)=>q?.videoTitle.toUpperCase().includes(searchQuery?.toUpperCase())).map(m=>m?.videoTitle);
  return (
    <> 
    <div className="SearchBar_Container">
        <div className="SearchBar_Container2">
            <div className="search_div">
                <input type="text"  className='iBox_SearchBar' placeholder='Search...'
                  onChange={e=>setSearchQuery(e.target.value)}
                  value={searchQuery}
                  onClick={e=>setsearchList(true)}
                />
                <Link to={`/search/${searchQuery}`}>
                  <FaSearch className = "searchIcon_SearchBar"
                    onClick={e=>setsearchList(false)}
                  />
                </Link>
                <BsMicFill className = "Mic_SearchBar"/>

                { searchQuery && searchList &&
                  <SearchList
                  setSearchQuery = {setSearchQuery}
                    TitleArray = {TitleArray}
                  />
                }
            </div>
        </div>
    </div>
    </>
  )
}

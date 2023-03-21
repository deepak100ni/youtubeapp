import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import logo from '../img/youtube.png'
import menuIcon from '../img/sidebar.png'
import searchIcon from '../img/search.png'
import { searchURL } from '../config/Constant'
import { addCache } from '../store/SearchSlice'
import { Link } from 'react-router-dom'
const Header = () => {

  const cache = useSelector((Store) => Store.search);

  const [searchString, setSearchString] = useState('');
  const [searchedData, setSearchedData] = useState([]);
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false)

  const dispatch = useDispatch();
  dispatch(addCache({
    [searchString]: searchedData
  }))
  console.log('cache', cache);

  useEffect(() => {

    searchSuggestions();

  }, [searchString])

  const searchSuggestions = async () => {
    try {

      if (cache[searchString]) {
        setSearchedData(cache[searchString]);
      } else {
        const searchData = await fetch(searchURL + searchString);
        const parseData = await searchData.json();
        setSearchedData(parseData[1])

      }
    } catch (error) {
      console.log('error', error.message);
    }
  }


  return (
    <div className="w-full top-0 fixed bg-white h-16">
      <div className="flex">
        <div className='cursor-pointer'><img src={menuIcon} /></div>
        <div className='cursor-pointer'><Link to='/'><img src={logo} /></Link></div>
        <div className='mt-2 '>
          <input type='text'
            onChange={(e) => setSearchString(e.target.value)}
            onBlur={() => setShowSearchSuggestions(false)}
            onFocus={() => setShowSearchSuggestions(true)}
            className='border border-gray-800 pl-[14px] rounded-l-full w-[596px] ml-32 h-11' placeholder='Search' />
          <button className='rounded-r-full border border-black h-11 w-12'><img src={searchIcon} className='ml-4' /></button></div>

        {searchedData && searchString && showSearchSuggestions &&
          <div className="mt-14 ml-[335px] fixed bg-white py-2 px-2 w-[596px] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {(searchedData && searchedData.map((x, i) =>
                <li key={`${x}_${i}`} className="py-2 px-3 shadow-sm hover:bg-gray-100 block">
                  {x}
                </li>
              ))}

            </ul>
          </div>
        }
      </div>
    </div>
  )
}

export default Header
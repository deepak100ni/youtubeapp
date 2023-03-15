import React from 'react'

const Sidebar = () => {
    return (
        <div>
            <ul>
                <li className='p-2 m-3 cursor-pointer hover:bg-gray-100 bg-gray-200  rounded-lg w-40'>
                    <i className="fa fa-home" aria-hidden="true"></i> <span className='ml-2'>Home</span>
                </li>
                <li className='p-2 m-3 cursor-pointer hover:bg-gray-100 rounded-lg w-40'>
                    <i className="fa fa-car" aria-hidden="true"></i> <span className='ml-2'>Shorts</span>
                </li>
                <li className='p-2 m-3 cursor-pointer hover:bg-gray-100 rounded-lg w-40'>
                    <i className="fa fa-play" aria-hidden="true"></i> <span className='ml-2'>Subscription</span>
                </li>
                <li className='p-2 m-3 cursor-pointer hover:bg-gray-100 rounded-lg w-40'>
                    <i className="fa fa-book" aria-hidden="true"></i> <span className='ml-2'>Subscription</span>
                </li>
                <li className='p-2 m-3 cursor-pointer hover:bg-gray-100 rounded-lg w-40'>
                    <i className="fa fa-plug" aria-hidden="true"></i> <span className='ml-2'>History</span>
                </li>
                <li className='p-2 m-3 cursor-pointer hover:bg-gray-100 rounded-lg w-40'>
                    <i className="fa fa-fire" aria-hidden="true"></i> <span className='ml-2'>Trending</span>
                </li>
                <li className='p-2 m-3 cursor-pointer hover:bg-gray-100 rounded-lg w-40'>
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i> <span className='ml-2'>Shopping</span>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
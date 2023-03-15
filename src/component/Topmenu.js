import React from 'react'

const Topmenu = () => {
    return (
        <ul className='flex'>
            <li className='m-4 p-2 hover:bg-gray-200 bg-black border rounded-lg text-white'>All</li>
            <li className='m-4 p-2 hover:bg-gray-200 bg-gray-50 border rounded-lg'>Music</li>
            <li className='m-4 p-2 hover:bg-gray-200 bg-gray-50 border rounded-lg'>Arijit Singh</li>
            <li className='m-4 p-2 hover:bg-gray-200 bg-gray-50 border rounded-lg'>Bollywood Music</li>
            <li className='m-4 p-2 hover:bg-gray-200 bg-gray-50 border rounded-lg'>Comedy</li>
            <li className='m-4 p-2 hover:bg-gray-200 bg-gray-50 border rounded-lg'>Cartoons</li>
            <li className='m-4 p-2 hover:bg-gray-200 bg-gray-50 border rounded-lg'>Kids</li>
        </ul>
    )
}

export default Topmenu
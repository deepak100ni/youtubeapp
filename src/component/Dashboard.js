import React, { useEffect, useState } from 'react'
import youTubeVideoUrl from '../config/Constant'
import Shimmer from './Shimmer'
import Sidebar from './Sidebar'
import Topmenu from './Topmenu'
import Videocard from './Videocard'
import LoadingBar from 'react-top-loading-bar'
import InfiniteScroll from 'react-infinite-scroll-component'
import data from '../data/DummyData.json'
import Spinner from './Spinner'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {

    return (
        <>
            <div className="flex mt-[55px]">
                <div className="h-[600px] overflow-y-auto">
                    <Sidebar />
                </div>
                <div className="flex-1">
                    <Outlet/>
                </div>
            </div>
        </>
    )
}

export default Dashboard
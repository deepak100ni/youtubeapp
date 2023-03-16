import React, { useEffect, useState } from 'react'
import  youTubeVideoUrl  from '../config/Constant'
import Shimmer from './Shimmer'
import Sidebar from './Sidebar'
import Topmenu from './Topmenu'
import Videocard from './Videocard'
import LoadingBar from 'react-top-loading-bar'
import InfiniteScroll from 'react-infinite-scroll-component'
import data from '../data/DummyData.json'
import Spinner from './Spinner'

const Dashboard = () => {

    const [videos, setVideos] = useState([])
    const [progress, setProgress] = useState(0)
    const [nextPageToken, setNextPageToken] = useState()
    const [prevPageToken, setPrevPageToken] = useState()
    const [totalResults, setTotalResults] = useState(1000)
    const [remainingResult, setRemainingResult] = useState(1000)
    const [resultsPerPage, setResultsPerPage] = useState()

    const arr = [1, 2, 3, 4, 5];
    useEffect(() => {

        // getYoutubeVideo();
        setProgress(15);

        setVideos(data.items);
        setNextPageToken(data?.nextPageToken);
        setPrevPageToken(data?.prevPageToken);
        setResultsPerPage(data?.pageInfo?.resultsPerPage);
        setTotalResults(data?.pageInfo?.totalResults);
        setRemainingResult(data?.pageInfo?.totalResults - data?.pageInfo?.resultsPerPage);
        setProgress(100);

    }, [])

    const getYoutubeVideo = async () => {
        setProgress(15);
        const apicall = await fetch(youTubeVideoUrl);
        const result = await apicall.json();

        setProgress(100);

        setVideos(result.items);
        setNextPageToken(result?.nextPageToken);
        setPrevPageToken(result?.prevPageToken);
        setTotalResults(result?.pageInfo?.totalResults);
        setResultsPerPage(result?.pageInfo?.resultsPerPage);
        setRemainingResult(result?.pageInfo?.totalResults - result?.pageInfo?.resultsPerPage);



        console.log('nextPageToken', nextPageToken, 'prevPageToken', prevPageToken, 'totalResults', totalResults, 'resultsPerPage', resultsPerPage);
        console.log('result', result);
        console.log('videos', videos);
        console.log('videos len', videos.length);
    }

    const fetchData = async () => {
        setProgress(15);
        console.log('fetchData worked');
        // const apicall = await fetch(youTubeVideoUrl);
        // const result = await apicall.json();
        // setProgress(100);
        // console.log('result', result);
        // setVideos(videos.concat(result.items));
        
        
        // setNextPageToken(result?.nextPageToken);
        // setPrevPageToken(result?.prevPageToken);
        // setTotalResults(result?.pageInfo?.totalResults);
        // setResultsPerPage(result?.pageInfo?.resultsPerPage);
        // setRemainingResult(result?.pageInfo?.totalResults - result?.pageInfo?.resultsPerPage);


       const timeOut = setTimeout(() => {
            setVideos(videos.concat(data.items));
            setNextPageToken(data?.nextPageToken);
            setPrevPageToken(data?.prevPageToken);
            setResultsPerPage(data?.pageInfo?.resultsPerPage);
            setTotalResults(data?.pageInfo?.totalResults);
            setRemainingResult(data?.pageInfo?.totalResults - data?.pageInfo?.resultsPerPage);
            setProgress(100);
        }, 1000);

        () => {
            return clearTimeout(timeOut);
        }
    }

    return (!videos) ? <Shimmer /> : (
        <>
            <LoadingBar
                color='#f11946'
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
            />

            <div className="flex mt-[55px]">
                <div className="h-[600px] overflow-y-auto">
                    <Sidebar />
                </div>
                <div className="flex-1">
                    <div className='flex fixed w-full'>
                        <Topmenu />
                    </div>
                    <div id="scrollableDiv" className='mt-16 h-[600px] flex-1 overflow-y-auto p-2 flex flex-wrap'>

                        <InfiniteScroll
                        className='flex flex-wrap'
                            dataLength={videos.length} //This is important field to render the next data
                            next={fetchData}
                            pullDownToRefreshThreshold={50}
                            scrollableTarget="scrollableDiv"
                            // hasMore={(videos.length <= totalResults) ? true : false}
                            hasMore={true}
                            loader={<Spinner/>}
                        >

                            {videos && videos?.map((items, i) => <Videocard key={`test_${i}`} data={items} />)}
                            {/* {arr && arr.map((items, i) => <Videocard key={`test_${i}`} data={items} />)} */}
                        </InfiniteScroll>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
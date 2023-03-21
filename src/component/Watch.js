import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom'
import { videoDetailsURL } from '../config/Constant';
import Spinner from './Spinner';
import LoadingBar from 'react-top-loading-bar'

const Watch = () => {
    const [data] = useSearchParams();
    const videoID = data.get('v');
    const [videoData, setVideoData] = useState([])
    const [progress, setProgress] = useState(0)
    
    useEffect(() => {
        setProgress(30)
        videoDetails();
    
    }, [])

    const videoDetails = async () => {
        const parseData = await fetch(videoDetailsURL+videoID);
        const result = await parseData.json();
        setVideoData(result);
        setProgress(100)
    }
    
  return (!videoData) ? <Spinner/> :  (
    <div className='container'>
        <LoadingBar
                color='#f11946'
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
            />
        <div>
        <iframe width="1100" height="480" src={`https://www.youtube.com/embed/`+videoID} frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='mt-5'>
            <p className='font-bold text-lg'>
                {console.log('videoData',videoData)}
                {videoData?.items[0]?.snippet?.title}

            </p>
        </div>
        <div className='mt-3'>
            <p className='font-bold text-lg'>                
                <img src={videoData?.items[0]?.snippet?.thumbnails['default'].url} className='h-10 w-10 rounded-full float-left' /> 
                <span className='m-2'>
                {videoData?.items[0]?.snippet?.channelTitle}    
                </span>  
                              
            </p>
            <p className='ml-14 text-sm'>
                52.0 M Subscription
                </p> 
        </div>
        <div className='mt-5 hover:bg-gray-200 bg-gray-100 border border-gray-500 shadow rounded-md whitespace-normal'>
            <p>{videoData?.items[0]?.statistics?.viewCount} Views</p>
            <p>{videoData?.items[0]?.snippet?.publishedAt}</p>
            <p>
            {videoData?.items[0]?.snippet?.description}
            </p>
        </div>
    </div>
  )
}

export default Watch
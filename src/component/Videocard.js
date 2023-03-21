import { Link } from 'react-router-dom'

const Videocard = ({data}) => {
    return (
        <div className='w-64 m-3 p-6' key={data?.snippet?.thumbnails?.medium.url}>
            <div className="h-44">
                <Link to={`watch?v=`+data?.id}><img className='border rounded-lg' src={data?.snippet?.thumbnails?.medium.url} /></Link>
                <div className="flex flex-row p-1 m-2">
                    <div className='basis-1/4'>
                        <img src={data?.snippet?.thumbnails?.medium.url} className='h-8 w-8 rounded-full' />
                    </div>
                    <div className='basis-3/4 font-semibold text-xs truncate'>
                        <p>{data?.snippet?.title}</p>
                        <p>{data?.snippet?.channelTitle}</p>
                        <p>{data?.statistics?.viewCount} Views .{data?.snippet?.publishedAttitle}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Videocard
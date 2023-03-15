const API = process.env.REACT_APP_GOOGLE_API_SECRET_KEY
console.log('API---',API);
export const youTubeVideoUrl = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&&key="+API;



const API = process.env.REACT_APP_GOOGLE_API_SECRET_KEY
console.log('API---',API);
const youTubeVideoUrl = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&&key="+API;


export const searchURL = 'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=';

export const videoDetailsURL = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key="+API+"&id=";

export const channelDetailsURL = "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key="+API+"&id=";

export default youTubeVideoUrl;
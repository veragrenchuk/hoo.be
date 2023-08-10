import s from './video.styles.scss'
import ReactPlayer from 'react-player/youtube'

const YoutubeEmbed = ({ videoId }) => {
    return (
        <ReactPlayer 
            url={`https://www.youtube.com/embed/videoseries?list=${videoId}&enablejsapi=1&autoplay=0&playsinline=1`} 
        />
    )
}

export default YoutubeEmbed;

import './VideoBackground.css';
import RickMortyPortal4k from '../assets/RickMortyPortal4k.mp4'

const VideoBackground = () => {
  return (
    <div className="video-background-container">
      <video autoPlay loop muted className="video-element" >
        <source src ={RickMortyPortal4k} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
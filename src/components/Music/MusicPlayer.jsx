import { useState, useEffect, useRef } from 'react';
import { BsPlayCircleFill, BsPauseCircleFill} from 'react-icons/bs';
import song from '../../assets/bgmusic.mp3';
import { BsPlayCircle } from "react-icons/bs";

const MusicPlayer = () => {
    const audioRef = useRef(new Audio(song));
    const [isPlaying, setIsPlaying] = useState(true);

    const toggleSong = () => {
        const audio = audioRef.current;
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(prevIsPlaying => !prevIsPlaying);
    };

    useEffect(() => {
        const audio = audioRef.current;
        if (isPlaying) {
            audio.play();
        } else {
            audio.pause();
        }
        const handleEnded = () => {
            audio.currentTime = 0;
            audio.play();
        };

        audio.addEventListener('ended', handleEnded);

        return () => {
            audio.removeEventListener('ended', handleEnded);
        };
    }, [isPlaying]);

    return (
        <div className={ ` position-fixed text-center text-white end-0 me-3 mt-3 top-0` } onClick={ toggleSong }>
            <button className={` d-flex align-items-center justify-items-center m-0 my-3 mx-1 position-relative bg-transparent rounded-circle border-0`} style={{ color: '#0dfdde' }}>
                {!isPlaying ? <BsPauseCircleFill className="bg-transparent rounded-circle text-color-primary fs-1"/> : <BsPlayCircleFill className="fbg-transparent rounded-circle text-color-primary fs-1"/>}
            </button>
        </div>
    );
};

export default MusicPlayer

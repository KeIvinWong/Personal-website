import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import styles from './ProjectBanner.module.css';

interface ProjectBannerProps {
    title: string;
    description: string;
    backgroundImage: string;
    demoVideo: string;
}

const ProjectBanner: React.FC<ProjectBannerProps> = ({ title, description, backgroundImage, demoVideo }) => {
    const [isVideoVisible, setVideoVisible] = useState<boolean>(false);

    const toggleVideo = () => {
        setVideoVisible(!isVideoVisible);
    };

    return (
        <div
            className={styles.projectBanner}
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className={styles.overlay}>
                <h1>{title}</h1>
                <p>{description}</p>
                <button onClick={toggleVideo}>
                    {isVideoVisible ? 'Hide Demo Video' : 'Show Demo Video'}
                </button>
                {isVideoVisible && (
                    <div className={styles.videoContainer}>
                        <ReactPlayer 
                            url={demoVideo} 
                            controls={true} 
                            width="100%" 
                            height="100%" 
                            className={styles.reactPlayer} 
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectBanner;
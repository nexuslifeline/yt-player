import { useContext } from 'react';

import { VideoContext } from '../../shared/context/VideoProvider';

import Styles from './VideoPlayer.module.scss';

function VideoPlayer() {
  const { selectedVideo } = useContext(VideoContext);

  return (
    <div className={Styles.activeArea}>
      <div className={Styles.video}>
        <iframe
          className={Styles.frame}
          title={selectedVideo?.id?.videoId}
          src={`https://www.youtube.com/embed/${selectedVideo?.id?.videoId}`}
        />
      </div>
      <div>
        <h2 className={Styles.title}>{selectedVideo?.snippet?.title || 'No Title'}</h2>
        <p className={Styles.description}>{selectedVideo?.snippet?.description || 'No Description'}</p>
      </div>
    </div>
  )
}

export default VideoPlayer;
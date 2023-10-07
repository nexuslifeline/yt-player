import Styles from './VideoPlayer.module.scss';

function VideoPlayer({ videoId, title, description }) {
  return (
    <div className={Styles.activeArea}>
      <div className={Styles.video}>
        {videoId && (
          <iframe
            className={Styles.frame}
            title={videoId}
            src={`https://www.youtube.com/embed/${videoId}`}
          />
        )}
      </div>
      <div>
        <h2 className={Styles.title}>{title || 'No Title'}</h2>
        <p className={Styles.description}>{description || 'No Description'}</p>
      </div>
    </div>
  )
}

export default VideoPlayer;
import { useEffect, useState  } from 'react';

import VideoList from './List';
import VideoPlayer from '../VideoPlayer';
import useYt from '../../shared/hooks/useYoutube';
// import { VideoContext } from '../../shared/context/VideoProvider';

import Styles from './VideoSelector.module.scss';

function VideoSelector({  search = '' }) {
  const { videos = [], performSearch, isLoading } = useYt();
  // const { setSelectedVideo } = useContext(VideoContext);
  const [isMounted, setIsMounted] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    performSearch(search);
  }, [search, isMounted]);

  useEffect(() => {
    if (!isMounted) return;
    // If the top search results for the videos have been updated,
    // choose the first video from the new results and assign it as the currently displayed video.
    setSelectedVideo(videos?.[0] || {});
  }, [videos, isMounted]);

  const { id: { videoId } = {}, snippet: { title, description } = {}} = selectedVideo || {};

  return (
    <div className={Styles.container}>
      <VideoPlayer
        {...{ videoId, title, description }}
      />
      <VideoList
        items={videos}
        isLoading={isLoading}
        onSelect={setSelectedVideo}
      />
    </div>
  )
}

export default VideoSelector;
import { createContext, useState  } from 'react';

export const VideoContext = createContext();

function VideoProvider({ children }) {
  const [selectedVideo, setSelectedVideo] = useState('');

  return (
    <VideoContext.Provider value={{ selectedVideo, setSelectedVideo }}>
      {children}
    </VideoContext.Provider>
  )
}

export default VideoProvider;
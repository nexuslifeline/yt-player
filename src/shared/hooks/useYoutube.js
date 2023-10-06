import { useState } from 'react';
import yt from '../apis/yt';

// This custom hook useYt provides an encapsulated way to interact with the YouTube API
// to perform searches and manage the loading state and video data within React components.
// It abstracts away the complexities of making API requests and handling loading and errors.
function useYt() {
  const [isLoading, setIsLoading] = useState(false);
  const [videos, setVideos] = useState([]);

  const performSearch = async (searchTerm) => {
    try {
      setIsLoading(true);
      const response = await yt.get('/search', {
        params: {
          q: searchTerm
        }
      });
      setIsLoading(false);
      setVideos(response?.data?.items);
    } catch(err) {
      alert(err?.response?.data?.error?.message + '\n\nTry a different API Key.');
      setVideos([]);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    performSearch, isLoading, videos
  }
}

export default useYt;
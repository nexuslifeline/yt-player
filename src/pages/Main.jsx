import { useState  } from 'react';

import VideoSelector from '../components/VideoSelector';
import SearchBar from '../components/SearchBar';

// import useDebounce from '../shared/hooks/useDebounce';

import Styles from './Main.module.scss';

function MainPage() {
  const [query, setQuery] = useState('');

  return (
    <div className={Styles.container}>
      <SearchBar onSearch={setQuery} />
      <VideoSelector search={query} />
    </div>
  );
}

export default MainPage;

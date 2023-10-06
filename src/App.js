import MainPage from './pages/Main';
import VideoProvider from './shared/context/VideoProvider';

import Styles from './App.module.scss';

function App() {
  return (
    <div className={Styles.wrapper}>
      <VideoProvider><MainPage /></VideoProvider>
    </div>
  );
}

export default App;

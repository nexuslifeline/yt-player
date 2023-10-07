import MainPage from './pages/Main';
// import VideoProvider from './shared/context/VideoProvider';

import Styles from './App.module.scss';

function App() {
  return (
    <div className={Styles.wrapper}>
      <MainPage />
    </div>
  );
}

export default App;

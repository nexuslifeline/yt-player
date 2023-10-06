import { useContext } from 'react';

import { VideoContext } from '../../shared/context/VideoProvider';

import Styles from './Item.module.scss';

function Item({ data }) {
  const { setSelectedVideo } = useContext(VideoContext);
  const { snippet: { title = 'No Title', thumbnails } } = data || {};

  return  (
    <div className={Styles.item} onClick={() => setSelectedVideo(data)}>
      <img className={Styles.video} src={thumbnails?.medium?.url} alt={title}></img>
      <p className={Styles.title}>{title}</p>
    </div>
  )
}

export default Item;
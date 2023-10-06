import Item from './Item';
import Spinner from '../Spinner'

import Styles from './List.module.scss';

function VideoList({ items = [], isLoading }) {
  return  (
    <div className={Styles.videoList}>
      {isLoading ? (
        <Spinner />
      ) : items.map((data, idx) => <Item key={data?.id?.videoId || idx} data={data} />)}

    </div>
  )
}

export default VideoList;
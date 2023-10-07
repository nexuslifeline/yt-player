import Item from './Item';
import Spinner from '../Spinner'

import Styles from './List.module.scss';

function VideoList({ items = [], isLoading, onSelect }) {
  return  (
    <div className={Styles.videoList}>
      {isLoading ? (
        <Spinner />
      ) : items.map(
        (data, idx) =>
          <Item key={data?.id?.videoId || idx} data={data} onSelect={onSelect} />
      )}

    </div>
  )
}

export default VideoList;
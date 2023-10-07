import Styles from './Item.module.scss';

function Item({ data, onSelect }) {
  const { snippet: { title = 'No Title', thumbnails } } = data || {};

  return  (
    <div className={Styles.item} onClick={() => onSelect?.(data)}>
      <img className={Styles.video} src={thumbnails?.medium?.url} alt={title}></img>
      <p className={Styles.title}>{title}</p>
    </div>
  )
}

export default Item;
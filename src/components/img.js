import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import styles from '../styles/Home.module.css'

export function SortableItem(props) {
  const { file, orderNo } = props;
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({id: props.id});
  
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    position: 'relative',
    width: 'calc(20% - 4rem)',
    height: '300px',
    backgroundColor: 'rgba(10, 10, 10, 0.3)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 0 5px 2px white',
  };
  
  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={URL.createObjectURL(file)} alt={file.name} />
      <div className={styles.middle}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path data-v-20f285ec="" d="m5 9-3 3 3 3M9 5l3-3 3 3m0 14-3 3-3-3M19 9l3 3-3 3M2 12h20M12 2v20" />
        </svg>
      </div>
      <label className={styles.imageName}>{file.name}</label>
      <label className={styles.imageOrder}>{orderNo}</label>
    </div>
  );
}
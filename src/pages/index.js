// import Head from 'next/head'
// import Image from 'next/image'
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';
import { useState } from 'react';
import { SortableItem } from '../components/img';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [selectedImages, setSelectedImages] = useState([]);

  const onChangeHandler = ({ target }) => {
    if (target.files) {
      setSelectedImages(target.files)
    }
  }

  function handleDragEnd(event) {
    const {active, over} = event;
    
    if (active.id !== over.id) {
      setSelectedImages(() => {
        const oldIndex = Array.from(selectedImages).indexOf(active.id);
        const newIndex = Array.from(selectedImages).indexOf(over.id);
        
        return arrayMove(Array.from(selectedImages), oldIndex, newIndex);
      });
    }
  }


  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <label htmlFor="fileUpload">Select a file:{' '}</label>
        <input accept=".jpg,.jpeg,.gif,.png" type="file" id="fileUpload" multiple onChange={(e) => onChangeHandler(e)} />
      </div>
      <DndContext
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <div className={styles.imagesArea}>
          <SortableContext items={Array.from(selectedImages)}>
          {selectedImages.length > 0 && Array.from(selectedImages).map((file, index) => (
            <SortableItem 
              key={file}
              id={file}
              file={file} 
              orderNo={index + 1} 
            />
          ))}
          </SortableContext>
        </div>
      </DndContext>
    </div>
  )
}

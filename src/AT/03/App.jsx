import { useState } from "react";
import styles from "./main.module.css";

const App = () => {
  const [images, setImages] = useState([1, 2, 3, 4, 5]);

  const addImage = () => {
    setImages([...images, images.length + 1]);
  };

  const removeImage = () => {
    if (images.length > 0) {
      setImages(images.slice(0, -1));
    }
  };

  return (
    <main className={styles.container}>
      <div className={styles.controls}>
        <button onClick={addImage}>+</button>
        <button onClick={removeImage}>-</button>
        <span>{images.length}</span>
      </div>
      <div className={styles.gallery}>
        {images.map((img, index) => (
          <div key={index} className={styles.image}>
            <span>100 x 100</span>
          </div>
        ))}
      </div>
    </main>
  );
};

export default App;

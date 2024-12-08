import { useUser } from '../CustomProviderComponent/CustomProviderComponent';
import css from './Button.module.css';


export const Button = () => {
  const { petTubeVideos, handleGalleryButtonPress, fewResponse } = useUser();

  return (
    <div>
      {petTubeVideos.length !== 0 && !fewResponse ? (
        <button onClick={handleGalleryButtonPress} className={css.loadBtn}>
          Load More
        </button>
      ) : null}
    </div>
  );
};



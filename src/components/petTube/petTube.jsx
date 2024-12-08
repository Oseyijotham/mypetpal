import { useUser } from '../CustomProviderComponent/CustomProviderComponent';
import css from './petTube.module.css';
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { useEffect } from 'react';
import { Button } from '../petTubeButton/Button';
import { Loader } from '../petTubeLoader/Loader';
import petTubePic from './5664315.jpg';
import {Link} from 'react-router-dom';

export const Gallery = () => {
  const { petTubeVideos, handleSubmit, galleryLoaded } = useUser();

  useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery']", {
      // Custom options
    });

    // Cleanup function
    return () => {
      Fancybox.destroy();
    };
  }, [petTubeVideos]);


  return (
    <main>
      <span className={css.titleContainer}>
        <span className={css.iconContainer}>
          <img
            src={petTubePic}
            className={css.icon}
            style={{ width: '100px' }}
            alt=""
          />
        </span>
        <span>
          <span className={css.movieGalleryLabel}>PetTube</span>
          <span className={css.movieGallerySlogan}>
            <i>Take time out to Watch, Laugh and Love</i>
          </span>
        </span>
        <span className={css.iconContainerOne}>
          
            <Link to="/pet_scope" className={css.hiddenLink}></Link>
          
          <img
            src={petTubePic}
            className={css.iconTwo}
            style={{ width: '100px' }}
            alt=""
          />
        </span>
      </span>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          placeholder="Search for Videos"
        />
        <button type="submit" className={css.button}>
          <span className={css.buttonLabel}>Search</span>
        </button>
      </form>
      <div className={css.galleryFrame}>
        <Loader />
        {petTubeVideos.length !== 0 ? (
          <ul className={`${css.movieGallery} gallery`}>
            {petTubeVideos.map(pic => (
              <li key={pic.id} className={css.movieItem}>
                <a href={pic.videos.large.url} data-fancybox="gallery">
                  <video
                    className={css.movieImage}
                    src={pic.videos.medium.url}
                    alt={pic.tags}
                    controls
                    height="240"
                    width="410"
                  ></video>
                </a>
              </li>
            ))}
          </ul>
        ) : (
          galleryLoaded === false && (
            <div className={css.message}>
              <p className={css.messageItem}>
                No Videos, try another search term
              </p>
            </div>
          )
        )}
      </div>
      <Button />
    </main>
  );
};

export default Gallery;

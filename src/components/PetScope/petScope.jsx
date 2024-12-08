import { useUser } from '../CustomProviderComponent/CustomProviderComponent';
import css from './petScope.module.css';
import { useEffect } from 'react';
import { Button } from '../PetScopeButton/Button';
import { Loader } from '../Loader/Loader';
import petScopePic from './5586932.jpg';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const Gallery = () => {
  const { searchImgResults, handleImgSubmit, isLoading } = useUser();

  useEffect(() => {
    const lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
      closeText: 'X',
      animationSlide: false,
    });

    // Cleanup function
    return () => {
      lightbox.destroy();
    };
  }, [searchImgResults]);
  

  return (
    <main>
      <span className={css.titleContainer}>
        <span className={css.iconContainer}>
          <img
            src={petScopePic}
            className={css.icon}
            style={{ width: '100px' }}
            alt=""
          />
        </span>
        <span>
          <span className={css.movieGalleryLabel}>PetScope</span>
          <span className={css.movieGallerySlogan}>
            <i>Explore the World Through Pictures with PetScope!</i>
          </span>
        </span>
        <span className={css.iconContainer}>
          <img
            src={petScopePic}
            className={css.iconTwo}
            style={{ width: '100px' }}
            alt=""
          />
        </span>
      </span>
      <form className={css.form} onSubmit={handleImgSubmit}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          placeholder="Search for Pictures"
        />
        <button type="submit" className={css.button}>
          <span className={css.buttonLabel}>Search</span>
        </button>
      </form>
      <div className={css.galleryFrame}>
        <Loader />
        {searchImgResults.length !== 0 ? (
          <ul className={`${css.movieGallery} gallery`}>
            {searchImgResults.map(result => (
              <li key={result.id} className={css.movieItem}>
                <a href={result.largeImageURL}>
                  <img
                    className={css.image}
                    src={result.webformatURL}
                    alt={result.tags}
                    name={result.largeImageURL}
                  />
                </a>
              </li>
            ))}
          </ul>
        ) : (
          isLoading === false && (
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

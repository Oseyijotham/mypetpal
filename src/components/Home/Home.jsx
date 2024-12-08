import css from './Home.module.css';
import { Link } from 'react-router-dom';
import { Loader } from '../InitLoader/Loader';
import { useUser } from '../CustomProviderComponent/CustomProviderComponent';
import homeAnimation from './heart.png';
import catWardPic from './cat owner.jpg';
import dogWardPic from './3756940.jpg';
import petTubePic from './5664315.jpg';

export const Home = () => {

  let {
    isOneHovered,
    isTwoHovered,
    isThreeHovered,
    setIsOneHovered,
    setIsTwoHovered,
    setIsThreeHovered
  } = useUser();

/*
frame2.addEventListener('mouseover', () => {
  frame1.style.transform = 'translateY(103%)';
});

frame2.addEventListener('mouseout', () => {
  frame1.style.transform = 'translateY(0)';
});

frame2.addEventListener('focus', () => {
  frame1.style.transform = 'translateY(103%)';
});

frame2.addEventListener('blur', () => {
  frame1.style.transform = 'translateY(0)';
});
*/


  return (
    <main>
      <span className={css.movieGalleryLabel}>
        <img
          src={homeAnimation}
          alt="Love"
          width="100"
          className={css.movieGalleryAnimation}
        />
        <span>
          <span className={css.movieGalleryTitle}>Welcome To Petpal</span>
          <span className={css.movieGallerySlogan}>
            {' '}
            <i>Helping you find your Furry Soulmate</i>{' '}
          </span>
        </span>
        <img
          src={homeAnimation}
          alt="Love"
          width="100"
          className={css.movieGalleryAnimation}
        />
      </span>
      <h3 className={css.townOfficialsIntro}>Get to know our Facility</h3>
      <div className={css.galleryFrame}>
        <Loader />
        <div className={css.movieGallery}>
          <div
            className={css.frame}
            onMouseEnter={() => {
              setIsOneHovered(true);
            }}
            onMouseLeave={() => {
              setIsOneHovered(false);
            }}
            style={{
              transform: `
    ${isTwoHovered ? 'translateY(110%)' : 'translateY(0)'}
    ${isThreeHovered ? 'translateX(-25%)' : 'translateX(0)'}
  `,
            }}
          >
            <div
              key="townMayor"
              className={css.movieItem}
              onClick={() => {
                setIsOneHovered(false);
              }}
            >
              <Link to="/cat_ward" className={css.movieInfo}>
                <div className={css.catOverlay}>
                  <img
                    className={css.movieImage}
                    src={catWardPic}
                    alt="Unavailable"
                  />
                  <p className={css.catWardDescription}>
                    Welcome to Petpal's Cat Ward! Answer a few questions, and we'll match
                    you with the perfect cat breeds that fit your lifestyle and
                    preferences
                  </p>
                </div>
                <span className={css.movieName}>
                  <span className={css.wardName}>Cat Ward</span>
                </span>
              </Link>
            </div>
          </div>
          <div
            className={css.frame}
            onMouseEnter={() => {
              setIsTwoHovered(true);
            }}
            onMouseLeave={() => {
              setIsTwoHovered(false);
            }}
            style={{
              transform: `
    ${isOneHovered ? 'translateY(110%)' : 'translateY(0)'}
    ${isThreeHovered ? 'translateX(25%)' : 'translateX(0)'}
  `,
            }}
          >
            <div
              key="townLibrarian"
              className={css.movieItem}
              onClick={() => {
                setIsTwoHovered(false);
              }}
            >
              <Link to="/dog_ward" className={css.movieInfo}>
                <div className={css.catOverlay}>
                  <img
                    className={css.movieImage}
                    src={dogWardPic}
                    alt="Unavailable"
                  />
                  <p className={css.catWardDescription}>
                    Welcome to Petpal's Dog Ward! Take our quick questionnaire to find
                    the dog breeds that are just right for you and your family.
                  </p>
                </div>
                <span className={css.movieName}>
                  <span className={css.wardName}>Dog Ward</span>
                </span>
              </Link>
            </div>
          </div>
          <div
            className={css.frame}
            onMouseEnter={() => {
              setIsThreeHovered(true);
            }}
            onMouseLeave={() => {
              setIsThreeHovered(false);
            }}
            style={{
              transform:
                `
      ${isOneHovered ? 'translateX(-55%)' : ''}
      ${isTwoHovered ? 'translateX(55%)' : ''}
    `.trim() || 'translateX(0)',
            }}
          >
            <div
              key="townPhotographer"
              className={css.movieItem}
              onClick={() => {
                setIsThreeHovered(false);
              }}
            >
              <Link to="/pet_tube" className={css.movieInfo}>
                <div className={css.catOverlay}>
                  <img
                    className={css.movieImage}
                    src={petTubePic}
                    alt="Unavailable"
                  />
                  <p className={css.catWardDescription}>
                    Welcome to PetTube! (Petpals Entertainment Ward) Search and enjoy a wide range of entertaining videos.
                  </p>
                </div>
                <span className={css.movieName}>
                  <span className={css.wardName}>PetTube</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};



export default Home;

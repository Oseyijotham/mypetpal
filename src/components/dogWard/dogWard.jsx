import { useUser } from '../CustomProviderComponent/CustomProviderComponent';
import css from './dogWard.module.css';
import dogOwner from './3756940.jpg';
import { DogWardModal } from '../dogWardModal/dogWardModal';

export const DogWard = () => {
  const { handleDogCalculation, dogQualities, handleInfoClick } = useUser();
  const dogLabels = [
    'Child Friendly',
    'Friedliness with other dogs',
    'Shedding Level',
    'Grooming Difficulty',
    'Drooling Level',
    'Coat length',
    'Stranger Friendly',
    'Playfulness',
    'Protectiveness',
    'Easiness to Train',
    'Energy',
    'Barking Audibility or Vocalization',
  ];
  /*
  const getRandomValue = () => {
    const defValue = Math.floor(Math.random() * 5) + 1;
    return defValue;
  }
*/
  return (
    <>
      <DogWardModal />
      <div>
        <span className={css.titleContainer}>
          <span className={css.iconContainer}>
            <img
              src={dogOwner}
              className={css.icon}
              style={{ width: '100px' }}
              alt=""
            />
          </span>
          <span>
            <span className={css.title}>Welcome to the Dog Ward</span>
            <span className={css.movieGallerySlogan}>
              {' '}
              <i>Fetch your furry soulmate with Precision!</i>{' '}
            </span>
          </span>
          <span className={css.iconContainer}>
            <img
              src={dogOwner}
              className={css.iconTwo}
              style={{ width: '100px' }}
              alt=""
            />
          </span>
        </span>

        <div className={css.galleryFrame}>
          <div className={css.dataAreaCont}>
            <div className={css.dataAreaIntro}>
              <div>
                With our state-of-the-art filtering algorithm, finding the
                perfect pet has never been easier or more accurate. Say goodbye
                to endless searching and uncertainty, and hello to a
                scientifically driven, user-centric approach that guarantees the
                best match for your lifestyle.
              </div>
              <h3>How To Use</h3>
              <div>
                On a scale of 1 - 5 select the value that suits you best for a
                particular quality that you would like your ideal Dog to have.
              </div>
              <div>
               SELECT 0 FOR A PARTICULAR QUALITY, IF YOU DON'T WANT IT TO BE CONSIDERED BY THE ALGORITHM.
              </div>
              <div className={css.dataItemCont}>
                NOTE:- The Threshold selector determines the strictness of the
                algorithm. The HIGHER the value is the LESS STRICT the algorithm
                is and the MORE MATCHES you'll get, but the LOWER the value is
                the MORE STRICT the algorithm is and the LESS MATCHES you'll
                get. WE RECOMMEND INCREASING THE VALUE IF YOU DO NOT GET ANY MATCHES 
                AND REDUCING THE VALUE IF YOU GET TOO MANY MATCHES.
              </div>
              <div className={css.dataItemCont}>
                NOTE:- It is not always possible to meet every single value requirement
                that you have for the qualities that you'd like your pet to
                have, this is because we are considering all your value
                requirements as a whole, but rest assured that we are giving you
                the best possible matches.
              </div>
            </div>
            <div className={css.dataArea}>
              <div className={css.dataAreaInfo}>
                <form onSubmit={handleDogCalculation} className={css.form}>
                  <span className={css.dataItemDet}>
                    <label htmlFor="threshold">THRESHOLD:</label>
                    <input
                      type="number"
                      id="threshold"
                      name="threshold"
                      defaultValue="3"
                      min="1"
                      max="20"
                    />
                  </span>
                  <div className={css.dataCollector}>
                    {dogQualities.map((quality, qualityIndex) => (
                      <div key={qualityIndex} className={css.dataItemCont}>
                        <label htmlFor={`${qualityIndex}-${quality}`}>
                          {dogLabels[qualityIndex]}:
                        </label>
                        <input
                          type="number"
                          id={`${qualityIndex}-${quality}`}
                          name={quality}
                          min="0"
                          max="5"
                          defaultValue="0"
                        />
                      </div>
                    ))}
                  </div>
                  <button
                    type="submit"
                    className={css.dataSender}
                    onClick={handleInfoClick}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DogWard;

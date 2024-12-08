import { useUser } from '../CustomProviderComponent/CustomProviderComponent';
import css from './catWard.module.css';
import catOwner from './cat owner.jpg';
import { CatWardModal } from '../catWardModal/catWardModal';

export const CatWard = () => {
  const { handleCatCalculation, handleInfoClick } = useUser();
  return (
    <>
      <CatWardModal />
      <div>
        <span className={css.titleContainer}>
          <span className={css.iconContainer}>
            <img
              src={catOwner}
              className={css.icon}
              style={{ width: '100px' }}
              alt=""
            />
          </span>
          <span>
            <span className={css.title}>Welcome to the Cat Ward</span>
            <span className={css.movieGallerySlogan}>
              {' '}
              <i>Unlock the Purrfect Match with Precision!</i>{' '}
            </span>
          </span>
          <span className={css.iconContainer}>
            <img
              src={catOwner}
              className={css.iconTwo}
              style={{ width: '100px' }}
              alt=""
            />
          </span>
        </span>

        <div className={css.galleryFrame}>
          <div className={css.dataAreaCont}>
            <div className={css.dataAreaIntro}>
              <h3>How It Works</h3>
              <div>
                Our Weighted Euclidean Distance algorithm evaluates multiple
                dimensions of pet breeds, including adaptability, affection
                level, child-friendliness, and many more. By assigning specific
                weights to each attribute based on your input, the algorithm
                calculates a composite score that accurately reflects the
                overall suitability of each breed to your unique preferences.
              </div>
              <div>
                This score is derived through a meticulous process that compares
                the values of each attribute between your preferences and the
                breed characteristics. The final result is a list of breeds
                ranked by their compatibility, making your decision-making
                process both efficient and enjoyable.
              </div>
              <h3>How To Use</h3>
              <div>
                On a scale of 1 - 5 select the value that suits you best for a
                particular quality that you would like your ideal cat to have.
              </div>
              <div>
                SELECT 0 FOR A PARTICULAR QUALITY, IF YOU DON'T WANT IT TO BE
                CONSIDERED BY THE ALGORITHM.
              </div>
              <div className={css.dataItemCont}>
                NOTE:- The Threshold selector determines the strictness of the
                algorithm. The HIGHER the value is the LESS STRICT the algorithm
                is and the MORE MATCHES you'll get, but the LOWER the value is
                the MORE STRICT the algorithm is and the LESS MATCHES you'll
                get. WE RECOMMEND INCREASING THE VALUE IF YOU DO NOT GET ANY
                MATCHES AND REDUCING THE VALUE IF YOU GET TOO MANY MATCHES.
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
              <form
                id="userPrefForm"
                className={css.form}
                onSubmit={handleCatCalculation}
              >
                <div>
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
                </div>
                <div className={css.dataCollector}>
                  <span className={css.dataItemCont}>
                    <label htmlFor="adaptability">Adaptability:</label>
                    <input
                      type="number"
                      id="adaptability"
                      name="adaptability"
                      defaultValue="0"
                      min="0"
                      max="5"
                    />
                  </span>

                  <span className={css.dataItemCont}>
                    <label htmlFor="affection_level">Affection Level:</label>
                    <input
                      type="number"
                      id="affection_level"
                      name="affection_level"
                      defaultValue="0"
                      min="0"
                      max="5"
                    />
                  </span>

                  <span className={css.dataItemCont}>
                    <label htmlFor="child_friendly">Child Friendly:</label>
                    <input
                      type="number"
                      id="child_friendly"
                      name="child_friendly"
                      defaultValue="0"
                      min="0"
                      max="5"
                    />
                  </span>

                  <span className={css.dataItemCont}>
                    <label htmlFor="dog_friendly">Dog Friendly:</label>
                    <input
                      type="number"
                      id="dog_friendly"
                      name="dog_friendly"
                      defaultValue="0"
                      min="0"
                      max="5"
                    />
                  </span>

                  <span className={css.dataItemCont}>
                    <label htmlFor="energy_level">Energy Level:</label>
                    <input
                      type="number"
                      id="energy_level"
                      name="energy_level"
                      defaultValue="0"
                      min="0"
                      max="5"
                    />
                  </span>

                  <span className={css.dataItemCont}>
                    <label htmlFor="grooming">Grooming Needs:</label>
                    <input
                      type="number"
                      id="grooming"
                      name="grooming"
                      defaultValue="0"
                      min="0"
                      max="5"
                    />
                  </span>

                  <span className={css.dataItemCont}>
                    <label htmlFor="health_issues">Health Issues:</label>
                    <input
                      type="number"
                      id="health_issues"
                      name="health_issues"
                      defaultValue="0"
                      min="0"
                      max="5"
                    />
                  </span>

                  <span className={css.dataItemCont}>
                    <label htmlFor="intelligence">Intelligence:</label>
                    <input
                      type="number"
                      id="intelligence"
                      name="intelligence"
                      defaultValue="0"
                      min="0"
                      max="5"
                    />
                  </span>

                  <span className={css.dataItemCont}>
                    <label htmlFor="shedding_level">Shedding Level:</label>
                    <input
                      type="number"
                      id="shedding_level"
                      name="shedding_level"
                      defaultValue="0"
                      min="0"
                      max="5"
                    />
                  </span>

                  <span className={css.dataItemCont}>
                    <label htmlFor="social_needs">Social Needs:</label>
                    <input
                      type="number"
                      id="social_needs"
                      name="social_needs"
                      defaultValue="0"
                      min="0"
                      max="5"
                    />
                  </span>

                  <span className={css.dataItemCont}>
                    <label htmlFor="stranger_friendly">
                      Stranger Friendly:
                    </label>
                    <input
                      type="number"
                      id="stranger_friendly"
                      name="stranger_friendly"
                      defaultValue="0"
                      min="0"
                      max="5"
                    />
                  </span>

                  <span className={css.dataItemCont}>
                    <label htmlFor="vocalisation">Vocalisation:</label>
                    <input
                      type="number"
                      id="vocalisation"
                      name="vocalisation"
                      defaultValue="0"
                      min="0"
                      max="5"
                    />
                  </span>
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
    </>
  );
};

export default CatWard;

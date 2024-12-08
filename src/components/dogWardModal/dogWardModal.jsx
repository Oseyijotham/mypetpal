import { useUser } from '../CustomProviderComponent/CustomProviderComponent';
import css from './dogWardModal.module.css';
import svg from '../SharedLayout/icons.svg';


export const DogWardModal = () => {
  const {
    handleInfoClose,
    matchInfo,
    matchRay,
  } = useUser();

  //console.log(dogBreedInfo);
  

  return (
    <>
      {matchInfo !== undefined && (
        <div className={css.overlay}>
          <button className={css.closeModal} onClick={handleInfoClose}>
            <svg width="20px" height="20px" className={css.modalIcon}>
              <use href={`${svg}#icon-cross`}></use>
            </svg>
          </button>
          <div className={css.galleryFrame}>
            <div className={css.modal}>
              {matchRay.length !== 0 ? (
                <div className={css.matchListArea}>
                  <h2 className={css.matchListContTitle}>
                    Congrats, you have {matchRay.length} matches
                  </h2>
                  <div className={css.matchListCont}>
                    <div className={css.matchList}>
                      {matchRay.map(match => (
                        <div className={css.matchListItem}>
                          <div className={css.matchItemOverlay}>
                            {match.image_link && (
                              <img
                                src={match.image_link}
                                alt="Pet"
                                width="450px"
                                className={css.matchImage}
                              />
                            )}
                            <div className={css.matchDescription}>
                              <div className={css.matchDescriptionItem}>
                                Child Friendly:{match.good_with_children}
                              </div>
                              <div className={css.matchDescriptionItem}>
                                Friedliness with other dogs:
                                {match.good_with_other_dogs}
                              </div>
                              <div className={css.matchDescriptionItem}>
                                Shedding Level:{match.shedding}
                              </div>
                              <div className={css.matchDescriptionItem}>
                                Grooming Difficulty:{match.grooming}
                              </div>
                              <div className={css.matchDescriptionItem}>
                                Drooling Level:{match.drooling}
                              </div>
                              <div className={css.matchDescriptionItem}>
                                Coat Length:{match.coat_length}
                              </div>
                              <div className={css.matchDescriptionItem}>
                                Stranger Friendly:{match.good_with_strangers}
                              </div>
                              <div className={css.matchDescriptionItem}>
                                Playfulness:{match.playfulness}
                              </div>
                              <div className={css.matchDescriptionItem}>
                                Protectiveness:{match.protectiveness}
                              </div>
                              <div className={css.matchDescriptionItem}>
                                Easiness to Train:{match.trainability}
                              </div>
                              <div className={css.matchDescriptionItem}>
                                Energy:{match.energy}
                              </div>
                              <div className={css.matchDescriptionItem}>
                                Barking Audibility:{match.barking}
                              </div>
                            </div>
                          </div>
                          <p className={css.matchItemName}>{match.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className={css.noMatchArea}>
                  <h2 className={css.noMatchSign}>
                    No matches, try increasing the threshold value.
                  </h2>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};



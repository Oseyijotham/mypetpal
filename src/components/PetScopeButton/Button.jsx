import { useUser } from '../CustomProviderComponent/CustomProviderComponent';
import css from './Button.module.css';


export const Button = () => {
  const { searchImgResults, handleButtonPress, fewImgResponse } =
    useUser();

  return (
    <div>
      {searchImgResults.length !== 0 && !fewImgResponse ? (
        <button onClick={handleButtonPress} className={css.loadBtn}>
          Load More
        </button>
      ) : null}
    </div>
  );
};



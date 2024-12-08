import { useUser } from '../CustomProviderComponent/CustomProviderComponent';
import { ThreeCircles } from 'react-loader-spinner';
import css from './Loader.module.css';


export const Loader = () => {
  const { initLoaded } = useUser();

  return (
    <>
      {initLoaded && (
        <div className={css.backDrop}>
          <ThreeCircles
            visible={true}
            height="80"
            width="80"
            color="green"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass={css.loader}
          />
        </div>
      )}
    </>
  );
};



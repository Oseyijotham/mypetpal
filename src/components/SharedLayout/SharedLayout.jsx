import { Outlet } from 'react-router-dom';
import { useUser } from '../CustomProviderComponent/CustomProviderComponent';
import {
  Container,
  Header,
  Logo,
  Link,
  Frame,
  IconLabel,
  Symbol
} from './SharedLayout.styled';
import css from './SharedLayout.module.css';
import { Suspense } from 'react';
import { useEffect } from 'react';
//import { selectVotes } from '../../redux/selectors';
//import { useSelector } from 'react-redux';
import siteLogo from './pet-care.png';

export const SharedLayout = () => {
  const { toggleSign, makingTrue, makingFalse, setChger } = useUser();
  let { chger } = useUser();

 

  /*setInterval(() => {
    setChger(prevChger => prevChger + 1);
    console.log(chger);
  }, 10000);

 

  useEffect(() => {
    makingTrue();
    console.log(toggleSign);
    setTimeout(() => {
    
      makingFalse()
    }
  
, 5000);
  }, [chger]);

  //console.log(toggleSign);*/

  useEffect(() => {
    const intervalId = setInterval(() => {
      setChger(prevChger => prevChger + 1);
    }, 6000);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  
  useEffect(() => {
    makingTrue();
    //console.log('ToggleSign after makingTrue:', true);

    const timeoutId = setTimeout(() => {
      makingFalse();
      //console.log('ToggleSign after makingFalse:', false);
    }, 3000);

    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chger]);

 


  return (
    <Container>
      <Header>
        <Symbol to="/">
          <Logo>
            <Frame role="img" aria-label="computer icon">
              <img src={siteLogo} alt="Petpal" width="63px" />
            </Frame>
            <IconLabel>Pet</IconLabel>
            <IconLabel>pal</IconLabel>
          </Logo>
        </Symbol>
        <div className={css.advertContainer}>
          {toggleSign ? (
            <div className={css.advert}>
              Introducing the Ultimate Pet Matching Experience with the Weighted
              Euclidean Distance Algorithm
            </div>
          ) : (
            <div className={css.advert}>
              See if you can find the hidden Ward
            </div>
          )}
        </div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/cat_ward">Cat Ward</Link>
          <Link to="/dog_ward">Dog Ward</Link>
          <Link to="/pet_tube">PetTube</Link>
        </nav>
      </Header>
      <main className={css.home}>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};

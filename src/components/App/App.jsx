import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from '../SharedLayout/SharedLayout';
import { useEffect } from 'react';
import { useUser } from '../CustomProviderComponent/CustomProviderComponent';


const Home = lazy(() => import('../Home/Home'));
const   DogWard = lazy(() => import('../dogWard/dogWard'));
const PetTube = lazy(() => import('../petTube/petTube'));
const CatWard = lazy(() => import('../catWard/catWard'));
const PetScope = lazy(() => import('../PetScope/petScope'));

export const App = () => {
  const { initialApiCall, initialImgApiCall } = useUser();


  useEffect(() => {
    initialApiCall();
    initialImgApiCall();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="dog_ward" element={<DogWard />} />
        <Route path="pet_tube" element={<PetTube />} />
        <Route path="cat_ward" element={<CatWard />} />
        <Route path="pet_scope" element={<PetScope />} />
      </Route>
    </Routes>
  );
};


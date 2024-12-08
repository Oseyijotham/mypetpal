import { createContext, useContext, useState } from 'react';
import { useEffect } from 'react';
import { fetchCatBreeds } from '../API/Api';
//import { fetchDogBreeds } from '../API/Api';
import { startSrch } from '../API/Api';
import { loadSrch } from '../API/Api';
import { startImgSrch, loadImgSrch } from '../API/Api';
//import { fetchDogInfo } from '../API/Api';
import Notiflix from 'notiflix';
import { useMemo } from 'react';
import data from '../dogWard/allDogs.json';


const UserContext = createContext();

export const useUser = () => useContext(UserContext);


export const UserProvider = ({ children }) => {
  const [isLoading, setLoadingStatus] = useState();
  const [catBreedList, setCatBreedList] = useState([]);
  const [dogBreedList, setDogBreedList] = useState([]);
  //const [dogBreedNameList, setDogBreedNameList] = useState([]);
  const [showCatInfo, setCatInfo] = useState();
  const [initLoaded, setInitLoader] = useState();
  const [resultsAmount, setResultsAmount] = useState();
  const [fewResponse, setResponseStatus] = useState();
  const [pageItems, setPageItems] = useState();
  const [pageNums, setPageNums] = useState(87);
  const [didUserSearch, setSearchStatus] = useState();
  const [petTubeVideos, setPetTubeVideos] = useState([]);
  const [catPageNums, setCatPageNums] = useState();
  const [galleryLoaded, setGalleryLoader] = useState();
  const [toggleSign, setToggleSign] = useState();
  let [chger, setChger] = useState(0);
  const [isOneHovered, setIsOneHovered] = useState(false);
  const [isTwoHovered, setIsTwoHovered] = useState(false);
  const [isThreeHovered, setIsThreeHovered] = useState(false);
  const [initalSearchTerm, setInitalSearchTerm] = useState('Cute Pets');
  const [searchTerm, setSearchTerm] = useState();
  const [matchRay, setMatchRay] = useState([]);
  const [matchInfo, setMatchInfo] = useState();

  const [searchImgResults, getImgResults] = useState([]);
  //const [isLoading, setLoadingStatus] = useState();
  const [fewImgResponse, setImgResponseStatus] = useState();
  const [imgSearchTerm, setImgSearchTerm] = useState();
  const [imgPageItems, setImgPageItems] = useState();
  const [imgPageNums, setImgPageNums] = useState();
  const [didUserSearchImg, setImgSearchStatus] = useState();
  const [imgResultsAmount, setImgResultsAmount] = useState();
  //const [fullImage, setFullImage] = useState();
  //const [imageAlt, setImageAlt] = useState();

  const dogQualities = [
    'good_with_children',
    'good_with_other_dogs',
    'shedding',
    'grooming',
    'drooling',
    'coat_length',
    'good_with_strangers',
    'playfulness',
    'protectiveness',
    'trainability',
    'energy',
    'barking',
  ];

  

  const getDogThreshold = evt => {
    const form = evt.target;
    return Number(form.elements['threshold'].value);
  };

  const getDogUserPreferences = evt => {
    const form = evt.target;
    const preferences = {};
    dogQualities.forEach(quality => {
      preferences[quality] = Number(form.elements[quality].value); //preferences[quality] represents a key
    });
    return preferences;
  };

    const handleDogCalculation = evt => {
      evt.preventDefault();
      const userPref = getDogUserPreferences(evt);
      const calculateDistance = (breed, anObj, weights) => {
        let sum = 0;
        for (let attribute in weights) {
          if (weights.hasOwnProperty(attribute)) {
            const breedValue = breed[attribute];
            const userValue = anObj[attribute];
            const weight = weights[attribute];
             if (userValue === 0) {
          continue;
        }
            console.log(
              `Attribute: ${attribute}, Breed Value: ${breedValue}, User Value: ${userValue}, Weight: ${weight}`
            );
            if (
              typeof breedValue === 'undefined' ||
              typeof userValue === 'undefined'
            ) {
              console.error(`Undefined value for attribute: ${attribute}`);
            } else {
              sum += weight * Math.pow(userValue - breedValue, 2);
            }
          }
        }
        return Math.sqrt(sum);
      };
      
      
    const weights = {
      good_with_children: 1,
      good_with_other_dogs: 1,
      shedding: 1,
      grooming: 1,
      drooling: 1,
      coat_length: 1,
      good_with_strangers: 1,
      playfulness: 1,
      protectiveness: 1,
      trainability: 1,
      energy: 1,
      barking: 1,
    };


      const bestBreeds = dogBreedList
        .map(breed => {
          return {
            breed,
            distance: calculateDistance(breed, userPref, weights),
          };
        })
        .sort((a, b) => a.distance - b.distance)
        .map(breedWithDistance => breedWithDistance.breed);

      const threshold = getDogThreshold(evt);
      const matches = bestBreeds.filter(
        breed => calculateDistance(breed, userPref, weights) <= threshold
      );
      setMatchRay([...matches]);
      console.log(`Number of matches: ${matches.length}`);
      console.log(matches);
      console.log(userPref);
      //console.log(bestBreeds);
  };
  
   const getCatThreshold = evt => {
     const form = evt.target;
     return Number(form.elements['threshold'].value);
   };

  const getCatUserPreferences = evt => {
    const form = evt.target;
    return {
      adaptability: Number(form.elements['adaptability'].value),
      affection_level: Number(form.elements['affection_level'].value),
      child_friendly: Number(form.elements['child_friendly'].value),
      dog_friendly: Number(form.elements['dog_friendly'].value),
      energy_level: Number(form.elements['energy_level'].value),
      //experimental: Number(form.elements['experimental'].value),
      grooming: Number(form.elements['grooming'].value),
      //hairless: Number(form.elements['hairless'].value),
      health_issues: Number(form.elements['health_issues'].value),
      //hypoallergenic: Number(form.elements['hypoallergenic'].value),
      //indoor: Number(form.elements['indoor'].value),
      intelligence: Number(form.elements['intelligence'].value),
      //natural: Number(form.elements['natural'].value),
      //rare: Number(form.elements['rare'].value),
      shedding_level: Number(form.elements['shedding_level'].value),
      //short_legs: Number(form.elements['short_legs'].value),
      social_needs: Number(form.elements['social_needs'].value),
      stranger_friendly: Number(form.elements['stranger_friendly'].value),
      //suppressed_tail: Number(form.elements['suppressed_tail'].value),
      vocalisation: Number(form.elements['vocalisation'].value),
    };
  };

  const handleCatCalculation = evt => {
    evt.preventDefault();
    const userPref = getCatUserPreferences(evt);
    const calculateDistance = (breed, anObj, weights) => {
      let sum = 0;
      for (let attribute in weights) {
        if (weights.hasOwnProperty(attribute)) {
          const breedValue = breed[attribute];
          const userValue = anObj[attribute];
          const weight = weights[attribute];
              if (userValue === 0) {
          continue;
        }
          console.log(
            `Attribute: ${attribute}, Breed Value: ${breedValue}, User Value: ${userValue}, Weight: ${weight}`
          );
          if (
            typeof breedValue === 'undefined' ||
            typeof userValue === 'undefined'
          ) {
            console.error(`Undefined value for attribute: ${attribute}`);
          } else {
            sum += weight * Math.pow(userValue - breedValue, 2);
          }
        }
      }
      return Math.sqrt(sum);
    };
    const weights = {
      adaptability: 1,
      affection_level: 1,
      child_friendly: 1,
      dog_friendly: 1,
      energy_level: 1,
      //experimental: 1,
      grooming: 1,
      //hairless: 1,
      health_issues: 1,
     // hypoallergenic: 1,
     // indoor: 1,
      intelligence: 1,
      //natural: 1,
      //rare: 1,
      shedding_level: 1,
      //short_legs: 1,
      social_needs: 1,
      stranger_friendly: 1,
      //suppressed_tail: 1,
      vocalisation: 1,
    };

    const bestBreeds = catBreedList
      .map(breed => {
        return {
          breed,
          distance: calculateDistance(breed, userPref, weights),
        };
      })
      .sort((a, b) => a.distance - b.distance)
      .map(breedWithDistance => breedWithDistance.breed);

    const threshold = getCatThreshold(evt); 
    const matches = bestBreeds.filter(
      breed => calculateDistance(breed, userPref, weights) <= threshold
    );
    setMatchRay([...matches]);
    console.log(`Number of matches: ${matches.length}`);
    console.log(matches);
    console.log(userPref);
    //console.log(bestBreeds);
  };

  const makingTrue = () => {
    setToggleSign(true);
  };

  const makingFalse = () => {
    setToggleSign(false);
  };

  //useEffect(()=>{console.log(dogBreedNameList)},[dogBreedNameList])

  /*useEffect(() => {
    setInitLoader(true);
    fetchDogBreeds()
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(response => {
        const dogNameArray = response.map(breed => {
          return breed.name;
        });
        setDogBreedNameList([...dogNameArray]);
        setInitLoader(false);
        //console.log(dogBreedNameList);
        //const ids = response.map((res) => { return res.id });
        //console.log(ids);
        //setidsArray([...ids]);
      })
      .catch(error => {
        setInitLoader(false);
        console.error(`Error message ${error}`);
      });
  }, []);
*/


  const memoizedResponse = useMemo(
    () => startSrch(initalSearchTerm),
    [initalSearchTerm]
  );

  const initialApiCall = () => {
    setGalleryLoader(true);
    memoizedResponse
      .then(users => {
        const response = users.hits;
        const totalResponse = response.totalHits;
        setPetTubeVideos([...response]);
        setSearchTerm(initalSearchTerm);
        setPageNums(1);
        setPageItems(12);
        setSearchStatus(true);
        setResultsAmount(totalResponse);
        setTimeout(() => {
          setGalleryLoader(false);
        }, 2000);
      })
      .catch(error => {
        Notiflix.Notify.failure(
          'Oops! Something went wrong! Try reloading the page!'
        );
        setGalleryLoader(false);
        console.error(`Error message ${error}`);
      });
  };

  const handleSubmit = evt => {
    setGalleryLoader(true);
    evt.target[1].style.boxShadow = 'inset 0 0 10px 5px rgba(0, 0, 0, 0.3)';
    setTimeout(() => {
      evt.target[1].style.boxShadow =
        '0px 4px 6px -1px rgba(0, 0, 0, 0.3), 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 10px 12px -6px rgba(0, 0, 0, 0.4)';
    }, 2000);
    evt.preventDefault();
    const { value } = evt.target[0];
    startSrch(value)
      .then(response => {
        const ans = response.hits;
        const totalResponse = response.totalHits;

        if (totalResponse !== 0) {
          Notiflix.Notify.success(
            `Hooray! We found ${response.totalHits} videos.`
          );
        }
        if (totalResponse === 0) {
          Notiflix.Notify.warning(
            'Sorry, there are no Videos matching your search query. Please try again.'
          );
        }
        if (totalResponse <= 12 && totalResponse !== 0) {
          Notiflix.Notify.warning(
            "We're sorry, but you've reached the end of search results."
          );
          setResponseStatus(true); //If page is not refreshed this stays true(even when false), hence the need for the else{}
        } else {
          setResponseStatus(false);
        }

        setPetTubeVideos([...ans]);
        setSearchTerm(value);
        setPageNums(1);
        setPageItems(12);
        setSearchStatus(true);
        setResultsAmount(totalResponse);

        setTimeout(() => {
          setGalleryLoader(false);
        }, 2000);
        setCatPageNums(1);

        console.log(response);
      })
      .catch(error => {
        Notiflix.Notify.failure(
          'Oops! Something went wrong! Try reloading the page!'
        );
        setGalleryLoader(false);
        console.error(`Error message ${error}`);
      });
  };

  const handleGalleryButtonPress = evt => {
    console.log(dogBreedList);
    setGalleryLoader(true);
    evt.target.style.boxShadow = 'inset 0 0 10px 5px rgba(0, 0, 0, 0.3)';
    setTimeout(() => {
      evt.target.style.boxShadow =
        '0px 4px 6px -1px rgba(0, 0, 0, 0.3), 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 10px 12px -6px rgba(0, 0, 0, 0.4)';
    }, 2000);

    let storageVar = pageNums;
    storageVar += 1;
    let storageVarItems = pageItems;
    storageVarItems += 12;

    if (storageVarItems >= resultsAmount) {
      Notiflix.Notify.warning(
        "We're sorry, but you've reached the end of search results."
      );

      setResponseStatus(true);
    }
    setLoadingStatus(true);

    loadSrch(searchTerm ? searchTerm : initalSearchTerm, storageVar)
      .then(users => {
        const response = users.hits;

        setPetTubeVideos([...petTubeVideos, ...response]);
        setPageNums(storageVar);
        setPageItems(storageVarItems);

        setTimeout(() => {
          setGalleryLoader(false);
        }, 2000);
      })
      .catch(error => {
        Notiflix.Notify.failure(
          'Oops! Something went wrong! Try reloading the page!'
        );
        setGalleryLoader(false);
        console.error(`Error message ${error}`);
      });
  };

  useEffect(() => {
    setInitLoader(true);
    fetchCatBreeds()
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(response => {
        setCatBreedList([...response]);
        setInitLoader(false);
        //console.log(response);
        //const ids = response.map((res) => { return res.id });
        //console.log(ids);
        //setidsArray([...ids]);
      })
      .catch(error => {
        setInitLoader(false);
        console.error(`Error message ${error}`);
      });
  }, []);

  /*useEffect(() => {
    // Load JSON data
    fetch(data)
      .then(response => response.json())
      .then(data => {
        setDogBreedList(data) 
        console.log(data)
      })
      .catch(error => console.error('Error loading data:', error));
  }, []);*/

  useEffect(() => { setDogBreedList(data) }, []);
 

  const handleInfoClick = evt => {
    evt.target.style.boxShadow = 'inset 0 0 10px 5px rgba(0, 0, 0, 0.3)';
    setTimeout(() => {
      evt.target.style.boxShadow =
        '0px 4px 6px -1px rgba(0, 0, 0, 0.3), 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 10px 12px -6px rgba(0, 0, 0, 0.4)';
    }, 2000);
    
    //setDogBreedId(evt.currentTarget.dataset.id2);

    //setDogId(Number(evt.currentTarget.dataset.id1));
    //setCatInfo(true);
    setMatchInfo(true);
  };

   const handleInfoClose = () => {
     //setCatInfo(undefined);
     //set
     setMatchInfo(undefined);
   };


    const memoizedImageResponse = useMemo(
      () => startImgSrch(initalSearchTerm),
      [initalSearchTerm]
  );

   const initialImgApiCall = () => {
     setLoadingStatus(true);
     memoizedImageResponse
       .then(users => {
         const response = users.hits;
         getImgResults([...response]);
         setImgSearchTerm(initalSearchTerm);
         setImgPageNums(1);
         setImgPageItems(12);
         setImgSearchStatus(true);
        
         setTimeout(() => {
           setLoadingStatus(false);
         }, 2000);
       })
       .catch(error => {
         Notiflix.Notify.failure(
           'Oops! Something went wrong! Try reloading the page!'
         );
         setLoadingStatus(false);
         console.error(`Error message ${error}`);
       });
   };
  
  const handleImgSubmit = evt => {
  getImgResults([]);
  evt.preventDefault();
  const { value } = evt.target[0];

  evt.target[1].style.boxShadow = 'inset 0 0 10px 5px rgba(0, 0, 0, 0.3)';
  setTimeout(() => {
    evt.target[1].style.boxShadow =
      '0px 4px 6px -1px rgba(0, 0, 0, 0.3), 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 10px 12px -6px rgba(0, 0, 0, 0.4)';
  }, 2000);
  setLoadingStatus(true);
  startImgSrch(value)
    .then(users => {
      const response = users.hits;
      const totalResponse = users.totalHits;
      console.log(users.totalHits);
      if (totalResponse !== 0) {
        Notiflix.Notify.success(`Hooray! We found ${users.totalHits} images.`);
      }
      if (totalResponse === 0) {
        Notiflix.Notify.warning(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      }
      if (totalResponse <= 12 && totalResponse !== 0) {
        Notiflix.Notify.warning(
          "We're sorry, but you've reached the end of search results."
        );
        setImgResponseStatus(true); //If page is not refreshed this stays true(even when false), hence the need for the else{}
      } else {
        setImgResponseStatus(false);
      }

      getImgResults([...response]);
      setImgSearchTerm(value);
      setImgPageNums(1);
      setImgPageItems(12);
      setImgSearchStatus(true);
      setImgResultsAmount(totalResponse);

      setTimeout(() => {
        setLoadingStatus(false);
      }, 2000);
    })
    .catch(error => {
      Notiflix.Notify.failure(
        'Oops! Something went wrong! Try reloading the page!'
      );
      setLoadingStatus(false);
      console.error(`Error message ${error}`);
    });
  //console.log(response);
  };
  
   const handleButtonPress = evt => {
     evt.target.style.boxShadow = 'inset 0 0 10px 5px rgba(0, 0, 0, 0.3)';
     setTimeout(() => {
       evt.target.style.boxShadow =
         '0px 4px 6px -1px rgba(0, 0, 0, 0.3), 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 10px 12px -6px rgba(0, 0, 0, 0.4)';
     }, 2000);

     let storageVar = imgPageNums;
     storageVar += 1;
     let storageVarItems = imgPageItems;
     storageVarItems += 12;
     if (storageVarItems >= imgResultsAmount) {
       Notiflix.Notify.warning(
         "We're sorry, but you've reached the end of search results."
       );

       setResponseStatus(true);
     }
     setLoadingStatus(true);

     loadImgSrch(imgSearchTerm, storageVar)
       .then(users => {
         const response = users.hits;

         getImgResults([...searchImgResults, ...response]);
         setImgPageNums(storageVar);
         setImgPageItems(storageVarItems);

         setTimeout(() => {
           setLoadingStatus(false);
         }, 2000);
       })
       .catch(error => {
         Notiflix.Notify.failure(
           'Oops! Something went wrong! Try reloading the page!'
         );
         setLoadingStatus(false);
         console.error(`Error message ${error}`);
       });
   };

 
  return (
    <UserContext.Provider
      value={{
        isLoading,
        catBreedList,
        showCatInfo,
        handleInfoClick,
        handleInfoClose,
        initLoaded,
        fewResponse,
        setSearchStatus,
        didUserSearch,
        petTubeVideos,
        handleGalleryButtonPress,
        galleryLoaded,
        toggleSign,
        makingTrue,
        makingFalse,
        chger,
        setChger,
        setToggleSign,
        isOneHovered,
        isTwoHovered,
        isThreeHovered,
        setIsOneHovered,
        setIsTwoHovered,
        setIsThreeHovered,
        initialApiCall,
        handleSubmit,
        handleCatCalculation,
        setInitalSearchTerm,
        matchRay,
        matchInfo,
        setCatInfo,
        catPageNums,
        dogQualities,
        handleDogCalculation,
        initialImgApiCall,
        searchImgResults,
        handleImgSubmit,
        handleButtonPress,
        fewImgResponse,
        didUserSearchImg,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

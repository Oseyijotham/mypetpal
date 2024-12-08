import axios from 'axios';



export function fetchCatBreeds() {
  return fetch('https://api.thecatapi.com/v1/breeds', {
    method: 'GET',
    headers: {
      'x-api-key':
        'live_Udg7A2x0tI3uu4EF83xGvUwrVQrLFzCfm4UQiXjYv6QTx6ff6tzVyVEnzHCCQTDz',
    },
  });
}

export function fetchDogBreeds() {
  return fetch('https://api.thedogapi.com/v1/breeds', {
    method: 'GET',
    headers: {
      'x-api-key':
        'live_Udg7A2x0tI3uu4EF83xGvUwrVQrLFzCfm4UQiXjYv6QTx6ff6tzVyVEnzHCCQTDz',
    },
  });
}

/*
export function fetchCatByBreed(identifier) {
  return fetch(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${identifier}`,
    {
      method: 'GET',
      headers: {
        'x-api-key':
          'live_veNZdtcwPdxTq8JCOCN8dW0LvRfMhLJHM4uZOHDCWDC5ve8GaIeqqX5Y2CT6lrKI',
      },
    }
  );
}

export function fetchDogByBreed(identifier) {
  return fetch(
    `https://api.thedogapi.com/v1/images/search?breed_ids=${identifier}`,
    {
      method: 'GET',
      headers: {
        'x-api-key':
          'live_veNZdtcwPdxTq8JCOCN8dW0LvRfMhLJHM4uZOHDCWDC5ve8GaIeqqX5Y2CT6lrKI',
      },
    }
  );
}
*/




export const startSrch = async srchTerm => {
  try {
    const response = await axios.get(`https://pixabay.com/api/videos/`, {
      params: {
        key: '41151959-2696743ecd3219a7fd97287eb',
        q: srchTerm,
        video_type: 'all',
        safesearch: true,
        per_page: 12,
        page: 1,
        min_width: 300,
        min_height: 350,
      },
    });
    const users = await response.data;
    return users;
  } catch (error) {
    console.error(error);
  }
};

export const loadSrch = async (srchTerm, pageNum) => {
  try {
    const response = await axios.get(`https://pixabay.com/api/videos/`, {
      params: {
        key: '41151959-2696743ecd3219a7fd97287eb',
        q: srchTerm,
        video_type: 'all',
        safesearch: true,
        per_page: 12,
        page: pageNum,
        min_width: 300,
        min_height: 350,
      },
    });
    const users = await response.data;
    return users;
  } catch (error) {
    console.error(error);
  }
};


export const startImgSrch = async srchTerm => {
  try {
    const response = await axios.get(`https://pixabay.com/api/`, {
      params: {
        key: '41151959-2696743ecd3219a7fd97287eb',
        q: srchTerm,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        per_page: 12,
        page: 1,
      },
    });
    const users = await response.data;
    return users;
  } catch (error) {
    console.error(error);
  }
};

export const loadImgSrch = async (srchTerm, pageNum) => {
  try {
    const response = await axios.get(`https://pixabay.com/api/`, {
      params: {
        key: '41151959-2696743ecd3219a7fd97287eb',
        q: srchTerm,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        per_page: 12,
        page: pageNum,
      },
    });
    const users = await response.data;
    return users;
  } catch (error) {
    console.error(error);
  }
};


/*
export const fetchDogInfo = async (breedName) => {
  try {
    const response = await axios.get(
      `https://api.api-ninjas.com/v1/dogs?name=${breedName}`,
      {
        headers: {
          'X-Api-Key': 'xTb9fEpRLLWa7f8Fg6q3KA==fq2TAI2lzJd63qfi',
        },
      }
    );
    const users = response.data;
    return users;
  } catch (error) {
    console.error(error);
      return null;
  }
};
*/

/*export function fetchDogInfo() {
  return fetch('https://api.api-ninjas.com/v1/dogs?name=golden retriever', {
    method: 'GET',
    headers: {
      'X-Api-Key': 'kp+yNcMh+vJeRRelzRz9wg==Z3KjY2odrVQjyCeU',
    },
  });
}*/
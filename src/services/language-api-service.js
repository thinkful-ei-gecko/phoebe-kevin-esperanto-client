import config from '../config'
import TokenService from '../services/token-service'

const languageApiService = {
  getLanguageAndWords(user) {
    return fetch(`${config.REACT_APP_API_ENDPOINT}/language`, {
      method: 'GET',
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
        )
  },

  getFirstWord() {
    return fetch(`${config.REACT_APP_API_ENDPOINT}/language/head`, {
      method: 'GET',
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
        )
  },

  postGuess(guess) {
    console.log({guess})
    return fetch(`${config.REACT_APP_API_ENDPOINT}/language/guess`, {
      method: 'POST',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      },
      body: JSON.stringify({ guess })
    })
      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
        )
  }


}

export default languageApiService
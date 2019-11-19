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

  getNextWord() {
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
  }
}

export default languageApiService
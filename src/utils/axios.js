import axios from 'axios'

let URL = process.env.NODE_ENV !== 'production' ? '/api' : 'https://www.server.com/api'
// let URL ='/api'

const axiosApi = (url, method = 'GET', data, options = {}) => {
  data = method.toUpperCase() === 'GET' ? { params: { ...data } } : { data }

  const defaultConfing = {
    url: URL + url,
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }
  const config = {
    ...defaultConfing,
    ...data,
    ...options
  }
  return axios(config).then((response) => {
    const { data } = response
    return response
  })
}

export default axiosApi

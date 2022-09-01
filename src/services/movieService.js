import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/movies`

async function create(movie) {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: JSON.stringify(movie)
  })
  return res.json()
}

async function getall() {
  const res = await fetch(BASE_URL)
  return res.json()
}

export {
  create,
  getall,
  
}
import axios from 'axios'
import AuthService from './auth'

const API_ENVS = {
  local: 'http://localhost:3000'
}

const httpclient = axios.create({
  baseURL: API_ENVS.local
})

export default{
  auth: AuthService(httpClient)
}

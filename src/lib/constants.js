const BASE_URL = `http://localhost:3001/api/v1`;

export default BASE_URL;
export const ENCRYPTIONSECRETKEY = '</#%!marVEL_Hub!%#/>';

export const routes = { 
  LOGIN: `${BASE_URL}/login`,
  SIGNUP: `${BASE_URL}/signup`,
  TRACK: `${BASE_URL}/activities/create`,
  FETCH_ACTIVITIES: `${BASE_URL}/activities`
}
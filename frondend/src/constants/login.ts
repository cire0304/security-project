export const ACCESS_TOKEN = 'accessToken';
export const AUTHORIZATION_CODE = 'code';

// 아래의 정보는 필요없을 뜻
export const KAKAO_CLIENT_ID = process.env.REACT_APP_KAKAO_CLIENT_ID;
export const KAKAO_REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URL;
export const KAKAO_OAUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

// 
export const SERVER_URL = process.env.REACT_APP_SERVER_URL;
export const KAKAO_LOGIN_URL = `${SERVER_URL}/oauth2/authorization/kakao`;
export const GOOGLE_LOGIN_URL = `${SERVER_URL}/oauth2/authorization/google`;




const TOKEN_KEY = 'fake_token';

// create jwt , merge payload and exp => return string token
export const createFakeJWT = (payload, expiresInMs = 60 * 60 * 1000) => {
  const tokenPayload = {
    ...payload,
    exp: Date.now() + expiresInMs,
  };
  return btoa(JSON.stringify(tokenPayload));
};

//decode token
export const decodefakeJWT = (token) => {
  try {
    return JSON.parse(atob(token));
  } catch {
    return null;
  }
};

//save token
export const saveToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

// get token
export const getToken = () => {
  localStorage.getItem(TOKEN_KEY);
};

// remove token
export const removeToken = () => {
  localStorage.removeToken(TOKEN_KEY);
};


// check valid token
export const isTokenValid = ()=> {
  const token  = getToken();
  if(!token) return false

  const decode = decodefakeJWT(token)
  if(!decode) return false

  return Date.now() < decode.exp
}

// get remaining time
export const getRemainingTime = ()=> {
  const token = getToken()
  if(!token) return 0

  const decode = decodefakeJWT(token)
  if(!decode) return 0

  return decode.exp - Date.now()
}

//get user from token
export const getUserFromToken = ()=> {
  const token = getToken()
  if(!token) return false

  const decode = decodefakeJWT(token)
  if(!decode || Date.now() > decode.exp) return null

  return decode
}
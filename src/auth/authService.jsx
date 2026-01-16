import {
  createFakeJWT,
  saveToken,
  removeToken,
  getRemainingTime,
  getUserFromToken
} from './fakeAuth';

let logoutTime = null;

//fake user
const FAKE_USER = [
  {
    username: 'admin',
    password: '123456',
    role: 'admin',
  },
  {
    username: 'staff',
    password: '123456',
    role: 'staff',
  },
];

// login
export const login = (username, password) => {
  const user = FAKE_USER.find((u) => u.username === username && u.password === password);
  if (!user) throw new Error('Incorect username or password!');

  const token = createFakeJWT({
    username: user.username,
    role: user.role,
  });

  saveToken(token);
  startAutoLogout()
  return user;
};

//logout
export const logout = () => {
  removeToken();
  if (logoutTime) {
    clearTimeout(logoutTime);
    logoutTime = null;
  }
};

// 
export const getCurrentUser = ()=> {
  return getUserFromToken()
}

// auto logout
export const startAutoLogout = () => {
  const remainingTime = getRemainingTime();

  if (remainingTime <= 0) {
    logout();
    return;
  }

  logoutTime = setTimeout(() => {
    logout();
    window.location.href='/login';
  }, remainingTime);
};

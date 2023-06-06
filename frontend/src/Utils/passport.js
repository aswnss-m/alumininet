export function setPassport(token, userId) {
    localStorage.setItem('token', token);
    localStorage.setItem('userId', userId);
  }
  
  export function getPassport() {
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
  }
  
  export function removePassport() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
  }
  
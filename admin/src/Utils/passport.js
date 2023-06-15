export function setPassport(token, userId) {
  console.log("Setting passport")
    localStorage.setItem('admintoken', token);
    localStorage.setItem('adminId', userId);
  }
  
  export function getPassport() {
    if (localStorage.getItem('admintoken')) {
      return true;
    }
    return false;
  }
  
  export function removePassport() {
    localStorage.removeItem('admintoken');
    localStorage.removeItem('adminId');
  }
  
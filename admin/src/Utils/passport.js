export function setPassport(token, userId) {
  console.log("Setting passport")
    sessionStorage.setItem('admintoken', token);
    sessionStorage.setItem('adminId', userId);
  }
  
  export function getPassport() {
    if (sessionStorage.getItem('admintoken')) {
      return true;
    }
    return false;
  }
  
  export function removePassport() {
    sessionStorage.removeItem('admintoken');
    sessionStorage.removeItem('adminId');
  }
  
export function setPassport(passport) {
    localStorage.setItem('token', passport);
}
export function getPassport() {
    return localStorage.getItem('token');
}
export function removePassport() {
    localStorage.removeItem('token');
}
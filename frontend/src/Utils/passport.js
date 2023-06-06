export function setPassport(token, userId) {
    localStorage.setItem('token', token);
    localStorage.setItem('userId', userId);
}
export function getPassport() {
    return localStorage.getItem('token');
}
export function removePassport() {
    localStorage.removeItem('token');
}
export const userId = localStorage.getItem('userId');
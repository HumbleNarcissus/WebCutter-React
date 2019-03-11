export const checkAuthToken = () => {
    if (localStorage.jwtToken) {
        return `Bearer ${localStorage.jwtToken}`
    }
}
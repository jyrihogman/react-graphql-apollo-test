export const getAuthToken = (jwtToken: string) => {
	return localStorage.getItem(jwtToken);
}
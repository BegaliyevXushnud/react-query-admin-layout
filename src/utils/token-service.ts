export function saveAccessToken(token: string): void {
    try {
        localStorage.setItem('access_token', token);
        console.log('Access token saved successfully.');
    } catch (error) {
        console.error('Failed to save access token:', error);
    }
}

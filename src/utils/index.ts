export const getApiRoot = () => {
    if (process.env.NODE_ENV === 'production') {
        return '/my-resume/api';
    }
    return '/api';
}
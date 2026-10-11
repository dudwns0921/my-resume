// 운영에서는 nginx가 /my-resume 아래로 서빙하므로 public 파일과 내부 경로에 같은 접두사를 붙인다.
const BASE_PATH = process.env.NODE_ENV === 'production' ? '/my-resume' : '';

export const withBasePath = (path: string) => `${BASE_PATH}${path}`;

// 운영에서는 빌드 때 만든 정적 PDF를, 개발에서는 API로 그때그때 만든 PDF를 받는다.
export const getPdfUrl = () => {
    if (process.env.NODE_ENV === 'production') {
        return withBasePath('/resume.pdf');
    }
    return '/api/pdf';
}

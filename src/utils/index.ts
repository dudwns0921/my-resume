// 운영에서는 빌드 때 만든 정적 PDF를, 개발에서는 API로 그때그때 만든 PDF를 받는다.
export const getPdfUrl = () => {
    if (process.env.NODE_ENV === 'production') {
        return '/my-resume/resume.pdf';
    }
    return '/api/pdf';
}

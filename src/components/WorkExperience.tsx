const WorkExperience = () => (
  <section className="mb-12">
    <h2 className="text-2xl font-bold mb-6">
      Work Experience<span className="text-blue-500">.</span>
    </h2>
    <div className="mb-8 p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition">
      <div className="font-semibold text-lg">
        토스페이먼츠<span className="text-blue-500">.</span>
      </div>
      <div className="text-sm text-gray-600">Frontend Developer | 2020.08 - 현재</div>
      <div className="mt-2 text-gray-700">
        토스페이먼츠 JavaScript SDK, 결제 연동 매뉴얼 등 다양한 프로젝트를 리딩 및 개발
      </div>
    </div>
    <div className="mb-8 p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition">
      <div className="font-semibold text-lg">
        비바리퍼블리카<span className="text-blue-500">.</span>
      </div>
      <div className="text-sm text-gray-600">Frontend Developer | 2018.12 - 2020.08</div>
      <div className="mt-2 text-gray-700">
        TDS, GA Silo 등 다양한 사내 라이브러리 및 서비스 개발
      </div>
    </div>
  </section>
);

export default WorkExperience;

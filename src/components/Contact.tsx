const Contact = () => (
  <section className="mb-12">
    <h2 className="text-2xl font-bold mb-6">
      Contact<span className="text-blue-500">.</span>
    </h2>
    <ul className="space-y-2">
      <li>
        <a href="mailto:mail@hyunseob.me" className="text-blue-600 hover:underline">
          이메일
        </a>
      </li>
      <li>
        <a
          href="https://seob.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          블로그
        </a>
      </li>
      <li>
        <a
          href="https://github.com/hyunseob"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          깃허브
        </a>
      </li>
      {/* ...다른 연락처... */}
    </ul>
  </section>
);

export default Contact;

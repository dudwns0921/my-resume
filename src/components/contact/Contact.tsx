import TitleComponent from '../common/TitleComponent';
import ContactItem from './ContactItem';

const contacts = [
  { href: 'https://dudwns0921.github.io/', label: '블로그' },
  { href: 'https://github.com/dudwns0921', label: '깃허브' },
];

const Contact = () => (
  <section className="w-full">
    <TitleComponent title="Contact" />
    <ul className="space-y-2">
      {contacts.map((c) => (
        <ContactItem key={c.href} {...c} />
      ))}
    </ul>
  </section>
);

export default Contact;

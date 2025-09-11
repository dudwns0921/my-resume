interface ContactItemProps {
  href: string;
  label: string;
}

const ContactItem = ({ href, label }: ContactItemProps) => (
  <li>
    <a href={href} className="text-blue-600 hover:underline" target="_blank">
      {label}
    </a>
  </li>
);

export default ContactItem;

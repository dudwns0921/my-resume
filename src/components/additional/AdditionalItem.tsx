interface AdditionalItemProps {
  href: string;
  label: string;
}

const AdditionalItem = ({ href, label }: AdditionalItemProps) => (
  <li>
    <a href={href} className="text-blue-600 hover:underline" target="_blank">
      {label}
    </a>
  </li>
);

export default AdditionalItem;

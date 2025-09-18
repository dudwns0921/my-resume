export interface HighlightItemProps {
  title?: string;
  description?: string;
}

const HighlightItem = ({ title, description }: HighlightItemProps) => {
  if (!title || !description) return null;

  return (
    <div>
      <h3 className="text-xl font-bold mb-3 break-keep">{title}</h3>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
};

export default HighlightItem;

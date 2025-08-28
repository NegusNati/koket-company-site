interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  link?: string; // Optional link for the "Read More" button
}

function ProjectCards({ title, category, image, link }: ProjectCardProps) {
  return (
    <div className="bg-gray-50 rounded-lg  p-4 hover:shadow hover:bg-gray-100 transition duration-300 border border-gray-100">
      <div className="h-40 bg-gray-200 rounded mb-3 flex items-center justify-center text-gray-400">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover rounded"
        />
      </div>
      <h3 className="font-heading text-xl font-bold mb-2">{title}</h3>
      {/* Flex container for category and Read More link */}
      <div className="flex items-center justify-between">
        <p className="text-gray-700">{category}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy font-bold hover:text-gold transition"
          >
            View Full Detail
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCards;
interface ExperienceProps {
  role: string;
  company: string;
  location: string;
  date: string;
  description: string[];
}

export default function Experience({
  role,
  company,
  location,
  date,
  description,
}: ExperienceProps) {
  return (
    <div className="flex flex-col bg-main-pink text-white rounded-xl p-6 leading-tight">
      <div className="flex flex-row justify-between">
        <h1 className="text-xl md:text-2xl poppins-bold items-baseline leading-tight">{company}</h1>
        <p className="text-m md:text-lg text-right">{date}</p>
      </div>
      <div className="flex flex-row justify-between items-baseline">
        <p className="text-m md:text-lg poppins-medium text-left">{role}</p>
        <p className="text-m md:text-lg poppins-italic text-right">{location}</p>
      </div>
      <ul className="list-disc pl-6">
        {description.map((item, index) => (
          <li key={index} className="text-m md:text-lg poppins-regular">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

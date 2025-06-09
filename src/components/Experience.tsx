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
        <h1 className="text-lg md:text-xl poppins-bold items-baseline leading-tight">{company}</h1>
        <p className="text-sm md:text-m text-right">{date}</p>
      </div>
      <div className="flex flex-row justify-between items-baseline">
        <p className="text-sm md:text-m poppins-medium text-left">{role}</p>
        <p className="text-sm md:text-m poppins-italic text-right">{location}</p>
      </div>
      <ul className="list-disc pl-6">
        {description.map((item, index) => (
          <li key={index} className="text-sm m:text-m poppins-regular">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

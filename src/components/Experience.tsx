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
    <div className="flex flex-col border-6 border-main-green text-main-green rounded-xl p-6 leading-tight">
      <div className="flex flex-row justify-between">
        <h1 className="text-lg md:text-xl poppins-bold items-baseline leading-tight">{company}</h1>
        <p className="text-sm md:text-m text-right">{date}</p>
      </div>
      <div className="flex flex-row justify-between items-baseline pb-2">
        <p className="text-sm md:text-m poppins-medium text-left">{role}</p>
        <p className="text-sm md:text-m poppins-italic text-right">{location}</p>
      </div>
      <ul className="list-disc pl-6">
        {description.map((item, index) => (
          <li key={index} className="text-m m:text-lg poppins-regular">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

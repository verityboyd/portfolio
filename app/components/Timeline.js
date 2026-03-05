export default function Timeline({ circleColour, date, title, desc }) {
  return (
    <li className="relative -ms-1.5 flex items-start gap-4">
      <span className={`size-3 shrink-0 rounded-full ${circleColour}`}></span>

      <div className="-mt-2">
        <time className="text-m/none font-medium text-gray-700">{date}</time>

        <h3 className="text-xl font-bold text-gray-900">{title}</h3>

        <p className="mt-0.5 text-lg text-gray-700">{desc}</p>
      </div>
    </li>
  );
}

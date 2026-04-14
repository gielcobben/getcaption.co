import { useState } from "react";

const dropdownIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="6" viewBox="0 0 8 6">
    <path fill="#FFF" fillRule="evenodd" d="M1.5.5L0 2l4 4 4-4L6.5.5 4 3" />
  </svg>
);

export default function DownloadButton({ currentSystemName, systems }) {
  const [show, setShow] = useState(false);

  const currentSystem = systems.find(
    (system) => currentSystemName === system.name
  );

  if (!currentSystem) {
    return <div className="h-[39px]" />;
  }

  return (
    <div className="relative inline-block z-[9999]">
      <button
        className="flex items-center border-0 text-white text-[15px] outline-none cursor-pointer rounded-[0.3rem] p-0"
        onBlur={() => setShow(false)}
      >
        <a
          href={currentSystem.downloadLink}
          className="flex items-center text-white no-underline py-3 px-3 bg-brand rounded-l hover:bg-brand-hover"
        >
          <span className="flex items-center -mt-px pr-2">{currentSystem.icon}</span>
          <span className="leading-none tracking-wide">Download for {currentSystem.name}</span>
        </a>
        <span
          className="flex items-center px-4 border-l border-white/60 bg-brand h-[39px] rounded-r cursor-pointer transition-colors hover:bg-brand-hover"
          onClick={() => setShow(!show)}
        >
          {dropdownIcon}
        </span>
      </button>

      <ul
        className={`absolute w-full top-[45px] rounded bg-white text-left list-none text-sm border border-black/10 shadow-[0_4px_16px_0_rgba(0,0,0,0.1)] z-[4] transition-all duration-200 ease-out ${
          show
            ? "opacity-100 visible scale-100 translate-y-0"
            : "opacity-0 invisible scale-[0.98] translate-y-2.5"
        }`}
      >
        {systems
          .filter((system) => currentSystemName !== system.name)
          .map((system, index) => (
            <li
              key={index}
              className="group relative flex items-center m-0 p-0 border-b border-gray-200 last:border-b-0 first:rounded-t last:rounded-b bg-white transition-colors hover:bg-brand-hover"
            >
              {index === 0 && (
                <span className="absolute right-[13px] -top-1 w-2.5 h-2.5 bg-white rotate-45 border border-black/10 -z-1 rounded-sm transition-colors group-hover:bg-brand-hover" />
              )}
              <a
                href={system.downloadLink}
                className="flex items-center text-black no-underline w-full h-full py-2 px-4 group-hover:text-white"
              >
                <span className="flex items-center [&_path]:fill-black group-hover:[&_path]:fill-white">
                  {system.icon}
                </span>
                <span className="ml-3 flex items-center">{system.name}</span>
                <small className="mt-0.5 ml-1 text-black/60 group-hover:text-white/60">
                  (.{system.extension})
                </small>
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}

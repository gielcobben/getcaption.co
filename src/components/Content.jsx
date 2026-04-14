import { useState, useEffect } from "react";
import Footer from "./Footer";
import DownloadButton from "./DownloadButton";

const iconMac = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="13"
    height="16"
    viewBox="0 0 13 16"
  >
    <path
      fill="currentColor"
      d="M13 11.738c-.51 1.52-2.04 4.212-3.616 4.24-1.045.022-1.38-.634-2.576-.634-1.194 0-1.568.615-2.556.655C2.58 16.06 0 12.11 0 8.67c0-3.166 2.15-4.735 4.03-4.763 1.006-.02 1.958.696 2.572.696.617 0 1.773-.86 2.987-.734.504.02 1.932.21 2.85 1.58-2.43 1.63-2.05 5.033.56 6.284zM9.606 0C7.77.076 6.27 2.053 6.48 3.687 8.176 3.823 9.805 1.87 9.605 0z"
    />
  </svg>
);

const iconWindows = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
  >
    <path
      fill="currentColor"
      d="M0 2l8-1v7H0V2zm7 6h9V0L7 1v7zm0 1H0v5l7 1V9zm1 0v6l8 1V9H7h1z"
    />
  </svg>
);

const iconLinux = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="13"
    height="16"
    viewBox="0 0 13 16"
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M1.99 11.027c.12-1.884 1.074-3.737 2.86-5.555C4.097 1.824 4.736 0 6.77 0c2.05 0 3.008 1.492 2.875 4.477 1.917 2.27 2.876 4.095 2.876 5.472 0 .23-.01.48-.04.72-.39-.15-.85-.23-1.39-.23-1.44 0-2.2.92-2.36 2.25-.033.304-.04.552-.03.975 0 .145.003.185 0 .234v.18c0 .363.01.563.04.822l.03.232c-.58.172-1.24.27-1.984.27-.457 0-.972-.047-1.49-.16.02-.268-.006-.55-.07-.84-.05-.22-.11-.42-.21-.698-.16-.447-.154-.434-.17-.507l-.062-.3-.21-.21c-.03-.03-.36-.477-.42-.555-.607-.763-1.32-1.19-2.146-1.13zm3.82-6.053c.093.573 1.314.52 1.438.995-.124-.49 1.067-.65.96-1.5-.046-.55-.697-.54-1.44-.5-.4.18-1 .36-.958.99zm5.273 6.467c1.518 0 1.917.72 1.917 1.5 0 1.51-1.828 2.99-2.397 2.99-1.047 0-.95-1.41-.958-1.99.01-.702-.21-2.483 1.438-2.483zm-10.066 1c1.747-1.17 2.4.53 2.876 1 .14.67.9 1.86 0 2.49-.543.26-2.878-.04-3.835-1.49-.133-.56-.12-1.413.96-1.99z"
    />
  </svg>
);

const SYSTEMS = [
  { name: "Mac", icon: iconMac, extension: "dmg", downloadLink: undefined },
  {
    name: "Windows",
    icon: iconWindows,
    extension: "exe",
    downloadLink: undefined,
  },
  { name: "Linux", icon: iconLinux, extension: "deb", downloadLink: undefined },
];

export default function Content() {
  const [platform, setPlatform] = useState(undefined);
  const [systems, setSystems] = useState(SYSTEMS);

  useEffect(() => {
    setPlatform(getOS());

    async function fetchReleases() {
      try {
        const req = await fetch(
          "https://api.github.com/repos/gielcobben/caption/releases",
        );
        const res = await req.json();
        const stables = res.filter((release) => !release.prerelease);
        const latest = stables[0];

        if (latest) {
          setSystems((prev) =>
            prev.map((system) => {
              const match = latest.assets.find((asset) => {
                const ext = asset.name.substr(asset.name.lastIndexOf(".") + 1);
                return system.extension === ext;
              });
              return match
                ? { ...system, downloadLink: match.browser_download_url }
                : system;
            }),
          );
        }
      } catch (e) {
        // GitHub API may be unavailable
      }
    }

    fetchReleases();
  }, []);

  function getOS() {
    const p = navigator.platform;
    const win = ["Win32", "Win64", "Windows", "WinCE"];
    const mac = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"];

    if (mac.indexOf(p) !== -1) return "Mac";
    if (win.indexOf(p) !== -1) return "Windows";
    if (/Linux/.test(p)) return "Linux";
    return "Mac";
  }

  return (
    <section className="flex flex-col justify-between w-1/2 min-h-screen max-md:w-full max-md:min-h-0 max-md:py-16 max-md:text-center">
      <div className="m-auto px-8 py-8 max-w-[640px] max-md:flex max-md:flex-col max-md:items-center">
        <h1 className="text-brand text-[1.7rem] font-bold leading-[1.1] mb-2">
          Caption
        </h1>
        <h2 className="text-black text-[3.3rem] font-extrabold leading-[1.1] tracking-tight mb-6 max-lg:text-[3rem]">
          Start Watching
        </h2>
        <p className="text-black/60 leading-relaxed mb-6">
          Caption takes the effort out of finding and setting up the right
          subtitles. A simple design, drag &amp; drop search, and automatic
          downloading &amp; renaming let you just start watching. Caption is
          multi-platform, open-source, and built entirely on web technology.
        </p>
        {platform && (
          <DownloadButton currentSystemName={platform} systems={systems} />
        )}
      </div>

      <Footer />
    </section>
  );
}

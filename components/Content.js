import Link from "next/link";
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
      fill="#FFF"
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
      fill="#FFF"
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
      fill="#FFF"
      fillRule="evenodd"
      d="M1.99 11.027c.12-1.884 1.074-3.737 2.86-5.555C4.097 1.824 4.736 0 6.77 0c2.05 0 3.008 1.492 2.875 4.477 1.917 2.27 2.876 4.095 2.876 5.472 0 .23-.01.48-.04.72-.39-.15-.85-.23-1.39-.23-1.44 0-2.2.92-2.36 2.25-.033.304-.04.552-.03.975 0 .145.003.185 0 .234v.18c0 .363.01.563.04.822l.03.232c-.58.172-1.24.27-1.984.27-.457 0-.972-.047-1.49-.16.02-.268-.006-.55-.07-.84-.05-.22-.11-.42-.21-.698-.16-.447-.154-.434-.17-.507l-.062-.3-.21-.21c-.03-.03-.36-.477-.42-.555-.607-.763-1.32-1.19-2.146-1.13zm3.82-6.053c.093.573 1.314.52 1.438.995-.124-.49 1.067-.65.96-1.5-.046-.55-.697-.54-1.44-.5-.4.18-1 .36-.958.99zm5.273 6.467c1.518 0 1.917.72 1.917 1.5 0 1.51-1.828 2.99-2.397 2.99-1.047 0-.95-1.41-.958-1.99.01-.702-.21-2.483 1.438-2.483zm-10.066 1c1.747-1.17 2.4.53 2.876 1 .14.67.9 1.86 0 2.49-.543.26-2.878-.04-3.835-1.49-.133-.56-.12-1.413.96-1.99z"
    />
  </svg>
);

class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      platform: null,
      systems: [
        {
          name: "Mac",
          icon: iconMac,
          downloadLink: "",
          extension: "dmg",
        },
        {
          name: "Windows",
          icon: iconWindows,
          downloadLink: "",
          extension: "exe",
        },
        {
          name: "Linux",
          icon: iconLinux,
          downloadLink: "",
          extension: "deb",
        },
      ],
    };
  }

  async componentDidMount() {
    const { systems } = this.state;

    const req = await fetch(
      "https://api.github.com/repos/gielcobben/caption/releases",
    );
    const res = await req.json();

    const stables = res.filter(release => {
      return !release.prerelease;
    });

    this.setState({
      platform: this.getOS(),
    });

    stables[0].assets.map(asset => {
      const extension = asset.name.substr(asset.name.lastIndexOf(".") + 1);
      systems.map(system => {
        if (extension === system.extension) {
          system.downloadLink = asset.browser_download_url;
          this.setState({
            systems,
          });
        }
      });
    });
  }

  getOS = () => {
    const platform = navigator.platform;
    const macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"];
    const windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"];
    let os;

    if (macosPlatforms.indexOf(platform) !== -1) {
      os = "Mac";
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
      os = "Windows";
    } else if (!os && /Linux/.test(platform)) {
      os = "Linux";
    } else {
      os = "Mac";
    }

    return os;
  };

  render() {
    const { systems, platform } = this.state;

    return (
      <section>
        <div>
          <h1>Caption</h1>
          <h2>Start Watching</h2>
          <p>
            Caption takes the effort out of finding and setting up the right
            subtitles. A simple design, <strong>drag &amp; drop</strong> search,
            and <strong>automatic downloading &amp; renaming</strong> let you
            just start watching. Caption is <strong>multi-platform</strong>,
            open-source, and build entirely on web technology.
          </p>
          <DownloadButton currentSystemName={platform} systems={systems} />
        </div>

        <Footer />

        <style jsx>{`
          section {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-direction: column;
            width: 50%;
            height: 100vh;
          }

          @media (max-width: 800px) {
            section {
              padding: 0;
              width: 100%;
              height: calc(100% - 444px);
              text-align: center;
            }
          }

          @media (max-height: 800px) {
            section {
              overflow: auto;
            }
          }

          div {
            margin: auto;
            padding: var(--content-padding);
            max-width: var(--content-width);
          }

          p {
            color: rgba(0, 0, 0, 0.6);
          }
        `}</style>
      </section>
    );
  }
}

export default Content;

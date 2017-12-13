import Link from "next/link";

const dropdownIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="8"
    height="6"
    viewBox="0 0 8 6"
  >
    <path fill="#FFF" fillRule="evenodd" d="M1.5.5L0 2l4 4 4-4L6.5.5 4 3" />
  </svg>
);

class DownloadButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  render() {
    const { currentSystemName, systems } = this.props;
    const { show } = this.state;
    const currentSystem = systems.filter(system => {
      return currentSystemName === system.name;
    })[0];

    // Hide download button until we found the users's platform.
    if (!currentSystem) {
      return (
        <div>
          <div className="button-holder" />
          <style jsx>
            {`
              .button-holder {
                height: 39px;
              }
            `}
          </style>
        </div>
      );
    }

    return (
      <div>
        <div className="button-wrapper">
          <button onBlur={() => this.setState({ show: false })}>
            <a href={currentSystem.downloadLink}>
              <span className="icon">{currentSystem.icon}</span>
              <span className="name">Download for {currentSystem.name}</span>
            </a>
            <span
              className="icon-dropdown"
              onClick={() => this.setState({ show: !show })}
            >
              {dropdownIcon}
            </span>
          </button>

          <ul className={show ? "open" : ""}>
            {systems
              .filter(system => {
                return currentSystemName !== system.name;
              })
              .map((system, index) => {
                return (
                  <li key={index}>
                    <a href={`${system.downloadLink}`}>
                      <span className="icon">{system.icon}</span>
                      <span className="name">{system.name}</span>
                      <small>(.{system.extension})</small>
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>

        <style jsx>{`
          .button-wrapper {
            position: relative;
            display: inline-block;
            z-index: 9999;
          }

          button {
            display: flex;
            align-items: center;
            border: 0;
            color: #fff;
            font-size: 15px;
            outline: none;
            cursor: pointer;
            border-radius: 0.3rem;
            will-change: opacity;
            transition: opacity 0.2s ease-out;
            padding: 0;
          }

          button a {
            display: flex;
            color: #fff;
            padding: 12px;
            background: var(--brand-color);
            border-radius: 4px 0 0 4px;
          }

          button a:hover {
            background: var(--brand-color-2);
          }

          button .icon {
            display: flex;
            align-items: center;
            margin-top: -1px;
            padding: 0 8px 0 0;
          }

          button .name {
            margin: 0;
            line-height: 1;
            letter-spacing: 0.2px;
          }

          button .icon-dropdown {
            display: flex;
            align-items: center;
            padding: 16px;
            border-left: 1px solid rgba(255, 255, 255, 0.6);
            transition: all 0.1s ease-out;
            background: var(--brand-color);
            height: 39px;
            border-radius: 0 4px 4px 0;
          }

          button .icon-dropdown:hover {
            background: var(--brand-color-2);
          }

          ul {
            position: absolute;
            width: 100%;
            top: 45px;
            border-radius: 4px;
            background: #fff;
            text-align: left;
            list-style: none;
            font-size: 14px;
            opacity: 0;
            visibility: hidden;
            border: 1px solid rgba(0, 0, 0, 0.1);
            box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.1);
            z-index: 4;
            transform: scale(0.98) translate3d(0, 10px, 0);
            transition: all 0.2s ease-out;
          }

          ul.open {
            opacity: 1;
            visibility: visible;
            transform: scale(1) translate3d(0, 0, 0);
          }

          li {
            padding: 0;
            margin: 0;
            display: flex;
            color: #000;
            border-bottom: 1px solid #eee;
            transition: all 0.1s ease-out;
            display: flex;
            align-items: center;
            background: #fff;
          }

          li:first-child {
            border-radius: 4px 4px 0 0;
          }

          li:first-child:before {
            content: "";
            position: absolute;
            right: 13px;
            top: -4px;
            width: 10px;
            height: 10px;
            background: #fff;
            transform: rotate(45deg);
            border: 1px solid rgba(0, 0, 0, 0.1);
            z-index: -1;
            transition: all 0.1s ease-out;
            border-radius: 3px;
          }

          li:last-child {
            border-bottom: none;
            border-radius: 0 0 4px 4px;
          }

          li:hover {
            color: #fff;
            background: var(--brand-color-2);
          }

          li:first-child:hover:before {
            background: var(--brand-color-2);
          }

          li:hover a {
            color: #fff;
          }

          li:hover small {
            color: rgba(255, 255, 255, 0.6);
          }

          li a {
            display: flex;
            color: #000;
            width: 100%;
            height: 100%;
            padding: 8px 16px;
          }

          li .icon {
            display: flex;
            align-items: center;
          }

          li .name {
            margin-left: 12px;
            display: flex;
            align-items: center;
          }

          li small {
            margin: 2px 0 0 4px;
          }
        `}</style>

        <style jsx global>{`
          li path {
            fill: #000;
          }

          li:hover path {
            fill: #fff;
          }
        `}</style>
      </div>
    );
  }
}

export default DownloadButton;

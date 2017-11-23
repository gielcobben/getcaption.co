import Metadata from "./Metadata";
import Social from "./Social";

const Footer = () => (
  <footer>
    <Social />
    <Metadata />

    <style jsx>{`
      footer {
        position: absolute;
        bottom: 50px;
        width: 100%;
        margin: auto;
        padding: var(--content-padding);
        max-width: var(--content-width);
      }

      @media (max-height: 800px) {
        footer {
          position: static;
        }
      }

      @media (max-width: 800px) {
        footer {
          position: static;
        }
      }
    `}</style>
  </footer>
);

export default Footer;

import PropTypes from "prop-types";
import reset from "../styles/reset";

const Layout = ({ children }) => (
  <main>
    {children}

    <style jsx global>
      {reset}
    </style>

    <style jsx global>{`
      main {
        display: flex;
        width: 100vw;
        height: 100vh;
      }

      @media (max-width: 800px) {
        main {
          flex-wrap: wrap;
          height: auto;
        }
      }
    `}</style>
  </main>
);

Layout.PropTypes = {
  children: PropTypes.func.isRequired,
};

export default Layout;

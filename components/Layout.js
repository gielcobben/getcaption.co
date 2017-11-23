import PropTypes from "prop-types";
import variables from "../styles/variables";
import base from "../styles/base";

const Layout = ({ children }) => (
  <main>
    {children}

    <style jsx global>
      {variables}
    </style>

    <style jsx global>
      {base}
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

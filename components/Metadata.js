import PropTypes from "prop-types";

const Metadata = ({ version }) => (
  <span>
    A product by {" "}
    <a href="https://twitter.com/gieclobben" target="_blank">
      Giel
    </a>{" "}
    &amp;{" "}
    <a href="https://twitter.com/vernon_dg" target="_blank">
      Vernon
    </a>. Contribute on {" "}
    <a href="https://github.com/gielcobben/Caption" target="_blank">
      Github.
    </a>
    <style jsx>{`
      span {
        font-size: 14px;
        color: #666;
        list-style: none;
      }
    `}</style>
  </span>
);

Metadata.PropTypes = {
  version: PropTypes.string,
};

export default Metadata;

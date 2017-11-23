import css from "styled-jsx/css";

export default css`
  :root {
    --content-width: 640px;
    --content-padding: 60px;
    --brand-color: #007aff;
    --brand-gradient: linear-gradient(45deg, #003aff 0%, #00b9ff 100%);
  }

  @media (max-width: 1024px) {
    :root {
      --content-padding: 40px;
    }
  }
`;

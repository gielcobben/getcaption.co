const Video = () => (
  <section>
    <div />

    <style jsx>{`
      section {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50%;
        height: 100vh;
        background-image: linear-gradient(45deg, #003aff 0%, #00b9ff 100%);
      }

      @media (max-width: 800px) {
        section {
          width: 100%;
          max-height: 444px;
        }
      }

      div {
        width: 448px;
        height: 444px;
        background: url("/static/images/app.png");
      }

      @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
        div {
          background: url("/static/images/app@2x.png");
          background-size: 448px 444px;
        }
      }
    `}</style>
  </section>
);

export default Video;

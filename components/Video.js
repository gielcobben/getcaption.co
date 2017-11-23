const Video = () => (
  <section>
    <div />

    <style jsx>{`
      section {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50%;
        height: 100vh;
        background-image: var(--brand-gradient);
        overflow: hidden;
      }

      @media (max-width: 800px) {
        section {
          width: 100%;
          max-height: 444px;
        }
      }

      div {
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -222px 0 0 -224px
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

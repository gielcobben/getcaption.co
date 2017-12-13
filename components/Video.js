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
        margin: -157px 0 0 -160px
        width: 320px;
        height: 314px;
        background: url("/static/images/app.png");
        box-shadow: 0 0 0 0 rgba(0,0,0,0.30), 0 23px 38px 0 rgba(0,0,0,0.43), 0 25px 65px 0 rgba(0,0,0,0.10);
        border-radius: 5px;
      }

      @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
        div {
          background: url("/static/images/app@2x.png");
          background-size: 320px 314px;
        }
      }
    `}</style>
  </section>
);

export default Video;

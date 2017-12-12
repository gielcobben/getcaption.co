import Footer from "./Footer";

const Thanks = () => (
  <section>
    <div>
      <h1>Thanks</h1>
      <h2>Downloading...</h2>
      <p>
        This is free software, but it still costs money to write, support, and
        distribute it. If you enjoy using it, please consider a donation to the
        authors of this software. It will help to make Caption even better!
      </p>
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

export default Thanks;

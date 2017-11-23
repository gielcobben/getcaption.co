import Footer from "./Footer";

const Content = () => (
  <section>
    <div>
      <h1>Caption</h1>
      <h2>Start Watching</h2>
      <p>
        Caption takes the effort out of finding and setting up the right
        subtitles. A simple design, <strong>drag &amp; drop</strong> search, and{" "}
        <strong>automatic downloading &amp; renaming</strong> let you just start
        watching. Caption is <strong>multi-platform</strong>, open-source, and
        build entirely on web technology.
      </p>
      <a className="button" href="https://download.getcaption.co/download/osx">
        Download for free
      </a>
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

      .button {
        background: var(--brand-color);
        border: 0;
        padding: 12px 16px;
        color: #fff;
        font-size: 15px;
        outline: none;
        cursor: pointer;
        border-radius: 0.3rem;
        will-change: opacity;
        transition: opacity 0.2s ease-out;
      }

      .button:hover {
        opacity: 0.8;
      }
    `}</style>
  </section>
);

export default Content;

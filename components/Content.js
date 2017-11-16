const Content = () => (
  <section>
    <div className="inner">
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
      <ul>
        <li>Current version: v2.0.0. 🛠</li>
        <li>
          Made by {" "}
          <a href="https://twitter.com/gieclobben" target="_blank">
            Giel
          </a>{" "}
          &amp;{" "}
          <a href="https://twitter.com/vernon_dg" target="_blank">
            Vernon
          </a>. 😇
        </li>
        <li>
          View and contribute on {" "}
          <a href="https://github.com/gielcobben/Caption" target="_blank">
            Github. ⚡️
          </a>
        </li>
      </ul>
    </div>

    <style jsx>{`
      section {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50%;
        height: 100vh;
      }

      @media (max-width: 800px) {
        section {
          padding: 0;
          width: 100%;
          height: calc(100% - 444px);
        }
      }

      .inner {
        padding: 80px;
        max-width: 640px;
        margin-top: auto;
        margin-bottom: auto;
      }

      @media (max-width: 800px) {
        .inner {
          padding: 60px;
        }
      }

      p {
        color: rgba(0, 0, 0, 0.6);
      }

      .button {
        background: #007aff;
        border: 0;
        padding: 12px 16px;
        color: #fff;
        font-size: 15px;
        outline: none;
        cursor: pointer;
        border-radius: 0.3rem;
        will-change: opacity;
        transition: opacity 0.2s ease-out;
        box-shadow: ;
      }

      .button:hover {
        opacity: 0.8;
      }

      ul {
        margin-top: 32px;
        font-size: 14px;
        color: #666;
        list-style: none;
      }

      li {
        margin: 4px 0;
      }
    `}</style>
  </section>
);

export default Content;

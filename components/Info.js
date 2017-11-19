const Info = () => (
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

    <style jsx>{`
      .inner {
        margin-top: auto;
        margin-bottom: auto;
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
    `}</style>
  </div>
);

export default Info;

const Social = () => (
  <nav>
    <ul>
      <li>
        <div
          className="fb-like"
          data-href="https://getcaption.co"
          data-layout="button_count"
          data-action="like"
          data-size="small"
          data-show-faces="false"
          data-share="false"
        />
      </li>
      <li>
        <a
          href="https://twitter.com/share?ref_src=twsrc%5Etfw"
          className="twitter-share-button"
          data-text="Caption – Start watching. "
          data-url="https://getcaption.co/"
          data-via="gielcobben"
          data-hashtags="Caption"
          data-related=""
          data-show-count="false"
        >
          Tweet
        </a>
      </li>
      <li>
        <a
          className="github-button"
          href="https://github.com/gielcobben/caption"
          data-icon="octicon-star"
          data-show-count="true"
          aria-label="Star gielcobben/caption on GitHub"
        >
          Star
        </a>
      </li>
    </ul>
    <style jsx>{`
      ul {
        display: flex;
        align-items: center;
        flex-direction: row;
        list-style: none;
        margin: 0 0 8px 0;
      }

      li {
        margin: 0;
        margin-right: 16px;
        font-weight: bold;
        color: #666;
      }
    `}</style>

    <style jsx global>{`
      .fb-like span {
        vertical-align: top !important;
      }
    `}</style>
  </nav>
);

export default Social;

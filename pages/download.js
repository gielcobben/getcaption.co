import Layout from "../components/Layout";
import Video from "../components/Video";
import Thanks from "../components/Thanks";

class Download extends React.Component {
  static async getInitialProps({ query }) {
    return { platform: query.extension };
  }

  constructor(props) {
    super(props);

    this.state = {
      platform: props.platform,
    };
  }

  async componentDidMount() {
    const { platform } = this.state;
    const req = await fetch(
      "https://api.github.com/repos/gielcobben/caption/releases",
    );
    const res = await req.json();

    const stables = res.filter(release => {
      return !release.prerelease;
    });

    stables[0].assets.map(asset => {
      const extension = asset.name.substr(asset.name.lastIndexOf(".") + 1);
      if (platform === extension) {
        // window.location.href = asset.browser_download_url;
      }
    });
  }

  render() {
    return (
      <Layout>
        <Video />
        <Thanks />
      </Layout>
    );
  }
}

export default Download;

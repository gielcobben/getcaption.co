import Router from "next/router";
import Layout from "../components/Layout";

class Thanks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    const req = await fetch(
      "https://api.github.com/repos/gielcobben/caption/releases",
    );
    const res = await req.json();

    const stables = res.filter(release => {
      return !release.prerelease;
    });

    console.log(systems);

    stables[0].assets.map(asset => {
      const extension = asset.name.substr(asset.name.lastIndexOf(".") + 1);
    });

    // stables[0].assets.map(asset => {
    //   const extension = asset.name.substr(asset.name.lastIndexOf(".") + 1);
    //   systems.map(system => {
    //     if (extension === system.extension) {
    //       Router.push(asset.browser_download_url);
    //     }
    //   });
    // });
  }

  render() {
    return <Layout>Giel</Layout>;
  }
}

export default Thanks;

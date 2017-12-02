import Layout from "../components/Layout";

class Thanks extends React.Component {
  static getInitialProps = async ({ query }) => {
    console.log(query);
    return {};
  };

  async componentDidMount() {
    const req = await fetch(
      "https://api.github.com/repos/gielcobben/caption/releases",
    );
    const res = await req.json();
    const stable = res.filter(release => {
      return !release.prerelease;
    });

    console.log(stable[0].assets[0].browser_download_url);
  }

  render() {
    return <Layout>Giel</Layout>;
  }
}

export default Thanks;

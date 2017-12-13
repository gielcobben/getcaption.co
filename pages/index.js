import Layout from "../components/Layout";
import Video from "../components/Video";
import Content from "../components/Content";

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <Video />
        <Content />
      </Layout>
    );
  }
}

export default Index;

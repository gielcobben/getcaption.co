import Social from "./Social";
import Info from "./Info";
import Metadata from "./Metadata";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = { version: "v2.0.0" };
  }

  async componentDidMount() {
    const req = await fetch(
      "https://api.github.com/repos/gielcobben/caption/releases",
    );
    const res = await req.json();
    this.setState({ version: res[0].tag_name });
  }

  render() {
    const { version } = this.state;

    return (
      <section>
        <div>
          <Info />
          <Social />
          <Metadata version={version} />
        </div>

        <style jsx>{`
          section {
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
            }
          }

          div {
            display: flex;
            flex-direction: column;
            height: 100%;
            padding: 80px;
            max-width: 640px;
          }
        `}</style>
      </section>
    );
  }
}

export default Content;

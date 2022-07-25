import { Component } from "react";
import { useParams } from "react-router-dom";
import Carousel from "./Carousel";

class Details extends Component {
  state = {
    loading: true,
  };

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`
    );

    const json = await res.json();

    this.setState({ loading: false, ...json.pets[0] });
  }

  render() {
    const { animal, breed, city, state, name, description, images } =
      this.state;

    if (this.state.loading) {
      return (
        <div>
          <h2>Loading...</h2>
        </div>
      );
    }

    return (
      <div className="details">
        <div>
          <Carousel images={images} />
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {city}, {state}
          </h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

const WrappedDetails = () => {
  const params = useParams();

  return <Details params={params} />;
};

export default WrappedDetails;

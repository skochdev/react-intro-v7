import { Component, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal";

class Details extends Component {
  state = {
    loading: true,
    isModalOpen: false,
  };

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`
    );

    const json = await res.json();

    this.setState({ loading: false, ...json.pets[0] });
  }

  toggleModal = () => {
    this.setState((prevState) => ({
      isModalOpen: !prevState.isModalOpen,
    }));
  };

  render() {
    if (this.state.loading) {
      return (
        <div>
          <h2>Loading...</h2>
        </div>
      );
    }

    const {
      animal,
      breed,
      city,
      state,
      name,
      description,
      images,
      isModalOpen,
    } = this.state;

    const { theme } = this.props;

    return (
      <div className="details">
        <div>
          <Carousel images={images} />
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {city}, {state}
          </h2>
          <button style={{ backgroundColor: theme }} onClick={this.toggleModal}>
            Adopt {name}
          </button>
          <p>{description}</p>
          {isModalOpen ? (
            <Modal>
              <div>
                <h1>Would you really like to adopt {name}</h1>
                <a href="">Yes</a>
                <button onClick={this.toggleModal}>No</button>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

const WrappedDetails = () => {
  const params = useParams();
  const [theme] = useContext(ThemeContext);

  return (
    <ErrorBoundary>
      <Details theme={theme} params={params} />
    </ErrorBoundary>
  );
};

export default WrappedDetails;

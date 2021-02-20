import React, { Component } from "react";
import "./ItemDetails.css";
import SwapiService from "../../services/swapi-service";
import Spinner from "../Spinner";
import { ProgressBar } from "react-bootstrap";

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

export { Record };

export default class ItemDetails extends Component {
  state = { item: {}, loading: true, image: null };
  swapiService = new SwapiService();

  componentDidMount() {
    this.updateItem();
  }
  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.setState({ loading: true });
      this.updateItem();
    }
  }
  updateItem() {
    const { itemId, getImageUrl, getDataItem } = this.props;
    if (!itemId) {
      return;
    }

    getDataItem(itemId).then((item) => {
      this.setState({ item, loading: false, image: getImageUrl(item) });
    });
  }

  render() {
    const { loading, image, item } = this.state;
    const { name, mass, length } = this.state.item;

    if (loading) {
      return <Spinner />;
    } else {
      return (
        <div className="person-details card">
          <img className="person-image" src={image} alt="person" />
          <div className="card-body">
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
              {React.Children.map(this.props.children, (child) => {
                return React.cloneElement(child, { item });
              })}
            </ul>
            <span className="starWarsSpan">Health</span>
            <ProgressBar
              animated
              now={length}
              striped
              variant="success"
              max={200}
              label={`${length} hp`}
            />
            <span className="starWarsSpan">Attack</span>
            <ProgressBar
              animated
              now={mass}
              striped
              max={110}
              variant="danger"
              label={`${mass} damage`}
            />
          </div>
        </div>
      );
    }
  }
}

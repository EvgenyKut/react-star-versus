import React, { Component } from "react";
import "./photo-box.css";
import Spinner from "../../blocks/spinner";

export default class PhotoBox extends Component {
  state = { item: {}, loading: true, image: null };

  componentDidMount() {
    this.updateItem();
  }
  componentDidUpdate(prevProps) {
    if (this.props.shipId !== prevProps.shipId) {
      this.setState({ loading: true });
      this.updateItem();
    }
  }
  updateItem() {
    const { shipId, getImageUrl, getDataItem } = this.props;
    if (!shipId) {
      return;
    }

    getDataItem(shipId).then((item) => {
      this.setState({ item, loading: false, image: getImageUrl(item) });
    });
  }

  render() {
    const { loading, image, item } = this.state;

    if (loading) {
      return <Spinner />;
    } else {
      return (
        <div className="person-card">
          <img className="person-image" src={image} alt="person" />
          <h5 className="item-name">{item.name}</h5>
        </div>
      );
    }
  }
}

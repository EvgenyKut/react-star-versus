import React, { Component } from "react";
import Spinner from "../../Modules/spinner";
import "./photo-box.css";

export default class PhotoBox extends Component {
  state = { item: {}, loading: true, image: null };

  componentDidMount() {
    this.mountItem();
  }

  mountItem() {
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

import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";

const withData = (View, getData) => {
  return class extends Component {
    swapiService = new SwapiService();
    state = { data: null };

    componentDidMount() {
      getData().then((data) => {
        this.setState({ data });
      });
    }

    render() {
      const { data } = this.state;
      if (!data) {
        return <h2>Loading...</h2>;
      }
      return <View {...this.props} data={data} />;
    }
  };
};

export default withData;

import React, { Component } from "react";
import "./ItemList.css";

let clazz = "list-group-item";

export default class ItemList extends Component {
  clearItems = (arr) => {
    const { selectedItems } = this.props;
    return arr.filter((item) => selectedItems.includes(Number(item.id)));
  };

  renderItems = (arr) => {
    const { onItemSelected, onSelect, activeItemsList } = this.props;
    return arr.map(({ name, id }) => {
      clazz = activeItemsList.includes(id)
        ? "list-group-item important"
        : "list-group-item";

      return (
        <li className={clazz} key={id} onClick={() => onItemSelected(id)}>
          {name}
          <button
            type="button"
            className="btn btn-outline-success btn-sm float-right"
            onClick={() => onSelect(id)}
          >
            <i className="fa fa-plus fa-lg" />
          </button>
        </li>
      );
    });
  };

  render() {
    const { data } = this.props;
    const items = this.renderItems(this.clearItems(data));
    return (
      <div>
        <ul className="item-list list-group">{items}</ul>
      </div>
    );
  }
}

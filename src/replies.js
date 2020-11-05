import React, { Component } from "react";

class Replies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
      items: Object.values(this.props.replies)
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitItem = this.submitItem.bind(this);
  }
  handleInputChange(e) {
    let name = e.target.name;
    let value = e.target.value;

    this.setState({ [name]: value });
  }
  submitItem(e) {
    e.preventDefault();
    let items = this.state.items;
    let item = this.state.item;
    items.push(item);
    this.setState({ items: items });
  }

  render() {
    return (
      <>
        <input type="text" name="item" onChange={this.handleInputChange} />
        <input type="submit" value="Submit" onClick={this.submitItem} />
        {this.state.items.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </>
    );
  }
}
export default Replies;

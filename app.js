// // TODO
// class GroceryList extends React.Component {
//
//   render() {
//     return (
//       <ul>
//         <GroceryListItem('kale') />
//       </ul>
//     );
//   }
// }

// import React, { PropTypes, Compent } from 'react';
class Kale extends React.Component {
  render() {
    return (
      <li> 'Kale'</li>
    )
  }
}
class Cucumbers extends React.Component {
  render() {
    return (
      <li> 'Cucumbers'</li>
    )
  }
}
class GroceryListItem extends React.Component {
      constructor (props) {
        super(props);
        this.state = {done: false};
        // console.log(this.state.done);
      }
      onMouseOver() {
        this.setState({
          done: !this.state.done
        });

      }
      render() {
        var style = {
          fontWeight: this.state.done ? 'bold' : 'normal'
        };
        return (

          // <li> {this.props.item} </li>
          <li style={style} onMouseOver={this.onMouseOver.bind(this)}>{this.props.item}</li>
        )
      }

}

class GroceryList extends React.Component {
  constructor(props) {
    super(props);
  }
    render() {
      return (
        <ul>
          {this.props.items.map(item =>
            <GroceryListItem item={item} />
          )}
        </ul>
      )
    }


}



ReactDOM.render(<GroceryList items = {['cucumbers', 'kale']} />, document.getElementById("app"));

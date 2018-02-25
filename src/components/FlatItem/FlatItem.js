import React, { Component } from 'react';
import './FlatItem.css';

export default class FlatItem extends Component {  

  handleClick = () => {
    //Call the parent method selectFlat
    this.props.selectFlat(this.props.flat);
  }

  render() {
    const name = this.props.flat.name;
                  
    const price = this.props.flat.price + " " + this.props.flat.priceCurrency;

    const style = {
      backgroundImage: `url('${this.props.flat.imageUrl}')`
    };

    return (
      <div className="FlatItem" onClick={this.handleClick}>
          <div className="FlatPicture" style={style}></div>
          <h3 className="FlatTitle">{name}</h3>
          <p className="FlatPrice">{price}</p>       
      </div>
    );
  } 
}

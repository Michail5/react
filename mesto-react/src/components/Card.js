import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.card = this.props.card;
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = () => {
    this.props.onCardClick(this.card);
  }

  render() {
    return(
    <article className="element">
      <img src={this.card.link} alt={this.card.name} className="element__image" onClick={() => this.handleClick()}/>
      <button type="button" className="element__remove-button button" ></button>
      <div className="element__description">
        <h2 className="element__title">{this.card.name}</h2>
        <div className="element__like-container">
          <button type="button" className="element__like-button"></button>
          <p className="element__liike-container">{this.card.likes.length}</p>
        </div>
      </div>
    </article>
    );
  }  

}

export default Card;
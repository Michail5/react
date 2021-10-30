import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.card = this.props.card;
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = () => {
    this.props.oncardClick(this.card);
  }

  render() {
    return(
    <template id="element-template">
    <article class="element">
      <button type="button" class="element__remove-button button" ></button>
      <img src={this.card.link} alt={this.card.name} class="element__image" onClick={() => this.handleClick()}/>
      <div class="element__description">
        <h2 class="element__title">{this.card.name}</h2>
        <div class="element__like-container">
          <button type="button" class="element__like-button"></button>
          <p class="element__liike-container">{this.card.likes.length}</p>
        </div>
      </div>
    </article>
  </template>
    );
  }  

}

export default Card;
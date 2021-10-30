import React from "react";
import Api, { apiData } from '../utils/Api.js';
import Card from "./Card.js";


function Main(props) {

  const [userName, handleGetUserName] = React.useState(null);
  const [userDescription, handleGetUserDescription] = React.useState(null);
  const [userAvatar, handleGetUserAvatar] = React.useState(null);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    
    apiData.getUserData()
    .then(res => {
      handleGetUserName(res.name);
      handleGetUserDescription(res.about); 
      handleGetUserAvatar(res.avatar);
    })
    .catch((err) => {
      console.log(err); 
    })
  });

  React.useEffect(() => {
    
    apiData.getInitialCards()
    .then(items => {
      setCards(items);
    })
    .catch((err) => {
      console.log(err); 
      return [];
    })
  }, []);


  function CardList(props) {
    const cards = props.cards;
    const listCards = cards.map((card) =>
      <Card card={card} onCardClick={props.onFunctionClick} />
    );
    return (
      <section className="elements">
        {listCards}
      </section>
    );
  }
  return (
    
    <main className="content">
      <section className="profile">
        <div className="profile__avatar">
          <img
            className="profile__image" src={userAvatar} alt={userName} onClick={props.onEditAvatar}/>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{userName}</h1>
          <button type="button" className="profile__edit-button button" onClick={props.onEditProfile}></button>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button type="button" className="profile__add-button button" onClick={props.onAddPlace}></button>
      </section>

      <section className="elements">
      </section>
      <CardList cards={cards} onFunctionClick={props.onCardClick}/>
</main>
  );
}

export default Main;
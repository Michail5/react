import React from "react";
import Api, { apiData } from '../utils/Api.js';
//import Cards from "./Cards.js"; 
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
        return [];
      })
  });


  React.useEffect(() => {
    // запрос в API за карточками мест
    apiData.getInitialCards()
      .then(items => {
        console.log(items);
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

      <template id="element-template">
        <article className="element">
          <button type="button" className="element__remove-button button"></button>
          <img src={card.link} alt={card.name} className="element__image" />
          <div className="element__description">
            <h2 className="element__title">{card.name}</h2>
            <div className="element__like-container">
              <button type="button" className="element__like-button"></button>
              <p className="element__liike-container">{card.likes.length}</p>
            </div>
          </div>
        </article>
      </template>
    );
  }
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar">
          <img
            className="profile__image" src={userAvatar} alt={userName} />
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
      <CardList cards={cards} />,
    </main>
  );
}

export default Main;
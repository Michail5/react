import React from 'react';
import { apiData } from '../utils/Api';
import Card from './Card';

function Main(props) {
  const [userName, handleGetUserName] = React.useState('');
  const [userDescription, handleGetUserDescription] = React.useState('');
  const [userAvatar, handleGetUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState('');



  React.useEffect(() => {
    // запрос в API за пользовательскими данными
    apiData.getUserData()
      .then(res => {
        handleGetUserName(res.name);
        handleGetUserDescription(res.about);
        handleGetUserAvatar(res.avatar);
      })
      .catch((err) => {
        console.log(err); // "Что-то пошло не так: ..."
      })
  }, []);

  React.useEffect(() => {
    // запрос в API за карточками мест
    apiData.getInitialCards()
      .then(items => {
        setCards(items);
      })
      .catch((err) => {
        console.log(err); // "Что-то пошло не так: ..."
      })
  }, []);

  function CardList(props) {
    const cards = props.cards;
    const listCards = cards.map((card,i) =>
    <Card card={card} onCardClick={props.onCardClick} key={card._id} />
  );
  return (
    <ul className="elements__list">
      {listCards}
    </ul>
  );
}
  return (
    <main className="content">
      <section className="profile">
        <div
          onClick={props.onEditAvatar}
          className="profile__avatar-container"
        >
          <img
            src={userAvatar}
            alt="Жак-Ив Кусто"
            className="profile__avatar"
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <p className="profile__description">{userDescription}</p>
          <button
            onClick={props.onEditProfile}
            type="button"
            className="profile__edit-button"
          />
        </div>
        <button
          onClick={props.onAddPlace}
          type="button"
          className="profile__add-button"
        />
      </section>
     
    </main>
  )
}
export default Main;
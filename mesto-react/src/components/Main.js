import React from "react";

function Main() {
return(
  <main className="content">
    <section className="profile">
      <div className="profile__avatar">
        <img
          className="profile__image" src="#" alt="фотография обладателя профиля" />
      </div>
      <div className="profile__info">
        <h1 className="profile__title"/>
        <button type="button" className="profile__edit-button button"></button>
        <p className="profile__subtitle"></p>
      </div>
      <button type="button" className="profile__add-button button"></button>
    </section>

    <section className="elements">
    </section>
  </main>
);
}

export default Main;
import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';


function App() {

  const [isEditProfilePopupOpen, handleEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, handleAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, handleEditAvatarPopupOpen] = React.useState(false);
  const [isPopupClose, handlePopupClose] = React.useState(false);


  function handleEditAvatarClick() {
    handlePopupClose(false);
    handleEditAvatarPopupOpen(true);
  };

  function handleEditProfileClick() {
    handlePopupClose(false);
    handleEditProfilePopupOpen(true);
  };

  function handleAddPlaceClick() {
    handlePopupClose(false);
    handleAddPlacePopupOpen(true);
  };

  function closeAllPopups() {
    handlePopupClose(true);
    handleEditAvatarPopupOpen(false);
    handleEditProfilePopupOpen(false);
    handleAddPlacePopupOpen(false);
  };



  return (
    <>
      <div className="body">
        <div className="page">
          <Header />
          <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} />
          <Footer />
          <PopupWithForm name="user" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={isPopupClose} onClosePopup={closeAllPopups}>
            <form name="profile-edit__form" className="popup-edit__form form" noValidate>
              <input name="name" type="text" className="popup__input popup__input_type_name form__input" id="name-input" required
                minLength="2" maxLength="40" placeholder="Ваше имя" />
              <span className="form__input-error name-input-error"></span>
              <input name="about" type="text" className="popup__input popup__input_type_about form__input" id="about-input"
                required minLength="2" maxLength="200" placeholder="Расскажите о себе" />
              <span className="form__input-error about-input-error"></span>
              <button type="submit"
                className="popup__save-button popup__submit-button form__submit popup-edit__submit-button">Сохранить</button>
            </form>
          </PopupWithForm>
          <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={isPopupClose} onClosePopup={closeAllPopups}>
            <form name="popup-avatar__form" className="popup-avatar__form form">
              <input name="avatar" type="url" className="popup__input popup__input_type_avatar form__input" id="avatar-input"
                placeholder="Обновить аватар" required />
              <span className="form__input-error avatar-input-error"></span>
              <button type="submit"
                className="popup__save-button popup__submit-button form__submit popup-avatar__submit-button">Сохранить</button>
            </form>
          </PopupWithForm>
          <PopupWithForm name="add" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={isPopupClose} onClosePopup={closeAllPopups}>
          <form name="popup-add__form" className="popup-add__form form">
          <input name="title" type ="text" className="popup__input popup__input_type_title form__input" id="title-input"
          placeholder="Название" minLength="2" maxLength="30" required />
          <span className="form__input-error title-input-error"></span>
          <input name="link" type ="url" className="popup__input popup__input_type_link form__input" id="link-input"
          placeholder="Ссылка на картинку" required />
          <span className="form__input-error link-input-error"></span>
          <button type ="submit"
          className="popup__create-button popup__submit-button form__submit popup-add__submit-button">Создать</button>
          </form>
          </PopupWithForm>
          <ImagePopup  card={selectedCard} onClose={isPopupClose} onClosePopup={closeAllPopups}/>
          <PopupWithForm name="delete" title="Вы уверены?" onClose={isPopupClose} onClosePopup={closeAllPopups}>
          <button type="submit"
                className="popup__delete-button popup__submit-button form__submit popup-delete__submit-button">Да</button>
      </PopupWithForm>


        </div>
      </div>
    </>
  );
}

export default App;

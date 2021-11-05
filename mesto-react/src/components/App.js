import React from 'react';
import '../index.css'
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [isEditProfilePopupOpen, handleEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, handleAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, handleEditAvatarPopupOpen] = React.useState(false);
  
  function handleCardClick(card){
    setSelectedCard(card);
  }

  function handleEditAvatarClick() {
    handleEditAvatarPopupOpen(true);
  };
  
  function handleEditProfileClick() {
    handleEditProfilePopupOpen(true);
  };
  
  function handleAddPlaceClick() {
    handleAddPlacePopupOpen(true);
  };

  function closeAllPopups() {
    handleEditAvatarPopupOpen(false);
    handleEditProfilePopupOpen(false);
    handleAddPlacePopupOpen(false);
    setSelectedCard(null)
  };
  return (
    <>
    <Header />
    <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />
    <Footer />
    <PopupWithForm name='avatar' title='Обновить аватар' isOpen={isEditAvatarPopupOpen} onClosePopup={closeAllPopups} buttonName='Сохранить'>
        <input type="url" className="popup__input" name="link" id="profile-avatar" placeholder="Ссылка на картинку" required />
        <p className="popup__error" id="profile-avatar-error" />
    </PopupWithForm>

    <PopupWithForm name='profile' title='Редактировать профиль' isOpen={isEditProfilePopupOpen} onClosePopup={closeAllPopups} buttonName='Сохранить'>
      <input type="text" autoComplete="name" autoCapitalize="words" className="popup__input" name="name" id="profile-name" placeholder="Имя" minLength={2} maxLength={40} required />
      <p className="popup__error" id="profile-name-error" />
      <input type="text" className="popup__input" name="job" id="profile-job" placeholder="О себе" minLength={2} maxLength={200} required />
      <p className="popup__error" id="profile-job-error" />
    </PopupWithForm>
    <PopupWithForm name='element' title='Новое место' isOpen={isAddPlacePopupOpen} onClosePopup={closeAllPopups} buttonName='Сохранить'>
      <input type="text" className="popup__input" name="title" id="element-title" placeholder="Название" minLength={2} maxLength={30} required />
      <p className="popup__error" id="element-title-error" />
      <input type="url" className="popup__input" name="link" id="element-link" placeholder="Ссылка на картинку" required />
      <p className="popup__error" id="element-link-error" />
    </PopupWithForm>
    <PopupWithForm name='delete-confirmation' title='Вы уверены?' buttonName='Да' onClosePopup={closeAllPopups}>
      
    </PopupWithForm>
    <ImagePopup card={selectedCard} onClosePopup={closeAllPopups}/>
</>
  )};
export default App;

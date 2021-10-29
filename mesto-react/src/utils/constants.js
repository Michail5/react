const user = {
  nameInfo: '.profile__title',
  aboutInfo: '.profile__subtitle',
  avatar: '.profile__image'
}

const nameInput = document.querySelector('.popup__input_type_name');

const jobInput = document.querySelector('.popup__input_type_about');

const editButton = document.querySelector('.profile__edit-button');

const addButton = document.querySelector('.profile__add-button');

const popupEditFormSelector = '.popup-edit__form';

const popupAddFormSelector = '.popup-add__form';

const popupAvatarFormSelector = '.popup-avatar__form';

const profileImageContainer = document.querySelector('.profile__avatar');

const submitButtons = {
  avatar: document.querySelector('.popup-avatar__submit-button'),
  editProfile: document.querySelector('.popup-edit__submit-button'),
  addCard: document.querySelector('.popup-add__submit-button'),
  deleteCard: document.querySelector('.popup-delete__submit-button'),
}

export {user, nameInput, jobInput, editButton, addButton, popupEditFormSelector, popupAddFormSelector, popupAvatarFormSelector, profileImageContainer, submitButtons};
export const baseUrl = 'https://mesto.nomoreparties.co/v1/cohort-28';
export const baseToken ='9c2e4842-eec0-466f-b33e-0c19fe7195ce';
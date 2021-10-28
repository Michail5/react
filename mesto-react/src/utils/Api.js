export default class Api {
  constructor({url, authorizationToken}) {
    this._url = url;
    this._authorizationToken = authorizationToken;
  }

  getUserInfo() {
    return fetch(this._url + '/users/me', {
      headers: {
        authorization: this._authorizationToken
      }
    })
      .then(this.checkResult);
  }

  getInitialCards() {
    return fetch(this._url + '/cards', {
      headers: {
        authorization: this._authorizationToken
      }
    })
      .then(this.checkResult);
  }

  editProfile(data) {
    return fetch(this._url + '/users/me', {
      method: 'PATCH',
      headers: {
        authorization: this._authorizationToken,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(this.checkResult);
  }

  addCard(item) {
    return fetch(this._url + '/cards', {
      method: 'POST',
      headers: {
        authorization: this._authorizationToken,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    })
      .then(this.checkResult);
  }

  deleteCard(cardId) {
    return fetch(this._url + '/cards/' + cardId, {
      method: 'DELETE',
      headers: {
        authorization: this._authorizationToken,
        'Content-Type': 'application/json'
      },
    })
      .then(this.checkResult);
  }

  addLike(cardId) {
    return fetch(this._url + '/cards/likes/' + cardId, {
      method: 'PUT',
      headers: {
        authorization: this._authorizationToken,
        'Content-Type': 'application/json'
      },
    })
      .then(this.checkResult);
  }

  removeLike(cardId) {
    return fetch(this._url + '/cards/likes/' + cardId, {
      method: 'DELETE',
      headers: {
        authorization: this._authorizationToken,
        'Content-Type': 'application/json'
      },
    })
      .then(this.checkResult);
  }

  editAvatar(avatar) {
    return fetch(this._url + '/users/me/avatar', {
      method: 'PATCH',
      headers: {
        authorization: this._authorizationToken,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(avatar)
    })
      .then(this.checkResult);
  }

  checkResult = res => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }
}
import {
  baseUrl,
  baseToken
} from "../utils/constants";

class Api {


  constructor(url, token) {
    this._url = url;
    this._token = token;
  }


  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: {
        authorization: this._token
      }
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Что-то пошло не так: ${res.status}`);
      });
  }


  getUserData() {
    return fetch(`${this._url}/users/me`, {
      headers: {
        authorization: this._token
      }
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Что-то пошло не так: ${res.status}`);
      });
  }


  setUserData({ name, about }) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, about })
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
      });
  }


  postCard(data) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Что-то пошло не так: ${res.status}`);
      });
  }


  deleteCard(idCard) {
    return fetch(`${this._url}/cards/${idCard}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token
      }
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Что-то пошло не так: ${res.status}`);
      });
  }


  changeLikeCardStatus(idCard, like) {
    return fetch(`${this._url}/cards/likes/${idCard}`, {
      method: like ? 'DELETE' : 'PUT',
      headers: {
        authorization: this._token
      }
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Что-то пошло не так: ${res.status}`);
      });
  }

  getCard(idCard) {
    return fetch(`${this._url}/cards/${idCard}`, {
      headers: {
        authorization: this._token
      }
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Что-то пошло не так: ${res.status}`);
      });
  }


  patchAvatar(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: data.link
      })
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Что-то пошло не так: ${res.status}`);
      });
  }

}


export const apiData = new Api(baseUrl, baseToken);
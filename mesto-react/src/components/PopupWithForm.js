import React from "react";

class PopupWithForm extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = () => {
    this.setState({ submitted: true });
  };

  render() {
    if (this.props.isOpen) {
      this._openedClass = 'popup_opened';
    }
    if (this.props.onClose) {
      this._openedClass = ' ';
    }
    return (
      <>

        <div className={`popup popup-${this.props.name} ${this._openedClass}`} >
          <div className="popup__container popup-image__container">
            <button type="button" className="popup__close-button popup__close-${this.props.name}`} button" onClick={this.props.onClosePopup}></button>
            <figure className="popup-image__figure">
              <img className="popup-image__image" src="#" alt="" />
              <figcaption className="popup-image__caption"></figcaption>
            </figure>
          </div>
        </div>


      </>
    );
  }
}
export default PopupWithForm;

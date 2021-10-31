import React from "react";

class ImagePopup extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.card !== null) {
            this._openedClass = 'popup_opened';
          }
          if (this.props.isPopupClose) {
            this._openedClass = ' ';
          }
           if (this.props.card !== null  &&  !this.props.isPopupClose) { 

        return (
            <div className={`popup popup-image  ${this._openedClass}`}>
                <div className="popup__container popup-image__container">
                    <button type="button" className="popup__close-button popup-image__close-button button" onClick={this.props.onClosePopup}></button>
                    <figure className="popup-image__figure">
                        <img className="popup-image__image" src={this.props.card.link} alt={this.props.card.name} />
                        <figcaption className ="popup-image__caption"></figcaption>
                    </figure>
                </div>
            </div>
        );
    }else {
        return (null);
    }
}

}

export default ImagePopup;
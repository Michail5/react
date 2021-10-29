import React from "react";

class ImagePopup extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="popup popup-image">
                <div class="popup__container popup-image__container">
                    <button type="button" class="popup__close-button popup-image__close-button button"></button>
                    <figure class="popup-image__figure">
                        <img class="popup-image__image" src="#" alt=""/>
                        <figcaption class ="popup-image__caption"></figcaption>
                    </figure>
                </div>
            </div>
        );
    }

}

export default ImagePopup;
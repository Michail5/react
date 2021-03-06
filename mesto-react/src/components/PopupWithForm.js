import React from "react";

class PopupWithForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
  };

  }
 
  handleSubmit = () => {
    this.setState({ submitted: true });
  };

  render(){
    return(
    <section className={`popup ${this.props.isOpen ? 'popup_opened' : ''}`} id={`${this.props.name}-editor`}>
        <div className="popup__container">
            <button type="reset" className="popup__close-button" onClick={this.props.onClosePopup}/>
            <h2 className="popup__title">{this.props.title}</h2>
            <form className="popup__form" >
            {this.props.children} 
            <button type="submit" className="popup__button">{this.props.buttonName}</button>
            </form>
        </div>
    </section> 
    )
  }
}
export default PopupWithForm;
import React from 'react';
import Modal from 'react-modal';
import "./style.css";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement');

function PopUp(props) {

    const {modalIsOpen, setIsOpen, title, ingredients, instructions} = props;

    let subtitle;

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Recipe Modal"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{title}</h2>
                <h3>Ingrediants</h3>
                {ingredients?.map((item)=>{
                    return <li className='recipe_list'>{item}</li>
                })}
                <h3>How to make</h3>
                {instructions?.map((item)=>{
                    return <li className='recipe_list'>{item}</li>
                })}
                <button onClick={closeModal} className='modal_close'>Close</button>
            </Modal>
        </div>
    );
}

export default PopUp;

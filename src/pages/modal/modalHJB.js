
import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, Animated } from 'react-spring';
import './modal.css';

const ModalHJB = ({ showModal, setShowModal }) => {
        const modalRef = useRef();
        const animation = useSpring({
          config: {
            duration: 1
          },
          opacity: showModal ? 1 : 0,
          transform: showModal ? `translateY(0%)` : `translateY(-100%)`
        });
      
        const closeModal = e => {
          if (modalRef.current === e.target) {
            setShowModal(false);
          }
        };
      
        const keyPress = useCallback(
          e => {
            if (e.key === 'Escape' && showModal) {
              setShowModal(false);
              console.log('I pressed');
            }
          },
          [setShowModal, showModal]
        );
      
        useEffect(
          () => {
            document.addEventListener('keydown', keyPress);
            return () => document.removeEventListener('keydown', keyPress);
          },
          [keyPress]
        );
      
    return(
    <>
      {showModal ? (
          {/* 
            <div className="Background "  onClick={closeModal} ref={modalRef}>
                <Animated style={animation}>
                <div className="ModalWrapper" showModal={showModal}>
                    <div className="ModalContent">
                        <h1>Are you ready?</h1>
                        <p>Get exclusive access to our next launch.</p>
                        <button>Join Now</button>
                    </div>
                    <div className="CloseModalButton"  onClick={() => setShowModal(prev => !prev)}>
                        <i className='fas fa-times'></i> 
                    </div>
                </div>
                </Animated>
          </div>
        */},
            <div  onClick={closeModal} ref={modalRef}>
                <Animated style={animation}>
                <div  showModal={showModal}>
                    <div className="ModalContent">
                        <h1>Are you ready?</h1>
                        <p>Get exclusive access to our next launch.</p>
                        <button>Join Now</button>
                    </div>
                    <div className="CloseModalButton"  onClick={() => setShowModal(prev => !prev)}>
                        <i className='fas fa-times'></i> 
                    </div>
                </div>
                </Animated>
            </div>
      ) : null}
    </>
    );
    
}

export default ModalHJB;
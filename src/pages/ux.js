import React,{useState} from "react"
import './pages.css'
import Tilt from 'react-vanilla-tilt'
import Modal from 'react-modal'
import Shot from './shot.png'

Modal.setAppElement('#root')
export default function Ux (){
    const [ModalIsOpenImg1, setModalIsOpenImg1] = useState(false)
    const [ModalIsOpenImg2, setModalIsOpenImg2] = useState(false)
    const [ModalIsOpenImg3, setModalIsOpenImg3] = useState(false)
    const [ModalIsOpenImg4, setModalIsOpenImg4] = useState(false)
    const [ModalIsOpenImg5, setModalIsOpenImg5] = useState(false)
    const [ModalIsOpenImg6, setModalIsOpenImg6] = useState(false)

    return(
        <div>
        <h2 className="center f-45 c-white ui-title">User Experience</h2>
    {/*
        <section className="big-card">
          
                <div className="big-card-1">
                <button className=" btn btn-big-card">Lihat detail</button>
                    <div className="bg-box"></div>
                </div>
          
        </section>
    */}
    
        <section className="small-card">
            <Tilt>
                <div className="small-card-1" onClick={() => setModalIsOpenImg1(true)} ></div>
                <Modal 
                    isOpen={ModalIsOpenImg1} 
                    shouldCloseOnOverlayClick={false} 
                    onRequestClose={()=>setModalIsOpenImg1(false)}
                    style={
                        {
                            overlay:{
                                backgroundColor: 'grey'
                            },
                            content:{
                                color:'black',
                            }
                        }
                    }
                    >
                        <div className='menu-icon-card-modal' onClick={() => setModalIsOpenImg1(false)}>
                            <i className='fas fa-times'></i> 
                        </div>
                        <h1>Sertifikat 1</h1>
                        <img className="img-sertif-modal" src={Shot} alt=""/>
                </Modal>
            </Tilt>
            <Tilt>
                <div className="small-card-1" onClick={() => setModalIsOpenImg2(true)}></div>
                <Modal 
                    isOpen={ModalIsOpenImg2} 
                    shouldCloseOnOverlayClick={false} 
                    onRequestClose={()=>setModalIsOpenImg2(false)}
                    style={
                        {
                            overlay:{
                                backgroundColor: 'grey'
                            },
                            content:{
                                color:'black',
                            }
                        }
                    }
                    >
                        <div className='menu-icon-card-modal' onClick={() => setModalIsOpenImg2(false)}>
                            <i className='fas fa-times'></i> 
                        </div>
                        <h1>Sertifikat 2</h1>
                        <img className="img-sertif-modal" src={Shot} alt=""/>
                </Modal>
            </Tilt>
            <Tilt>
                <div className="small-card-1" onClick={() => setModalIsOpenImg3(true)}></div>
            </Tilt>
            <Modal 
                    isOpen={ModalIsOpenImg3} 
                    shouldCloseOnOverlayClick={false} 
                    onRequestClose={()=>setModalIsOpenImg3(false)}
                    style={
                        {
                            overlay:{
                                backgroundColor: 'grey'
                            },
                            content:{
                                color:'black',
                            }
                        }
                    }
                    >
                        <div className='menu-icon-card-modal' onClick={() => setModalIsOpenImg3(false)}>
                            <i className='fas fa-times'></i> 
                        </div>
                        <h1>Sertifikat 3</h1>
                        <img className="img-sertif-modal" src={Shot} alt=""/>
                </Modal>

            <Tilt>
                <div className="small-card-1" onClick={() => setModalIsOpenImg4(true)}></div>
            </Tilt>
            <Modal 
                    isOpen={ModalIsOpenImg4} 
                    shouldCloseOnOverlayClick={false} 
                    onRequestClose={()=>setModalIsOpenImg4(false)}
                    style={
                        {
                            overlay:{
                                backgroundColor: 'grey'
                            },
                            content:{
                                color:'black',
                            }
                        }
                    }
                    >
                        <div className='menu-icon-card-modal' onClick={() => setModalIsOpenImg4(false)}>
                            <i className='fas fa-times'></i> 
                        </div>
                        <h1>Sertifikat 4</h1>
                        <img className="img-sertif-modal" src={Shot} alt=""/>
                </Modal>
            <Tilt>
                <div className="small-card-1" onClick={() => setModalIsOpenImg5(true)}></div>
            </Tilt>
            <Modal 
                    isOpen={ModalIsOpenImg5} 
                    shouldCloseOnOverlayClick={false} 
                    onRequestClose={()=>setModalIsOpenImg5(false)}
                    style={
                        {
                            overlay:{
                                backgroundColor: 'grey'
                            },
                            content:{
                                color:'black',
                            }
                        }
                    }
                    >
                        <div className='menu-icon-card-modal' onClick={() => setModalIsOpenImg5(false)}>
                            <i className='fas fa-times'></i> 
                        </div>
                        <h1>Sertifikat 5</h1>
                        <img className="img-sertif-modal" src={Shot} alt=""/>
                </Modal>
            <Tilt>
                <div className="small-card-1" onClick={() => setModalIsOpenImg6(true)}></div>
            </Tilt>
            <Modal 
                    isOpen={ModalIsOpenImg6} 
                    shouldCloseOnOverlayClick={false} 
                    onRequestClose={()=>setModalIsOpenImg6(false)}
                    style={
                        {
                            overlay:{
                                backgroundColor: 'grey'
                            },
                            content:{
                                color:'black',
                            }
                        }
                    }
                    >
                        <div className='menu-icon-card-modal' onClick={() => setModalIsOpenImg6(false)}>
                            <i className='fas fa-times'></i> 
                        </div>
                        <h1>Sertifikat 6</h1>
                        <img className="img-sertif-modal" src={Shot} alt=""/>
                </Modal>
        </section>

        <section className="footer">
        </section>
    </div>
    )
}
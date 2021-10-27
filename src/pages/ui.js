import React,{useState} from "react"
import './pages.css'
import Tilt from 'react-vanilla-tilt'
import Modal from 'react-modal'
import Coverdi from './img/UI/di.png'
import Coverflower from './img/UI/flower.png'
import Coverhot from './img/UI/hotel.png'
import Coverition from './img/UI/ition.png'
import Coverlaku from './img/UI/laku.png'
import Coverlap from './img/UI/cover/coverlap.png'
import Coverlapp from './img/UI/cover/coverlapp.png'


Modal.setAppElement('#root')
export default function Ui (){
    const [ModalIsOpenImg1, setModalIsOpenImg1] = useState(false)
    const [ModalIsOpenImg2, setModalIsOpenImg2] = useState(false)
    const [ModalIsOpenImg3, setModalIsOpenImg3] = useState(false)
    const [ModalIsOpenImg4, setModalIsOpenImg4] = useState(false)
    const [ModalIsOpenImg5, setModalIsOpenImg5] = useState(false)
    const [ModalIsOpenImg6, setModalIsOpenImg6] = useState(false)
    const [ModalIsOpenImg7, setModalIsOpenImg7] = useState(false)

    return(
        <div>
              <h2 className="center f-45 c-white ui-title">User Interface</h2>
            <section className="small-card">
            <Tilt>
                <div className="small-card-1 Coverdi" onClick={() => setModalIsOpenImg1(true)}></div>
                <Modal 
                    isOpen={ModalIsOpenImg1} 
                    shouldCloseOnOverlayClick={true} 
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
                        <h1 className="title-modal">Exploration User Interface Mobile App Diceritain</h1>
                        <img className="img-sertif-modal" src={Coverdi} alt="Illustrasi Mahdiya Aqila"/>
                </Modal>
            </Tilt>
            <Tilt>
                <div className="small-card-1 Coverflower" onClick={() => setModalIsOpenImg2(true)}></div>
                <Modal 
                    isOpen={ModalIsOpenImg2} 
                    shouldCloseOnOverlayClick={true} 
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
                        <h1 className="title-modal">Exploration User Interface Flower shop website</h1>
                        <img className="img-sertif-modal" src={Coverflower} alt="Illustrasi Mahdiya Aqila"/>
                </Modal>
            </Tilt>
            <Tilt>
                <div className="small-card-1 Coverhot" onClick={() => setModalIsOpenImg3(true)}></div>
                <Modal 
                    isOpen={ModalIsOpenImg3} 
                    shouldCloseOnOverlayClick={true} 
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
                        <h1 className="title-modal">Exploration User Interface Hotel Astra Website</h1>
                        <img className="img-sertif-modal" src={Coverhot} alt="Illustrasi Mahdiya Aqila"/>
                </Modal>
            </Tilt>
            <Tilt>
                <div className="small-card-1 Coverition" onClick={() => setModalIsOpenImg4(true)}></div>
                <Modal 
                    isOpen={ModalIsOpenImg4} 
                    shouldCloseOnOverlayClick={true} 
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
                        <h1 className="title-modal">Exploration User Interface ITION</h1>
                        <img className="img-sertif-modal" src={Coverition} alt="Illustrasi Mahdiya Aqila"/>
                </Modal>
            </Tilt>
            <Tilt>
                <div className="small-card-1 Coverlaku" onClick={() => setModalIsOpenImg5(true)}></div>
                <Modal 
                    isOpen={ModalIsOpenImg5} 
                    shouldCloseOnOverlayClick={true} 
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
                        <h1 className="title-modal">Exploration User Interface Laku Mobile App</h1>
                        <img className="img-sertif-modal" src={Coverlaku} alt="Illustrasi Mahdiya Aqila"/>
                </Modal>
            </Tilt>
            <Tilt>
                <div className="small-card-1 Coverlap" onClick={() => setModalIsOpenImg6(true)}></div>
                <Modal 
                    isOpen={ModalIsOpenImg6} 
                    shouldCloseOnOverlayClick={true} 
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
                        <h1 className="title-modal">Exploration User Interface Restaurant Website</h1>
                        <img className="img-sertif-modal" src={Coverlap} alt="Illustrasi Mahdiya Aqila"/>
                </Modal>
            </Tilt>

            <Tilt>
                <div className="small-card-1 Coverlapp" onClick={() => setModalIsOpenImg7(true)}></div>
                <Modal 
                    isOpen={ModalIsOpenImg7} 
                    shouldCloseOnOverlayClick={true} 
                    onRequestClose={()=>setModalIsOpenImg7(false)}
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
                        <div className='menu-icon-card-modal' onClick={() => setModalIsOpenImg7(false)}>
                            <i className='fas fa-times'></i> 
                        </div>
                        <h1 className="title-modal">Exploration User Interface KUA Website</h1>
                        <img className="img-sertif-modal" src={Coverlapp} alt="Illustrasi Mahdiya Aqila"/>
                </Modal>
            </Tilt>

            </section>
            <section className="footer">
            </section>
        </div>
    )
}
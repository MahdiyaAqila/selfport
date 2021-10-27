import React,{useState} from "react";
import './pages.css';
import Image from './photo.png'
import Logo from './logo.svg'
import Tilt from 'react-vanilla-tilt';
import Modal from 'react-modal'
import Dc1 from './img/Experience/Diceritain/67027.jpg'
import Dc2 from './img/Experience/Diceritain/Capture.PNG'
import Dc3 from './img/Experience/Diceritain/ds.PNG'
import Dc4 from './img/Experience/Diceritain/illust.PNG'
import Dc5 from './img/Experience/Diceritain/shotDiceritain.png'
import Dc6 from './img/Sertifikat/Diceritain.png'
import Cm1 from './img/Experience/CM/absen.PNG'
import Cm2 from './img/Experience/CM/Berita.PNG'
import Cm3 from './img/Experience/CM/d3a.jpg'
import Cm4 from './img/Experience/CM/fungsio.png'
import Cm5 from './img/Experience/CM/meet.png'
import Cm6 from './img/Experience/CM/pjk1.png'
import Cm7 from './img/Experience/CM/pjk2.png'
import Cm8 from './img/Experience/CM/radep1.PNG'
import Cm9 from './img/Experience/CM/radep2.PNG'
import Sertifikat1 from './img/Sertifikat/Diceritain.png'
import Sertifikat2 from './img/Sertifikat/sertifikatBinar.PNG'
import Sertifikat3 from './img/Sertifikat/sertifikatCommand.PNG'
import Sertifikat4 from './img/Sertifikat/sertifikatCM.PNG'
import Sertifikat6 from './img/Sertifikat/sertifikatKMIPN.PNG'
import Sertifikat7 from './img/Sertifikat/sertifikatPhyton.PNG'
import Sertifikat8 from './img/Sertifikat/sertifikatTechno.PNG'
import Sertifikat9 from './img/Sertifikat/TOEFL.PNG'
import Sertifikat10 from './img/Sertifikat/sertifikatGo.PNG'
import Cmd from './img/Sertifikat/cmd/cmd.PNG'
import Cmd1 from './img/Sertifikat/cmd/cmd1.PNG'
import Cmd2 from './img/Sertifikat/cmd/cmd2.PNG'
import Cmd3 from './img/Sertifikat/cmd/cmd3.PNG'
import Kmipn from './img/Sertifikat/kmipn.png'
import Kmipn2 from './img/Sertifikat/kmipn2.png'
import Kmipn3 from './img/Sertifikat/kmipn3.png'
import Kmipn4 from './img/GD/kmipn7.png'
import Kmipn5 from './img/Sertifikat/kmipn5.png'
import Kmipn6 from './img/Sertifikat/kmipn6.png'
import p1 from './img/Sertifikat/phyton/p1.PNG'
import p2 from './img/Sertifikat/phyton/p2.PNG'
import p3 from './img/Sertifikat/phyton/p3.PNG'
import p4 from './img/Sertifikat/phyton/p4.PNG'
import p5 from './img/Sertifikat/phyton/p5.PNG'
import p6 from './img/Sertifikat/phyton/p6.PNG'
import p7 from './img/Sertifikat/phyton/p7.PNG'
import p8 from './img/Sertifikat/phyton/p8.PNG'
import p9 from './img/Sertifikat/phyton/p9.PNG'
import p10 from './img/Sertifikat/phyton/p10.PNG'
import p11 from './img/Sertifikat/phyton/p11.PNG'
import p12 from './img/Sertifikat/phyton/p12.PNG'
import p13 from './img/Sertifikat/phyton/p13.PNG'
import p14 from './img/Sertifikat/phyton/p14.PNG'
import Jadwalin1 from './img/Sertifikat/jadwalin1.png'
import Jadwalin2 from './img/Sertifikat/jadwalin2.png'
import Go1 from './img/Sertifikat/go/Go1.PNG'
import Go2 from './img/Sertifikat/go/Go2.PNG'
import Go3 from './img/Sertifikat/go/Go3.PNG'
import Go4 from './img/Sertifikat/go/Go4.PNG'





Modal.setAppElement('#root')
export default function Home (){
    const [ModalIsOpen, setModalIsOpen] = useState(false)
    const [ModalIsOpen1, setModalIsOpen1] = useState(false)
    const [ModalIsOpen2, setModalIsOpen2] = useState(false)
    const [ModalIsOpen3, setModalIsOpen3] = useState(false)
    const [ModalIsOpenImg, setModalIsOpenImg] = useState(false)
    const [ModalIsOpenImg2, setModalIsOpenImg2] = useState(false)
    const [ModalIsOpenImg3, setModalIsOpenImg3] = useState(false)
    const [ModalIsOpenImg4, setModalIsOpenImg4] = useState(false)
    const [ModalIsOpenImg6, setModalIsOpenImg6] = useState(false)
    const [ModalIsOpenImg7, setModalIsOpenImg7] = useState(false)
    const [ModalIsOpenImg8, setModalIsOpenImg8] = useState(false)
    const [ModalIsOpenImg9, setModalIsOpenImg9] = useState(false)
    const [ModalIsOpenImg10, setModalIsOpenImg10] = useState(false)

    return(
        <div>
            <div>
                <img className="logo-top" src={Logo} alt=""/>
            </div>
            <section className="home-section align-items-center">
                        <div className="home-text">
                            <h2>i communicate through visual design and code.</h2>
                        </div>
                        <div className="home-img ">
                                <div className="just-img" >
                                    <a href="#resume-section">
                                        <Tilt>
                                            <img classname="img" src={Image} alt=""></img>
                                            <div className="tbox1"></div>
                                            <div className="tbox2"></div>
                                        </Tilt>
                                    </a>
                                </div>
                        </div> 
            </section>

                <div className="home-icon">
                        <a href="https://www.instagram.com/designby.myla/" target="_blank" rel="noreferrer"> <i className="fab fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/in/mahdiya-aqila-3a2a12193/" target="_blank" rel="noreferrer"> <i className="fab fa-linkedin"></i></a>
                        <a href="mailto:mahdiyaqila@gmail.com" target="_blank" rel="noreferrer"> <i className="fas fa-envelope"></i></a>
                        <a href="https://unsplash.com/@mahdiyaaqila" target="_blank" rel="noreferrer"> <i className="fab fa-unsplash"></i></a>
                        <a href="https://dribbble.com/Mahdiyaqila" target="_blank" rel="noreferrer"> <i className="fab fa-dribbble-square"></i></a>
                </div>

            <section className="resume-section break" id="resume-section">
                <div>
                    <h2 className="center f-45">Tentang saya</h2><br/>
                    <p> Nama saya Mahdiya Aqila seorang UI/UX designer.  Saya tinggal di Bali.</p>

                        <p>Dengan pengalaman saya selama 1+ tahun didunia design, saya menyadari bahwa saya tidak tau banyak hal.</p>
                        
                        <p> Karena saya tidak tau, maka saya terus belajar ( longlife -learner ). Saya selalu update skill saya di bidang visual design, digital design, code ( front-end ), Digital marketing, Branding, dan Video editing. Saya juga suka membuat craft dan melukis. </p>

                    <p> Saya punya keingintahuan tinggi dan kreatif, karena itu saya bisa mengembangkan pengetahuan dan skill. Makasii udah baca “a lil bit about me”. yuk ngobrol lagi hehehe..
                        </p>
                    <button className="btn">Yuk kenalan !! 🌹</button>
                </div>
                    <br/>
                    <div className="enter"></div>
                <div>

                    <h2 className="center f-45">Skill Set Saya</h2>
                    <div className="resume-skill">
                        <button className="btn-1">UI Designer</button>
                        <button className="btn-1">UI Illustrator</button>
                        <button className="btn-1">Graphic Designer</button>
                        <button className="btn-1">UX Researcher</button>
                        <button className="btn-1">Front-End Web Developer</button>
                        <button className="btn-1">Photography</button>
                        <button className="btn-1">Video Editing</button>
                        <button className="btn-1">Social Media Manager</button>
                        <button className="btn-1">Content Writer</button>
                        <button className="btn-1">Digital Content Manager</button>
                    </div>
                </div>
                <div className="enter"></div>
                <div className="resume-experience">
                    <div className="experience-title">
                        <h2 className="f-60">Pe</h2>
                        <h2 className="f-60">nga</h2>
                        <h2 className="f-60">la</h2>
                        <h2 className="f-60">ma</h2>
                        <h2 className="f-60">n.</h2>
                    </div>
                    <div className="experience-card" >
                        <div className="card" onClick={() => setModalIsOpen1(true)}> 
                            <p className="fw-800">FullStack Web Developer Intern</p>
                            <p className="fw-500 fs-12">Kerja Praktek di PT. Harapan Jaya Beton</p>
                            <p className="fw-500 fs-12">Juli-September</p>
                        </div>
                        <Modal 
                        isOpen={ModalIsOpen1} 
                        shouldCloseOnOverlayClick={true} 
                        onRequestClose={()=>setModalIsOpen1(false)}
                        style={
                            {
                                overlay:{
                                    backgroundColor: 'grey'
                                },
                                content:{
                                    color:'black'
                                }
                            }
                            
                        }
                        >
                            <div className='menu-icon-card-modal' onClick={() => setModalIsOpen1(false)}>
                                <i className='fas fa-times'></i> 
                            </div>
                            <h1>FullStack Web Developer Intern</h1>
                            <p className="text-modal">none </p> 
                            <br/>
                            
                        </Modal>

                        <div className="card" onClick={() => setModalIsOpen2(true)}> 
                            <div className="card-isi">
                                <p className="fw-800">UI Designer & UI Illustrator Intern</p>
                                <p className="fw-500 fs-12">Magang di Diceritain</p>
                                <p className="fw-500 fs-12">Februari-Juni</p>
                            </div>
                            
                        </div>
                        <Modal 
                        isOpen={ModalIsOpen2} 
                        shouldCloseOnOverlayClick={true} 
                        onRequestClose={()=>setModalIsOpen2(false)}
                        style={
                            {
                                overlay:{
                                    backgroundColor: 'grey'
                                },
                                content:{
                                    color:'black'
                                }
                            }
                            
                        }
                        >
                            <div className='menu-icon-card-modal' onClick={() => setModalIsOpen2(false)}>
                                <i className='fas fa-times'></i> 
                            </div>
                            <h1 className="title-modal">UI Designer & UI Illustrator Intern</h1><br/>
                            <p className="text-modal">
                            Saya mengikuti internship di Diceritain selama 3 bulan dengan jobdesk : </p>
                            <ol className="text-modal m-15">
                                <li>membuat ux illustrasi untuk aplikasi mobile dan website</li>
                                <li>membuat user interface mobile versi terbaru berdasarkan hasil testing user</li>
                                <li>membuat flow dan user interface untuk fitur konseling premium/berbayar berdasarkan market research dan brief dari CPO</li>
                            </ol>
                            <br/>
                            <p className="text-modal">feedback dari rekan kerja saya adalah saya dapat membuat ux 
                            illustrator yang menggambarkan suasana aplikasi tersebut, hasil design saya unik, 
                            mendesain UI dengan cepat dengan flow yang jelas agar bisa dibahas di tech team.</p>
                            <div className="img-modals"> 
                                <img className="img-modal" src={Dc6} alt="Internship Diceeitain" />
                                <img className="img-modal" src={Dc2} alt="Internship Diceeitain"/>
                                <img className="img-modal" src={Dc3} alt="Internship Diceeitain"/>
                                <img className="img-modal" src={Dc4} alt="Internship Diceeitain" />
                                <img className="img-modal" src={Dc1} alt="Internship Diceeitain"/>
                                <img className="img-modal" src={Dc5} alt="Internship Diceeitain"/>
                            </div>
                        </Modal>



                        <div className="card" onClick={() => setModalIsOpen(true)}> 
                            <p className="fw-800">Content Writer</p>
                            <p className="fw-500 fs-12">Staff Ahli HIMIT PENS</p>
                            <p className="fw-500 fs-12">Januari-Desember</p>
                         
                        </div>

                        
                        <Modal 
                        isOpen={ModalIsOpen} 
                        shouldCloseOnOverlayClick={true} 
                        onRequestClose={()=>setModalIsOpen(false)}
                        style={
                            {
                                overlay:{
                                    backgroundColor: 'grey'
                                },
                                content:{
                                    color:'black'
                                }
                            }
                            
                        }
                        >
                            <div className='menu-icon-card-modal' onClick={() => setModalIsOpen(false)}>
                                <i className='fas fa-times'></i> 
                            </div>
                            <h1 className="title-modal">Content Writer</h1>
                            <p className="text-modal">
                            none </p> 
                            <br/>
                            </Modal>

                        <div className="card" onClick={() => setModalIsOpen3(true)}> 
                            <p className="fw-800">Content Manager</p>
                            <p className="fw-500 fs-12">Staff Muda HIMIT PENS</p>
                            <p className="fw-500 fs-12">Januari-Desember</p>
                        </div>

                        <Modal 
                        isOpen={ModalIsOpen3} 
                        shouldCloseOnOverlayClick={true} 
                        onRequestClose={()=>setModalIsOpen3(false)}
                        style={
                            {
                                overlay:{
                                    backgroundColor: 'grey'
                                },
                                content:{
                                    color:'black'
                                }
                            }
                            
                        }
                        >
                            <div className='menu-icon-card-modal' onClick={() => setModalIsOpen3(false)}>
                                <i className='fas fa-times'></i> 
                            </div>
                            <h1 className="title-modal">Content Manager</h1>
                            <br/>
                            <p className="text-modal">
                            Sebagai staff muda departemen media informasi di himpunan mahasiswa teknik informatika 
                            PENS ( HIMIT PENS ) saya diposisikan sebagai content manager dan sekretaris selama kurang 
                            lebih 8 bulan . Content manager adalah seorang yang memanage dan merencanakan 
                            konten yang akan diupload. Detail jobdesk yang saya lakukan adalah : </p> 
                            <br/>
                            <ol className="text-modal m-15">
                                <li>Membuat PJK (Perencanaan Jadwal Kegiatan) setiap bulannya</li>
                                <li>Memplanning konten yang ingin dibuat setiap bulannya</li>
                                <li>Memotret para staff untuk database himpunan dan video profil kabinet</li>
                                <li>Membackup divisi lain jika berhalangan (Videography, Creative Design, dan Social media admin)</li>
                                <li>Mereminder penguploadan konten sesuai PJK</li>
                                <li>Mendesign beberapa story dan feed di sosial media himpunan</li>
                                <li>Mendesign sertifikat keanggotaan kabinet abimanyu 2021 HIMIT</li>
                                <li> Sebagai sekretaris jobdesk saya adalah mendokumentasikan setiap kegiatan rapat didalam satu departemen serta membuat berita acara dan absensinya.</li>
                            </ol>
                            <br/>
                            <p className="text-modal">
                            Hasil yang saya bersama tim dapatkan setelah satu periode menjabat adalah
                                <ol className="text-modal m-15">
                                    <li><h3> Instagram </h3>
                                        <ul>
                                            <li>Followers bertambah sebanyak 263 followers</li>
                                            <li>Kenaikan impression hingga 30662 interaksi</li>
                                            <li>peningkatan activity account setiap bulan sebanyak 511 akun</li>
                                        </ul>
                                    </li>
                                    <li> <h3>LINE</h3>
                                        <ul>
                                            <li>Kenaikan rata - rata like menjadi 52 like dari sebelumnya 47 like</li>
                                        </ul>
                                    </li>
                                    <li><h3>Twitter</h3>
                                        <ul>
                                            <li>Kenaikan rata - rata jumlah tayangan menjadi 4983 tayangan / bulan yang sebelumnya adalah 2500 tayangan / bulan dan rata-rata engagement setiap post adalah 1.41%</li>
                                        </ul>
                                    </li>
                                    <li><h3>Youtube</h3>
                                        <ul>
                                            <li>Mendapat 177 subscriber baru dengan jumlah total pengguna sebesar 1300 jam dan mendapat 9400 view (akumulasi semua video) dalam satu periode
                                            </li>
                                        </ul>
                                    </li>
                                    <li> <h3>Facebook</h3>
                                        <ul>
                                            <li>Mendapat jangkauan sebesar 1228 dengan rata - rata impression perbulannya sebesar 1590 impression
                                            </li>
                                        </ul>
                                    </li>
                                    <li>Dikarenakan semua kegiatan dilakukan WFH kami berhasil mengidekan untuk merubah majalah dinding menjadi HFF (HIMIT FUN FACT) yang dibuat dalam bentuk video dan upload di youtube. Hal tersebut mendapat respon positif dari mahasiswa teknik informatika PENS.
                                    </li>

                                </ol>                
                            </p>
                            <div className="img-modals">
                                <img className="img-modal" src={Cm1} alt="Content Manager"/>
                                <img className="img-modal" src={Cm2} alt="Content Manager"/>
                                <img className="img-modal" src={Cm3} alt="Content Manager"/>
                                <img className="img-modal" src={Cm4} alt="Content Manager"/>
                                <img className="img-modal" src={Cm5} alt="Content Manager"/>
                                <img className="img-modal" src={Cm6} alt="Content Manager"/>
                                <img className="img-modal" src={Cm7} alt="Content Manager"/>
                                <img className="img-modal" src={Cm8} alt="Content Manager"/>
                                <img className="img-modal" src={Cm9} alt="Content Manager"/>
                            </div>
                        </Modal>

                    </div>
                </div>
                    
            </section>
            <div className="enter"></div>
            <section className="sertifikat c-white">
                    <h2 className="center f-45 ">Sertifikat</h2>
                <div className="sertifikat-card">

                        <div className="card" onClick={() => setModalIsOpenImg(true)}>
                            <img className="img-sertif" src={Sertifikat1} alt=""/>
                            <p className="p-sertif"> Serifikat Internship UI/UX Designer Diceritain 2020</p>
                        </div>
                        
                        <Modal 
                        isOpen={ModalIsOpenImg} 
                        shouldCloseOnOverlayClick={true} 
                        onRequestClose={()=>setModalIsOpenImg(false)}
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
                            <div className='menu-icon-card-modal' onClick={() => setModalIsOpenImg(false)}>
                                <i className='fas fa-times'></i> 
                            </div>
                            <h1 className="title-modal">Serifikat Internship UI/UX Designer Diceritain 2020 </h1>
                            <img className="img-sertif-modal" src={Sertifikat1} alt=""/>
                            <p className="text-modal">
                            Saya mengikuti internship di Diceritain selama 3 bulan dengan jobdesk : </p>
                            <ol className="text-modal m-15">
                                <li>membuat ux illustrasi untuk aplikasi mobile dan website</li>
                                <li>membuat user interface mobile versi terbaru berdasarkan hasil testing user</li>
                                <li>membuat flow dan user interface untuk fitur konseling premium/berbayar berdasarkan market research dan brief dari CPO</li>
                            </ol>
                            <br/>
                        </Modal>


                        <div className="card" onClick={() => setModalIsOpenImg2(true)}>
                            <img className="img-sertif" src={Sertifikat2} alt=""/>
                            <p className="p-sertif"> Sertifikat Webinar How to evaluate UI UX Design & Create a Portofolio According to Company Standart HIMIT PENS X Binar Academy 2021</p>
                        </div>
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
                                    <h1 className="title-modal">Sertifikat Webinar How to evaluate UI UX Design & Create a Portofolio According to Company Standart HIMIT PENS X Binar Academy</h1>
                                    <img className="img-sertif-modal" src={Sertifikat2} alt=" Sertifikat Mahdiya Aqila"/>
                                    <p className="text-modal">
                                    Saya mengikuti Webinar UI/UX dengan moderator dari Binar Academy, poin yang saya dapat dari Webinar ini adalah : </p>
                                    <ol className="text-modal m-15">
                                        <li>Tahapan dalam mendesain tampilan adalah Pahami brief {'>'} problem definition  {'>'} Mapping Journey  {'>'} Concept Prototyping  {'>'} Validasi Concept  {'>'} Ideation Ideal Journey  {'>'}  Explorasi UI  {'>'} Design grooming & critics</li>
                                        <li>Ternyata metode evaluasi design ada banyak seperti Design critics, Heuristic Evaluation, Concept Testing, Usability Testing, dll</li>
                                        <li>Hal yang harus disiapkan sebelum evaluasi design adalah Goal dan parameter evaluasinya</li>
                                        <li>Design critics bagus untuk dilakukan karena desainer jadi bisa melihat dari pov team lain, mendapat hasil desain yang balance antara bisnis tech dan design team, menguji growth mindset jika diberi kritikan, menurunkan ego designer, mengasah critical thinking</li>
                                    </ol>
                                    <br/>
                                </Modal>


                        <div className="card"  onClick={() => setModalIsOpenImg3(true)}>
                            <img className="img-sertif" src={Sertifikat3} alt="Sertifikat Mahdiya Aqila"/>
                            <p className="p-sertif">Sertifikat Command Line Progate</p>
                        </div>
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
                                    <h1 className="title-modal">Sertifikat Command Line Progate</h1>
                                    <img className="img-sertif-modal" src={Sertifikat3} alt=""/>
                                    <p className="text-modal">Command line adalah tool yang memungkinkan untuk menjalankan berbagai task dengan memberikan command pada komputer. Dicourse ini saya mempelajari hal-hal fundamental mengenai command line UNIX.</p>
                                    <div className="img-modals">
                                        <img className="img-modal" src={Cmd} alt="Sertifikat Mahdiya Aqila"/>
                                        <img className="img-modal" src={Cmd1} alt="Sertifikat Mahdiya Aqila"/>
                                        <img className="img-modal" src={Cmd2} alt="Sertifikat Mahdiya Aqila"/>
                                        <img className="img-modal" src={Cmd3} alt="Sertifikat Mahdiya Aqila"/>
                                    </div>
                                </Modal>
                        <div className="card"  onClick={() => setModalIsOpenImg4(true)}>
                            <img className="img-sertif" src={Sertifikat4} alt="Sertifikat Mahdiya Aqila"/>
                            <p className="p-sertif"> Sertifikat Staff Muda Departemen Media & Informasi HIMIT PENS 2020</p>
                        </div>
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
                                    <h1 className="title-modal">Sertifikat Staff Muda Departemen Media & Informasi HIMIT PENS 2020</h1>
                                    <img className="img-sertif-modal" src={Sertifikat4} alt="Sertifikat Mahdiya Aqila"/>
                                    <p className="text-modal">Sebagai staff muda departemen media informasi di himpunan mahasiswa teknik informatika PENS ( HIMIT PENS ) saya diposisikan sebagai content manager dan sekretaris selama kurang lebih 8 bulan . Content manager adalah seorang yang memanage dan merencanakan konten yang akan diupload.</p>
                                </Modal>
                       
                        <div className="card"  onClick={() => setModalIsOpenImg6(true)}>
                            <img className="img-sertif" src={Sertifikat6} alt="Sertifikat Mahdiya Aqila"/>
                            <p className="p-sertif"> Sertifikat FINALIS E-Goverment KMIPN 2021</p>
                        </div>
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
                                    <h1 className="title-modal">Sertifikat FINALIS E-Goverment KMIPN 2021</h1>
                                    <img className="img-sertif-modal" src={Sertifikat6} alt="Sertifikat Mahdiya Aqila"/>
                                    <p className="text-modal">Kompetisi Mahasiswa Informatika Politeknik Nasional merupakan ajang bergengsi untuk institusi perguruan tinggi vokasi di bidang informatika. </p>
                                    <p className="text-modal">Sebagai anggota dari kelompok SPIRIT yang mengikuti lomba dalam bidang E-Goverment. Saya bertugas untuk </p>
                                    <ol className="text-modal m-15">
                                        <li>Membuat UI/UX sesuai real study case dari desa pegantenan untuk membuat Aplikasi pelayanan desa pegantenan berbasis mobile. </li>
                                        <li>Membuat asset desain.</li>
                                        <li>Membuat poster aplikasi untuk exhibition online.</li>
                                        <li>Mengedit video promosi kelompok SPIRIT.</li>
                                    </ol>
                                    <div className="img-modals">
                                        <img className="img-modal" src={Kmipn} alt="Sertifikat KMIPN Mahdiya Aqila" />
                                        <img className="img-modal" src={Kmipn6} alt="Sertifikat KMIPN Mahdiya Aqila" />
                                        <img className="img-modal" src={Kmipn2} alt="Sertifikat KMIPN Mahdiya Aqila" />
                                        <img className="img-modal" src={Kmipn3} alt="Sertifikat KMIPN Mahdiya Aqila" />
                                        <img className="img-modal" src={Kmipn4} alt="Sertifikat KMIPN Mahdiya Aqila" />
                                        <img className="img-modal" src={Kmipn5} alt="Sertifikat KMIPN Mahdiya Aqila" />
                                    </div>
                                </Modal>
                        <div className="card"  onClick={() => setModalIsOpenImg7(true)}>
                            <img className="img-sertif" src={Sertifikat7} alt="Sertifikat Mahdiya Aqila"/>
                            <p className="p-sertif"> Certificate Online Course Phyton Programming Language Progate</p>
                        </div>
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
                                    <h1 className="title-modal">Certificate Online Course Phyton Programming Language Progate</h1>
                                    <img className="img-sertif-modal" src={Sertifikat7} alt="Sertifikat Mahdiya Aqila"/>
                                    <p className="text-modal">Python adalah bahasa perograman yang sangat bermanfaat dan dapat digunakan untuk website, machine learning, dan banyak lagi. 
                                    Dalam kursus ini, saya telah mempelajari dasar-dasar Python dengan penjabaran materi sebegai berikut :</p>
                                    <div className="img-modals">
                                        <img className="img-modal" src={p1} alt="Sertifikat Phyton Mahdiya Aqila"/>
                                        <img className="img-modal" src={p2} alt="Sertifikat Phyton Mahdiya Aqila"/>
                                        <img className="img-modal" src={p3} alt="Sertifikat Phyton Mahdiya Aqila"/>
                                        <img className="img-modal" src={p4} alt="Sertifikat Phyton Mahdiya Aqila"/>
                                        <img className="img-modal" src={p5} alt="Sertifikat Phyton Mahdiya Aqila"/>
                                        <img className="img-modal" src={p6} alt="Sertifikat Phyton Mahdiya Aqila"/>
                                        <img className="img-modal" src={p7} alt="Sertifikat Phyton Mahdiya Aqila"/>
                                        <img className="img-modal" src={p8} alt="Sertifikat Phyton Mahdiya Aqila"/>
                                        <img className="img-modal" src={p9} alt="Sertifikat Phyton Mahdiya Aqila"/>
                                        <img className="img-modal" src={p10} alt="Sertifikat Phyton Mahdiya Aqila"/>
                                        <img className="img-modal" src={p11} alt="Sertifikat Phyton Mahdiya Aqila"/>
                                        <img className="img-modal" src={p12} alt="Sertifikat Phyton Mahdiya Aqila"/>
                                        <img className="img-modal" src={p13} alt="Sertifikat Phyton Mahdiya Aqila"/>
                                        <img className="img-modal" src={p14} alt="Sertifikat Phyton Mahdiya Aqila"/>
                                    </div>
                                </Modal>
                        <div className="card"  onClick={() => setModalIsOpenImg8(true)}>
                            <img className="img-sertif" src={Sertifikat8} alt="Sertifikat Mahdiya Aqila"/>
                            <p className="p-sertif">Sertifikat peserta lomba UI/UX Universitas GunaDarma</p>
                        </div>
                                <Modal 
                                isOpen={ModalIsOpenImg8} 
                                shouldCloseOnOverlayClick={true} 
                                onRequestClose={()=>setModalIsOpenImg8(false)}
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
                                    <div className='menu-icon-card-modal' onClick={() => setModalIsOpenImg8(false)}>
                                        <i className='fas fa-times'></i> 
                                    </div>
                                    <h1 className="title-modal">Sertifikat peserta lomba UI/UX Universitas GunaDarma</h1>
                                    <img className="img-sertif-modal" src={Sertifikat8} alt="Sertifikat Mahdiya Aqila"/>
                                    <p className="text-modal">Kami merancang sebuah aplikasi bernama "Jadwalin Aja" , 
                                    Jadwalin Aja merupakan sebuah aplikasi yang berfokus untuk membantu user untuk memanajemen 
                                    waktunya menjadi lebih baik dan mendetail. Kami telah melakukan validasi ide menggunakan quisioner, 
                                    mengolah data tersebut sehingga bisa menghasilkan sebuah user interface yang interaktif. 
                                    Setelah itu, kami juga melakukan testing dengan para user menggunakan prototype</p>
                                    <div className="img-modals">
                                        <img className="img-modal" src={Jadwalin1} alt="Sertifikat UI UX Mahdiya Aqila " />
                                        <img className="img-modal" src={Jadwalin2} alt="Sertifikat UI UX Mahdiya Aqila " />
                                    </div>
                                </Modal>
                        <div className="card"  onClick={() => setModalIsOpenImg9(true)}>
                            <img className="img-sertif" src={Sertifikat9} alt="Sertifikat Mahdiya Aqila"/>
                            <p className="p-sertif">Certificate of Completion TOEFL ITP Prediction Test</p>
                        </div>
                                <Modal 
                                isOpen={ModalIsOpenImg9} 
                                shouldCloseOnOverlayClick={true} 
                                onRequestClose={()=>setModalIsOpenImg9(false)}
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
                                    <div className='menu-icon-card-modal' onClick={() => setModalIsOpenImg9(false)}>
                                        <i className='fas fa-times'></i> 
                                    </div>
                                    <h1 className="title-modal">Certificate of Completion TOEFL ITP Prediction Test</h1>
                                    <img className="img-sertif-modal" src={Sertifikat9} alt="Sertifikat TOEFL Mahdiya Aqila"/>
                                </Modal>
                        <div className="card"  onClick={() => setModalIsOpenImg10(true)}>
                            <img className="img-sertif" src={Sertifikat10} alt="Sertifikat Mahdiya Aqila"/>
                            <p className="p-sertif">Certificate Online Course Go Programming Language Progate</p>
                        </div>
                                <Modal 
                                isOpen={ModalIsOpenImg10} 
                                shouldCloseOnOverlayClick={true} 
                                onRequestClose={()=>setModalIsOpenImg10(false)}
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
                                    <div className='menu-icon-card-modal' onClick={() => setModalIsOpenImg10(false)}>
                                        <i className='fas fa-times'></i> 
                                    </div>
                                    <h1 className="title-modal">Certificate Online Course Go Programming Language Progate</h1>
                                    <img className="img-sertif-modal" src={Sertifikat10} alt="Sertifikat Mahdiya Aqila"/>
                                    <p className="text-modal">Bahasa Go digunakan untuk pengembangan sisi server di mana saja mulai dari startup hingga sistem yang lebih besar. 
                                   saya telah mempelajari dasar-dasarnya dalam pelajaran ini dengan rincian materi sebagai berikut :</p>
                                   <div className="img-modals">
                                        <img className="img-modal" src={Go1} alt="Sertifikat Go Mahdiya Aqila"/>
                                        <img className="img-modal" src={Go2} alt="Sertifikat Go Mahdiya Aqila"/>
                                        <img className="img-modal" src={Go3} alt="Sertifikat Go Mahdiya Aqila"/>
                                        <img className="img-modal" src={Go4} alt="Sertifikat Go Mahdiya Aqila"/>
                                       
                                   </div>
                                </Modal>
                </div>

            </section>
            <section className="footer">
            </section>
        </div>
    )
}
import React from "react"
import '../pages.css'
import Modal from 'react-modal'
import cs1 from '../img/CaseStudy/2.png'
import cs3 from '../img/CaseStudy/3.png'
import cs4 from '../img/CaseStudy/4.png'
import cs5 from '../img/CaseStudy/5.png'
import cs6 from '../img/CaseStudy/6.png'
import cs7 from '../img/CaseStudy/7.png'
import cs8 from '../img/CaseStudy/8.png'
import cs9 from '../img/CaseStudy/9.png'
import cs10 from '../img/CaseStudy/10.png'



Modal.setAppElement('#root')
export default function CaseStudySatu(){

    return(
        <div >
            <a href="/casestudy">
                <div className=' case-times'>
                    <i className=' icon-times fas fa-times'></i> 
                </div>
            </a>
            <h2 className="center f-45 ui-title color-purple" >ITION : Website kumpulan lomba IT</h2>
            <section>
                <img className="img-sertif-modal" src={cs1} alt="UI UX Case Study Mahdiya Aqila"/>
             
                <img className="img-sertif-modal" src={cs3} alt="UI UX Case Study Mahdiya Aqila"/>
                <img className="img-sertif-modal" src={cs4} alt="UI UX Case Study Mahdiya Aqila"/>
                <img className="img-sertif-modal" src={cs5} alt="UI UX Case Study Mahdiya Aqila"/>
                <img className="img-sertif-modal" src={cs6} alt="UI UX Case Study Mahdiya Aqila"/>
                <img className="img-sertif-modal" src={cs7} alt="UI UX Case Study Mahdiya Aqila"/>
                <img className="img-sertif-modal" src={cs8} alt="UI UX Case Study Mahdiya Aqila"/>
                <img className="img-sertif-modal" src={cs9} alt="UI UX Case Study Mahdiya Aqila"/>
                <img className="img-sertif-modal" src={cs10} alt="UI UX Case Study Mahdiya Aqila"/>

                
            </section>

            <section className="footer">
            </section>
        </div>
    )
}
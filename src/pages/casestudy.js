import React from "react"
import './pages.css'
import Tilt from 'react-vanilla-tilt'
import Modal from 'react-modal'


Modal.setAppElement('#root')
export default function CaseStudy (){
    return(
        <div>
        <h2 className="center f-45 c-white ui-title">Case Study</h2>
        <section className="small-card">
            <a href="/casestudy/casestudysatu">
                <Tilt>
                    <div className="small-card-1 bgition"></div>
                    <br/>
                    <br/>
                    <h5>Case Study ITION : Website Kumpulan Lomba Project Mata Kuliah RPL/WPPL</h5>
                </Tilt>
            </a>
            <a href="/casestudy/casestudydua">
                <Tilt>
                    <div className="small-card-1 bglaku"></div>
                    <br/>
                    <br/>
                    <h5>Case Study Laku : Aplikasi Mobile Laporan Keuangan UMKM </h5>
                </Tilt>
            </a>
        </section>
        <section className="footer">
        </section>
    </div>
    );
    
}

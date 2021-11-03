import React from "react"
import '../pages.css'
import Modal from 'react-modal'
import Dtp from '../img/CaseStudy/dtp.png'
import persona from '../img/CaseStudy/userpersona.png'
import Hasil from '../img/CaseStudy/new.PNG'
import Comp from '../img/CaseStudy/Comp.png'
import Stock from '../img/CaseStudy/Stok.png'
import Pengingat from '../img/CaseStudy/pengingat.png'
import Transaksi from '../img/CaseStudy/Transaksi.png'
import First from '../img/CaseStudy/First.png'
import Wireframe from '../img/CaseStudy/wireframe.png'
import OnBoarding from '../img/CaseStudy/Onboarding.png'
import Pengingatmock from '../img/CaseStudy/pengingatmock.png'
import Transaksimock from '../img/CaseStudy/Transaksimock.png'
import Produkmock from '../img/CaseStudy/Produk.png'

import step1 from '../img/CaseStudy/step1.PNG'
import step2 from '../img/CaseStudy/step2.PNG'
import step3 from '../img/CaseStudy/step3.PNG'
import step4 from '../img/CaseStudy/step4.PNG'
import step5 from '../img/CaseStudy/step5.PNG'



Modal.setAppElement('#root')
export default function CaseStudyDua(){

    return(
        <div>
        <a href="/casestudy">
            <div className=' case-times'>
                <i className=' icon-times fas fa-times'></i> 
            </div>
        </a>
        <h2 className="center f-45 ui-title  color-purple" >Laku : Aplikasi Mobile Laporan Keuangan UMKM</h2>
        <section className="isi  color-purple">
        <br/>
        <br/>
        <h4 className="f-22">Nama Aplikasi : Laku</h4>
        <h4  className="f-22">Role saya : UX Researcher dan UI Designer</h4>
        <br/>
        <p>Menggunakan framework design thinking dalam penyelesaian masalahnya</p>
        <img className="img-sertif-modal img-bg img-90" src={Dtp} alt="UI UX Case Study Mahdiya Aqila"/>
        <br/>
        <h3  className="f-24">Empathize</h3>
        <p>Target user = pelaku UMKM dengan demografi rentan usia 18-24 tahun, pengguna android, dan terbiasa menggunakan aplikasi online. 
            Saya memiliki asumsi bahwa para pelaku UMKM kesusahan dalam melakukan pencatatan keuangannya dan sering terlupa</p>
        <br/>
        <h4 className="f-22">User Research</h4>
        <p>Saya melakukan survei untuk memvalidasi asumsi saya dengan menyebarkan kuisioner melalui gform, Berikut adalah hasilnya</p>
        <img className="img-sertif-modal img-bg img-90" src={Hasil} alt="UI UX Case Study Mahdiya Aqila"/>
        <br/>
        <ol>
            <li>Pelaku UMKM sebagian besar merasakan masalah dalam memanajemen keuangan atau pembukuan, dengan detail masalah sebagai berikut :</li>
                <ul>
                    <li>Banyak pengeluaran dan pemasukan yang tidak tercatat karena lupa</li>
                    <li>Kolom pencatatan tidak rapi karena dilakukan secara manual</li>
                    <li>Sering terjadi ketidakcocokan antara nota dengan data yang sudah dicatat</li>
                </ul>
                <br/>
            <li>Tiga user mengelola pembukuan dengan dua sampai tiga orang anggota dan tiga user mengelola pembukuan secara mandiri</li>
            <br/>
            <li>Aplikasi yang baik menurut pengguna ialah :</li>
            <ul>
                    <li>Aplikasi yang tidak banyak pilihan</li>
                    <li>Tidak ribet</li>
                    <li>Otomatis akumulasi perhitungan </li>
                </ul>
        </ol>
        <br/>
        <p classname="f-22" style={{textAlign:'center',fontWeight:'bolder'}}>Hasil riset tersebut membuktikan bahwa asumsi saya benar.</p>
        <br/>
        <h4 className="f-22">User Persona</h4>
        <p>sesuai hasil riset diatas, maka bisa didapatkan user persona sebagai berikut :</p>
        <img className="img-sertif-modal img-bg img-90" src={persona} alt="UI UX Case Study Mahdiya Aqila"/>
        <br/>

        <h3 className="f-24">Define</h3>
        <h4 className="f-22">Problem :  </h4>
            <ol>
                    <li>Banyak pengeluaran dan pemasukan yang tidak tercatat karena lupa</li>
                    <li>Kolom pencatatan tidak rapi karena dilakukan secara manual</li>
                    <li>Sering terjadi ketidakcocokan antara nota dengan data yang sudah dicatat</li>
            </ol>

       
        <br/>
        <p>Solusi : pembuatan aplikasi pengelola keuangan UMKM dengan fitur reminder agar tidak lupa mencatat serta pegoprasian otomatis nominal keuangan</p>
        <br/>
        <br/>
        <h3 className="f-24">Ideate</h3>
        <p>Fase ideate saya mulai dengan melakukan competitve analysis dengan produk serupa untuk mendapatkan insight</p>
        <br/> <h4 className="f-22">Competitive Analysis</h4>
        <img className="img-sertif-modal img-bg img-90" src={Comp} alt="UI UX Case Study Mahdiya Aqila"/> <br/>
        <p>Dari hasil analisa tersebut, kami dapat menentukan secara mendetail bagaimana kami harus mendesign aplikasi “LAKU”.</p>
        <ol>
            <br/> <li>Untuk memanajemen keuangan bisa dilakukan dengan memberikan fitur data pemasukan, data pengeluaran, data keuntungan, data kerugian, transaksi penjualan dan pengeluaran, serta pengelola stok produk.</li>
            <br/> <li>Membuat fitur pengingat berupa notifikasi pengguna tidak lupa untuk melakukan pembukuan.</li>
            <br/>   <li>Untuk memudahkan pengguna dalam mencapai, kami membuat fitur untuk mengatur target penjualan UMKM dalam sebulan serta terdapat grafik dan  kesimpulan dari grafik sebagai acuan pelaku UMKM untuk memaksimalkan penghasilan.</li>
            <br/> <li>Mengatur kolom dengan rapi dan memberi warna berbeda antara pemasukan dan pengeluaran. Selain itu juga diberikan ringkasan transaksi di halaman beranda dan memperlihatkan keuntungan penjualan. </li>
        </ol>

        Setelah menemukan beberapa fitur yang harus ada di aplkasi, berikut adalah user flow aplikasi Laku
        <br/>
        <br/>
        
        <h4 className="f-22">User Flow</h4>
        <p><b>Registrasi User Baru</b></p>
        <img className="img-sertif-modal img-bg img-90" src={First} alt="UI UX Case Study Mahdiya Aqila"/>
        <br/>
        <p><b>Menambahkan Stock Produk</b></p>
        <img className="img-sertif-modal img-bg img-90" src={Stock} alt="UI UX Case Study Mahdiya Aqila"/>
        <br/>
        <p><b>Menambahkan Transaksi</b></p>
        <img className="img-sertif-modal img-bg img-90" src={Transaksi} alt="UI UX Case Study Mahdiya Aqila"/>
        <br/>
        <p><b>Mengatur pengingat</b></p>
        <img className="img-sertif-modal img-bg img-90" src={Pengingat} alt="UI UX Case Study Mahdiya Aqila"/>
        <br/>

        <h3 className="f-24">Prototype</h3>
       <p> Di tahap ini saya menerjemahkan solusi menjadi sebuah visual yang bisa ditesting </p> <br/>

        <h4 className="f-22">Wireframe</h4>
        <br/>
        <img className="img-sertif-modal img-bg" src={Wireframe} alt="UI UX Case Study Mahdiya Aqila"/><br/>
        <h4 className="f-22">Mockup</h4>
        <p><b>OnBoarding</b></p>
        <img className="img-sertif-modal img-bg" src={OnBoarding} alt="UI UX Case Study Mahdiya Aqila"/><br/>
        <p><b>Transaksi</b></p>

        <img className="img-sertif-modal img-bg" src={Transaksimock} alt="UI UX Case Study Mahdiya Aqila"/><br/>
        <p><b>Produk</b></p>

        <img className="img-sertif-modal img-bg" src={Produkmock} alt="UI UX Case Study Mahdiya Aqila"/><br/>
        
        <p><b>Pengingat</b></p>
      
        <img className="img-sertif-modal img-bg" src={Pengingatmock} alt="UI UX Case Study Mahdiya Aqila"/><br/>

        <h3 className="f-24">Testing</h3>
        <p>Saya melakukan pengujian kepada tiga orang calon pengguna aplikasi LAKU 
            dengan menggunakan metode usability testing untuk mendapatkan feedback 
            melalui prototype yang sudah kami buat di Figma dan mengisi google formulir. 
            Berikut adalah hasil dari usability testing</p>
            <br/>
            <h4 className="f-22">Step 1 : Proses login </h4>
            <img className="img-sertif-modal  img-med img-bg" src={step1} alt="UI UX Case Study Mahdiya Aqila"/><br/>
            <p>2 dari 3 user mengatakan proses login sudah mudah dilakukan dan satu user mengatakan tidak terlalu mudah, tanggapan :</p>
            <p>a) Satu user beranggapan bahwa alurnya sudah bisa dipahami</p>
            <p>b) Satu user beranggapan bahwa jarak antar kolom dan tulisan belum konsisten</p>
            <p>c) Satu user mengatakan tampilan simple dan mudah dipahami serta sudah bagus ada visualisasi ketercapaian target penjualan, tapi lebih baik untuk penghitungan ketercapaiannya 
                ditampilkan dalam bentuk persentase dari total yang masuk</p>
                <br/> <br/>
                <h4 className="f-22">Step 2 : Menambah transaksi penjualan baru </h4>
            <img className="img-sertif-modal  img-med img-bg" src={step2} alt="UI UX Case Study Mahdiya Aqila"/><br/>
            <p>2 dari 3 user mengatakan proses menambah transaksi penjualan baru mudah dilakukan dan satu user mengatakan tidak terlalu mudah,tanggapan :
            </p>
            <p>a) Satu user menyarankan untuk mempertebal style font pada button “tambah transaksi” dan menyarankan ditambahkan kolom detail nama barang
            </p>
            <p>b) Satu user mengatakan button sudah baik dan simple, tetapi menyarankan untuk memberikan total harga produk terjual dan sub total, untuk informasi tambahan lebih baik ditambahkan penggunaan diskon atau biaya ongkos kirim, sedangkan didalam rincian transaksi lebih baik terdapat sub total perhari agar pelaku UMKM bisa mengetahui pengeluaran perharinya.
            </p>
            <br/> <br/>
            <h4 className="f-22"> Step 3 : Proses menambah transaksi pengeluaran </h4>
            <img className="img-sertif-modal  img-med img-bg" src={step3} alt="UI UX Case Study Mahdiya Aqila"/><br/>
            <p>semua user mengatakan proses menambah transaksi pengeluaran sudah mudah,
tanggapan :

            </p>
            <p> semua user mengatakan tampilan sudah baik dan mudah dipahami</p>
            <br/> <br/>
            <h4 className="f-22"> Step 4 : Proses menambahkan produk</h4>
            <img className="img-sertif-modal img-med img-bg" src={step4} alt="UI UX Case Study Mahdiya Aqila"/><br/>
            <p>2 dari 3 user mengatakan proses mudah dan 1 user mengatakan susah, tanggapan :</p>
            <p>a)    Dua user menyarankan penambahan kolom variasi produk untuk menambahkan variasi seperti ukuran atau warna</p>
            <p>b)    Satu user mengatakan isi form sudah sesuai</p>
            <br/> <br/>
            <h4 className="f-22"> Step 5 : Proses mendaftarkan akun baru</h4>
            <img className="img-sertif-modal  img-med img-bg" src={step5} alt="UI UX Case Study Mahdiya Aqila"/><br/>
            <p>2 dari 3 user mengatakan proses ini mudah dan 1 user mengatakan tidak terlalu mudah.</p>
            <p>semua user mengatakan tampilan sudah bagus, mudah dipahami, serta baik karena menggunakan verifikasi nomor telepon</p>
            <br/>
        <h4 className="f-22"> Saran</h4>
        <p>Setelah melakukan proses pendefinisian masalah hingga menguji solusi berupa user interface aplikasi LAKU, kami mendapatkan beberapa saran dari user untuk pengembangan aplikasi kedepannya, yakni :</p><br/>
        <p>1). Beberapa pengguna sudah merasa terbantu dengan adanya aplikasi ini. Akan tetapi, akan lebih baik jika menambahkan keterangan sub total pada setiap transaksi pengeluaran dan penjualan agar lebih mudah dalam mengevaluasi perkembangan usaha. Oleh karena itu, kami akan menambahkan keterangan sub total pada setiap halaman transaksi.</p><br/>
        <p>2). Beberapa pengguna terbantu dengan adanya fitur stok produk. Akan tetapi karena produk dapat bervariasi, user menyarankan untuk menambahkan kolom variasi pada form tambah produk agar stok setiap varian lebih rinci.</p><br/>
        <p>3). Beberapa pengguna terbantu dengan adanya visualisasi ketercapaian target penjualan. Akan tetapi, user lebih menyukai target penjualan yang ditampilkan dalam bentuk persentase sehingga kami memutuskan untuk mengubah tampilan dashboard pada bagian target penjualan menjadi persentase. </p><br/>


        </section>

        <section className="footer">
        </section>
    </div>
    )
}
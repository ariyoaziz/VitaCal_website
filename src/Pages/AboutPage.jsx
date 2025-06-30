// src/pages/AboutPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaHandshake, FaHeart, FaLightbulb, FaCheckCircle, FaUsers, FaGlobe, FaFlask, FaMobileAlt, FaDatabase, FaCodeBranch, FaCalculator, FaChartLine, FaGraduationCap, FaCode, FaLaptop, FaUserTie } from 'react-icons/fa'; // Ikon

function AboutPage() {
    return (
        <div className="bg-screen py-12 px-4 sm:px-6 lg:px-8 font-poppins">
            {/* Hero Section About */}
            <section className="container mx-auto py-16 md:py-24 mb-16 flex flex-col items-center text-center animate-fade-in relative overflow-hidden">
                {/* Dekorasi Latar Belakang Halus - Gunakan varian primary saja */}
                <div className="absolute inset-0 bg-gradient-to-tr from-lightPrimary/30 to-primary/10 rounded-full blur-3xl opacity-60 z-0 animate-pulse-slow"></div> {/* from-lightPrimary/20 to-primary/10 */}

                <h1 className="text-5xl md:text-6xl font-extrabold text-primary mb-6 leading-tight drop-shadow-lg z-10">
                    <span className="bg-gradient-to-r from-primary to-darkPrimary bg-clip-text text-fill-transparent">Proyek Utama</span> Kami
                </h1>
                <p className="text-xl md:text-2xl text-darkGrey max-w-3xl mx-auto mb-8 leading-relaxed opacity-90 z-10">
                    Mengembangkan solusi pemantau asupan kalori berbasis Android dengan akurasi dan teknologi terkini.
                </p>
                <Link
                    to="/contact"
                    className="inline-block bg-primary text-white font-bold text-xl px-10 py-4 rounded-full shadow-md hover:bg-darkPrimary transition-all duration-300 ease-in-out transform hover:-translate-y-1 group z-10" // Tombol tetap primary
                >
                    Hubungi Kami
                    <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
                <div className="mt-12 md:mt-20 z-0 animate-fade-in-up delay-300">
                    <img src="/hero.png" alt="Project Overview Illustration" className="w-full max-w-2xl mx-auto opacity-90" />
                </div>
            </section>

            {/* Bagian Latar Belakang Masalah & Solusi Aplikasi */}
            <section className="container mx-auto py-12 mb-16 bg-white rounded-xl shadow-2xl p-8 md:p-12 animate-fade-in-up border-t-8 border-primary relative overflow-hidden">
                <FaGraduationCap className="absolute top-4 right-4 text-primary/10 text-9xl opacity-70 rotate-12" />
                <h2 className="text-4xl font-bold text-darkGrey mb-8 text-center bg-gradient-to-r from-primary to-darkPrimary bg-clip-text text-fill-transparent">
                    Latar Belakang & Tujuan Proyek
                </h2>
                <div className="text-lg text-mediumGrey leading-relaxed space-y-6">
                    <p>
                        Ketidakseimbangan pola konsumsi makanan menjadi salah satu penyebab utama berbagai masalah kesehatan, seperti obesitas, malnutrisi, dan gangguan metabolik. Hal ini sering kali disebabkan oleh kurangnya pemahaman individu terhadap kebutuhan energi harian, sehingga asupan kalori menjadi tidak terkontrol. Perhitungan kebutuhan energi secara manual juga cenderung tidak akurat dan sulit diterapkan secara konsisten.
                    </p>
                    <p className="text-darkGrey font-semibold">
                        Oleh karena itu, penelitian ini bertujuan untuk mengembangkan aplikasi pemantau asupan kalori berbasis Android yang mengimplementasikan **algoritma Mifflin-St Jeor** untuk menghitung kebutuhan energi harian berdasarkan data pengguna, seperti usia, jenis kelamin, tinggi badan, dan berat badan.
                    </p>
                    <p className="text-darkGrey font-semibold">
                        Selain itu, indikator **Body Mass Index (BMI)** digunakan untuk menilai status berat badan, dan **Total Daily Energy Expenditure (TDEE)** digunakan untuk menyesuaikan rekomendasi kalori berdasarkan tingkat aktivitas fisik pengguna.
                    </p>
                    <div className="flex flex-col md:flex-row gap-6 mt-8">
                        <div className="md:w-1/2 p-6 rounded-lg bg-lightPrimary shadow-md border-b-4 border-primary animate-fade-in-left delay-400"> {/* bg-lightPrimary, border-b-4 primary */}
                            <h3 className="text-2xl font-semibold text-primary mb-3"><FaCalculator className="inline mr-2" />Algoritma Mifflin-St Jeor</h3>
                            <p className="text-darkGrey">Metode perhitungan BMR yang terbukti akurat, menjadi inti rekomendasi kalori personal aplikasi.</p>
                        </div>
                        <div className="md:w-1/2 p-6 rounded-lg bg-lightPrimary shadow-md border-b-4 border-primary animate-fade-in-right delay-500"> {/* bg-lightPrimary, border-b-4 primary */}
                            <h3 className="text-2xl font-semibold text-primary mb-3"><FaChartLine className="inline mr-2" />BMI & TDEE Integration</h3>
                            <p className="text-darkGrey">Nilai BMI untuk status berat badan dan TDEE untuk rekomendasi kalori yang disesuaikan tingkat aktivitas.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bagian Metodologi & Teknologi */}
            <section className="container mx-auto py-12 mb-16 text-center">
                <h2 className="text-4xl font-bold text-darkGrey mb-12 bg-gradient-to-r from-primary to-darkPrimary bg-clip-text text-fill-transparent">
                    Metodologi & Teknologi
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card: Algoritma Mifflin-St Jeor */}
                    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 animate-fade-in delay-100 group border-b-4 border-primary">
                        <div className="text-primary text-6xl mb-4 mx-auto w-fit group-hover:scale-110 transition-transform duration-300">
                            <FaCalculator />
                        </div>
                        <h3 className="text-2xl font-semibold text-darkGrey mb-3">Algoritma Mifflin-St Jeor</h3>
                        <p className="text-mediumGrey text-base">
                            Metode perhitungan BMR yang terbukti akurat, menjadi inti rekomendasi kalori personal aplikasi.
                        </p>
                    </div>
                    {/* Card: BMI & TDEE */}
                    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 animate-fade-in delay-200 group border-b-4 border-primary"> {/* border-b-4 primary */}
                        <div className="text-primary text-6xl mb-4 mx-auto w-fit group-hover:scale-110 transition-transform duration-300">
                            <FaChartLine />
                        </div>
                        <h3 className="text-2xl font-semibold text-darkGrey mb-3">BMI & TDEE Integrasi</h3>
                        <p className="text-mediumGrey text-base">
                            Nilai BMI untuk status berat badan dan TDEE untuk rekomendasi kalori yang disesuaikan tingkat aktivitas.
                        </p>
                    </div>
                    {/* Card: Flutter (Frontend) */}
                    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 animate-fade-in delay-300 group border-b-4 border-primary"> {/* border-b-4 primary */}
                        <div className="text-primary text-6xl mb-4 mx-auto w-fit group-hover:scale-110 transition-transform duration-300">
                            <FaMobileAlt />
                        </div>
                        <h3 className="text-2xl font-semibold text-darkGrey mb-3">Antarmuka Flutter</h3>
                        <p className="text-mediumGrey text-base">
                            Aplikasi dikembangkan menggunakan Flutter untuk antarmuka pengguna yang responsif dan indah di Android.
                        </p>
                    </div>
                    {/* Card: Flask (Backend) */}
                    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 animate-fade-in delay-400 group border-b-4 border-primary"> {/* border-b-4 primary */}
                        <div className="text-primary text-6xl mb-4 mx-auto w-fit group-hover:scale-110 transition-transform duration-300">
                            <FaFlask />
                        </div>
                        <h3 className="text-2xl font-semibold text-darkGrey mb-3">Backend Flask</h3>
                        <p className="text-mediumGrey text-base">
                            Sistem backend dibangun dengan Flask untuk mengelola logika aplikasi dan interaksi database.
                        </p>
                    </div>
                    {/* Card: RDBMS (Database) */}
                    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 animate-fade-in delay-500 group border-b-4 border-primary"> {/* border-b-4 primary */}
                        <div className="text-primary text-6xl mb-4 mx-auto w-fit group-hover:scale-110 transition-transform duration-300">
                            <FaDatabase />
                        </div>
                        <h3 className="text-2xl font-semibold text-darkGrey mb-3">Basis Data Relasional</h3>
                        <p className="text-mediumGrey text-base">
                            Menggunakan RDBMS untuk penyimpanan data yang terstruktur dan efisien dalam pemantauan nutrisi.
                        </p>
                    </div>
                    {/* Card: API Integration */}
                    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 animate-fade-in delay-600 group border-b-4 border-primary"> {/* border-b-4 primary */}
                        <div className="text-primary text-6xl mb-4 mx-auto w-fit group-hover:scale-110 transition-transform duration-300">
                            <FaCodeBranch />
                        </div>
                        <h3 className="text-2xl font-semibold text-darkGrey mb-3">Integrasi API Nutrisi</h3>
                        <p className="text-mediumGrey text-base">
                            Terintegrasi dengan API untuk menyediakan informasi nilai gizi makanan secara otomatis dan akurat.
                        </p>
                    </div>
                </div>
            </section>

            {/* Bagian Hasil & Manfaat */}
            <section className="container mx-auto py-12 mb-16 bg-white rounded-xl shadow-2xl p-8 md:p-12 animate-fade-in-up border-b-8 border-primary relative overflow-hidden"> {/* border-b-8 primary */}
                <FaCode className="absolute bottom-4 left-4 text-primary/10 text-9xl opacity-70 rotate-6" /> {/* Ikon FaCode primary/10 */}
                <h2 className="text-4xl font-bold text-darkGrey mb-8 text-center bg-gradient-to-r from-primary to-darkPrimary bg-clip-text text-fill-transparent">
                    Hasil & Dampak Aplikasi
                </h2>
                <div className="text-lg text-mediumGrey leading-relaxed space-y-6">
                    <p>
                        Hasil penelitian menunjukkan bahwa aplikasi mampu menghitung kebutuhan energi harian dengan akurasi yang baik serta memberikan rekomendasi asupan kalori yang disesuaikan secara individu.
                    </p>
                    <p>
                        Aplikasi ini juga memudahkan pengguna dalam memantau konsumsi harian dan mencapai target kesehatan seperti menurunkan, mempertahankan, atau meningkatkan berat badan. Implementasi algoritma Mifflin-St Jeor dalam sistem ini diharapkan dapat menjadi solusi efektif untuk mendukung gaya hidup sehat yang berbasis data dan teknologi.
                    </p>
                    <div className="flex flex-wrap justify-center mt-8 gap-8">
                        <div className="flex flex-col items-center animate-pop-in text-primary border-b-4 border-primary pb-2 px-4 rounded-md"> {/* text-primary, border-b-4 primary */}
                            <FaCheckCircle className="text-5xl" />
                            <span className="text-base font-semibold mt-2 text-darkGrey">Akurasi Baik</span>
                        </div>
                        <div className="flex flex-col items-center animate-pop-in animation-delay-200 text-primary border-b-4 border-primary pb-2 px-4 rounded-md"> {/* text-primary, border-b-4 primary */}
                            <FaChartLine className="text-5xl" />
                            <span className="text-base font-semibold mt-2 text-darkGrey">Pemantauan Mudah</span>
                        </div>
                        <div className="flex flex-col items-center animate-pop-in animation-delay-400 text-primary border-b-4 border-primary pb-2 px-4 rounded-md"> {/* text-primary, border-b-4 primary */}
                            <FaHeart className="text-5xl" />
                            <span className="text-base font-semibold mt-2 text-darkGrey">Gaya Hidup Sehat</span>
                        </div>
                        <div className="flex flex-col items-center animate-pop-in animation-delay-600 text-primary border-b-4 border-primary pb-2 px-4 rounded-md"> {/* text-primary, border-b-4 primary */}
                            <FaLaptop className="text-5xl" />
                            <span className="text-base font-semibold mt-2 text-darkGrey">Berbasis Teknologi</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bagian Tentang Pengembang */}
            <section className="container mx-auto py-12 mb-16 text-center">
                <h2 className="text-4xl font-bold text-darkGrey mb-12 bg-gradient-to-r from-primary to-darkPrimary bg-clip-text text-fill-transparent">
                    Tim & Pembimbing Proyek
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Kartu Dosen Pembimbing */}
                    <div className="bg-white p-8 rounded-lg shadow-lg animate-fade-in-up delay-100 transform hover:scale-105 transition-transform duration-300 max-w-sm mx-auto border-4 border-primary"> {/* border-4 primary */}
                        <FaUserTie className="w-24 h-24 mx-auto mb-4 text-primary" /> {/* text-primary */}
                        <h3 className="text-xl font-semibold text-darkGrey mb-1">Joko Aryanto, S.Kom., M.Kom</h3>
                        <p className="text-primary text-sm mb-2">Dosen Pembimbing</p>
                        <p className="text-mediumGrey text-sm leading-tight italic">
                            "Dedikasi dalam membimbing dan mengarahkan penelitian ini menuju kesuksesan."
                        </p>
                    </div>
                    {/* Kartu Pengembang (Ariyo Aziz Pratama) */}
                    <div className="bg-white p-8 rounded-lg shadow-lg animate-fade-in-up delay-200 transform hover:scale-105 transition-transform duration-300 max-w-sm mx-auto border-4 border-primary"> {/* border-4 primary */}
                        <img src="/hero.png" alt="Ariyo Aziz Pratama" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-primary group-hover:border-primary transition-colors duration-300" /> {/* group-hover:border-primary */}
                        <h3 className="text-xl font-semibold text-darkGrey mb-1">Ariyo Aziz Pratama</h3>
                        <p className="text-primary text-sm mb-2">5220411184</p>
                        <p className="text-mediumGrey text-sm leading-tight">
                            Program Studi Informatika, Fakultas Sains & Teknologi<br />
                            Universitas Teknologi Yogyakarta<br />
                            Yogyakarta, 2025
                        </p>
                    </div>
                </div>
            </section>

            {/* Bagian Call to Action Akhir (Tidak berubah, sudah konsisten) */}
            <section className="container mx-auto text-center py-16 bg-gradient-green-vitacal rounded-xl shadow-lg text-white animate-fade-in delay-700">
                <h2 className="text-4xl font-extrabold mb-6 drop-shadow-md">Siap Memulai Perjalanan Kesehatan Anda?</h2>
                <p className="text-xl max-w-2xl mx-auto mb-8 opacity-90">
                    Mari hitung kebutuhan kalori Anda dan mulailah membangun kebiasaan makan yang lebih baik bersama VitaCal!
                </p>
                <Link
                    to="/calculator"
                    className="inline-block bg-white text-primary font-bold text-xl px-10 py-4 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 ease-in-out transform hover:-translate-y-1 group"
                >
                    Hitung Kalori Saya Sekarang!
                    <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
            </section>
        </div>
    );
}

export default AboutPage;
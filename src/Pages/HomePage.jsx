// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
// PASTIKAN SEMUA IKON YANG DIGUNAKAN DI BAWAH SUDAH DIIMPOR DI SINI:
import {
    FaCalculator,
    FaChartLine,
    FaAppleAlt,
    FaUtensils, // <--- PASTIKAN INI ADA UNTUK HOMEPAGE!
    FaUserPlus,
    FaLightbulb,
    FaSearch,
    FaBrain,
    FaRegChartBar,
    FaWeight,
    FaRunning,
    FaDumbbell,
    FaBalanceScale, // Ikon baru untuk "Pola Makan Seimbang"
    FaLaptopCode,   // Pastikan ini juga ada
    FaCheckCircle,  // Untuk Testimoni, pastikan ada
    FaQuoteLeft     // Untuk Testimoni, pastikan ada
} from 'react-icons/fa';

function HomePage() {
    return (
        <div className="bg-screen py-12 px-4 sm:px-6 lg:px-8 font-poppins">
            {/* Hero Section */}
            <section className="container mx-auto py-16 md:py-24 mb-16 flex flex-col md:flex-row items-center justify-center gap-12 text-center md:text-left animate-fade-in relative overflow-hidden">
                <div className="md:w-1/2 order-2 md:order-1 z-10 animate-fade-in-down">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-primary mb-6 leading-tight drop-shadow-lg">
                        Monitor Kalori Akurat <br className="hidden md:block" /> dengan <span className="bg-gradient-to-r from-primary to-darkPrimary bg-clip-text text-fill-transparent">Mifflin-St Jeor</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-darkGrey max-w-3xl mx-auto mb-8 leading-relaxed opacity-90 z-10">
                        Aplikasi pemantau asupan kalori berbasis Android untuk mengelola pola makan dan mencapai tujuan kesehatan Anda.
                    </p>
                    <Link
                        to="/calculator"
                        className="inline-block bg-primary text-white font-bold text-xl px-10 py-4 rounded-full shadow-md hover:bg-darkPrimary transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg group"
                    >
                        Mulai Hitung Kalori Sekarang!
                        <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </Link>
                </div>
                <div className="md:w-1/2 flex justify-center order-1 md:order-2 z-10 animate-zoom-in">
                    <img src="/hero-illustration.svg" alt="Health and Nutrition Illustration" className="w-full max-w-lg" />
                </div>
            </section>

            {/* Bagian Masalah & Solusi */}
            <section className="container mx-auto py-12 mb-16">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2 animate-fade-in-left">
                        <img src="/problem-solution-illustration.svg" alt="Problem and Solution Illustration" className="w-full max-w-md rounded-lg shadow-lg" />
                    </div>
                    <div className="md:w-1/2 animate-fade-in-right">
                        <h2 className="text-4xl font-bold text-darkGrey mb-4 bg-gradient-to-r from-primary to-darkPrimary bg-clip-text text-fill-transparent">
                            Mengapa Penting Memantau Kalori?
                        </h2>
                        <p className="text-lg text-mediumGrey leading-relaxed mb-4">
                            Ketidakseimbangan pola konsumsi makanan adalah penyebab utama berbagai masalah kesehatan seperti obesitas, malnutrisi, dan gangguan metabolik. Kurangnya pemahaman akan kebutuhan energi harian sering membuat asupan kalori tidak terkontrol.
                        </p>
                        <p className="text-lg text-mediumGrey leading-relaxed mb-6">
                            Aplikasi VitaCal hadir sebagai solusi. Kami membantu Anda memantau dan mengelola asupan kalori secara efektif dengan mengimplementasikan algoritma terkemuka.
                        </p>
                        <Link
                            to="/about"
                            className="inline-block text-primary font-semibold border-2 border-primary px-6 py-3 rounded-full hover:bg-primary hover:text-white transition-all duration-300 group"
                        >
                            Pahami Metodologi Kami
                            <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Bagian Gunakan Aplikasi Untuk... */}
            <section className="container mx-auto py-12 mb-16 text-center">
                <h2 className="text-4xl font-bold text-darkGrey mb-12 bg-gradient-to-r from-primary to-darkPrimary bg-clip-text text-fill-transparent">
                    Gunakan VitaCal untuk:
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Kartu Tujuan 1 */}
                    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 animate-fade-in delay-100 group border-b-4 border-primary">
                        <div className="text-primary text-6xl mb-4 mx-auto w-fit group-hover:scale-110 transition-transform duration-300">
                            <FaDumbbell />
                        </div>
                        <h3 className="text-2xl font-semibold text-darkGrey mb-3">Manajemen Berat Badan</h3>
                        <p className="text-mediumGrey text-base">
                            Baik Anda ingin menurunkan, mempertahankan, atau meningkatkan berat badan, VitaCal akan memandu Anda.
                        </p>
                    </div>
                    {/* Kartu Tujuan 2 */}
                    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 animate-fade-in delay-200 group border-b-4 border-primary">
                        <div className="text-primary text-6xl mb-4 mx-auto w-fit group-hover:scale-110 transition-transform duration-300">
                            <FaBalanceScale />
                        </div>
                        <h3 className="text-2xl font-semibold text-darkGrey mb-3">Pola Makan Seimbang</h3>
                        <p className="text-mediumGrey text-base">
                            Pahami kebutuhan makro dan mikro Anda untuk menjaga asupan nutrisi yang proporsional setiap hari.
                        </p>
                    </div>
                    {/* Kartu Tujuan 3 */}
                    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 animate-fade-in delay-300 group border-b-4 border-primary">
                        <div className="text-primary text-6xl mb-4 mx-auto w-fit group-hover:scale-110 transition-transform duration-300">
                            <FaChartLine />
                        </div>
                        <h3 className="text-2xl font-semibold text-darkGrey mb-3">Lacak Progres Kesehatan</h3>
                        <p className="text-mediumGrey text-base">
                            Pantau kemajuan Anda dengan grafik intuitif dan laporan harian, mingguan, hingga bulanan.
                        </p>
                    </div>
                </div>
            </section>

            {/* Bagian Fitur Unggulan */}
            <section className="container mx-auto py-12 mb-16">
                <h2 className="text-4xl font-bold text-center text-darkGrey mb-12 bg-gradient-to-r from-primary to-darkPrimary bg-clip-text text-fill-transparent">
                    Fitur Utama VitaCal
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Kartu Fitur 1: Mifflin-St Jeor Algorithm */}
                    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 animate-fade-in delay-100 text-center">
                        <div className="text-primary text-6xl mb-4 mx-auto w-fit group-hover:scale-110 transition-transform duration-300">
                            <FaBrain />
                        </div>
                        <h3 className="text-2xl font-semibold text-darkGrey mb-3">Algoritma Mifflin-St Jeor</h3>
                        <p className="text-mediumGrey text-base">
                            Menghitung kebutuhan energi harian (BMR) Anda secara akurat berdasarkan usia, jenis kelamin, tinggi, dan berat badan.
                        </p>
                    </div>
                    {/* Kartu Fitur 2: BMI & TDEE Calculation */}
                    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 animate-fade-in delay-200 text-center">
                        <div className="text-primary text-6xl mb-4 mx-auto w-fit group-hover:scale-110 transition-transform duration-300">
                            <FaRegChartBar />
                        </div>
                        <h3 className="text-2xl font-semibold text-darkGrey mb-3">BMI & TDEE Personal</h3>
                        <p className="text-mediumGrey text-base">
                            Mengevaluasi status berat badan Anda dengan BMI dan menyesuaikan rekomendasi kalori dengan tingkat aktivitas (TDEE).
                        </p>
                    </div>
                    {/* Kartu Fitur 3: Automated Nutrition Data (API Integration) */}
                    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 animate-fade-in delay-300 text-center">
                        <div className="text-primary text-6xl mb-4 mx-auto w-fit group-hover:scale-110 transition-transform duration-300">
                            <FaSearch />
                        </div>
                        <h3 className="text-2xl font-semibold text-darkGrey mb-3">Informasi Gizi Otomatis</h3>
                        <p className="text-mediumGrey text-base">
                            Terintegrasi dengan API untuk menyediakan data nilai gizi makanan secara otomatis dan akurat.
                        </p>
                    </div>
                    {/* Kartu Fitur 4: Daily Consumption Monitoring */}
                    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 animate-fade-in delay-400 text-center">
                        <div className="text-primary text-6xl mb-4 mx-auto w-fit group-hover:scale-110 transition-transform duration-300">
                            <FaUtensils /> {/* Ini yang causing error */}
                        </div>
                        <h3 className="text-2xl font-semibold text-darkGrey mb-3">Pemantauan Konsumsi Harian</h3>
                        <p className="text-mediumGrey text-base">
                            Mudahkan Anda melacak asupan makanan setiap hari untuk memastikan target kalori tercapai.
                        </p>
                    </div>
                    {/* Kartu Fitur 5: Health Goal Management */}
                    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 animate-fade-in delay-500 text-center">
                        <div className="text-primary text-6xl mb-4 mx-auto w-fit group-hover:scale-110 transition-transform duration-300">
                            <FaChartLine />
                        </div>
                        <h3 className="text-2xl font-semibold text-darkGrey mb-3">Manajemen Target Kesehatan</h3>
                        <p className="text-mediumGrey text-base">
                            Bantu Anda menurunkan, mempertahankan, atau meningkatkan berat badan dengan rekomendasi yang disesuaikan.
                        </p>
                    </div>
                    {/* Kartu Fitur 6: User-Friendly Interface */}
                    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 animate-fade-in delay-600 text-center">
                        <div className="text-primary text-6xl mb-4 mx-auto w-fit group-hover:scale-110 transition-transform duration-300">
                            <FaLaptopCode />
                        </div>
                        <h3 className="text-2xl font-semibold text-darkGrey mb-3">Antarmuka Intuitif</h3>
                        <p className="text-mediumGrey text-base">
                            Desain yang bersih dan ramah pengguna memastikan pengalaman melacak nutrisi yang mulus.
                        </p>
                    </div>
                </div>
            </section>

            {/* Bagian Testimoni */}
            <section className="container mx-auto py-12 mb-16 text-center">
                <h2 className="text-4xl font-bold text-darkGrey mb-10 bg-gradient-to-r from-primary to-darkPrimary bg-clip-text text-fill-transparent">
                    Apa Kata Pengguna Kami?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Testimoni 1 */}
                    <div className="bg-white p-8 rounded-lg shadow-lg animate-fade-in delay-700 relative border-t-4 border-primary">
                        <FaQuoteLeft className="absolute top-4 left-4 text-primary/10 text-5xl" />
                        <p className="text-xl text-mediumGrey italic mt-6 mb-4">
                            "VitaCal benar-benar mengubah cara saya melihat nutrisi. Mudah digunakan dan sangat membantu mencapai target saya!"
                        </p>
                        <p className="font-semibold text-darkPrimary">- Siti, Jakarta</p>
                    </div>
                    {/* Testimoni 2 */}
                    <div className="bg-white p-8 rounded-lg shadow-lg animate-fade-in delay-800 relative border-t-4 border-primary">
                        <FaQuoteLeft className="absolute top-4 left-4 text-primary/10 text-5xl" />
                        <p className="text-xl text-mediumGrey italic mt-6 mb-4">
                            "Fitur penghitung kalori sangat akurat dan mudah dimengerti. Saya sangat merekomendasikannya!"
                        </p>
                        <p className="font-semibold text-darkPrimary">- Budi, Surabaya</p>
                    </div>
                </div>
            </section>

            {/* Bagian Call to Action Akhir */}
            <section className="container mx-auto text-center py-16 bg-gradient-green-vitacal rounded-xl shadow-lg text-white animate-fade-in delay-900">
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

export default HomePage;
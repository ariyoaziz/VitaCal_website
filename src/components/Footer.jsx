// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaGooglePlay, FaApple } from 'react-icons/fa';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        // PASTIKAN INI MENGGUNAKAN bg-darkGrey UNTUK LATAR BELAKANG FOOTER
        <footer className="bg-darkGrey text-white py-12 shadow-inner mt-12 font-poppins">
            <div className="container mx-auto px-6 md:px-8 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-8 md:gap-x-12 pb-10 border-b border-mediumGrey mb-8">

                    {/* Kolom 1: Logo & Slogan Singkat */}
                    <div className="flex flex-col items-start">
                        <Link to="/" className="flex items-center mb-4">
                            {/* Filter invert tetap dibutuhkan jika logo Anda gelap dan ingin putih di latar belakang darkGrey */}
                            <img src="/logo.svg" alt="VitaCal Logo" className="h-12 w-auto filter brightness-0 invert" />
                        </Link>
                        <p className="text-sm text-lightGrey leading-relaxed max-w-[250px]">
                            Solusi cerdas Anda untuk hidup lebih sehat dan mengelola nutrisi dengan mudah.
                        </p>
                    </div>

                    {/* Kolom 2: Navigasi Cepat */}
                    <div>
                        {/* Judul: Gradien putih ke lightGrey (ini bagus di latar belakang gelap) */}
                        <h4 className="text-xl font-bold mb-5 bg-gradient-to-r from-white to-lightGrey bg-clip-text text-fill-transparent">
                            Navigasi
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/" className="text-white hover:text-lightGrey transition-all duration-300 ease-in-out text-base hover:translate-x-1 inline-block">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-white hover:text-lightGrey transition-all duration-300 ease-in-out text-base hover:translate-x-1 inline-block">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/calculator" className="text-white hover:text-lightGrey transition-all duration-300 ease-in-out text-base hover:translate-x-1 inline-block">
                                    Hitung Kalori
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-white hover:text-lightGrey transition-all duration-300 ease-in-out text-base hover:translate-x-1 inline-block">
                                    Kontak
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Kolom 3: Kontak & Informasi */}
                    <div>
                        <h4 className="text-xl font-bold mb-5 bg-gradient-to-r from-white to-lightGrey bg-clip-text text-fill-transparent">
                            Hubungi Kami
                        </h4>
                        <ul className="space-y-3 text-lightGrey text-base">
                            <li>Email: <a href="mailto:ariyoaziz.pratama@gmail.com" className="hover:text-white transition-colors duration-200">ariyoaziz.pratama@gmail.com</a></li>
                            <li>Telepon: <a href="tel:+6285878743545" className="hover:text-white transition-colors duration-200">+6285878743545</a></li>
                            <li>Alamat: Yogyakarta, Indonesia</li>
                        </ul>
                    </div>

                    {/* Kolom 4: Unduh Aplikasi */}
                    <div className="md:col-span-1 lg:col-span-1 flex flex-col items-center md:items-start justify-center text-center md:text-left">
                        <h4 className="text-xl font-bold mb-5 bg-gradient-to-r from-white to-lightGrey bg-clip-text text-fill-transparent">
                            Dapatkan Sekarang
                        </h4>
                        <p className="text-lightGrey text-base mb-6">
                            Unduh aplikasi VitaCal sekarang dan mulai perjalanan kesehatan Anda!
                        </p>
                        <div className="flex flex-col space-y-4">
                            <a
                                href="#"
                                className="bg-white text-primary font-bold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 text-lg"
                                target="_blank" rel="noopener noreferrer"
                            >
                                <FaGooglePlay className="inline-block mr-2 text-2xl" /> Unduh di Play Store
                            </a>
                            <a
                                href="#"
                                className="bg-white text-primary font-bold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 text-lg"
                                target="_blank" rel="noopener noreferrer"
                            >
                                <FaApple className="inline-block mr-2 text-2xl" /> Unduh di App Store
                            </a>
                        </div>
                    </div>

                </div>

                {/* Bagian Bawah Footer */}
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left pt-6 space-y-4 md:space-y-0">
                    <div className="order-2 md:order-1">
                        <p className="text-sm md:text-base mb-1 text-white">
                            &copy; {currentYear} VitaCal. All rights reserved.
                        </p>
                        <p className="text-xs md:text-sm text-lightGrey">
                            Dibuat dengan ❤️ untuk kesehatan Anda oleh Ariyo Aziz Pratama (5220411184)
                        </p>
                    </div>

                    {/* Ikon Sosial Media */}
                    <div className="flex space-x-6 order-1 md:order-2">
                        <a href="https://www.facebook.com/ariyo.aziz" target="_blank" rel="noopener noreferrer" className="text-white hover:text-lightGrey transform hover:scale-110 transition-transform duration-200">
                            <FaFacebookF className="w-7 h-7" />
                        </a>
                        <a href="https://github.com/ariyoaziz" target="_blank" rel="noopener noreferrer" className="text-white hover:text-lightGrey transform hover:scale-110 transition-transform duration-200">
                            <FaGithub className="w-7 h-7" />
                        </a>
                        <a href="https://www.instagram.com/ariyoaziz_" target="_blank" rel="noopener noreferrer" className="text-white hover:text-lightGrey transform hover:scale-110 transition-transform duration-200">
                            <FaInstagram className="w-7 h-7" />
                        </a>
                        <a href="https://www.linkedin.com/in/ariyo-aziz-pratama" target="_blank" rel="noopener noreferrer" className="text-white hover:text-lightGrey transform hover:scale-110 transition-transform duration-200">
                            <FaLinkedinIn className="w-7 h-7" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
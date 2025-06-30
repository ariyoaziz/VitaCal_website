// src/pages/ContactPage.jsx
import React, { useState } from 'react';
// Tidak perlu import Link jika hanya digunakan di CTA yang dihapus
// import { Link } from 'react-router-dom';
import { FaEnvelope, FaUser, FaCommentAlt, FaPaperPlane, FaPhone, FaMapMarkerAlt, FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'; // Import ikon yang relevan

function ContactPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [formStatus, setFormStatus] = useState(null); // 'success' | 'error' | null

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus(null); // Reset status
        // Logika pengiriman form ke backend akan diimplementasikan di sini
        // Untuk tujuan desain UI, kita simulasikan sukses/gagal
        console.log({ name, email, message });

        // Simulasi respons API
        setTimeout(() => {
            const success = Math.random() > 0.5; // 50% chance of success
            if (success) {
                setFormStatus('success');
                setName('');
                setEmail('');
                setMessage('');
            } else {
                setFormStatus('error');
            }
        }, 1000);
    };

    return (
        <div className="bg-screen py-12 px-4 sm:px-6 lg:px-8 font-poppins">
            {/* Hero Section Kontak */}
            <section className="container mx-auto py-16 md:py-24 mb-16 flex flex-col items-center text-center animate-fade-in relative overflow-hidden">
                <h1 className="text-5xl md:text-6xl font-extrabold text-primary mb-6 leading-tight drop-shadow-lg z-10">
                    <span className="bg-gradient-to-r from-primary to-darkPrimary bg-clip-text text-fill-transparent">Hubungi</span> Kami
                </h1>
                <p className="text-xl md:text-2xl text-darkGrey max-w-3xl mx-auto mb-8 leading-relaxed opacity-90 z-10">
                    Punya pertanyaan, saran, atau masukan? Jangan ragu untuk berinteraksi dengan tim kami.
                </p>
                <div className="mt-12 md:mt-20 z-0 animate-fade-in-up delay-300">
                    {/* Ilustrasi yang relevan untuk kontak/komunikasi */}
                    <img src="/contact-hero-illustration.svg" alt="Contact Us Illustration" className="w-full max-w-xl mx-auto opacity-90" />
                </div>
            </section>

            {/* Bagian Form Kontak & Info Alternatif dalam Card yang Menarik */}
            <section className="container mx-auto py-12 mb-16 bg-white rounded-xl shadow-2xl p-8 md:p-12 animate-fade-in-up border-t-8 border-primary">
                <h2 className="text-4xl font-bold text-darkGrey mb-8 text-center bg-gradient-to-r from-primary to-darkPrimary bg-clip-text text-fill-transparent">
                    Kirim Pesan Anda
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Kolom Kiri: Form Kontak */}
                    <div className="animate-fade-in-left delay-100">
                        <form onSubmit={handleSubmit} className="space-y-6 p-6 bg-screen rounded-lg shadow-md">
                            {/* Pesan Status Form */}
                            {formStatus === 'success' && (
                                <div className="p-4 bg-successGreen/10 border-l-4 border-successGreen text-successGreen rounded-lg flex items-center animate-pop-in">
                                    <FaCheckCircle className="text-2xl mr-3" />
                                    <p className="text-lg font-semibold">Pesan berhasil dikirim! Kami akan segera menghubungi Anda.</p>
                                </div>
                            )}
                            {formStatus === 'error' && (
                                <div className="p-4 bg-errorRed/10 border-l-4 border-errorRed text-errorRed rounded-lg flex items-center animate-pop-in">
                                    <FaExclamationCircle className="text-2xl mr-3" />
                                    <p className="text-lg font-semibold">Terjadi kesalahan saat mengirim pesan. Mohon coba lagi nanti.</p>
                                </div>
                            )}

                            <div>
                                <label htmlFor="name" className="block text-darkGrey text-lg font-semibold mb-2">
                                    <FaUser className="inline-block mr-2 text-primary" /> Nama Lengkap:
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full py-3 px-4 bg-white border-2 border-lightGrey rounded-lg text-darkGrey leading-tight focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary transition-all duration-200 shadow-sm"
                                    placeholder="Nama Anda"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-darkGrey text-lg font-semibold mb-2">
                                    <FaEnvelope className="inline-block mr-2 text-primary" /> Email:
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full py-3 px-4 bg-white border-2 border-lightGrey rounded-lg text-darkGrey leading-tight focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary transition-all duration-200 shadow-sm"
                                    placeholder="email@contoh.com"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-darkGrey text-lg font-semibold mb-2">
                                    <FaCommentAlt className="inline-block mr-2 text-primary" /> Pesan Anda:
                                </label>
                                <textarea
                                    id="message"
                                    rows="6"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="w-full py-3 px-4 bg-white border-2 border-lightGrey rounded-lg text-darkGrey leading-tight focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary transition-all duration-200 shadow-sm resize-y"
                                    placeholder="Tulis pesan Anda di sini..."
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="inline-block bg-primary text-white font-bold text-xl px-10 py-4 rounded-full shadow-lg hover:bg-darkPrimary transition-all duration-300 ease-in-out transform hover:-translate-y-1 group w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                            >
                                <FaPaperPlane className="inline-block mr-3 text-2xl" /> Kirim Pesan
                                <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                            </button>
                        </form>
                    </div>

                    {/* Kolom Kanan: Informasi Kontak Alternatif & Sosial Media */}
                    <div className="animate-fade-in-right delay-200 p-6 bg-lightPrimary rounded-lg shadow-md flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-bold text-primary mb-4">Informasi Kontak</h3>
                            <ul className="space-y-4 text-lg text-darkGrey">
                                <li>
                                    <FaEnvelope className="inline-block mr-3 text-primary" />
                                    <a href="mailto:ariyoaziz.pratama@gmail.com" className="hover:underline">ariyoaziz.pratama@gmail.com</a>
                                </li>
                                <li>
                                    <FaPhone className="inline-block mr-3 text-primary" />
                                    <a href="tel:+6285878743545" className="hover:underline">+62 858-7874-3545</a>
                                </li>
                                <li>
                                    <FaMapMarkerAlt className="inline-block mr-3 text-primary" />
                                    Yogyakarta, Indonesia
                                </li>
                            </ul>
                        </div>

                        <div className="mt-8 pt-6 border-t border-primary/20">
                            <h3 className="text-2xl font-bold text-primary mb-4">Ikuti Kami</h3>
                            <div className="flex space-x-6 justify-center md:justify-start">
                                <a href="https://www.facebook.com/ariyo.aziz" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-darkPrimary transform hover:scale-110 transition-transform duration-200">
                                    <FaFacebookF className="w-8 h-8" />
                                </a>
                                <a href="https://github.com/ariyoaziz" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-darkPrimary transform hover:scale-110 transition-transform duration-200">
                                    <FaGithub className="w-8 h-8" />
                                </a>
                                <a href="https://www.instagram.com/ariyoaziz_" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-darkPrimary transform hover:scale-110 transition-transform duration-200">
                                    <FaInstagram className="w-8 h-8" />
                                </a>
                                <a href="https://www.linkedin.com/in/ariyo-aziz-pratama" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-darkPrimary transform hover:scale-110 transition-transform duration-200">
                                    <FaLinkedinIn className="w-8 h-8" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* REMOVED: Bagian Call to Action Akhir */}
            {/* <section className="container mx-auto text-center py-16 bg-gradient-green-vitacal rounded-xl shadow-lg text-white animate-fade-in delay-900">
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
      </section> */}
        </div>
    );
}

export default ContactPage;
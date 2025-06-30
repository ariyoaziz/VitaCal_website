// src/components/Header.jsx
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom'; // Import NavLink

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Kelas dasar untuk item navigasi
    const baseNavLinkClasses = "text-lg font-medium transition-all duration-300 ease-in-out px-4 py-2 rounded-lg";
    const mobileNavLinkClasses = "text-white text-3xl font-bold transition-colors duration-200";

    return (
        <header className="bg-gradient-green-vitacal text-white py-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center px-6 md:px-8 lg:px-12">
                {/* Logo Kiri */}
                <Link to="/" className="flex items-center space-x-0 font-poppins z-20">
                    <img
                        src="/logo.svg"
                        alt="VitaCal Logo"
                        className="h-10 w-auto filter brightness-0 invert" // Hapus 'filter brightness-0 invert' jika logo sudah putih atau Anda tidak ingin efek ini.
                    />
                </Link>

                {/* Navigasi Tengah - Tersembunyi di mobile, ditampilkan di tablet ke atas */}
                <nav className="hidden md:flex items-center space-x-7 lg:space-x-10">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `${baseNavLinkClasses} ${isActive
                                ? "bg-darkPrimary/30 text-white" // Gaya saat aktif
                                : "hover:text-lightGrey hover:bg-darkPrimary/20" // Gaya saat hover
                            }`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `${baseNavLinkClasses} ${isActive
                                ? "bg-darkPrimary/30 text-white"
                                : "hover:text-lightGrey hover:bg-darkPrimary/20"
                            }`
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/calculator"
                        className={({ isActive }) =>
                            `${baseNavLinkClasses} ${isActive
                                ? "bg-darkPrimary/30 text-white"
                                : "hover:text-lightGrey hover:bg-darkPrimary/20"
                            }`
                        }
                    >
                        Hitung Kalori
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `${baseNavLinkClasses} ${isActive
                                ? "bg-darkPrimary/30 text-white"
                                : "hover:text-lightGrey hover:bg-darkPrimary/20"
                            }`
                        }
                    >
                        Kontak
                    </NavLink>
                </nav>

                {/* Tombol Unduh Kanan (Desktop Only) */}
                <div className="hidden md:block">
                    <a
                        href="#"
                        className="bg-white text-primary font-semibold px-6 py-2.5 rounded-full shadow-md hover:bg-gray-100 hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5"
                    >
                        Unduh Aplikasi
                    </a>
                </div>

                {/* Tombol Hamburger (Mobile Only) */}
                <div className="md:hidden z-20">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Menu Mobile - Muncul sebagai overlay saat isMenuOpen true */}
            {isMenuOpen && (
                <div className="md:hidden fixed inset-0 bg-gradient-green-vitacal z-10 flex flex-col items-center justify-center space-y-8 animate-fade-in-down">
                    <NavLink
                        to="/"
                        onClick={toggleMenu}
                        className={({ isActive }) =>
                            `${mobileNavLinkClasses} ${isActive
                                ? "text-lightGrey bg-darkPrimary/20 p-2 rounded-lg" // Gaya saat aktif di mobile
                                : "hover:text-lightGrey" // Gaya saat hover di mobile
                            }`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        onClick={toggleMenu}
                        className={({ isActive }) =>
                            `${mobileNavLinkClasses} ${isActive
                                ? "text-lightGrey bg-darkPrimary/20 p-2 rounded-lg"
                                : "hover:text-lightGrey"
                            }`
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/calculator"
                        onClick={toggleMenu}
                        className={({ isActive }) =>
                            `${mobileNavLinkClasses} ${isActive
                                ? "text-lightGrey bg-darkPrimary/20 p-2 rounded-lg"
                                : "hover:text-lightGrey"
                            }`
                        }
                    >
                        Hitung Kalori
                    </NavLink>
                    <NavLink
                        to="/contact"
                        onClick={toggleMenu}
                        className={({ isActive }) =>
                            `${mobileNavLinkClasses} ${isActive
                                ? "text-lightGrey bg-darkPrimary/20 p-2 rounded-lg"
                                : "hover:text-lightGrey"
                            }`
                        }
                    >
                        Kontak
                    </NavLink>
                    <div className="mt-8">
                        <a
                            href="#"
                            onClick={toggleMenu}
                            className="bg-white text-primary font-semibold px-8 py-3 rounded-full shadow-md hover:bg-gray-100 transition duration-200 text-xl"
                        >
                            Unduh Aplikasi
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;
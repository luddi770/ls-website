import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => setIsOpen(false);

    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === "en" ? "de" : "en";
        i18n.changeLanguage(newLang);
    }
  

    return (
        <nav className="bg-slate-900 text-white px-6 py-4 sticky top-0 z-50 shadow-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo / Title with blinking > */}
                <Link
                    to="/"
                    className="text-2xl font-bold cursor-pointer select-none flex items-center gap-1"
                    onClick={handleLinkClick}
                    aria-label="Home"
                >
                    <span
                        className="text-3xl font-extrabold animate-blink"
                        style={{ animationTimingFunction: "ease-in-out" }}
                    >
                        &gt;
                    </span>
                </Link>

                {/* Desktop menu */}
                <ul className="hidden md:flex space-x-8 font-semibold">
                    <li>
                        <Link
                            to="/projects"
                            className="hover:text-sky-400 transition-colors"
                            onClick={handleLinkClick}
                        >
                            {t("nav-projects")}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className="hover:text-sky-400 transition-colors"
                            onClick={handleLinkClick}
                        >
                            {t("nav-about-me")}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            className="hover:text-sky-400 transition-colors"
                            onClick={handleLinkClick}
                        >
                            {t("nav-contact")}
                        </Link>
                    </li>
                    <li>
                        <button
                            onClick={toggleLanguage}
                            className="hover:text-sky-400 transition-colors"
                        >
                            <img 
                                src={t("languageButton")}
                                className="w-8 h-8 rounded-full object-cover"
                                />
                        </button>
                    </li>
                </ul>

          

                {/* Mobile menu button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden focus:outline-none"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <ul className="md:hidden mt-4 space-y-4 text-center font-semibold">
                    <li>
                        <Link
                            to="/projects"
                            onClick={handleLinkClick}
                            className="block hover:text-sky-400 transition-colors"
                        >
                            {t("nav-projects")}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            onClick={handleLinkClick}
                            className="block hover:text-sky-400 transition-colors"
                        >
                            {t("nav-about-me")}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            onClick={handleLinkClick}
                            className="block hover:text-sky-400 transition-colors"
                        >
                            {t("nav-contact")}
                        </Link>
                    </li>
                </ul>
            )}
        </nav>
    );
}

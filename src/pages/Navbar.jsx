import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import myData from '../data/myData.json'


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => setIsOpen(false);

    const { t, i18n } = useTranslation();

        

    const toggleLanguage = () => {
        const newLang = i18n.language === "en" ? "de" : "en";
        i18n.changeLanguage(newLang);    
        
    }
    
    const navClass = ({ isActive }) =>
    `font-label-mono text-label-mono transition-colors duration-300 ${
        isActive
        ? "font-bold text-primary-fixed border-b-2 border-primary-fixed"
        : "text-on-surface-variant hover:text-primary-fixed"
    }`;
  

    return (
    <header
        className="sticky top-0 z-50 w-full bg-surface/60 backdrop-blur-xl border-b border-outline-variant/10"
        id="Header"
    >
        <div className="max-w-container-max mx-auto px-lg flex justify-between items-center h-16">
            {/* Logo */}
            <Link
                to="/"
                onClick={handleLinkClick}
                className="font-headline-sm text-headline-sm font-bold tracking-tighter text-on-surface"
            >
                 &lt; Ludwig &gt;
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-xl">
                <NavLink
                    to="/"
                    onClick={handleLinkClick}
                    className={navClass}
                >
                    Home
                </NavLink>

                <NavLink
                    to="/projects"
                    onClick={handleLinkClick}
                    className={navClass}
                >
                    {t("nav-projects")}
                </NavLink>

                <NavLink
                    to="/about"
                    onClick={handleLinkClick}
                    className={navClass}
                >
                    {t("nav-about-me")}
                </NavLink>

                <NavLink
                    to="/contact"
                    onClick={handleLinkClick}
                    className={navClass}
                >
                    {t("nav-contact")}
                </NavLink>
            </nav>

            {/* Right Side */}
            <div className="hidden md:flex items-center gap-md">
                {/* Language Switcher */}
                <div className="flex items-center gap-xs bg-surface-container-low border border-outline-variant/20 rounded-lg p-xs font-label-mono text-[12px] font-bold">
                    <button
                        onClick={toggleLanguage}
                        className={`px-sm py-xs rounded transition-colors duration-200 ${
                            i18n.language === "en"
                                ? "text-primary-fixed"
                                : "text-on-surface-variant hover:text-primary-fixed"
                        }`}
                    >
                        EN
                    </button>

                    <span className="text-outline-variant/40">/</span>

                    <button
                        onClick={toggleLanguage}
                        className={`px-sm py-xs rounded transition-colors duration-200 ${
                            i18n.language === "de"
                                ? "text-primary-fixed"
                                : "text-on-surface-variant hover:text-primary-fixed"
                        }`}
                    >
                        DE
                    </button>
                </div>

                {/* Download CV */}
                <a
                    href={myData.cvlink}
                    download
                    className="bg-primary-fixed text-on-primary-fixed px-md py-sm rounded-lg font-label-mono text-label-mono font-bold hover:brightness-110 active:scale-95 transition-all duration-200"
                >
                    {t("download-cv")}
                </a>
            </div>

            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden"
                aria-label="Toggle menu"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
            <div className="md:hidden border-t border-outline-variant/10 bg-surface/95 backdrop-blur-xl">
                <nav className="flex flex-col items-center py-lg gap-md font-semibold">
                    <Link
                        to="/"
                        onClick={handleLinkClick}
                        className="hover:text-primary-fixed transition-colors"
                    >
                        Home
                    </Link>

                    <Link
                        to="/projects"
                        onClick={handleLinkClick}
                        className="hover:text-primary-fixed transition-colors"
                    >
                        {t("nav-projects")}
                    </Link>

                    <Link
                        to="/about"
                        onClick={handleLinkClick}
                        className="hover:text-primary-fixed transition-colors"
                    >
                        {t("nav-about-me")}
                    </Link>

                    <Link
                        to="/contact"
                        onClick={handleLinkClick}
                        className="hover:text-primary-fixed transition-colors"
                    >
                        {t("nav-contact")}
                    </Link>

                    <button
                        onClick={toggleLanguage}
                        className="mt-sm px-md py-sm rounded-lg border border-outline-variant/20"
                    >
                        {i18n.language === "en" ? "DE" : "EN"}
                    </button>

                    <a
                        href={myData.cvlink}
                        download
                        className="bg-primary-fixed text-on-primary-fixed px-md py-sm rounded-lg font-bold"
                    >
                        {t("download-cv")}
                    </a>
                </nav>
            </div>
        )}
    </header>
    );}

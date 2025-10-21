
import React from 'react';
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from './Icons';

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <li>
        <a href={href} className="text-gray-500 hover:text-gray-800 transition-colors">{children}</a>
    </li>
);

const Footer: React.FC = () => {
    return (
        <footer className="bg-white">
            <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-8">
                    <div className="col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2">
                        <a href="#" className="text-2xl font-bold text-gray-900">LOGO</a>
                        <p className="mt-4 text-gray-600 text-base max-w-sm">
                            Global is a premier educational consultancy dedicated to helping students achieve their dreams of studying abroad. Our experienced team excels in providing tailored solutions, identifying new opportunities, and achieving outstanding results.
                        </p>
                        <div className="mt-6 flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-gray-500"><span className="sr-only">Facebook</span><FacebookIcon /></a>
                            <a href="#" className="text-gray-400 hover:text-gray-500"><span className="sr-only">Instagram</span><InstagramIcon /></a>
                            <a href="#" className="text-gray-400 hover:text-gray-500"><span className="sr-only">LinkedIn</span><LinkedinIcon /></a>
                            <a href="#" className="text-gray-400 hover:text-gray-500"><span className="sr-only">Twitter</span><TwitterIcon /></a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">About Company</h3>
                        <ul className="mt-4 space-y-3">
                            <FooterLink href="#">Home</FooterLink>
                            <FooterLink href="#">About Us</FooterLink>
                            <FooterLink href="#">About The Company</FooterLink>
                            <FooterLink href="#">Our Leaders</FooterLink>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Countries</h3>
                        <ul className="mt-4 space-y-3">
                            <FooterLink href="#">Study in Australia</FooterLink>
                            <FooterLink href="#">Study in USA</FooterLink>
                            <FooterLink href="#">Study in Malaysia</FooterLink>
                            <FooterLink href="#">Our Partners</FooterLink>
                            <FooterLink href="#">Make an Online Payment</FooterLink>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Courses</h3>
                        <ul className="mt-4 space-y-3">
                           <FooterLink href="#">Accounting</FooterLink>
                           <FooterLink href="#">Business Studies</FooterLink>
                           <FooterLink href="#">Engineering</FooterLink>
                           <FooterLink href="#">Information & Technology</FooterLink>
                           <FooterLink href="#">Cookery & Hospitality</FooterLink>
                           <FooterLink href="#">Nursing</FooterLink>
                        </ul>
                    </div>

                    <div className="col-span-1 md:col-span-2 lg:col-span-1">
                        <img src="https://i.imgur.com/KqSj0vL.png" alt="ICEF Accredited Agency" className="w-32 h-32"/>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-200 pt-8 flex flex-col md:flex-row md:items-center md:justify-between">
                    <p className="text-base text-gray-500 md:order-1">
                        &copy; 2025 All Rights Reserved.
                    </p>
                    <div className="mt-4 md:mt-0 md:order-2 flex space-x-6">
                        <FooterLink href="#">Terms of Use</FooterLink>
                        <FooterLink href="#">Privacy Policy</FooterLink>
                        <FooterLink href="#">Code of Conduct</FooterLink>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

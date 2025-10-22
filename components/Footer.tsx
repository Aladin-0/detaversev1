import React from 'react';
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from './Icons';

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <li>
        <a href={href} className="text-gray-500 hover:text-gray-800 transition-colors">{children}</a>
    </li>
);

const Footer: React.FC = () => {
    return (
        <footer className="bg-white border-t border-gray-200">
            <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                    <div className="col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-3xl font-black text-gray-900">DATA</span>
                            <span className="text-3xl font-black bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">VERSE</span>
                        </div>
                        <p className="mt-4 text-gray-600 text-base max-w-sm">
                           Data Verse is a premier analytics institute dedicated to helping students master data skills and launch rewarding careers. Our experienced mentors excel in providing hands-on training, real-world projects, and outstanding results.
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
                            <FooterLink href="#">Success Stories</FooterLink>
                            <FooterLink href="#">About Us</FooterLink>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Courses</h3>
                        <ul className="mt-4 space-y-3">
                           <FooterLink href="#">Data Analytics</FooterLink>
                           <FooterLink href="#">Business Analytics</FooterLink>
                        </ul>
                    </div>

                    <div className="col-span-1 md:col-span-2 lg:col-span-1">
                        <img src="/DataverseLogo.png" alt="Data Verse" className="w-32 h-auto"/>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-200 pt-8 flex flex-col md:flex-row md:items-center md:justify-between">
                    <p className="text-base text-gray-500 md:order-1">
                        &copy; 2025 Data Verse. All Rights Reserved.
                    </p>
                    <div className="mt-4 md:mt-0 md:order-2 flex space-x-6">
                        <FooterLink href="#">Terms of Use</FooterLink>
                        <FooterLink href="#">Privacy Policy</FooterLink>
                        <FooterLink href="#">Refund Policy</FooterLink>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
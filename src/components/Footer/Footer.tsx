import React from "react";
import { footerLinks, socialLinks } from "@/utils/constant";

const Footer: React.FC = () => (
  <>
       {/* --- Footer --- */}
       <footer className="bg-navy text-ecru pt-16 pb-8">
       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12"> {/* Adjusted grid for 5 cols */}
           {/* Footer: About */}
           <div className="lg:col-span-2"> {/* Wider first column */}
             <div className="text-2xl font-bold mb-4">
               <span className="text-gold">Koket</span> Investment
             </div>
             <p className="opacity-70 mb-6 text-sm leading-relaxed text-ecru/70 max-w-sm">
               Your trusted partner in Ethiopia for innovative Design & Build, cutting-edge Digital Solutions, and strategic Trading services. Committed to excellence since 2021 G.C.
             </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={`Follow us on ${social.name}`}
                    className="inline-flex items-center justify-center bg-ecru/10 hover:bg-gold text-ecru/70 hover:text-navy p-2 rounded-full transition-colors duration-300">
                    <social.Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
           </div>

           {/* Footer: Links Columns */}
           {footerLinks.map(col => (
                <div key={col.title}>
                  <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-ecru/90">
                     {col.title}
                  </h4>
                  <ul className="space-y-3">
                    {col.links.map(link => (
                      <li key={link}>
                        <a href="#" className="text-sm opacity-70 hover:opacity-100 hover:text-gold transition-colors">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
           ))}
         </div>

          {/* Footer Bottom */}
         <div className="border-t border-ecru/20 pt-8 mt-8">
           <div className="flex flex-col md:flex-row justify-between items-center text-sm">
             <p className="opacity-60 text-center md:text-left text-ecru/60">
               © {new Date().getFullYear()} Koket Investment PLC. All rights reserved.
             </p>
             <div className="flex space-x-6 mt-4 md:mt-0">
               <a href="#" className="opacity-60 hover:opacity-100 hover:text-gold transition-colors">Privacy Policy</a>
               <a href="#" className="opacity-60 hover:opacity-100 hover:text-gold transition-colors">Terms of Service</a>
             </div>
           </div>
         </div>
       </div>
     </footer>
    </>
);

export default Footer;

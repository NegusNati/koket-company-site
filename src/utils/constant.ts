import {
  MapPin, Mail, Phone,
  Construction, Laptop, Globe,  Award, Lightbulb, Target, Zap 
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa6";
import { getImagePath } from "./assets";


// --- Data ---
 export const navLinks = [
    { id: "home", title: "Home" },
    { id: "why-us", title: "Why Us" },
    { id: "services", title: "Services" },
    { id: "projects", title: "Projects" },
    { id: "testimonials", title: "Testimonials" },
    { id: "faq", title: "FAQ" },
    { id: "contact", title: "Contact" },
];

export const whyUsFeatures = [
  { icon: Target, title: "Client-Centric Approach", description: "Your goals are our priority. We tailor solutions to meet your specific needs." },
  { icon: Lightbulb, title: "Innovative Solutions", description: "Leveraging the latest technologies and creative thinking to drive results." },
  { icon: Award, title: "Proven Expertise", description: "Years of experience delivering successful projects across diverse sectors in Ethiopia." },
  { icon: Zap, title: "Efficient Delivery", description: "Committed to timely project completion without compromising on quality." },
];

export const servicesData = [
  { title: "Design & Build", description: "Comprehensive architectural and construction services tailored to your vision.", icon: Construction, features: ["Architectural Design", "Construction Management", "Interior Design", "Project Planning"] },
  { title: "Digital Solutions", description: "Cutting-edge digital services to enhance your online presence and operations.", icon: Laptop, features: ["Web Development", "Mobile Applications", "Digital Marketing", "IT Consulting"] },
  { title: "Trading", description: "Strategic import and export services connecting Ethiopian businesses globally.", icon: Globe, features: ["Import/Export", "Market Analysis", "Supply Chain Management", "Logistics Support"] },
];


const esl_digital = getImagePath('projects', 'esl', 2);
console.log("esl_digital", esl_digital);
const gambela_portal = getImagePath('projects', 'gambella', 3);
const meeting_room = getImagePath('projects', 'meeting', 0);
const gsez = getImagePath('projects', 'meeting', 4);
// const koket_portal = getImagePath('projects', 'esl', 5);
const koket_digital = getImagePath('projects', 'gambella', 6);

 export const projectsData = [
   { title: "Digital Solutions for ESL", category: "Digital Solutions", image: esl_digital, status: "Completed" },
   { title: "Gambella University Portal", category: "Web Development", image: gambela_portal, status: "Ongoing" },
   { title: "Commercial Complex Design", category: "Design & Build", image: gsez, status: "Completed" },
   { title: "Agricultural Import Initiative", category: "Trading", image: meeting_room, status: "Ongoing" },
   { title: "Corporate Office Renovation", category: "Interior Design", image: koket_digital, status: "Completed" },
   { title: "E-commerce Platform", category: "Digital Solutions", image: koket_digital, status: "Ongoing" },
 ];

 export const clientLogos = [ 
   { src: "/images/partners/all/esl.png", alt: "esl" },
   { src: "/images/partners/all/gambella.jfif", alt: "gambella" },
   { src: "/images/partners/all/gsez.png", alt: "gsez" },
   { src: "/images/partners/all/koket.png", alt: "koket" },
   { src: "/images/partners/all/esl.png", alt: "esl" },
   { src: "/images/partners/all/gambella.jfif", alt: "gambella" },
   { src: "/images/partners/all/gsez.png", alt: "gsez" },
   { src: "/images/partners/all/koket.png", alt: "koket" },
 ];

 export const statsData = [
   { value: 10, label: "Years Experience", suffix: "+" },
   { value: 50, label: "Projects Completed", suffix: "+" },
   { value: 30, label: "Happy Clients", suffix: "+" },
   { value: 3, label: "Service Categories", suffix: "" },
 ];
 export const testimonialsData = [
   { quote: "Koket Investment delivered our project on time and exceeded expectations. Their attention to detail is impressive.", author: "Amare Birhanu", position: "Project Manager, Ethiopian Shipping Lines", image: "/images/testimonials/esl/testimonial2.jpg" },
   { quote: "Working with Koket has been a game-changer. Their digital solutions significantly improved our online presence.", author: "Dagmawi Abayneh", position: "Marketing Director, Ethio Telecom", image: "/images/testimonials/ethiotelecom/image1.jpg" },
   { quote: "The team understands our vision and has been instrumental in achieving our goals. Unmatched expertise.", author: "Leul Mesfin", position: "Architect, Addis Ababa University", image: "/images/testimonials/addisuniversity/image1.jpg" },
   { quote: "Koket Investment's design solutions transformed our office space. The team is professional and highly skilled.", author: "Marta Tesfaye", position: "HR Manager, Mereb Technologies", image: "/images/testimonials/mereb/image1.jpg" },
   { quote: "Their commitment to quality and client satisfaction is evident in every project. Highly recommend Koket Investment.", author: "Samuel Habtamu", position: "Tourisim Coordinator, Getfam Hotel", image: "/images/testimonials/getfam/image1.jpg" },
 ];

 export const faqData = [
   { question: "What services does Koket Investment provide?", answer: "Koket Investment offers a comprehensive range of services including interior design, architecture, software development, and import/export facilitation. We provide end-to-end solutions for residential, commercial, and digital projects." },
   { question: "How does your design process work?", answer: "Our design process begins with an in-depth consultation to understand your needs and vision. We then develop concept designs, refine them based on your feedback, create detailed plans, and finally implement the project, ensuring quality and attention to detail throughout." },
   { question: "What types of projects has Koket Investment worked on?", answer: "We've worked on a diverse portfolio of projects including luxury residential interiors, commercial office spaces, custom software applications, e-commerce platforms, and international trade facilitation for various industries." },
   { question: "How can I get a quote for my project?", answer: "Please use the contact form below, email us at info@koketinvestment.com, or call us directly. We'll schedule a consultation to discuss your requirements." },
    { question: "What is the typical timeline for a project?", answer: "Project timelines vary based on complexity and scope. We provide a detailed timeline during the initial consultation and keep you updated throughout the process." },
    { question: "Do you offer post-project support?", answer: "Yes, we provide ongoing support and maintenance for our projects, ensuring everything runs smoothly long after completion." },
 ];

 export const socialLinks = [
     { name: "facebook", Icon: FaFacebookF, href: "https://www.facebook.com/share/1HxrA5RHfV/" }, { name: "instagram", Icon: FaInstagram, href: "https://www.instagram.com/koket_investment/" }, { name: "linkedin", Icon: FaLinkedin, href: "https://www.linkedin.com/company/koket-investment/" },{ name: "tiktok", Icon: FaTiktok, href: "https://www.tiktok.com/@koket_investment" }
 ];

 export const footerLinks = [
     { title: 'Services', links: ['Design & Build', 'Digital Solutions', 'Trading', 'Consulting'] },
     { title: 'Company', links: ['About Us', 'Why Choose Us', 'Projects', 'Testimonials', 'Careers'] },
     { title: 'Resources', links: ['FAQ', 'Blog', 'Contact Us', 'Privacy Policy'] }, // Added Blog/Resources
 ];

 export const contactInfo = [
     { icon: MapPin, text: 'Bole Atlas, Addis Ababa' }, { icon: Mail, text: 'info@koketinvestment.com' }, { icon: Phone, text: '+251 93 933 3079' }
 ];
 

const eslHeroImage = getImagePath('projects', 'esl', 1);
const gambelaHeroImage = getImagePath('projects', 'gambella', 2);
const meetingHeroImage = getImagePath('projects', 'meeting', 1);
 

export const heroImages = [
 
  {
    src: eslHeroImage,
    title: "Ethiopian Shipping Logistics Interior Design",
    description: "Launched June 2023",
  },
  {
    src: gambelaHeroImage,
    title: "Gambella University Interior Design",
    description: "Completed June 2024",
  },
  {
    src: meetingHeroImage,
    title: "Meeting Room Design",
    description: "Completed 2022",
  },


]
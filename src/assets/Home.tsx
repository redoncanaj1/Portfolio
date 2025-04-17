import { ChangeEvent, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import bg from '../assets/images/bg.jpg';
import section4 from '../assets/images/section4.avif';
import section2 from '../assets/images/section2.avif';
import bgGps from '../assets/images/bgGps.avif';
import Construction from '../assets/images/Construction.jpg';
import PetExpo from '../assets/images/PetExpo.jpg';
import Piperke from '../assets/images/Piperke.jpg';
import logo from '../assets/images/logo.png';
import { FiGithub, FiGitlab, FiLinkedin, FiMail, FiPhone, FiMapPin, FiSend, FiDownload} from 'react-icons/fi';



type Experience = {
  company: string;
  period: string;
  role: string;
  technologies: string[];
  bullets: string[];
};

type Project = {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  links: { type: string; url: string }[];
  bgImage: string;
};

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const Home = () => {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

 
    const container = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.3
        }
      }
    };
  
    const item = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: { 
          type: "spring",
          stiffness: 100,
          damping: 10
        }
      }
    };
  

  
    const buttonHover = {
      hover: {
        scale: 1.03,
        boxShadow: "0 5px 15px rgba(59, 130, 246, 0.4)",
        transition: {
          type: "spring",
          stiffness: 400
        }
      },
      tap: {
        scale: 0.98
      }
    };
  
    const inputFocus = {
      focus: {
        scale: 1.02,
        boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.5)"
      }
    };
  
  const experiences: Experience[] = [
    {
      company: "CodeLab",
      period: "10/2023 - Present | Tirana, Albania",
      role: "Front End Developer",
      technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
      bullets: [
        "Develop responsive and interactive user interfaces using React, TypeScript, and Tailwind CSS",
        "Collaborate with design and backend teams to implement modern web applications",
        "Optimize application performance and ensure cross-browser compatibility",
        "Participate in code reviews and contribute to architectural decisions",
        "Implement state management solutions and integrate with REST APIs"
      ]
    },
    {
      company: "ICTSLab Academy",
      period: "04/2023 - 06/2023 | Tirana, Albania",
      role: "Intern (Full Stack Dev)",
      technologies: ['PHP', 'Laravel', 'MySQL', 'Bootstrap'],
      bullets: [
        "Completed intensive training in web development technologies",
        "Developed full-stack applications using PHP/Laravel and MySQL",
        "Gained hands-on experience with frontend technologies including HTML, CSS, JavaScript, and Bootstrap",
        "Participated in team projects and code reviews",
        "Learned best practices in software development and version control"
      ]
    },
    {
      company: "Freelance",
      period: "2023 - Present | Remote",
      role: "Front End Developer",
      technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'React', 'TypeScript', 'PHP Laravel', 'MySQL', 'Figma'],
      bullets: [
        "Developed and deployed responsive websites for clients in various industries",
        "Designed and built custom UIs using React and Tailwind CSS",
        "Worked closely with clients to gather requirements and deliver solutions on time",
        "Created projects such as Lani Builders, Piperke, and Pet Expo",
        "Ensured mobile responsiveness, performance optimization, and SEO best practices"
      ]
    }
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: "Teltonika GPS",
      description: "Responsive front-end application for real-time vehicle monitoring.",
      longDescription: "This project features live tracking, float monitoring, fuel consumption analysis, and temperature monitoring, enabling efficient fleet management through dynamic data visualization. Built with modern web technologies to handle real-time data streams.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      links: [
        { type: "code", url: "https://gitlab.com/regimele7/teltonika-frontend" }
      ],
      bgImage: bgGps
    },
    {
      id: 2,
      title: "Lani Builders",
      description: "Modern website for a building services company.",
      longDescription: "Lani Builders is a responsive website crafted to showcase a modern digital presence for a building services business. Developed using Next.js, React, TypeScript, and Tailwind CSS, the project emphasizes dynamic content rendering and intuitive navigation. It delivers an engaging user experience with clean, visually appealing design and optimized performance for both desktop and mobile users.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      links: [
        { type: "code", url: "https://github.com/redoncanaj1/lani-builders" },
        { type: "demo", url: "https://lani-builders.vercel.app" }
      ],
      bgImage: Construction
    },
    {
      id: 3,
      title: "Pet Expo",
      description: "Interactive web application for pet enthusiasts.",
      longDescription: "Pet Expo is a vibrant platform for pet lovers to explore different breeds, find pet services, and connect with other enthusiasts. The application features responsive design, interactive elements, and a user-friendly interface built with modern web technologies.",
      technologies: ["React", "JavaScript", "Tailwind CSS", "daisyUI"],
      links: [
        { type: "code", url: "https://github.com/redoncanaj1/pet-expo" }
      ],
      bgImage: PetExpo
    },
    {
      id: 4,
      title: "Piperke",
      description: "Full-stack e-commerce web project.",
      longDescription: "Piperke is a comprehensive e-commerce solution that integrates both front-end and back-end development. The platform includes product listings, shopping cart functionality, user authentication, and admin dashboard. The user interface is crafted using HTML and CSS, while PHP handles server-side logic, with PhpMyAdmin facilitating efficient database management.",
      technologies: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
      links: [
        { type: "code", url: "https://github.com/redoncanaj1/Piperke" }
      ],
      bgImage: Piperke
    }
  ];

  const toggleCard = (index: number) => {
    setExpandedCards(prev => 
      prev.includes(index) 
        ? [] 
        : [index]
    );
  };
  const toggleExpand = (projectId: number) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
  
    try {
      // First send the contact form message to yourself
      const response = await emailjs.send(
        'service_caehflj', // Service ID
        'template_8wynqxv', // Contact form template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
          reply_to: formData.email,
        },
        'M7r-4ZgifXea9oVcb' // Public key
      );
  
      // If successful, send the thank you email to the user
      if (response.status === 200 || response.text.includes("Successful response")) {
        setSubmitMessage('Thank you! Your message has been sent successfully.');
  
        // Send confirmation email to the user
        await emailjs.send(
          'service_caehflj', // Service ID
          'template_aafu7um', // Confirmation template ID
          {
            to_email: formData.email,
            user_name: formData.name,
            subject: 'Thank you for your message',
            message: 'Thank you for reaching out! We have received your message and will get back to you soon.',
          },
          'M7r-4ZgifXea9oVcb' // Public key
        );
  
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        throw new Error('Email failed to send');
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitMessage('Error sending message. Please try again or email me directly.');
    } finally {
      setIsSubmitting(false);
    }
};

// Initialize EmailJS
useEffect(() => {
    emailjs.init('M7r-4ZgifXea9oVcb'); // Public key
}, []);
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };


    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {showScrollButton && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
          aria-label="Back to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}

      <nav className="flex fixed top-0 left-0 right-0 z-50 items-center justify-between p-4 text-white bg-black/50 backdrop-blur-sm h-16">
        <div className="text-2xl font-bold" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img 
            src={logo} 
            alt="Logo" 
            className="h-12 w-auto max-h-full object-contain"
          />
        </div>
        
        <button 
          onClick={toggleMenu}
          className="md:hidden ml-auto focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        <div className="hidden md:flex gap-6 font-mono">
          {['home', 'about', 'experience', 'projects', 'contact'].map((section) => (
            <a 
              key={section}
              href={`#${section}`} 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(section);
              }}
              className="hover:text-gray-300 hover:scale-110 transition"
            >
              • {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
        <div></div>
      </nav>

      {isMenuOpen && (
        <div className="fixed top-16 left-0 right-0 z-40 bg-black/50 backdrop-blur-sm md:hidden">
          <div className="flex flex-col items-center py-4 space-y-4 font-mono">
            {['home', 'about', 'projects', 'contact'].map((section) => (
              <a 
                key={section}
                href={`#${section}`} 
                className="text-white hover:text-gray-300"
                onClick={(e) => {
                  e.preventDefault();
                  toggleMenu();
                  scrollToSection(section);
                }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
              
            ))}
          </div>
          
        </div>
      )}

      <div id="home" className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={bg} 
            alt="Background" 
            className="h-full w-full object-cover transform scale-110 animate-zoom-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70"></div>
        </div>

        <div className="relative h-full flex flex-col items-center justify-center px-4">
          <div className="text-center space-y-6 transform transition-all duration-1000 animate-fade-in-up">
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-500 animate-text-shimmer">
              Redon Canaj
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 font-light animate-typing overflow-hidden whitespace-nowrap">
              Front End Developer
            </p>
            
            <div className="pt-4">
              <a 
                href="#projects" 
                className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-blue-500 rounded-full group"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('projects');
                }}
              >
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                  View Projects
                </span>
                <span className="relative invisible">View Projects</span>
              </a>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <div className="animate-bounce flex flex-col items-center">
              <p className="text-sm text-blue-400 mb-2 animate-pulse">Scroll down</p>
              <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center relative">
                <div className="w-1 h-3 bg-blue-400 rounded-full absolute top-2 animate-scroll"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="about" className="w-full bg-black text-white py-20 px-4 md:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={item}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            About Me
          </motion.h2>
          <motion.div 
            variants={item}
            className="w-20 h-1 bg-blue-600 mx-auto"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Who I Am */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">Who I Am</h3>
            <div className="space-y-4">
              <motion.p 
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                I'm a passionate front-end developer with expertise in React.js, TypeScript, and modern web technologies. 
                I combine technical skills from my Computer Science background with business understanding from my 
                Master's in Business Informatics to create impactful digital solutions.
              </motion.p>
              
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Currently working at CodeLab, I thrive in dynamic environments where I can design and implement 
                responsive, user-friendly interfaces that solve real-world problems.
              </motion.p>
              
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                When I'm not coding, you can find me traveling or enjoying sports - both of which help me maintain 
                the energy and creativity I bring to my development work.
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">My Skills</h3>
            
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mb-8"
            >
              <h4 className="text-xl mb-4">Core Technologies:</h4>
              <div className="flex flex-wrap gap-3">
                {['React.js', 'TypeScript', 'Next.js', 'Tailwind CSS', 'JavaScript', 'HTML/CSS'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (index * 0.05) }}
                    className="px-3 py-1.5 bg-gray-800 rounded-full text-sm hover:bg-[#51a2ff] transition duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mb-8"
            >
              <h4 className="text-xl mb-4">Education:</h4>
              <ul className="space-y-3">
                {[
                  { icon: '🎓', text: 'Master\'s in Business Informatics - University of Tirana' },
                  { icon: '🎓', text: 'Bachelor\'s in Computer Science - University of Tirana' },
                  { icon: '📚', text: 'MERN Stack Certification - BetaPlan' },
                  { icon: '📚', text: 'PHP/Laravel Certification - ICTSLab' }
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + (index * 0.1) }}
                    className="flex items-start"
                  >
                    <span className="mr-2">{item.icon}</span>
                    <span>{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <motion.a 
                href="Redon_Canaj_CV.pdf"	
                download="Redon_Canaj_CV.pdf"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-6 rounded-lg transition-colors"
                whileHover={{ 
                  y: -3,
                  boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <FiDownload className="mr-2" />
                Download Full Resume
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>

    <section id="experience" className="relative w-full bg-black text-white font-mono py-16 px-4 md:px-8">
      <div 
        className="absolute inset-0 bg-no-repeat bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${section2})`,
          filter: 'blur(3px)',
          opacity: 0.9
        }}
      />  
      <div className="absolute inset-0 z-0"></div>
      <div className="relative z-20 max-w-6xl mx-auto"> 
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">My Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="max-w-6xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
              
              className={`group relative overflow-hidden rounded-xl border border-gray-800 hover:border-blue-600 transition-all duration-300 cursor-pointer ${expandedCards.includes(index) ? 'border-blue-600' : ''}`}
              onClick={() => toggleCard(index)}
            >
              <div className="w-full text-left p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                  <h3 className="text-2xl font-semibold text-blue-400  transition-colors">
                    {exp.company}
                    <span className="block md:inline text-sm text-gray-400 md:ml-2">{exp.period}</span>
                  </h3>
                  <span className="text-white bg-blue-600 px-3 py-1 rounded-full text-sm">{exp.role}</span>
                </div>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.technologies.map(tech => (
                    <span key={tech} className="text-xs bg-gray-800 px-3 py-1 rounded-full">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div 
                className={`px-6 pb-4 pt-0 overflow-hidden transition-all duration-500 ${expandedCards.includes(index) ? 'max-h-[500px]' : 'max-h-0'}`}
              >
                <ul className="space-y-3 text-gray-300 pl-5 list-disc mt-4">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>


      <section id="projects" className="min-h-screen w-full bg-black text-white font-mono py-16 px-4 md:px-8">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold mb-4 text-center">My Projects</h2>
    <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
    <div className="grid md:grid-cols-2 gap-8 mt-6">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-colors"
        >
          <div 
            className={`bg-gray-900 rounded-lg overflow-hidden transition-all duration-300 ${
              expandedProject === project.id ? 'h-auto' : 'h-96'
            }`}
          >
            {/* Project Image */}
            <div 
              className="h-48 w-full bg-cover bg-center cursor-pointer"
              style={{ backgroundImage: `url(${project.bgImage})` }}
              onClick={() => toggleExpand(project.id)}
            />
            
            {/* Project Content */}
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-blue-400">{project.title}</h3>
                <button 
                  onClick={() => toggleExpand(project.id)}
                  className="text-gray-400 hover:text-white focus:outline-none"
                >
                  {expandedProject === project.id ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
                {expandedProject === project.id && (
  <button 
    onClick={() => setExpandedProject(null)}
    className="absolute top-4 right-4 text-gray-400 hover:text-white"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  </button>
)}
              </div>
              
              <p className="text-gray-300 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="text-xs bg-gray-800 px-2 py-1 rounded">{tech}</span>
                ))}
              </div>
              
              {/* Expanded Content */}
              {expandedProject === project.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 space-y-4"
                >
                  <p className="text-gray-300">{project.longDescription}</p>
                  <div className="flex gap-4">
                    {project.links.map((link, index) => (
                      <a 
                        key={index}
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`inline-block ${
                          link.type === 'demo' 
                            ? 'bg-green-500 hover:bg-green-600' 
                            : 'bg-blue-500 hover:bg-blue-600'
                        } text-white font-medium py-2 px-4 rounded transition-colors`}
                      >
                        {link.type === 'demo' ? 'View Demo' : 'View Code'}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
              
              {/* Collapsed State Link */}
              {expandedProject !== project.id && (
                <a 
                  href={project.links[0].url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block text-blue-400 hover:text-blue-300 text-sm font-medium"
                >
                  View Project →
                </a>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      <section 
      id="contact" 
      className="relative  h-100vh w-full bg-black text-white py-20 px-4 md:px-8 overflow-hidden"
    >
      <motion.div 
        className="absolute inset-0 bg-no-repeat bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${section4})`,
          filter: 'blur(1px)',
          opacity: 0.9
        }}
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1 }}
      />
      
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={item}
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
          >
            Get In Touch
          </motion.h2>
          <motion.div 
            variants={item}
            className="w-20 h-1 bg-blue-600 mx-auto mb-6"
          />
          <motion.p 
            variants={item}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Have a project in mind or want to discuss potential opportunities?
          </motion.p>
        </motion.div>
        
        
        <div className="grid md:grid-cols-2 gap-8 ">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={container}
            className="space-y-6 bg-gray-900/60 backdrop-blur-md p-8 rounded-xl border border-gray-800"
          >
            <motion.div 
              variants={item}
              whileHover="hover"
              className=" backdrop-blur-md p-6 rounded-xl border border-gray-800"
            >
              <div className="flex items-start">
                <div className="bg-blue-600/20 p-3 rounded-lg mr-4">
                  <FiMail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1">Email</h4>
                  <a 
                    href="mailto:Redoncanaj1@gmail.com" 
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    Redoncanaj1@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={item}
              whileHover="hover"
              className="backdrop-blur-md p-6 rounded-xl border border-gray-800"
            >
              <div className="flex items-start">
                <div className="bg-blue-600/20 p-3 rounded-lg mr-4">
                  <FiPhone className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1">Phone</h4>
                  <a 
                    href="tel:+355693606568" 
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    +355 69 360 6568
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={item}
              whileHover="hover"
              className=" backdrop-blur-md p-6 rounded-xl border border-gray-800"
            >
              <div className="flex items-start">
                <div className="bg-blue-600/20 p-3 rounded-lg mr-4">
                  <FiMapPin className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1">Location</h4>
                  <p className="text-gray-300">Tirana, Albania</p>
                </div>
              </div>
            </motion.div>

           
            <motion.div 
              variants={container}
              className="pt-6 "
            >
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">Connect With Me</h3>
              <div className="flex space-x-6">
                {[
                  { icon: <FiGithub />, url: "https://github.com/redoncanaj1" },
                  { icon: <FiGitlab />, url: "https://gitlab.com/Redoncanaj" },
                  { icon: <FiLinkedin />, url: "https://www.linkedin.com/in/redon-canaj-2ab666136/" },
                  { icon: <FiMail />, url: "mailto:redoncanaj1@gmail.com" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 text-2xl"
                    whileHover={{ 
                      y: -5,
                      scale: 1.2,
                      
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900/60 backdrop-blur-md p-8 rounded-xl border border-gray-800"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              {[
                { id: "name", label: "Name", type: "text" },
                { id: "email", label: "Email", type: "email" },
                { id: "phone", label: "Phone", type: "tel" }
              ].map((field) => (
                <motion.div
                  key={field.id}
                  whileHover={{ scale: 1.01 }}
                  whileFocus="focus"
                  variants={inputFocus}
                >
                  <label htmlFor={field.id} className="block text-sm font-medium text-white mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    value={formData[field.id as keyof FormData]}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </motion.div>
              ))}
              
              <motion.div
                whileHover={{ scale: 1.01 }}
                whileFocus="focus"
                variants={inputFocus}
              >
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </motion.div>

              <AnimatePresence>
                {submitMessage && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className={`overflow-hidden rounded-lg ${
                      submitMessage.includes('Thank you') 
                        ? 'bg-green-900/30 text-green-400 border border-green-800' 
                        : 'bg-red-900/30 text-red-400 border border-red-800'
                    }`}
                  >
                    <div className="p-4">
                      {submitMessage}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2"
                whileHover="hover"
                whileTap="tap"
                variants={buttonHover}
              >
                {isSubmitting ? (
                  <motion.span
                    animate={{ 
                      opacity: [0.6, 1, 0.6],
                      transition: { repeat: Infinity, duration: 1.5 }
                    }}
                  >
                    Sending...
                  </motion.span>
                ) : (
                  <>
                    <FiSend />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
    <section>
    <div id='footer' className="bg-gray-900 text-gray-300 py-6 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left side - Branding */}
          <motion.div 
            variants={item}
            className="mb-6 md:mb-0 text-center md:text-left"
          >
            <h2 className="text-xl font-bold">
              Redon<span className="text-blue-400">Canaj</span>
            </h2>
            <p className="mt-2">Frontend Developer</p>
          </motion.div>

          <motion.div 
          variants={item}
          className="text-center text-sm text-gray-500"
        >
          <p>© {new Date().getFullYear()} Redon Canaj. All rights reserved.</p>

        </motion.div>

          <motion.div 
            variants={item}
            className="flex space-x-6 mt-6 md:mt-0"
          >
            {[
              { icon: <FiGithub />, url: "https://github.com/redoncanaj1" },
              { icon: <FiGitlab />, url: "https://gitlab.com/Redoncanaj" },
              { icon: <FiLinkedin />, url: "https://www.linkedin.com/in/redon-canaj-2ab666136/" },
              { icon: <FiMail />, url: "mailto:redoncanaj1@gmail.com" }
            ].map((social, index) => (
              <motion.a
                key={index}
               
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 hover:text-blue-400"
                whileHover={{ 
                  y: -5,
                  scale: 1.2,
                  
                }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        
      </div>
    </div>
    </section>
        </>
        );
    };


    export default Home;



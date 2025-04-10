import bg from '../assets/images/bg.jpg';
import emailjs from 'emailjs-com';
import section4 from '../assets/images/section4.jpg';
import bgGps from '../assets/images/bgGps.avif';
import Construction from '../assets/images/Construction.jpg';
import PetExpo from '../assets/images/PetExpo.jpg';
import Piperke from '../assets/images/Piperke.jpg';
import logo from '../assets/images/logo.png';
import { ChangeEvent,useState, useEffect } from 'react';
const Home = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      const [isSubmitting, setIsSubmitting] = useState(false);
      const [submitMessage, setSubmitMessage] = useState('');
    
      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage('');
    
        try {
          emailjs.init('bQ1fCR05qfH-csVluzn1k');
    
          await emailjs.send(
            'bQ1fCR05qfH-csVluzn1k', 
            'template_8wynqxv',
            {
              from_name: formData.name,
              from_email: formData.email,
              phone: formData.phone,
              message: formData.message,
              reply_to: formData.email,
              to_name: 'Redon'
            }
          );
    
          await emailjs.send(
            'bQ1fCR05qfH-csVluzn1k',
            'template_8wynqxv',
            {
              to_name: formData.name,
              to_email: formData.email,
              from_name: 'Redon Canaj',
              reply_to: 'redoncanal1@gmail.com',
              message: `Dear ${formData.name},\n\nThank you for reaching out. I've received your message and will respond shortly.\n\nBest regards,\nRedon Canaj`
            }
          );
    
          setSubmitMessage('Thank you! Your message has been sent successfully.');
          setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
          });
        } catch (error) {
          setSubmitMessage('Error sending message. Please try again later.');
          console.error('EmailJS error:', error);
        } finally {
          setIsSubmitting(false);
        }
      };
      function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      }
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 300) {
          setShowScrollButton(true);
        } else {
          setShowScrollButton(false);
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [expandedProject, setExpandedProject] = useState(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const projects = [
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

    const toggleExpand = (projectId: any) => {
        setExpandedProject(expandedProject === projectId ? null : projectId);
    };


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

                <div className="hidden md:flex gap-6 font-mono ">
                    <a href="#home" onClick={(e) => {
                e.preventDefault();
                const homeSection = document.getElementById("home");
                if (homeSection) {
                  const headerOffset = 80;
                  const elementPosition = homeSection.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                  });
                }
              }} className="hover:text-gray-300 hover:scale-110 transition">// Home</a>
                    
                    <a href="#about" onClick={(e) => {
                e.preventDefault();
                const homeSection = document.getElementById("about");
                if (homeSection) {
                  const headerOffset = 80;
                  const elementPosition = homeSection.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                  });
                }
              }} className="hover:text-gray-300 hover:scale-110">// About</a>
<a href="#experience" onClick={(e) => {
  e.preventDefault();
  const section = document.getElementById("experience");
  if (section) {
    const headerOffset = 80;
    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
}} className="hover:text-gray-300 hover:scale-110">// Experience</a>

<style>{`
  .experience-item {
    position: relative;
    padding-left: 2rem;
  }
  .experience-item:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 2px;
    background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
  }
`}</style>
                    <a href="#projects" onClick={(e) => {
                e.preventDefault();
                const homeSection = document.getElementById("projects");
                if (homeSection) {
                  const headerOffset = 80;
                  const elementPosition = homeSection.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                  });
                }
              }} className="hover:text-gray-300 hover:scale-110">// Projects</a>
                    <a href="#contact" onClick={(e) => {
                e.preventDefault();
                const homeSection = document.getElementById("contact");
                if (homeSection) {
                  const headerOffset = 80;
                  const elementPosition = homeSection.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                  });
                }
              }} className="hover:text-gray-300 hover:scale-110">// Contact</a>
                </div>
                <div></div>
            </nav>

            {isMenuOpen && (
                <div className="fixed top-16 left-0 right-0 z-40 bg-black/50 backdrop-blur-sm md:hidden ">
                    <div className="flex flex-col items-center py-4 space-y-4 font-mono">
                        <a href="#home" className="text-white hover:text-gray-300" onClick={(e) => {
                            e.preventDefault();
                            {toggleMenu()}
                            const homeSection = document.getElementById("home");
                            if (homeSection) {
                              const headerOffset = 80;
                              const elementPosition = homeSection.getBoundingClientRect().top;
                              const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
                              window.scrollTo({
                                top: offsetPosition,
                                behavior: "smooth"
                              });
                            }
                          }}>Home</a>
                        <a href="#about" className="text-white hover:text-gray-300" onClick={(e) => {
                            e.preventDefault();
                            {toggleMenu()}
                            const homeSection = document.getElementById("about");
                            if (homeSection) {
                              const headerOffset = 80;
                              const elementPosition = homeSection.getBoundingClientRect().top;
                              const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
                              window.scrollTo({
                                top: offsetPosition,
                                behavior: "smooth"
                              });
                            }
                          }}>About</a>
                        <a href="#projects" className="text-white hover:text-gray-300" onClick={(e) => {
                            e.preventDefault()
                            {toggleMenu()}
                            const homeSection = document.getElementById("projects");
                            if (homeSection) {
                              const headerOffset = 80;
                              const elementPosition = homeSection.getBoundingClientRect().top;
                              const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
                              window.scrollTo({
                                top: offsetPosition,
                                behavior: "smooth"
                              });
                            }
                          }}>Projects</a>
                        <a href="#contact" className="text-white hover:text-gray-300" 
                        onClick={(e) => {
                            e.preventDefault();
                            {toggleMenu()}
                            const homeSection = document.getElementById("contact");
                            if (homeSection) {
                              const headerOffset = 80;
                              const elementPosition = homeSection.getBoundingClientRect().top;
                              const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
                              window.scrollTo({
                                top: offsetPosition,
                                behavior: "smooth"
                              });
                            }
                          }}>Contact</a>
                    </div>
                </div>
            )}

<div id="home" className="relative h-screen w-full overflow-hidden">
  <div className="absolute inset-0 overflow-hidden">
    <img 
      src={bg} 
      alt="Background" 
      className="h-full w-full object-cover transform scale-110 animate-zoom-in-out"
      style={{
        animation: 'zoomInOut 15s infinite alternate ease-in-out'
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70"></div>
  </div>

  <div className="relative h-full flex flex-col items-center justify-center px-4">
    <div className="text-center space-y-6 transform transition-all duration-1000 animate-fade-in-up">
      <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r  from-white to-blue-500 animate-text-shimmer">
        Redon Canaj
      </h1>
      
      <p className="text-xl md:text-2xl text-gray-300 font-light animate-typing overflow-hidden whitespace-nowrap ">
        Front End Developer
      </p>
      
      <div className="pt-4">
        <a 
          href="#projects" 
          className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-blue-500 rounded-full group"
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

  <style>{`
    @keyframes zoomInOut {
      0% { transform: scale(1); }
      100% { transform: scale(1.1); }
    }
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes typing {
      from { width: 0 }
      to { width: 100% }
    }
    @keyframes textShimmer {
      0% { background-position: 0% 50%; }
      100% { background-position: 100% 50%; }
    }
    @keyframes scroll {
      0% { transform: translateY(0); opacity: 1; }
      100% { transform: translateY(10px); opacity: 0; }
    }
    .animate-zoom-in-out {
      animation: zoomInOut 15s infinite alternate ease-in-out;
    }
    .animate-fade-in-up {
      animation: fadeInUp 1.5s ease-out forwards;
    }
    .animate-typing {
      animation: typing 3.5s steps(40, end), blink-caret .75s step-end infinite;
    }
    .animate-text-shimmer {
      background-size: 200% auto;
      animation: textShimmer 3s linear infinite;
    }
    .animate-scroll {
      animation: scroll 2s infinite;
    }
  `}</style>
</div>
        <section id="about" className="w-full bg-black text-white font-mono py-16 px-4 md:px-8 bg-no-repeat object-fit bg-cover">
    <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        <div className="grid md:grid-cols-2 gap-8 mt-6">
            <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-400">Who I Am</h3>
                <p className="mb-4">
                    I'm a passionate front-end developer with expertise in React.js, TypeScript, and modern web technologies. 
                    I combine technical skills from my Computer Science background with business understanding from my 
                    Master's in Business Informatics to create impactful digital solutions.
                </p>
                <p className="mb-4">
                    Currently working at CodeLab, I thrive in dynamic environments where I can design and implement 
                    responsive, user-friendly interfaces that solve real-world problems.
                </p>
                <p>
                    When I'm not coding, you can find me traveling or enjoying sports - both of which help me maintain 
                    the energy and creativity I bring to my development work.
                </p>
            </div>
            
            <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-400">My Skills</h3>
                <div className="mb-6">
                    <h4 className="text-xl mb-2">Core Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                        <span className="bg-gray-800 px-3 py-1 rounded">React.js</span>
                        <span className="bg-gray-800 px-3 py-1 rounded">TypeScript</span>
                        <span className="bg-gray-800 px-3 py-1 rounded">Next.js</span>
                        <span className="bg-gray-800 px-3 py-1 rounded">Tailwind CSS</span>
                        <span className="bg-gray-800 px-3 py-1 rounded">JavaScript</span>
                        <span className="bg-gray-800 px-3 py-1 rounded">HTML/CSS</span>
                    </div>
                </div>
                
                <div className="mb-6">
                    <h4 className="text-xl mb-2">Education:</h4>
                    <ul className="space-y-2">
                        <li>🎓 <strong>Master's in Business Informatics</strong> - University of Tirana</li>
                        <li>🎓 <strong>Bachelor's in Computer Science</strong> - University of Tirana</li>
                        <li>📚 <strong>MERN Stack Certification</strong> - BetaPlan</li>
                        <li>📚 <strong>PHP/Laravel Certification</strong> - ICTSLab</li>
                    </ul>
                </div>
                
                <a 
    href="Redon_Canaj_CV.pdf"	
    download="Redon_Canaj_CV.pdf"
    className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
>
    Download Full Resume
</a>
            </div>
        </div>
    </div>
</section>
<section id="experience" className="relative w-full bg-black text-white font-mono py-16 px-4 md:px-8">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4 text-white">My Experience</h2>
      <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
    </div>
    
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="group relative overflow-hidden rounded-xl border border-gray-800 hover:border-blue-600 transition-all duration-300">
        <button className="w-full text-left p-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
            <h3 className="text-2xl font-semibold text-blue-400 group-hover:text-white transition-colors">
              CodeLab
              <span className="block md:inline text-sm text-gray-400 md:ml-2">10/2023 - Present | Tirana, Albania</span>
            </h3>
            <span className="text-white bg-blue-600 px-3 py-1 rounded-full text-sm">Front End Developer</span>
          </div>
          
          <div className="mt-4 flex flex-wrap gap-2">
            {['React', 'TypeScript', 'Next.js', 'Tailwind CSS'].map(tech => (
              <span key={tech} className="text-xs bg-gray-800 px-3 py-1 rounded-full">{tech}</span>
            ))}
          </div>
        </button>
        
        <div className="px-6 pb-4 pt-0 max-h-0 overflow-hidden group-focus-within:max-h-96 group-focus:max-h-96 transition-all duration-500">
          <ul className="space-y-3 text-gray-300 pl-5 list-disc mt-4">
            <li>Develop responsive and interactive user interfaces using React, TypeScript, and Tailwind CSS</li>
            <li>Collaborate with design and backend teams to implement modern web applications</li>
            <li>Optimize application performance and ensure cross-browser compatibility</li>
            <li>Participate in code reviews and contribute to architectural decisions</li>
            <li>Implement state management solutions and integrate with REST APIs</li>
          </ul>
          
        </div>
      </div>

      <div className="group relative overflow-hidden rounded-xl border border-gray-800 hover:border-blue-600 transition-all duration-300">
        <button className="w-full text-left p-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
            <h3 className="text-2xl font-semibold text-blue-400 group-hover:text-white transition-colors">
              ICTSLab Academy
              <span className="block md:inline text-sm text-gray-400 md:ml-2">04/2023 - 06/2023 | Tirana, Albania</span>
            </h3>
            <span className="text-white bg-blue-600 px-3 py-1 rounded-full text-sm">Intern (Full Stack Dev)</span>
          </div>
          
          <div className="mt-4 flex flex-wrap gap-2">
            {['PHP', 'Laravel', 'MySQL', 'Bootstrap'].map(tech => (
              <span key={tech} className="text-xs bg-gray-800 px-3 py-1 rounded-full">{tech}</span>
            ))}
          </div>
        </button>
        
        <div className="px-6 pb-4 pt-0 max-h-0 overflow-hidden group-focus-within:max-h-96 group-focus:max-h-96 transition-all duration-500">
          <ul className="space-y-3 text-gray-300 pl-5 list-disc mt-4">
            <li>Completed intensive training in web development technologies</li>
            <li>Developed full-stack applications using PHP/Laravel and MySQL</li>
            <li>Gained hands-on experience with frontend technologies including HTML, CSS, JavaScript, and Bootstrap</li>
            <li>Participated in team projects and code reviews</li>
            <li>Learned best practices in software development and version control</li>
          </ul>
        </div>
      </div>

      <div className="group relative overflow-hidden rounded-xl border border-gray-800 hover:border-blue-600 transition-all duration-300">
        <button className="w-full text-left p-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
            <h3 className="text-2xl font-semibold text-blue-400 group-hover:text-white transition-colors">
              Freelance
              <span className="block md:inline text-sm text-gray-400 md:ml-2">2023 - Present | Remote</span>
            </h3>
            <span className="text-white bg-blue-600 px-3 py-1 rounded-full text-sm">Front End Developer</span>
          </div>
          
          <div className="mt-4 flex flex-wrap gap-2">
            {['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'React', 'TypeScript', 'PHP Laravel', 'MySQL', 'Figma'].map(tech => (
              <span key={tech} className="text-xs bg-gray-800 px-3 py-1 rounded-full">{tech}</span>
            ))}
          </div>
        </button>
        
        <div className="px-6 pb-4 pt-0 max-h-0 overflow-hidden group-focus-within:max-h-96 group-focus:max-h-96 transition-all duration-500">
          <ul className="space-y-3 text-gray-300 pl-5 list-disc mt-4">
            <li>Developed and deployed responsive websites for clients in various industries</li>
            <li>Designed and built custom UIs using React and Tailwind CSS</li>
            <li>Worked closely with clients to gather requirements and deliver solutions on time</li>
            <li>Created projects such as <strong>Lani Builders</strong>, <strong>Piperke</strong>, and <strong>Pet Expo</strong></li>
            <li>Ensured mobile responsiveness, performance optimization, and SEO best practices</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
<section id="projects" className="min-h-screen w-full bg-black text-white font-mono py-16 px-4 md:px-8 object-cover bg-cover bg-no-repeat"
        >
                <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold mb-4 text-center">My Projects</h2>
                <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                <div className="grid md:grid-cols-2 gap-8 mt-6">
                    {projects.map((project) => (
                        <div 
                            key={project.id}
                            className={`bg-gray-900 rounded-lg overflow-hidden transition-all duration-300 ${expandedProject === project.id ? 'expanded' : ''}`}
                        >
                            <div 
                                className={`h-48 flex items-center justify-center cursor-pointer object-cover bg-cover bg-center`}
                                style={{ backgroundImage: `url(${project.bgImage})` }}
                                onClick={() => toggleExpand(project.id)}
                            >
                            </div>
                            
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
                                </div>
                                
                                <p className="text-gray-300 mb-4">{project.description}</p>
                                
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="text-xs bg-gray-800 px-2 py-1 rounded">{tech}</span>
                                    ))}
                                </div>
                                
                                {expandedProject === project.id && (
                                    <div className="mt-4 space-y-4 animate-fadeIn">
                                        <p className="text-gray-300">{project.longDescription}</p>
                                        <div className="flex gap-4">
                                            {project.links.map((link, index) => (
                                                <a 
                                                    key={index}
                                                    href={link.url} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className={`inline-block ${link.type === 'demo' ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-500 hover:bg-blue-600'} text-white font-medium py-2 px-4 rounded transition-colors`}
                                                >
                                                    {link.type === 'demo' ? 'View Demo' : 'View Code'}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                
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
                    ))}
                </div>
            </div>

            <style>{`
                .expanded {
                    box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.3);
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out forwards;
                }
            `}</style>
        </section>
        <section id="contact" className="relative min-h-screen w-full bg-black text-white font-mono py-16 px-4 md:px-8">
  <div 
    className="absolute inset-0 bg-no-repeat bg-cover bg-center"
    style={{ 
      backgroundImage: `url(${section4})`,
      filter: 'blur(3px)',
      opacity: 0.9
    }}
  />
  
  <div className="absolute inset-0 bg-black/50 z-0"></div>
  
  <div className="relative z-10 max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4 text-white">Get In Touch</h2>
      <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
      <p className="mt-6 text-white max-w-2xl mx-auto">
        Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
      </p>
    </div>
    
    <div className="grid md:grid-cols-2 gap-12">
      <div className="bg-gray-900/70 backdrop-blur-sm p-8 rounded-xl">
        <h3 className="text-2xl font-semibold mb-6 text-blue-400">Contact Information</h3>
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="bg-blue-600/20 p-3 rounded-lg mr-4">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <div>
              <h4 className="font-medium text-white mb-1">Email</h4>
              <a href="mailto:Redoncanal1@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                Redoncanal1@gmail.com
              </a>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-blue-600/20 p-3 rounded-lg mr-4">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
            </div>
            <div>
              <h4 className="font-medium text-white mb-1">Phone</h4>
              <a href="tel:+355693606568" className="text-gray-300 hover:text-blue-400 transition-colors">
                +355 69 360 6568
              </a>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-blue-600/20 p-3 rounded-lg mr-4">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <div>
              <h4 className="font-medium text-white mb-1">Location</h4>
              <p className="text-gray-300">Tirana, Albania</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6 text-blue-400">Connect With Me</h3>
          <div className="flex space-x-4">
            <a href="https://github.com/redoncanaj1" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://gitlab.com/Redoncanaj" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
              <span className="sr-only">GitLab</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.844.904a1.007 1.007 0 00-.955.692l-2.53 7.783c0 .007-.005.012-.007.02L.07 13.335a1.437 1.437 0 00.522 1.607l11.072 8.045a.566.566 0 00.67-.004l11.074-8.04a1.436 1.436 0 00.522-1.61l-1.26-3.867v-.008l-2.525-7.785a1.006 1.006 0 00-.957-.684.987.987 0 00-.949.69l-2.408 7.408H8.203l-2.41-7.408a.987.987 0 00-.943-.69h-.006zm-.006 1.42l2.174 6.678H2.674l2.164-6.678zm14.328 0l2.168 6.678h-4.342l2.174-6.678zm-10.594 7.81h6.862l-2.15 6.618L12 20.693l-5.328-3.758-2.168-6.666z" />
              </svg>
            </a>
            <a href="https://al.linkedin.com/in/redon-canaj-2ab666136" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gray-900/70 backdrop-blur-sm p-8 rounded-xl">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-white mb-1">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              onChange={handleInputChange}
              value={formData.message}
              rows={4}
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            ></textarea>
          </div>

          {submitMessage && (
            <div className={`p-3 rounded-lg ${submitMessage.includes('Thank you') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {submitMessage}
            </div>
          )}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded transition-colors duration-300"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
        </>
        );
    };


    export default Home;



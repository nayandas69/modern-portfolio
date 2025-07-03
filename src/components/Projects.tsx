import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GithubLogo, Globe, X } from 'phosphor-react';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: string;
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Modern e-commerce solution with React and Node.js',
      longDescription: 'A full-featured e-commerce platform built with React, Node.js, and PostgreSQL. Features include user authentication, product catalog, shopping cart, payment integration with Stripe, order management, and admin dashboard. The application is fully responsive and optimized for performance.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
      category: 'web',
      githubUrl: '#',
      liveUrl: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative project management tool',
      longDescription: 'A comprehensive task management application that helps teams collaborate effectively. Built with React and Firebase, it features real-time updates, drag-and-drop functionality, team collaboration, file attachments, and detailed analytics. The app supports multiple project views including Kanban boards and calendar views.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Firebase', 'Material-UI', 'TypeScript'],
      category: 'web',
      githubUrl: '#',
      liveUrl: '#',
      featured: true,
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather tracking application',
      longDescription: 'A beautiful weather dashboard that provides real-time weather information for multiple locations. Features include current weather conditions, 7-day forecasts, weather maps, severe weather alerts, and location-based recommendations. Built with React and integrated with multiple weather APIs for accurate data.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Weather API', 'Chart.js', 'CSS3'],
      category: 'web',
      githubUrl: '#',
      liveUrl: '#',
      featured: false,
    },
    {
      id: 4,
      title: 'Mobile Banking App',
      description: 'Secure mobile banking solution',
      longDescription: 'A secure mobile banking application built with React Native. Features include account management, transaction history, bill payments, money transfers, budget tracking, and biometric authentication. The app follows banking security standards and provides a seamless user experience across iOS and Android platforms.',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'Redux', 'Node.js', 'MongoDB'],
      category: 'mobile',
      githubUrl: '#',
      liveUrl: '#',
      featured: true,
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'Personal portfolio with modern design',
      longDescription: 'A modern, responsive portfolio website showcasing my work and skills. Built with React and Framer Motion for smooth animations. Features include project showcase, skills visualization, contact form, blog section, and dark/light theme toggle. The site is optimized for performance and SEO.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'Netlify'],
      category: 'design',
      githubUrl: '#',
      liveUrl: '#',
      featured: false,
    },
    {
      id: 6,
      title: 'AI Chat Assistant',
      description: 'Intelligent chatbot with natural language processing',
      longDescription: 'An AI-powered chat assistant that can understand and respond to natural language queries. Built with Python and integrated with OpenAI GPT models. Features include context awareness, multi-language support, conversation history, and integration with various APIs for enhanced functionality.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'OpenAI API', 'Flask', 'React', 'WebSocket'],
      category: 'ai',
      githubUrl: '#',
      liveUrl: '#',
      featured: true,
    },
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Apps' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'design', name: 'Design' },
    { id: 'ai', name: 'AI/ML' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container-max section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A collection of projects that showcase my skills and passion for creating 
            innovative digital solutions.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-primary-500 text-white'
                  : 'bg-dark-800 text-gray-300 hover:bg-dark-700'
              }`}
              data-cursor="hover"
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-effect rounded-xl overflow-hidden group cursor-pointer"
                onClick={() => setSelectedProject(project)}
                data-cursor="hover"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-primary-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-dark-800 text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-dark-800 text-gray-300 rounded text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.githubUrl}
                      onClick={(e) => e.stopPropagation()}
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                      data-cursor="hover"
                    >
                      <GithubLogo size={20} />
                    </a>
                    <a
                      href={project.liveUrl}
                      onClick={(e) => e.stopPropagation()}
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                      data-cursor="hover"
                    >
                      <Globe size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="glass-effect rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 md:h-80 object-cover rounded-t-2xl"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 bg-dark-900/80 text-white p-2 rounded-full hover:bg-dark-800 transition-colors duration-300"
                    data-cursor="hover"
                  >
                    <X size={20} />
                  </button>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-3xl font-display font-bold text-white">
                      {selectedProject.title}
                    </h3>
                    {selectedProject.featured && (
                      <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-white">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-dark-800 border border-dark-700 text-gray-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={selectedProject.githubUrl}
                      className="btn-secondary flex items-center space-x-2"
                      data-cursor="hover"
                    >
                      <GithubLogo size={20} />
                      <span>View Code</span>
                    </a>
                    <a
                      href={selectedProject.liveUrl}
                      className="btn-primary flex items-center space-x-2"
                      data-cursor="hover"
                    >
                      <Globe size={20} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CalendarBlank, MapPin } from 'phosphor-react';

interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  logo: string;
  current: boolean;
}

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences: ExperienceItem[] = [
    {
      id: 1,
      company: 'TechCorp Solutions',
      position: 'Senior Full Stack Developer',
      duration: '2022 - Present',
      location: 'San Francisco, CA',
      description: [
        'Led development of microservices architecture serving 100k+ daily active users',
        'Mentored junior developers and established coding standards for the team',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Collaborated with product team to deliver features ahead of schedule'
      ],
      logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100',
      current: true,
    },
    {
      id: 2,
      company: 'StartupXYZ',
      position: 'Full Stack Developer',
      duration: '2020 - 2022',
      location: 'New York, NY',
      description: [
        'Built and maintained React-based web applications with Node.js backends',
        'Designed and implemented RESTful APIs serving mobile and web clients',
        'Optimized database queries resulting in 40% performance improvement',
        'Participated in agile development process and sprint planning'
      ],
      logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100',
      current: false,
    },
    {
      id: 3,
      company: 'Digital Agency Pro',
      position: 'Frontend Developer',
      duration: '2019 - 2020',
      location: 'Los Angeles, CA',
      description: [
        'Developed responsive websites for clients across various industries',
        'Collaborated with designers to implement pixel-perfect UI components',
        'Integrated third-party APIs and payment gateways',
        'Maintained and updated existing client websites'
      ],
      logo: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=100',
      current: false,
    },
    {
      id: 4,
      company: 'Freelance',
      position: 'Web Developer',
      duration: '2018 - 2019',
      location: 'Remote',
      description: [
        'Delivered custom web solutions for small businesses and startups',
        'Managed complete project lifecycle from requirements to deployment',
        'Built e-commerce platforms and content management systems',
        'Provided ongoing maintenance and technical support'
      ],
      logo: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=100',
      current: false,
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container-max section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            My professional journey through various roles and companies, 
            building expertise in modern web development.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-accent-500" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-dark-950 z-10">
                  {experience.current && (
                    <div className="absolute inset-0 bg-primary-500 rounded-full animate-ping" />
                  )}
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass-effect rounded-xl p-6 hover:border-primary-500/50 transition-all duration-300"
                    data-cursor="hover"
                  >
                    <div className="flex items-start space-x-4 mb-4">
                      <img
                        src={experience.logo}
                        alt={experience.company}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-1">
                          {experience.position}
                        </h3>
                        <h4 className="text-primary-400 font-medium mb-2">
                          {experience.company}
                          {experience.current && (
                            <span className="ml-2 px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                              Current
                            </span>
                          )}
                        </h4>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-gray-400 text-sm">
                          <div className="flex items-center space-x-1">
                            <CalendarBlank size={16} />
                            <span>{experience.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin size={16} />
                            <span>{experience.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {experience.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-300 text-sm flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
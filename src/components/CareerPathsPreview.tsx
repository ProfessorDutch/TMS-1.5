import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Code, Wrench, Heart, BookOpen, Users, Star, GraduationCap, Briefcase, Sprout, Target } from 'lucide-react';

const LEARNING_URL = 'https://learning.themustardseed.co';

const careerPaths = [
  {
    title: 'Technology',
    icon: <Code className="w-8 h-8 text-patriot-red" />,
    description: 'Digital skills for the modern workplace',
    paths: [
      { name: 'Web & Mobile Development', path: '/courses/web-development' },
      { name: 'IT Support & Networking', path: '/courses/it-support' },
      { name: 'Digital Marketing', path: '/courses/digital-marketing' },
      { name: 'Data Analytics', path: '/courses/data-analytics' },
      { name: 'Cybersecurity Fundamentals', path: '/courses/cybersecurity' }
    ]
  },
  {
    title: 'Trades',
    icon: <Wrench className="w-8 h-8 text-patriot-red" />,
    description: 'Hands-on skilled labor training',
    paths: [
      { name: 'Electrical & Electronics', path: '/courses/electrical' },
      { name: 'HVAC & Plumbing', path: '/courses/hvac-plumbing' },
      { name: 'Automotive Service', path: '/courses/automotive' },
      { name: 'Construction Skills', path: '/courses/construction' },
      { name: 'Welding Fundamentals', path: '/courses/welding' }
    ]
  },
  {
    title: 'Service Industry',
    icon: <Heart className="w-8 h-8 text-patriot-red" />,
    description: 'Customer-focused career preparation',
    paths: [
      { name: 'Healthcare Services', path: '/courses/healthcare' },
      { name: 'Hospitality Management', path: '/courses/hospitality' },
      { name: 'Retail Operations', path: '/courses/retail' },
      { name: 'Food Service', path: '/courses/food-service' },
      { name: 'Customer Service Excellence', path: '/courses/customer-service' }
    ]
  },
  {
    title: 'Life Skills',
    icon: <GraduationCap className="w-8 h-8 text-patriot-red" />,
    description: 'Essential skills for personal success',
    paths: [
      { name: 'Financial Literacy', path: '/courses/financial-literacy' },
      { name: 'Communication Skills', path: '/courses/communication' },
      { name: 'Time Management', path: '/courses/time-management' },
      { name: 'Personal Development', path: '/courses/personal-development' },
      { name: 'Health & Wellness', path: '/courses/health-wellness' }
    ]
  },
  {
    title: 'First Steps',
    icon: <Sprout className="w-8 h-8 text-patriot-red" />,
    description: 'Foundation for career exploration',
    paths: [
      { name: 'Career Discovery', path: '/courses/career-discovery' },
      { name: 'Resume Building', path: '/courses/resume-building' },
      { name: 'Interview Preparation', path: '/courses/interview-prep' },
      { name: 'Professional Etiquette', path: '/courses/professional-etiquette' },
      { name: 'Workplace Ethics', path: '/courses/workplace-ethics' }
    ]
  },
  {
    title: 'Sponsored Jobs',
    icon: <Briefcase className="w-8 h-8 text-patriot-red" />,
    description: 'Direct paths to employment',
    paths: [
      { name: 'Apprenticeship Programs', path: '/programs/apprenticeships' },
      { name: 'Entry-level Positions', path: '/programs/entry-level' },
      { name: 'Internship Opportunities', path: '/programs/internships' },
      { name: 'On-the-job Training', path: '/programs/job-training' },
      { name: 'Partner Company Placements', path: '/programs/partner-placements' }
    ]
  }
];

export default function CareerPathsPreview() {
  const navigate = useNavigate();

  const handlePathClick = (path: string) => {
    window.open(LEARNING_URL, '_blank');
  };

  return (
    <div>
      <div className="text-center mb-12">
        <BookOpen className="w-12 h-12 text-patriot-red mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-patriot-navy mb-4">Career Paths</h2>
        <p className="text-xl text-patriot-blue max-w-2xl mx-auto mb-8">
          Discover opportunities for growth and development in various industries
        </p>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 max-w-2xl mx-auto">
          <p className="text-patriot-navy">
            <span className="font-semibold">Coming Soon:</span> These programs will be unlocked when we reach 1,000 monthly subscribers. Current progress: 0/1000
          </p>
          <div className="mt-2 h-2 bg-gray-200 rounded-full">
            <div className="h-full bg-patriot-red rounded-full" style={{ width: '0%' }} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {careerPaths.map((path, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl border border-gray-100 shadow-md p-6 transform transition-all duration-300 hover:shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              {path.icon}
              <h3 className="text-xl font-bold text-patriot-navy">{path.title}</h3>
            </div>
            <p className="text-patriot-blue mb-4">{path.description}</p>
            <ul className="space-y-3">
              {path.paths.map((item, pathIndex) => (
                <li key={pathIndex}>
                  <button 
                    onClick={() => handlePathClick(item.path)}
                    className="flex items-center gap-2 w-full text-left hover:text-patriot-red transition-colors"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-patriot-red" />
                    <span className="text-patriot-gray hover:text-patriot-red">{item.name}</span>
                  </button>
                </li>
              ))}
            </ul>
            <a 
              href={LEARNING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-6 bg-patriot-red text-white py-3 rounded-full font-semibold hover:bg-patriot-crimson transition-colors inline-block text-center"
            >
              View All Courses
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
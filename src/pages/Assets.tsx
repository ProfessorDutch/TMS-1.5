import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Layout, BookOpen, Heart, Star, Users } from 'lucide-react';

export default function Assets() {
  const pages = [
    { path: '/', label: 'Home', icon: <Heart className="w-5 h-5" /> },
    { path: '/about', label: 'About', icon: <BookOpen className="w-5 h-5" /> },
    { path: '/careers', label: 'Career Paths', icon: <Star className="w-5 h-5" /> },
    { path: '/support', label: 'Support', icon: <Heart className="w-5 h-5" /> },
    { path: '/contact', label: 'Contact', icon: <Users className="w-5 h-5" /> },
    { path: '/donate', label: 'Donation', icon: <Heart className="w-5 h-5" /> },
    { path: '/privacy', label: 'Privacy Policy', icon: <FileText className="w-5 h-5" /> },
    { path: '/terms', label: 'Terms of Service', icon: <FileText className="w-5 h-5" /> },
    { path: '/join-movement', label: 'Join Movement', icon: <Users className="w-5 h-5" /> },
    { path: '/business-support', label: 'Business Support', icon: <Star className="w-5 h-5" /> },
    { path: '/business-directory', label: 'Business Directory', icon: <Layout className="w-5 h-5" /> },
    { path: '/claim-business', label: 'Claim Business', icon: <Star className="w-5 h-5" /> }
  ];

  const components = [
    { name: 'Ambassador Form', description: 'Form for becoming an ambassador' },
    { name: 'Business Claim Form', description: 'Form for claiming a business listing' },
    { name: 'Business Intake Form', description: 'Form for adding a new business' },
    { name: 'Business Questionnaire', description: 'Questions for business partnership' },
    { name: 'Business Search', description: 'Search functionality for businesses' },
    { name: 'Business Map', description: 'Interactive map of businesses' },
    { name: 'Business List', description: 'List view of businesses' },
    { name: 'Business Card', description: 'Individual business display card' },
    { name: 'Business Badges', description: 'Badge system for business contributions' },
    { name: 'Church Finder', description: 'Tool to find and claim churches' },
    { name: 'Church Search', description: 'Search functionality for churches' },
    { name: 'Donation Form', description: 'Form for making donations' },
    { name: 'Memory Share Form', description: 'Form for sharing memories' },
    { name: 'Monthly Blessing Circle', description: 'Monthly subscription component' },
    { name: 'Power Giving', description: 'One-time donation component' },
    { name: 'Impact Dashboard', description: 'Display of community impact' },
    { name: 'Journey Ahead', description: 'Roadmap visualization' },
    { name: 'Verification Form', description: 'Form for business verification' }
  ];

  const businessBadges = [
    { name: 'Legacy Builder', description: 'Top tier business supporter' },
    { name: 'Harvest Partner', description: 'Mid-tier business supporter' },
    { name: 'Seed Sponsor', description: 'Entry-level business supporter' },
    { name: 'Course Creator', description: 'Contributed to educational content' },
    { name: 'Youth Mentor', description: 'Provides mentorship opportunities' }
  ];

  return (
    <main className="flex-1">
      <section className="py-12 bg-gradient-to-br from-patriot-cream to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <Layout className="w-12 h-12 text-patriot-red" />
            <h1 className="text-4xl font-bold text-patriot-navy">Site Assets</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Pages */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-patriot-navy mb-4">Pages</h2>
              <div className="space-y-2">
                {pages.map((page) => (
                  <Link
                    key={page.path}
                    to={page.path}
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-patriot-cream transition-colors"
                  >
                    {page.icon}
                    <span className="text-patriot-blue">{page.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Components */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-patriot-navy mb-4">Components</h2>
              <div className="space-y-2">
                {components.map((component) => (
                  <div
                    key={component.name}
                    className="p-3 rounded-lg border border-gray-200"
                  >
                    <h3 className="font-semibold text-patriot-navy">{component.name}</h3>
                    <p className="text-sm text-patriot-blue">{component.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Badges */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-patriot-navy mb-4">Business Badges</h2>
              <div className="space-y-2">
                {businessBadges.map((badge) => (
                  <div
                    key={badge.name}
                    className="p-3 rounded-lg border border-gray-200"
                  >
                    <h3 className="font-semibold text-patriot-navy">{badge.name}</h3>
                    <p className="text-sm text-patriot-blue">{badge.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
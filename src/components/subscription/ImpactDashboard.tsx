import React from 'react';
import { Users, GraduationCap, BookOpen, Target } from 'lucide-react';

interface ImpactMetrics {
  totalSeeds: number;
  studentsSupported: number;
  coursesEnabled: number;
  communityMembers: number;
}

interface ImpactDashboardProps {
  metrics: ImpactMetrics;
}

export default function ImpactDashboard({ metrics }: ImpactDashboardProps) {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <Target className="w-12 h-12 text-patriot-red mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-patriot-navy mb-4">
            Your Impact Journey
          </h2>
          <p className="text-xl text-patriot-blue">
            See how your monthly blessings are transforming young lives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-patriot-cream rounded-xl p-6 text-center">
            <BookOpen className="w-8 h-8 text-patriot-red mx-auto mb-3" />
            <div className="text-3xl font-bold text-patriot-navy mb-2">
              {metrics.totalSeeds}
            </div>
            <p className="text-patriot-blue">Mustard Seeds Funded</p>
          </div>

          <div className="bg-patriot-cream rounded-xl p-6 text-center">
            <GraduationCap className="w-8 h-8 text-patriot-red mx-auto mb-3" />
            <div className="text-3xl font-bold text-patriot-navy mb-2">
              {metrics.studentsSupported}
            </div>
            <p className="text-patriot-blue">Students Supported</p>
          </div>

          <div className="bg-patriot-cream rounded-xl p-6 text-center">
            <BookOpen className="w-8 h-8 text-patriot-red mx-auto mb-3" />
            <div className="text-3xl font-bold text-patriot-navy mb-2">
              {metrics.coursesEnabled}
            </div>
            <p className="text-patriot-blue">Courses Enabled</p>
          </div>

          <div className="bg-patriot-cream rounded-xl p-6 text-center">
            <Users className="w-8 h-8 text-patriot-red mx-auto mb-3" />
            <div className="text-3xl font-bold text-patriot-navy mb-2">
              {metrics.communityMembers}
            </div>
            <p className="text-patriot-blue">Community Members</p>
          </div>
        </div>
      </div>
    </section>
  );
}
import React from 'react';

interface TimelineItem {
  date: string;
  title: string;
  subtitle?: string;
  description: string[];
}

interface TimelineSectionProps {
  items: TimelineItem[];
}

const TimelineSection: React.FC<TimelineSectionProps> = ({ items }) => {
  return (
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-white/20"></div>

      {/* Timeline Items */}
      <div className="space-y-12">
        {items.map((item, index) => (
          <div key={index} className="relative pl-12">
            {/* Dot */}
            <div className="absolute left-[14px] top-1.5 w-3 h-3 rounded-full bg-white/80"></div>

            {/* Content */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <span className="text-sm text-white/60">{item.date}</span>
              <h3 className="text-xl font-bold mt-1">{item.title}</h3>
              {item.subtitle && (
                <h4 className="text-lg text-white/80 mt-1">{item.subtitle}</h4>
              )}
              <div className="mt-4 space-y-2">
                {item.description.map((desc, i) => (
                  <p key={i} className="text-white/70">{desc}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TimelineSection;
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Code } from 'lucide-react';

const experiences = [
  {
    title: "Backend Developer",
    company: "Mindcrew Technologies",
    date: "July 2023 - Present",
    icon: Code,
    points: [
      "A technology company specializing in software development and innovation",
      "Developed and maintained RESTful APIs using Node.js and Express.js for backend systems",
      "Designed and implemented data models and querying using MongoDB",
      "Contributed to the development of web applications and microservices architecture",
      "Collaborated with cross-functional teams throughout the software development life cycle",
      "Implemented user authentication, authorization, and security best practices"
    ]
  }
]
export const Experience = () => {
  return (
    <section className="py-20 bg-gray-900" id="experience">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Work Experience</h2>
        <VerticalTimeline>
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ 
                background: '#1f2937', 
                color: '#fff',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              }}
              contentArrowStyle={{ borderRight: '7px solid #1f2937' }}
              date={exp.date}
              iconStyle={{ background: '#4f46e5', color: '#fff' }}
              icon={<exp.icon />}
            >
              <div className="hover:scale-[1.02] transition-transform duration-200">
                <h3 className="text-xl font-bold">{exp.title}</h3>
                <h4 className="text-lg text-indigo-400">{exp.company}</h4>
                <ul className="mt-4 space-y-2">
                  {exp.points.map((point, idx) => (
                    <li 
                      key={idx} 
                      className="text-gray-300 flex items-start gap-2"
                    >
                      <span className="text-indigo-400 mt-1.5">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}

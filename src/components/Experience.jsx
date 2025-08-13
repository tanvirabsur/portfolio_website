
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      role: 'Frontend Developer',
      company: 'Tech Solutions Inc.',
      duration: 'Jan 2023 - Present',
      responsibilities: [
        'Developed and maintained user interfaces for web applications using React and Redux.',
        'Collaborated with designers and backend developers to implement new features.',
        'Improved website performance and accessibility.'
      ]
    },
    {
      role: 'Web Developer Intern',
      company: 'Creative Agency',
      duration: 'May 2022 - Aug 2022',
      responsibilities: [
        'Assisted in the development of WordPress websites for clients.',
        'Created and updated website content.',
        'Learned about SEO best practices and web hosting.'
      ]
    }
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Experience</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            My Professional Journey
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <dt>
                  <p className="text-lg leading-6 font-medium text-gray-900">{exp.role} at {exp.company}</p>
                  <p className="mt-1 text-base text-gray-500">{exp.duration}</p>
                </dt>
                <dd className="mt-2 ml-6 text-base text-gray-500">
                  <ul className="list-disc space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

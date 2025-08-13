
import React from 'react';

const Education = () => {
  const education = [
    // {
    //   degree: 'Bachelor of Science in Computer Science',
    //   institution: 'University of Example',
    //   year: '2020-2024',
    //   details: 'Relevant coursework in Data Structures, Algorithms, Web Development, and Artificial Intelligence.'
    // },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Raihan School and college',
      year: '2023-2025',
      details: 'Focused on commarce stream with Accounting, Management, and Mathematics.'
    }
  ];

  return (
    <div className="py-12 bg-white">
      <div id='education' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Education</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            My Academic Background
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {education.map((edu, index) => (
              <div key={index} className="relative">
                <dt>
                  <p className="text-lg leading-6 font-medium text-gray-900">{edu.degree}</p>
                  <p className="mt-1 text-base text-gray-500">{edu.institution} - {edu.year}</p>
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  {edu.details}
                </dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

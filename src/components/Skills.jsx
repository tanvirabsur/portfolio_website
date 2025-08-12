import React from 'react';

const Skills = () => {
    return (
        <section id="skills" class="py-20 bg-gray-800">
            <div class="container mx-auto px-6">
                <h2 class="text-4xl font-bold text-center mb-12" data-aos="fade-down">My Skills</h2>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div class="p-6 bg-gray-900 rounded-lg transform hover:scale-105 transition-transform duration-300" data-aos="fade-up">
                        <svg class="w-16 h-16 mx-auto mb-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                        <h3 class="text-xl font-bold">HTML5</h3>
                    </div>
                    <div class="p-6 bg-gray-900 rounded-lg transform hover:scale-105 transition-transform duration-300" data-aos="fade-up" data-aos-delay="100">
                        <svg class="w-16 h-16 mx-auto mb-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h8"></path></svg>
                        <h3 class="text-xl font-bold">CSS3</h3>
                    </div>
                    <div class="p-6 bg-gray-900 rounded-lg transform hover:scale-105 transition-transform duration-300" data-aos="fade-up" data-aos-delay="200">
                        <svg class="w-16 h-16 mx-auto mb-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5z"></path></svg>
                        <h3 class="text-xl font-bold">Tailwind CSS</h3>
                    </div>
                    <div class="p-6 bg-gray-900 rounded-lg transform hover:scale-105 transition-transform duration-300" data-aos="fade-up" data-aos-delay="300">
                        <svg class="w-16 h-16 mx-auto mb-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h6M9 14h6m2-5a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <h3 class="text-xl font-bold">Daisy UI</h3>
                    </div>
                    <div class="p-6 bg-gray-900 rounded-lg transform hover:scale-105 transition-transform duration-300" data-aos="fade-up" data-aos-delay="400">
                        <svg class="w-16 h-16 mx-auto mb-4 text-purple-400" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M23.414 1.586l-2.828 2.828-2.828-2.828-2.828 2.828-2.828-2.828-2.828 2.828-2.828-2.828-5.657 5.657 2.828 2.828-2.828 2.828 2.828 2.828-2.828 2.828 2.828 2.828-2.828 2.828 5.657 5.657 2.828-2.828 2.828 2.828 2.828-2.828 2.828 2.828 2.828-2.828 2.828 2.828 5.657-5.657-2.828-2.828 2.828-2.828-2.828-2.828 2.828-2.828-2.828-2.828zm-8.485 22.627l-2.828-2.828-2.828 2.828-2.828-2.828-2.828 2.828-2.828-2.828-1.414 1.414 2.828 2.828 2.828-2.828 2.828 2.828 2.828-2.828 2.828 2.828zm8.485-8.485l-2.828-2.828-2.828 2.828-2.828-2.828-2.828 2.828-2.828-2.828-1.414 1.414 2.828 2.828 2.828-2.828 2.828 2.828 2.828-2.828 2.828 2.828z"></path></svg>
                        <h3 class="text-xl font-bold">Node.js</h3>
                    </div>
                    <div class="p-6 bg-gray-900 rounded-lg transform hover:scale-105 transition-transform duration-300" data-aos="fade-up" data-aos-delay="500">
                        <svg class="w-16 h-16 mx-auto mb-4 text-purple-400" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16 0l-14 8 14 8 14-8-14-8zm-14 16l14 8 14-8-14-8-14 8z"></path></svg>
                        <h3 class="text-xl font-bold">Express.js</h3>
                    </div>
                    <div class="p-6 bg-gray-900 rounded-lg transform hover:scale-105 transition-transform duration-300" data-aos="fade-up" data-aos-delay="600">
                        <svg class="w-16 h-16 mx-auto mb-4 text-purple-400" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M32 16c0-8.837-7.163-16-16-16s-16 7.163-16 16c0 8.837 7.163 16 16 16s16-7.163 16-16zm-29.333 0c0-7.362 5.972-13.333 13.333-13.333s13.333 5.972 13.333 13.333c0 7.362-5.972 13.333-13.333 13.333s-13.333-5.972-13.333-13.333zm18.667-5.333h-10.667v2.667h10.667v-2.667zm0 5.333h-10.667v2.667h10.667v-2.667zm-13.333-2.667h-2.667v2.667h2.667v-2.667z"></path></svg>
                        <h3 class="text-xl font-bold">React.js</h3>
                    </div>
                    <div class="p-6 bg-gray-900 rounded-lg transform hover:scale-105 transition-transform duration-300" data-aos="fade-up" data-aos-delay="700">
                        <svg class="w-16 h-16 mx-auto mb-4 text-purple-400" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16 0l-14 16h28l-14-16zm-14 32l14-16-14-16h-2l16 16-16 16h2z"></path></svg>
                        <h3 class="text-xl font-bold">Next.js</h3>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Skills;
import React from 'react';

const WorksFlow = () => {
    return (
        <section id="workflow" className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-down">My Workflow</h2>
                <div className="flex flex-col md:flex-row justify-center items-center text-center">
                    {/* <!-- Step 1 --> */}
                    <div className="p-6" data-aos="fade-up">
                        <div className="bg-gray-800 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                            <svg className="w-12 h-12 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V7.618a1 1 0 01.553-.894L9 4l6 3.618V16.382a1 1 0 01-.553.894L9 20z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l6-3.618V7.618L9 4 3 7.618v8.764L9 20z"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold">1. Plan</h3>
                        <p className="text-gray-400">Understanding project requirements and goals.</p>
                    </div>
                    <div className="text-gray-500 mx-4" data-aos="fade-up" data-aos-delay="100">&gt;</div>
                    {/* <!-- Step 2 --> */}
                    <div className="p-6" data-aos="fade-up" data-aos-delay="200">
                        <div className="bg-gray-800 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                            <svg className="w-12 h-12 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.364 1.118l1.52 4.674c.3.921-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.52-4.674a1 1 0 00-.364-1.118L2.49 9.11c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.52-4.674z"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold">2. Design</h3>
                        <p className="text-gray-400">Creating wireframes and UI/UX designs.</p>
                    </div>
                    <div className="text-gray-500 mx-4" data-aos="fade-up" data-aos-delay="300">&gt;</div>
                    {/* <!-- Step 3 --> */}
                    <div className="p-6" data-aos="fade-up" data-aos-delay="400">
                        <div className="bg-gray-800 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                            <svg className="w-12 h-12 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold">3. Develop</h3>
                        <p className="text-gray-400">Building the website with clean and efficient code.</p>
                    </div>
                    <div className="text-gray-500 mx-4" data-aos="fade-up" data-aos-delay="500">&gt;</div>
                    {/* <!-- Step 4 --> */}
                    <div className="p-6" data-aos="fade-up" data-aos-delay="600">
                        <div className="bg-gray-800 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                            <svg className="w-12 h-12 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold">4. Deploy</h3>
                        <p className="text-gray-400">Launching the website for the world to see.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorksFlow;
import React from 'react';

export default function About() {
  return (
    <div className="py-12 sm:py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 sm:mb-16 text-custom-pink">About</h2>
        <div className="space-y-6">
          <h3 className="text-3xl sm:text-4xl font-bold text-center text-custom-pink">
            I'm Alfred Nutile, your expert in intelligent automation
          </h3>
          <p className="text-base sm:text-lg text-gray-600 text-center">
            I get it. The world of automation, particularly with the emergence of AI and LLM agents, can be both exciting and overwhelming, and bring up lots of questions for business owners. What parts of my workflows are suited to AI-driven automation? How do I integrate LLM agents into my existing workflows? I'm not hugely technical, how do I manage all this AI automation?
          </p>
          <p className="text-base sm:text-lg text-gray-600 text-center">
            Don't worry - after over twenty-five years building applications and working with development teams, for the last few years I've been building my own AI agent-driven platform, and working with my existing clients (from large-scale companies to small agencies to freelancers) to automate parts or all of their workflows. Now I'm ready to help you! And I come with a bunch of proven solutions and ready-made examples for you to customize.
          </p>
          <div className="relative rounded-2xl overflow-hidden bg-[#2D2B3F] p-4 sm:p-6">
            <img 
              src="https://framerusercontent.com/images/RQlAdC0uXBe9cXNMSJSyERrslg.png" 
              alt="Alfred Nutile with experience stats" 
              className="w-full rounded-xl"
            />
          </div>
          <div className="space-y-4 text-base sm:text-lg text-center">
            <p>
              <a 
                href="https://youtube.com/@alfrednutile?si=M6jhYvFWK1YI1hK9" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-custom-pink hover:underline"
              >
                Take a look at my YouTube channel
              </a>
              {" "}where you'll see lots of examples of using automation and AI.
            </p>
            <p>
              <a 
                href="https://leanpub.com/php_and_llms" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-custom-pink hover:underline"
              >
                Buy my BOOK, "PHP and LLMs"
              </a>
              , where we explore the world of PHP, Laravel and AI Automations in day-to-day practical use.
            </p>
            <p>
              <a 
                href="https://sundance-solutions.mailcoach.app/larallama-app" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-custom-pink hover:underline"
              >
                Sign up for my newsletter
              </a>
              , or have a{" "}
              <a 
                href="https://medium.com/@alnutile" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-custom-pink hover:underline"
              >
                browse at some of my Medium articles
              </a>
              .
            </p>
          </div>
          <div className="text-center">
            <button 
              type="button"
              className="bg-custom-pink text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors"
            >
              Learn more about me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
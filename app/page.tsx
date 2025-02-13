import TypeWriter from './components/TypeWriter';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ScrollToTop from './components/ScrollToTop';

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <ScrollToTop />
      {/* Header Section */}
      <header className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              Angelo Cortez
            </h1>
            <h2 className="text-2xl text-gray-600 dark:text-gray-400 mt-2">
              <TypeWriter
                text="Developer and Real Estate Investor"
                delay={75}
              />
            </h2>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="container mx-auto px-4 py-8 fade-in-section">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Hey! I&apos;m Angelo Cortez, a software developer and AirBnB Superhost based in the SF Bay Area!
          <br />
          <br />
          I started off my career as a solutions engineer at Epic, where I did development on their risk of sepsis risk and deterioration index models for hospitals. Asynchronously, I started my masters in CS @ UW Madison, where I worked under Professor Dane Morgan working on materials machine learning research.
          <br />
          <br />
          After three years at Epic, I joined 8x8 as a software engineer where I&apos;ve built UCaaS and CCaaS automations for SMBs and enterprises, creating integrations that streamline operations and drive efficiency for customers&apos; contact centers. I also collaborate with customers on custom routing configurations to enhance call flow, automate interactions, and improve customer experience.
          <br />
          <br />
          My current interests are applications of AI in tax, finance, and real estate.
        </p>
      </section>

      {/* Projects Section */}
      <ProjectsSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-8 fade-in-section">
        <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
          <a href="https://github.com/angelotc"
            className="px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg 
                     hover:opacity-90 transition-all duration-300 hover:scale-105 
                     hover:shadow-lg hover:ring-2 hover:ring-gray-400 dark:hover:ring-gray-500">
            GitHub
          </a>
          <a href="https://linkedin.com/in/ajc0102"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:opacity-90 transition-opacity">
            LinkedIn
          </a>
          <a href="mailto:angelocortez102@gmail.com"
            className="px-4 py-2 bg-gray-600 dark:bg-gray-700 text-white rounded-lg hover:opacity-90 transition-opacity">
            Email Me
          </a>
        </div>
      </section>
    </div>
  );
}
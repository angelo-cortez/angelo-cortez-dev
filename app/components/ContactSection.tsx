export default function ContactSection() {
  return (
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
  );
} 
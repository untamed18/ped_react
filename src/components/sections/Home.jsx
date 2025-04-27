import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hello, I'm Opeyemi Daniyan
          </h1>

          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
            As a full-stack JavaScript developer and tech support engineer, I
            specialize in creating efficient web applications and providing
            effective technical solutions.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="https://drive.google.com/file/d/1v1_iMroqef3b6jBogmpImtWdkkaPt7SD/view?usp=sharing"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Get my Resume
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

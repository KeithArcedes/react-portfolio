import { Briefcase, Code, User } from "lucide-react";
import profileImage from "/public/profile.jpg"; // adjust if needed

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer
            </h3>

            <p className="text-muted-foreground">
              I'm a fresh graduate with a BS in Computer Science. I enjoy
              building responsive and user-friendly web applications using
              modern technologies.
            </p>

            <p className="text-muted-foreground">
              I'm eager to solve real-world problems with code and always
              looking to learn new skills and tools in web development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/Keith Arcedes Resume.pdf"
                download="Keith-Arcedes-Resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="w-full flex justify-center md:justify-end">
            <img
              src={profileImage}
              alt="Keith Arcedes"
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 object-cover rounded-full shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

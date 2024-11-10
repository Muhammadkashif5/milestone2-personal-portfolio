import React from "react";
import Project from "./Project";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <h2 className="section_title" data-aos="zoom-in">
        Projects
      </h2>
      <span className="section_subtitle" data-aos="zoom-in">
        Most recent work
      </span>

      <Project
        projects={[
          {
            imageURL: "/BookLand.JPG",
            title: "WHITE SPACE",
            demo: "https://assignment3-figmadesign.vercel.app/",
            description:
              "This project is a web page using React and TypeScript (TSX) by breaking the layout into reusable components for better maintainability and scalability. Each component was created in its own .tsx file and imported into the main page.tsx. I applied creative styling, including unique image borders and positioning techniques, to make the design visually appealing. The project is fully functional, and you can view the live version deployed on Vercel. The complete code is available on GitHub for reference. This project was a great opportunity to strengthen my skills in frontend development, modular design, and deployment.",
          },
          {
            imageURL: "/Createsmart.JPG",
            title: "Brand Name",
            demo: "https://assignment2-pixelperfectpage.vercel.app/",
            description: `<p>
            This project is a pixel-perfect web pages with Next.js and Tailwind CSS, using Figma designs as a blueprint. This powerful combination allows for rapid development, optimized performance, and stunning visuals. By leveraging the strengths of both tools, you can effortlessly transform your design ideas into functional, responsive websites.</p>`,
          },
          {
            imageURL: "/MBFX.JPG",
            title: "Alpha Company",
            demo: "https://assignment1-functionalweb.vercel.app/",
            description: `
              <p>This project is a fully responsive one-page website built using Next.js and Tailwind CSS. It includes five pages that demonstrate modern web development techniques, including custom loading and error pages. The project serves as a portfolio-style website showcasing my work, social media links, and more.</p>
              `,
          }
        ]}
      />
    </section>
  );
};

export default Projects;

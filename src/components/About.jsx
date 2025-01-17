import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          Hey there! I'm Vibhor Yadav, an aspiring Software Engineer with a passion for
          for learning,creating,and growing. My Portfolio showcases projects that 
          reflect my dedication and curiosity for Wed Development ."
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education & Training
        </h1>
        <span>
          Persuing Bachelor of Technology from Jaypee Institute of Information Technology (JIIT) , Noida.
          From (August , 2022 to July 2026).
          Currently i am a Pre final year Stuent.
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <span>
        I’m proficient in C++, C, Java, and Data Structures & Algorithms (DSA), with strong problem-solving skills. I also specialize in full-stack web development using the MERN stack (MongoDB, Express.js, React.js, Node.js). Passionate about writing clean, efficient code and continuously learning new technologies.
        </span>
        <br />
        <br />
        {/* <h1 className="text-green-600 font-semibold text-xl">
          Professional Experience
        </h1>
        <span>
          [Job Title], [Company/Organization], [Dates] [Brief description of
          responsibilities and achievements] [Job Title],
          [Company/Organization], [Dates] [Brief description of responsibilities
          and achievements] [Freelance/Contract Work], [Client/Organization],
          [Dates] [Brief description of projects and contributions]
        </span>
        <br />
        <br /> */}
        {/* <h1 className="text-green-600 font-semibold text-xl">
          Achievements & Awards
        </h1>
        <span>
          [Award/Recognition], [Organization/Institution], [Year] [Achievement],
          [Organization/Platform], [Year]
        </span>
        <br />
        <br /> */}
        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
        My mission is to leverage my expertise in programming, problem-solving, and full-stack development to create innovative, efficient solutions that make a real impact. I am committed to continuous learning and growth, always striving to deliver high-quality, user-centered applications that push the boundaries of technology.
        </p>
      </div>
    </div>
  );
}

export default About;

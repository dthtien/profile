import React from "react";

const CoverLetter = () => {
  return (
    <div className="max-w-2xl mx-auto p-4 text-base leading-relaxed">
      <p><strong>Tien Dau</strong><br />
      Melbourne, VIC<br />
      📞 +61 499 380 358<br />
      📧 <a href="mailto:tiendt2311@gmail.com" className="text-blue-600 underline">tiendt2311@gmail.com</a><br />
      <a href="https://github.com/dthtien" className="text-blue-600 underline">GitHub</a> | <a href="https://linkedin.com/in/dthtien" className="text-blue-600 underline">LinkedIn</a>
      </p>

      <p className="mt-4">
        {
          new Date().toLocaleDateString("en-AU", {
            year: "numeric",
            month: "long",
            day: "numeric"
          })
        }
      </p>

      <p className="mt-4">
        Dear Hiring Manager,
      </p>

      <p className="mt-4">
        I am writing to express my interest in a Full-Stack Developer position at the company. With over six years of experience building and maintaining scalable web applications using Ruby on Rails and modern JavaScript frameworks like ReactJS, I bring a strong balance of backend reliability and frontend user experience to your development team.
      </p>

      <p className="mt-4">
        In my current role at Global Health, I have led mission-critical initiatives such as upgrading legacy Rails applications, implementing CI/CD pipelines, and enhancing test coverage beyond 80%. At my previous position with Employment Hero, I collaborated with cross-functional teams to deliver secure, user-friendly platforms, integrated with multiple third-party providers. In addition to professional work, I actively contribute to open-source and develop side projects—from distributed workflow tools to real estate analytics platforms—reflecting my passion for clean, maintainable, and meaningful code.
      </p>

      <p className="mt-4">
        What excites me most about joining the company is the opportunity to contribute to impactful projects, learn from talented peers, and solve real-world problems at scale. I value efficient processes, collaborative environments, and thoughtful engineering practices.
      </p>

      <p className="mt-4">
        I’ve attached my resume for your consideration and would welcome the chance to further discuss how I can contribute to the company’s goals. Thank you for your time and attention.
      </p>

      <p className="mt-4">Warm regards,<br />
      <strong>Tien Dau</strong>
      </p>
    </div>
  );
};

export default CoverLetter;

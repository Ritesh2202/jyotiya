import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 font-sans transition-colors">
      <header className="bg-blue-800 dark:bg-blue-900 text-white p-6 text-center shadow-md flex flex-col items-center">
        <h1 className="text-4xl font-bold">Ritesh Vishwakarma</h1>
        <p className="text-xl">Application SME | Web Developer | Azure Certified</p>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="mt-4 px-4 py-2 rounded bg-white dark:bg-gray-700 text-blue-800 dark:text-white shadow"
        >
          Toggle {darkMode ? "Light" : "Dark"} Mode
        </button>
      </header>

      <motion.section className="p-8" id="about" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-lg max-w-3xl mx-auto">
          I am an experienced Application SME with 6+ years in the IT industry,
          currently working at Infosys, managing 9+ applications. My background includes
          .NET, React, SQL, Azure, and more. Previously worked at Wipro with strong
          experience in Citrix and VMware.
        </p>
      </motion.section>

      <motion.section className="bg-white dark:bg-gray-800 p-8" id="skills" initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <span className="bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded">React.js</span>
          <span className="bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded">.NET</span>
          <span className="bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded">SQL Server</span>
          <span className="bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded">Azure</span>
          <span className="bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded">ServiceNow</span>
          <span className="bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded">Tailwind CSS</span>
        </div>
      </motion.section>

      <motion.section className="p-8 bg-gray-50 dark:bg-gray-700" id="experience" initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <div className="space-y-4 max-w-4xl mx-auto">
          <div>
            <h3 className="text-lg font-bold">Infosys (Consultant) – 1.7 Years</h3>
            <p>
              Managing 9+ applications, handling production support, access audits, patching,
              SSL cert management, and Azure environments.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Wipro (Sr. System Engineer) – 4.3 Years</h3>
            <p>
              Worked as Citrix/VMware admin in a global support team. Resolved critical issues,
              maintained VDI infrastructure, and ensured uptime.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section className="p-8" id="certifications" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
        <ul className="list-disc list-inside text-lg">
          <li>Microsoft Certified: Azure Fundamentals (AZ-900)</li>
          <li>Microsoft Certified: Azure Administrator Associate (AZ-104)</li>
        </ul>
      </motion.section>

      <motion.section className="p-8 bg-white dark:bg-gray-800" id="contact" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-lg">Email: ritesh.v@email.com</p>
        <p className="text-lg">LinkedIn: linkedin.com/in/ritesh-v</p>
        <p className="text-lg">GitHub: github.com/riteshvishwakarma</p>
        <a
          href="/Ritesh_Vishwakarma_Resume.pdf"
          className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          download
        >
          Download Resume (PDF)
        </a>
      </motion.section>

      <footer className="text-center p-4 bg-blue-800 dark:bg-blue-900 text-white">
        &copy; 2025 Ritesh Vishwakarma. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
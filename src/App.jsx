import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import profilePic from '././assets/ritesh-profile.jpeg';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

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
      <img
        src={profilePic}
        alt="Ritesh Vishwakarma"
        className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover shadow-lg border-4 border-blue-500"
      />
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
        I am experienced Application SME and Consultant with 6.7+ years of expertise in <b>Production 
Support, Application Management, and Infrastructure Operations </b> across .NET, IIS, Windows 
Server, SQL Server, and Enterprise Applications. 
Skilled in 
Certificate Management, Windows Clustering and ITSM processes. 
Looking to leverage my expertise in a challenging Production Support / Application Support / 
Site Reliability Engineering role.
        </p>
      </motion.section>

      <motion.section className="bg-white dark:bg-gray-800 p-8" id="skills" initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <span className="bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded">React.js</span>
          <span className="bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded">.NET, PHP</span>
          <span className="bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded">MySQL, SQL Server</span>
          <span className="bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded">MS Azure</span>
          <span className="bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded">ServiceNow ITIL</span>
          <span className="bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded">Tailwind CSS</span>
          <span className="bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded">Windows Server</span>
          <span className="bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded">Splunk/NewRelic</span>
          <span className="bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded">Application Support</span>
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
            <p>
            Build, install, configure, and manage Windows Server and Cloud infrastructure to support 
business-critical applications. <p>
Administer Microsoft SQL Server environments, ensuring database performance, security, 
and availability. </p><p>
Oversee Microsoft IIS installation, configuration, and ongoing management to support 
web applications. </p><p>
Serve as an infrastructure expert bridging development and operations teams to facilitate 
seamless application deployments. </p>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Wipro (Sr. System Engineer) – 4.3 Years</h3>
            <p>
              Worked as Citrix/VMware admin in a global support team. Resolved critical issues,
              maintained VDI infrastructure, and ensured uptime.<p>
              Implemented Change requests for Certificate renewals of Web servers. 
Managed incident resolution using ITIL best practices, ensuring timely resolution within 
SLAs.   </p><p>
Developed and maintained monitoring alerts and dashboards to ensure system 
reliability.   </p><p>
Conducted root cause analysis to prevent recurring issues and improve operational 
performance.  </p>
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
        <p className="text-lg">Email: riteshvishwakarma588@email.com</p>
        <p className="text-lg">LinkedIn: www.linkedin.com/in/ritesh-vishwakarma-5187b120b</p>
        <p className="text-lg">GitHub: github.com/Ritesh2202</p>
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
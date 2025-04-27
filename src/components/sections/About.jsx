import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "Javascript Developer",
    "Tech Support Engr",
    "Quality Assurance Engr",
  ];

  const backendSkills = [
    "Node.js",
    "Java",
    "Express",
    "React",
    "TailwindCss",
    "Mongo DB",
    "Mysql",
    "Postman",
    "New Relic",
    "Datadog",
    "Git",
    "Jira",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate JavaScript Developer and Tech Support Engineer skilled
              in building scalable web applications and delivering innovative
              technical solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">
                  {" "}
                  Professional Headline
                </h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Relevant Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> Hnd in Computer Science </strong> - Ds Adegbenro Ict.
                  Polytechnic (2014-2019)
                </li>
                <li>
                  Relevant Coursework: Data Structures, Web Development, Cloud
                  Computing, graphics Design, Hardware Maintenance and Repair
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Technical Support Engineer at Cellulant corporation (Jan
                    2025 - Present){" "}
                  </h4>
                  <br />
                  <p>
                    <h5>
                      * Continuously monitor services with Zabbix, manage
                      incidents, and optimize system performance for seamless
                      transactions.
                      <br />* Perform terminal operations, execute scripts to
                      resolve issues, and provide second-level technical support
                      with engineering teams.
                    </h5>
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Technical Support Engineer at Seerbit Technologies (Feb 2022
                    - Dec 2024){" "}
                  </h4>
                  <br />
                  <p>
                    <h5>
                      * Handling customer queries, collaborating with teams to
                      improve support workflows, maintaining documentation, and
                      staying updated on product features and integrations.
                      <br />
                      *Acting as an escalation point for complex issues, setting
                      performance standards, and implementing automation to
                      boost support efficiency.
                    </h5>
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Dynamics 365 F&O Support Engineer at Tek Experts (Jan 2021 -
                    feb 2022){" "}
                  </h4>
                  <p>
                    Delivered expert Tier 2 support to global enterprise
                    customers, ensuring compliance with Microsoft policies,
                    escalating complex issues, managing support tickets, and
                    driving a 5-star client experience.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    ICT OFFICER at Eat 'n' Go Limited (feb 2020 - dec 2020){" "}
                  </h4>
                  <p>
                    Provide technical support by troubleshooting hardware,
                    software, and network issues, managing user accounts,
                    performing system maintenance, and ensuring smooth IT
                    operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

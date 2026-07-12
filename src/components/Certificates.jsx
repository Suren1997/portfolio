import React from "react";
import { Award, Calendar, ExternalLink, ShieldCheck } from "lucide-react";
import RisingAward from "../assets/Award.jpeg";
import Framework from "../assets/AI_FLUENCY.pdf";
import Limitation from "../assets/CAPABILITY.pdf";
import MCP from "../assets/MCP.pdf";
import ClaudeCoWork from "../assets/CLAUDE_COWORK.pdf";
import EU_Act from "../assets/EU_AI_ACT.pdf";

const Certificates = () => {
  const certifications = [
    {
      id: 1,
      title: "Rising Star Award",
      issue: "Solverminds",
      date: "JAN 2024",
      link: RisingAward,
      desc: "Awarded the 'Rising Star' recognition for excellence in team collaboration, delivering impactful results, and showing high potential for future leadership within the department.",
    },
    {
      id: 2,
      title: "Anthropic AI: Fluency Framework and Foundation",
      issue: "Anthropic",
      date: "JUN 2026",
      link: Framework,
      desc: "Completed the Anthropic AI Fluency curriculum, developing core competencies to leverage generative AI safely and effectively:",
    },
    {
      id: 3,
      title: "Anthropic AI:Capabilites and Limitations.",
      issue: "Anthropic",
      date: "JUN 2026",
      link: Limitation,
      desc: "Learned about the Mental model of AI underlying machine properties that cause AI to act the way it does",
    },
    {
      id: 4,
      title: "Model Context and Protocol",
      issue: "Anthropic",
      date: "JUN 2026",
      link: MCP,
      desc: "Gained Knowledge on how to communicate with external tools, databases, APIs, and applications in a standardized way",
    },
    {
      id: 5,
      title: "Claude CoWork",
      issue: "Anthropic",
      date: "JUN 2026",
      link: ClaudeCoWork,
      desc: "Claude AI as a collaborative teammate rather than just a chatbot that answers questions.",
    },
    {
      id: 6,
      title: "Understanding EU AI Act",
      issue: "Anthropic",
      date: "JUN 2026",
      link: EU_Act,
      desc: "Ensure AI systems are safe, transparent, trustworthy, and respect fundamental rights",
    },
  ];
  return (
    <section className="text-white py-20" id="certificates">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="mb-16">
          <p className="text-primary text-sm uppercase tracking-widest mb-2 font-semibold">
            Achievements
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Certifications
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              data-aos="zoom-in"
              className="group relative bg-[#111a3e] border border-[#1f1641] p-6 rounded-2xl transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_20px_-5px_rgba(6,162,194,0.2)]"
            >
              <div className="absolute -top-4 -right-4 bg-primary p-3 rounded-xl shadow-lg transform group-hover:rotate-12 transition-transform">
                <Award className="text-white" size={24} />
              </div>
              <div className="flex items-center gap-4 mb-4 text-xs text-gray-400">
                <span className="flex items-center gap-1">
                  <ShieldCheck size={14} className="text-primary" />
                  {cert.issue}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {cert.date}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              {/* Todo */}
              <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                {cert.desc}
              </p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-white transition-colors border-b border-transparent hover:border-white pb-1"
              >
                View Certificate <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;

"use client";

import { motion } from "framer-motion";
import { ExternalLink, Zap } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

import { projects } from "@/lib/projects";

export default function PortfolioClient() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      {/* Filter */}
      <div className="flex justify-center gap-4 mb-20 px-6 relative z-10">
        {["All", "Software", "Digital Marketing"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            aria-pressed={filter === cat}
            className={`px-6 py-3 rounded-xl text-sm font-bold transition-all border ${
              filter === cat
                ? "bg-brand-primary text-white border-brand-primary shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                : "bg-slate-950/80 text-white hover:text-brand-primary border-slate-700/50 backdrop-blur-md"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <section className="pb-32 px-6" aria-label="Portfolio projects">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {filteredProjects.map((project, idx) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative"
              itemScope
              itemType="https://schema.org/CreativeWork"
            >
              <meta itemProp="name" content={project.title} />
              <meta itemProp="description" content={project.description} />
              {project.link !== "#" && (
                <meta itemProp="url" content={project.link} />
              )}

              <div className="relative h-[400px] rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/90 backdrop-blur-md">
                <Image
                  src={project.image}
                  alt={`${project.title} — ${project.category} project by Web Axis Solutions`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={idx < 2}
                  loading={idx < 2 ? "eager" : "lazy"}
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-lg bg-brand-primary/20 border border-brand-primary/30 text-brand-primary text-[10px] font-black uppercase tracking-widest">
                      {project.category}
                    </span>
                    <span className="flex items-center gap-1 text-emerald-400 text-[10px] font-black uppercase tracking-widest bg-emerald-400/10 px-3 py-1 rounded-lg">
                      <Zap className="w-3 h-3" aria-hidden="true" />
                      {project.stats}
                    </span>
                  </div>
                  <h3 className="text-3xl font-black text-white mb-2 italic tracking-tighter uppercase">
                    {project.title}
                  </h3>
                  <p className="text-slate-200 text-sm mb-6 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between mt-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] text-slate-500 font-bold uppercase tracking-widest border border-slate-800 px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${project.title} website`}
                        className="text-brand-primary hover:text-white flex items-center gap-2 text-[10px] font-black uppercase tracking-widest transition-colors group/link"
                      >
                        Visit Site
                        <ExternalLink className="w-3 h-3 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
}

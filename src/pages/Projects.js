// src/pages/Projects.jsx

import PageLayout from "../components/PageLayout";
import { projects } from "../data/projectsData";
import { LinkIcon } from '@heroicons/react/24/outline';

export default function Projects() {
  return (
    <PageLayout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <h1 className="text-3xl font-extrabold text-white mb-10 border-b border-gray-700 pb-3">
          المشاريع 🚀
        </h1>

        {/* Project Grid */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => {
            return (

              <article
                key={project.id}
                className="
                    bg-gray-800/80 backdrop-blur rounded-xl shadow-xl 
                    overflow-hidden border border-gray-700 
                    transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]
                "
              >

                {/* Thumbnail */}
                {project.image && (
                  <img
                    src={project.image}
                    alt=""
                    className="w-full h-48 object-cover border-b border-gray-700"
                  />
                )}

                {/* Details */}
                <div className="p-5 flex flex-col">

                  {/* Title */}
                  <h2 className="text-xl font-semibold text-white mb-2">{project.title}</h2>

                  {/* Description */}
                  <p className="text-sm text-gray-400 mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Tags/Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-2 py-0.5 rounded-full bg-cyan-900/50 text-cyan-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <div className="mt-auto flex gap-3 pt-3 border-t border-gray-700/50">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-1 text-sm font-medium transition-colors text-green-400 hover:text-green-300`}
                        dir="rtl"
                      >
                        <LinkIcon className="h-4 w-4" />
                        رابط المشروع
                      </a>
                    )}
                  </div>

                </div>
              </article>
            );
          })}
        </div>
      </div>
    </PageLayout>
  );
}
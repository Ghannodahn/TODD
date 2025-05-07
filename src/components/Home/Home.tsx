import {
  Brain,
  ZapIcon,
  FileText,
  Palette,
  ArrowRightCircle
} from 'lucide-react'
import { Link } from 'react-router-dom'

const TODDHomepage = () => {
  const prototypes = [
    {
      icon: <Brain size={24} />,
      title: 'Modely',
      description:
        'Visual design modeling tool for creating Entity Relationship diagrams and other structured visual schemas',
      path: '/modely'
    },
    {
      icon: <FileText size={24} />,
      title: 'Recipes',
      description:
        'Culinary solution that generates recipes based on dietary requirements, available ingredients, and budget constraints',
      path: '/recipes'
    },
    {
      icon: <ZapIcon size={24} />,
      title: 'Prompty',
      description:
        'Structured prompt engineering tools for creating clear AI instructions, including templates for research, images, and projects',
      path: '/prompty'
    },
    {
      icon: <Palette size={24} />,
      title: 'Arty',
      description:
        'Art project management system to organize and track creative workflows from concept to completion',
      path: '/arty'
    }
  ]

  return (
    <div
      style={{ height: '100%' }}
      className="flex flex-col items-center justify-center bg-gradient-to-b from-green-900 to-green-800 p-6"
    >
      <div className="w-full max-w-4xl">
        {/* Hero */}
        <div className="mb-10 text-center">
          <h1 className="mb-2 text-4xl font-bold text-white">TODD</h1>
          <p className="text-lg text-green-100">
            Tool-Orchestrated Development & Diagnostics
          </p>
          <p className="mx-auto mt-3 max-w-xl text-green-200">
            A self-evolving system that tests, compares, and improves AI
            solutions through intelligent agent collaboration.
          </p>
        </div>

        {/* Available Prototypes Section */}
        <div className="mb-8">
          <h2 className="mb-6 text-center text-2xl font-semibold text-green-100">
            Available Prototypes
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {prototypes.map((prototype, index) => (
              <Link
                to={prototype.path}
                key={index}
                className="rounded-lg border border-green-700 bg-green-800 p-6 shadow-sm transition-all duration-200 hover:bg-green-700 hover:shadow-md"
              >
                <div className="flex items-start">
                  <div className="mr-4 shrink-0 text-green-300">
                    {prototype.icon}
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-medium text-green-100">
                      {prototype.title}
                    </h3>
                    <p className="text-sm text-green-200">
                      {prototype.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Architecture Section */}
        <div className="mt-8 rounded-lg border border-green-700 bg-green-800/50 p-6">
          <h2 className="mb-4 text-center text-xl font-semibold text-green-100">
            About TODD Architecture
          </h2>
          <p className="mb-4 text-center text-green-200">
            TODD provides a flexible framework for AI tool orchestration,
            enabling rapid development and testing of AI-powered solutions.
          </p>
          <div className="flex justify-center">
            <button
              disabled
              className="flex cursor-not-allowed items-center rounded-md bg-green-700 px-6 py-3 text-white opacity-80"
            >
              <span className="mr-2">Coming Soon</span>
              <ArrowRightCircle size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TODDHomepage

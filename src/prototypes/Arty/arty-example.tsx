import { useState } from 'react'
import {
  ChevronDown,
  ChevronUp,
  Droplets,
  Beaker,
  Shield,
  Wrench,
  BookOpen,
  PenTool,
  Package,
  Link
} from 'lucide-react'
import React from 'react'

// Data for the infographic
const infographicData = {
  materials: [
    {
      id: 1,
      title: 'Paint',
      details: 'Titanium White • 2 oz',
      icon: <Droplets size={24} />,
      color: 'bg-indigo-600'
    },
    {
      id: 2,
      title: 'Medium',
      details: 'Mix 2:1 ratio',
      icon: <Beaker size={24} />,
      color: 'bg-blue-500'
    },
    {
      id: 3,
      title: 'Sealer',
      details: 'K891 Satin',
      icon: <Shield size={24} />,
      color: 'bg-green-500'
    },
    {
      id: 4,
      title: 'Brushes',
      details: '1/2" synthetic',
      icon: <PenTool size={24} />,
      color: 'bg-purple-500'
    },
    {
      id: 5,
      title: 'Canvas',
      details: 'Clean & dry',
      icon: <Package size={24} />,
      color: 'bg-yellow-600'
    },
    {
      id: 6,
      title: 'Sandpaper',
      details: '220-grit',
      icon: <Wrench size={24} />,
      color: 'bg-red-500'
    },
    {
      id: 7,
      title: 'Foam Brush',
      details: 'For fill areas',
      icon: <PenTool size={24} />,
      color: 'bg-pink-500'
    },
    {
      id: 8,
      title: 'Stencils',
      details: 'Low-tack tape',
      icon: <Package size={24} />,
      color: 'bg-teal-500'
    },
    {
      id: 9,
      title: 'Water',
      details: 'For cleaning',
      icon: <Droplets size={24} />,
      color: 'bg-blue-400'
    },
    {
      id: 10,
      title: 'Gesso',
      details: 'Optional primer',
      icon: <Beaker size={24} />,
      color: 'bg-gray-500'
    }
  ],
  process: [
    {
      id: 1,
      title: 'Surface Prep',
      details: [
        'Clean canvas with mild soap/water',
        'Apply optional white gesso primer',
        'Sand with 220-grit between layers'
      ]
    },
    {
      id: 2,
      title: 'Mix Paint',
      details: [
        '2 parts White paint : 1 part Textile Medium',
        'Stir to creamy consistency',
        'Use pure Titanium White for undercoat'
      ]
    },
    {
      id: 3,
      title: 'Apply Paint',
      details: [
        'Use synthetic brushes (1/2" to 1")',
        'Apply 2-3 thin coats (30 min between)',
        'Stipple when using stencils'
      ]
    },
    {
      id: 4,
      title: 'Seal Surface',
      details: [
        'Wait 24hrs after final paint coat',
        'Apply 2 sealer coats (2hrs between)',
        'Allow 48hrs before outdoor exposure'
      ]
    }
  ],
  techniques: [
    {
      id: 1,
      title: 'Brush Selection',
      detail:
        'Synthetic bristle for detail, foam for fill areas. Clean immediately with warm soapy water.'
    },
    {
      id: 2,
      title: 'Stenciling',
      detail:
        'Secure with low-tack tape. Use stippling motion with minimal paint to prevent bleeding.'
    },
    {
      id: 3,
      title: 'Freehand',
      detail:
        'Outline with fine liner brush, then fill with larger brush in overlapping strokes.'
    },
    {
      id: 4,
      title: 'Contrast',
      detail:
        'For maximum contrast, apply white undercoat, let dry, sand lightly, then apply mixed paint.'
    }
  ],
  maintenance: [
    'Inspect annually for wear/fading',
    'Clean with soft brush or damp cloth',
    'Avoid harsh detergents',
    'Touch up and reseal as needed'
  ],
  references: [
    {
      text: 'FolkArt Multi-Surface Acrylic Paint specs',
      url: 'https://plaidonline.com/products/folkart-multi-surface-acrylic-paint'
    },
    {
      text: 'FolkArt Textile Medium instructions',
      url: 'https://plaidonline.com/products/folkart-textile-medium'
    },
    {
      text: 'FolkArt Outdoor Acrylic Sealer (K891) data',
      url: 'https://plaidonline.com/products/folkart-outdoor-acrylic-sealer'
    },
    {
      text: 'Plaid Enterprises product guides',
      url: 'https://plaidonline.com/product-guides'
    }
  ]
}

// Material Card Component (Small Square Tiles)
interface Material {
  color: string
  icon: React.ReactElement
  title: string
  details: string
}

const MaterialCard = ({ material }: { material: Material }) => {
  return (
    <div
      className={`${material.color} flex aspect-square flex-col items-center justify-between rounded-md p-2 text-center shadow-sm`}
    >
      <div className="mb-1 rounded-full bg-white p-1 text-indigo-600">
        {React.cloneElement(material.icon, { size: 16 })}
      </div>
      <h3 className="text-xs font-bold leading-tight text-white">
        {material.title}
      </h3>
      <p className="text-xs leading-tight text-white opacity-90 sm:hidden md:block md:text-xs">
        {material.details}
      </p>
    </div>
  )
}
// Process Step Component
interface Step {
  id: number
  title: string
  details: string[]
}

const ProcessStep = ({
  step,
  isExpanded,
  toggleExpand
}: {
  step: Step
  isExpanded: boolean
  toggleExpand: (id: number) => void
}) => {
  return (
    <div className="mb-3 overflow-hidden rounded-lg bg-white shadow-md">
      <div
        className="flex cursor-pointer items-center justify-between p-3 hover:bg-indigo-50"
        onClick={() => toggleExpand(step.id)}
      >
        <div className="flex items-center">
          <div className="mr-3 flex size-8 items-center justify-center rounded-full bg-indigo-600 text-white">
            <span className="font-bold">{step.id}</span>
          </div>
          <h3 className="font-bold text-indigo-700">{step.title}</h3>
        </div>
        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>

      {isExpanded && (
        <div className="border-t border-indigo-100 p-3 pt-0">
          <ul className="space-y-2 text-sm">
            {step.details.map((detail, idx) => (
              <li key={idx} className="flex items-start">
                <span className="mr-2 mt-1 text-indigo-500">•</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
// Technique Tile Component
interface Technique {
  title: string
  detail: string
}

const TechniqueTile = ({ technique }: { technique: Technique }) => {
  return (
    <div className="h-full rounded-lg border-l-2 border-indigo-400 bg-white p-3 shadow-md">
      <h4 className="mb-2 text-sm font-semibold text-indigo-700">
        {technique.title}
      </h4>
      <p className="text-xs">{technique.detail}</p>
    </div>
  )
}
// InfoSection Component with Links
interface InfoSectionProps {
  title: string
  items: Array<string | { url: string; text: string }>
  icon: React.ReactNode
  hasLinks?: boolean
}

const InfoSection = ({
  title,
  items,
  icon,
  hasLinks = false
}: InfoSectionProps) => {
  return (
    <div className="h-full rounded-lg bg-white p-3 shadow-md">
      <div className="mb-2 flex items-center">
        <div className="mr-2 rounded bg-indigo-100 p-1 text-indigo-600">
          {icon}
        </div>
        <h3 className="text-sm font-bold text-indigo-800">{title}</h3>
      </div>
      <ul className="space-y-1 text-xs">
        {!hasLinks &&
          !hasLinks &&
          items.map((item, idx) => (
            <li key={idx} className="flex items-start">
              <span className="mr-1 mt-1 text-indigo-500">•</span>
              <span>{typeof item === 'string' ? item : item.text}</span>
            </li>
          ))}

        {hasLinks &&
          items.map((item, idx) => (
            <li key={idx} className="flex items-start">
              <span className="mr-1 mt-1 text-indigo-500">•</span>
              <a
                href={(item as { url: string }).url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:underline"
              >
                {(item as { text: string }).text}
                <Link size={12} className="ml-1 inline-block" />
              </a>
            </li>
          ))}
      </ul>
    </div>
  )
}
// Main FolkArt Infographic Component
const FolkArtInfographic = () => {
  // Track expanded state for all process steps
  const [expandedSteps, setExpandedSteps] = useState<Record<number, boolean>>(
    {}
  )

  // Toggle individual step
  const toggleStep = (stepId: string | number) => {
    setExpandedSteps((prev: Record<string | number, boolean>) => ({
      ...prev,
      [stepId]: !prev[stepId]
    }))
  }

  // Expand all steps
  const expandAll = () => {
    const allExpanded: Record<number, boolean> = {}
    infographicData.process.forEach((step) => {
      allExpanded[step.id] = true
    })
    setExpandedSteps(allExpanded)
  }

  // Collapse all steps
  const collapseAll = () => {
    setExpandedSteps({})
  }

  // Check if all steps are expanded
  const areAllExpanded = infographicData.process.every(
    (step: Step) => expandedSteps[step.id as keyof typeof expandedSteps]
  )

  return (
    <div className="min-h-screen bg-indigo-50">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-indigo-800 px-4 py-3 text-white shadow-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <h1 className="text-lg font-bold">
            FolkArt Multi-Surface Acrylic Paint Application
          </h1>
          <div className="hidden text-sm md:block">
            Titanium White + Textile Medium & Sealer
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl p-4">
        {/* Materials Section */}
        <div className="mb-6">
          <h2 className="mb-3 flex items-center text-lg font-bold text-indigo-800">
            <Package size={20} className="mr-2" />
            Materials
          </h2>
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10">
            {infographicData.materials.map((material) => (
              <MaterialCard key={material.id} material={material} />
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-6">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="flex items-center text-lg font-bold text-indigo-800">
              <Wrench size={20} className="mr-2" />
              Application Process
            </h2>
            <button
              onClick={areAllExpanded ? collapseAll : expandAll}
              className="flex items-center rounded-full bg-indigo-600 px-3 py-1 text-xs text-white hover:bg-indigo-700"
            >
              {areAllExpanded ? (
                <>
                  <ChevronUp size={14} className="mr-1" />
                  Collapse All
                </>
              ) : (
                <>
                  <ChevronDown size={14} className="mr-1" />
                  Expand All
                </>
              )}
            </button>
          </div>

          {infographicData.process.map((step) => (
            <ProcessStep
              key={step.id}
              step={step}
              isExpanded={!!expandedSteps[step.id]}
              toggleExpand={toggleStep}
            />
          ))}
        </div>

        {/* Techniques Section */}
        <div className="mb-6">
          <h2 className="mb-3 flex items-center text-lg font-bold text-indigo-800">
            <PenTool size={20} className="mr-2" />
            Application Techniques
          </h2>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
            {infographicData.techniques.map((technique) => (
              <TechniqueTile key={technique.id} technique={technique} />
            ))}
          </div>
        </div>

        {/* Info Sections */}
        <div className="mb-6 grid grid-cols-1 gap-3 md:grid-cols-2">
          <InfoSection
            title="Maintenance"
            items={infographicData.maintenance}
            icon={<Wrench size={18} />}
          />
          <InfoSection
            title="References"
            items={infographicData.references}
            icon={<BookOpen size={18} />}
            hasLinks={true}
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-indigo-800 py-2 text-center text-xs text-white">
        © 2025 FolkArt Application Guide | Created for artists and crafters
      </footer>
    </div>
  )
}

export default FolkArtInfographic

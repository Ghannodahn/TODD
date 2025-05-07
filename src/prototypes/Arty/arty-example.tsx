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
import infographicData from '../../data/arty/arty-example.json'

// Material Card Component (Small Square Tiles)
interface Material {
  color: string
  icon: React.ReactElement
  title: string
  details: string
}

const MaterialCard = ({ material }: { material: Material }) => {
  // Doubled the size by adjusting aspect-square and adding more padding
  return (
    <div
      className={`${material.color} flex aspect-square flex-col items-center justify-between rounded-md p-4 text-center shadow-sm`}
    >
      <div className="mb-2 rounded-full bg-white p-2 text-indigo-600">
        {React.cloneElement(material.icon, { size: 32 })}{' '}
        {/* Doubled icon size */}
      </div>
      <h3 className="text-sm font-bold leading-tight text-white">
        {material.title}
      </h3>
      <p className="text-xs leading-tight text-white opacity-90 sm:hidden md:block md:text-sm">
        {material.details.split('. ').join('.\n')}{' '}
        {/* Adding line breaks between sentences */}
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
    <div className="mb-6 overflow-hidden rounded-lg bg-white shadow-md">
      {' '}
      {/* Doubled vertical margin */}
      <div
        className="flex cursor-pointer items-center justify-between p-6 hover:bg-indigo-50" /* Doubled padding */
        onClick={() => toggleExpand(step.id)}
      >
        <div className="flex items-center">
          <div className="mr-6 flex size-16 items-center justify-center rounded-full bg-indigo-600 text-white">
            {' '}
            {/* Doubled size and margin */}
            <span className="text-lg font-bold">{step.id}</span>{' '}
            {/* Increased text size */}
          </div>
          <h3 className="text-xl font-bold text-indigo-700">{step.title}</h3>{' '}
          {/* Increased text size */}
        </div>
        {isExpanded ? <ChevronUp size={40} /> : <ChevronDown size={40} />}{' '}
        {/* Doubled icon size */}
      </div>
      {isExpanded && (
        <div className="border-t border-indigo-100 p-6 pt-0">
          {' '}
          {/* Doubled padding */}
          <ul className="space-y-4 text-base">
            {' '}
            {/* Doubled spacing, increased text size */}
            {step.details.map((detail, idx) => (
              <li key={idx} className="flex items-start">
                <span className="mr-4 mt-1 text-indigo-500">•</span>{' '}
                {/* Doubled margin */}
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
  // Add line breaks to the details
  const formattedDetail = technique.detail.split('. ').join('.\n\n')

  return (
    <div className="h-full rounded-lg border-l-4 border-indigo-400 bg-white p-6 shadow-md">
      {' '}
      {/* Doubled border and padding */}
      <h4 className="mb-4 text-base font-semibold text-indigo-700">
        {' '}
        {/* Doubled margin, increased text size */}
        {technique.title}
      </h4>
      <p className="whitespace-pre-line text-sm">{formattedDetail}</p>{' '}
      {/* Added whitespace-pre-line for line breaks */}
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
    <div className="h-full rounded-lg bg-white p-6 shadow-md">
      {' '}
      {/* Doubled padding */}
      <div className="mb-4 flex items-center">
        {' '}
        {/* Doubled margin */}
        <div className="mr-4 rounded bg-indigo-100 p-2 text-indigo-600">
          {' '}
          {/* Doubled margin and padding */}
          {React.cloneElement(icon as React.ReactElement, { size: 36 })}{' '}
          {/* Doubled icon size */}
        </div>
        <h3 className="text-base font-bold text-indigo-800">{title}</h3>{' '}
        {/* Increased text size */}
      </div>
      <ul className="space-y-2 text-sm">
        {' '}
        {/* Doubled spacing */}
        {!hasLinks &&
          !hasLinks &&
          items.map((item, idx) => (
            <li key={idx} className="flex items-start">
              <span className="mr-2 mt-1 text-indigo-500">•</span>
              <span className="whitespace-pre-line">
                {typeof item === 'string'
                  ? item.split('. ').join('.\n\n')
                  : item.text.split('. ').join('.\n\n')}
              </span>
            </li>
          ))}
        {hasLinks &&
          items.map((item, idx) => (
            <li key={idx} className="flex items-start">
              <span className="mr-2 mt-1 text-indigo-500">•</span>
              <a
                href={(item as { url: string }).url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center whitespace-pre-line text-blue-600 hover:underline"
              >
                {(item as { text: string }).text.split('. ').join('.\n\n')}
                <Link size={16} className="ml-2 inline-block" />{' '}
                {/* Increased icon size */}
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

  // Icon mapping function to convert string icon names to components
  const getIconComponent = (iconName: string, size: number = 48) => {
    /* Doubled default icon size */
    const iconMap: Record<string, React.ReactElement> = {
      Droplets: <Droplets size={size} />,
      Beaker: <Beaker size={size} />,
      Shield: <Shield size={size} />,
      PenTool: <PenTool size={size} />,
      Package: <Package size={size} />,
      Wrench: <Wrench size={size} />
    }
    return iconMap[iconName] || <Package size={size} />
  }

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

  // Transform materials data to include React components
  const materialsWithIcons = infographicData.materials.map((material) => ({
    ...material,
    icon: getIconComponent(material.iconName)
  }))

  return (
    <div className="min-h-screen bg-indigo-50">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-indigo-800 px-8 py-6 text-white shadow-md">
        {' '}
        {/* Doubled padding */}
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <h1 className="text-2xl font-bold">
            {' '}
            {/* Increased text size */}
            FolkArt Multi-Surface Acrylic Paint Application
          </h1>
          <div className="hidden text-base md:block">
            {' '}
            {/* Increased text size */}
            Titanium White + Textile Medium & Sealer
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl p-8">
        {' '}
        {/* Doubled padding */}
        {/* Materials Section */}
        <div className="mb-12">
          {' '}
          {/* Doubled margin */}
          <h2 className="mb-6 flex items-center text-2xl font-bold text-indigo-800">
            {' '}
            {/* Doubled margin, increased text size */}
            <Package size={40} className="mr-4" />{' '}
            {/* Doubled icon size and margin */}
            Materials
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {' '}
            {/* Reduced columns to account for larger sizes, doubled gap */}
            {materialsWithIcons.map((material) => (
              <MaterialCard key={material.id} material={material} />
            ))}
          </div>
        </div>
        {/* Process Section */}
        <div className="mb-12">
          {' '}
          {/* Doubled margin */}
          <div className="mb-6 flex items-center justify-between">
            {' '}
            {/* Doubled margin */}
            <h2 className="flex items-center text-2xl font-bold text-indigo-800">
              {' '}
              {/* Increased text size */}
              <Wrench size={40} className="mr-4" />{' '}
              {/* Doubled icon size and margin */}
              Application Process
            </h2>
            <button
              onClick={areAllExpanded ? collapseAll : expandAll}
              className="flex items-center rounded-full bg-indigo-600 px-6 py-2 text-sm text-white hover:bg-indigo-700" /* Doubled padding */
            >
              {areAllExpanded ? (
                <>
                  <ChevronUp size={28} className="mr-2" />{' '}
                  {/* Doubled icon size and margin */}
                  Collapse All
                </>
              ) : (
                <>
                  <ChevronDown size={28} className="mr-2" />{' '}
                  {/* Doubled icon size and margin */}
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
        <div className="mb-12">
          {' '}
          {/* Doubled margin */}
          <h2 className="mb-6 flex items-center text-2xl font-bold text-indigo-800">
            {' '}
            {/* Doubled margin, increased text size */}
            <PenTool size={40} className="mr-4" />{' '}
            {/* Doubled icon size and margin */}
            Application Techniques
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {' '}
            {/* Reduced columns, doubled gap */}
            {infographicData.techniques.map((technique) => (
              <TechniqueTile key={technique.id} technique={technique} />
            ))}
          </div>
        </div>
        {/* Info Sections */}
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {' '}
          {/* Doubled margin and gap */}
          <InfoSection
            title="Maintenance"
            items={infographicData.maintenance}
            icon={<Wrench size={36} />}
          />
          <InfoSection
            title="References"
            items={infographicData.references}
            icon={<BookOpen size={36} />}
            hasLinks={true}
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-indigo-800 py-4 text-center text-sm text-white">
        {' '}
        {/* Doubled padding, increased text size */}© 2025 FolkArt Application
        Guide | Created for artists and crafters
      </footer>
    </div>
  )
}

export default FolkArtInfographic

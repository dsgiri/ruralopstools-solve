import { tools } from '../data';
import { ToolCard } from '../components/ToolCard';
import { SEO } from '../components/SEO';

export function Calculators() {
  const primaryTools = tools.filter(t => [
    'water-check-planner',
    'pump-trouble-logger',
    'freeze-event-planner',
    'fence-fault-tracker',
    'remote-inspection-proof'
  ].includes(t.id));
  
  const techPlanningTools = tools.filter(t => ![
    'water-check-planner',
    'pump-trouble-logger',
    'freeze-event-planner',
    'fence-fault-tracker',
    'remote-inspection-proof',
    'iot-app-cost-calculator', // Exclude or put in tech
    'automation-budget-estimator' // Exclude or put in tech
  ].includes(t.id));

  const otherTechTools = tools.filter(t => [
    'iot-app-cost-calculator',
    'automation-budget-estimator'
  ].includes(t.id));


  return (
    <div className="flex flex-col flex-grow">
      <SEO 
        title="All Calculators | Rural Ops Tools" 
        description="Run the numbers on farm utility leaks, sensor deployments, and automation projects." 
      />
      
      <header className="max-w-7xl mx-auto px-6 md:px-8 pt-12 pb-16 text-left w-full">
        <div className="inline-block px-4 py-1 bg-stone-200 border-2 border-stone-800 text-stone-800 text-xs font-bold mb-6 tracking-widest uppercase transform -rotate-1 shadow-[2px_2px_0px_#292524]">
            All Calculators
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-stone-900 font-display">
            Estimate the damage. Plan the fix.
        </h1>
        <p className="text-lg text-stone-700 max-w-2xl font-medium">
            Use our field calculators to see exactly how much a problem is costing you and what it takes to solve it. Don't guess—run the numbers.
        </p>
      </header>

      <section className="max-w-7xl mx-auto px-6 md:px-8 pb-16 w-full">
        <h2 className="text-2xl font-bold mb-8 font-display border-b-4 border-stone-800 pb-2">Operations & Logs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {primaryTools.map(tool => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-8 pb-16 w-full">
        <h2 className="text-2xl font-bold mb-8 font-display border-b-4 border-stone-800 pb-2">Hardware & Infrastructure Budgeting</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techPlanningTools.map(tool => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-8 pb-16 w-full">
        <h2 className="text-2xl font-bold mb-8 font-display border-b-4 border-stone-800 pb-2">Software & Automation Planning</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherTechTools.map(tool => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>

    </div>
  );
}

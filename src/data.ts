import { Tool, Category } from './types';

export const categories: Category[] = [
  { id: 'iot-app-cost', name: 'IoT app cost', description: 'Estimate costs for custom Internet of Things software.' },
  { id: 'automation-project', name: 'Automation project cost', description: 'Budget for end-to-end automation deployments.' },
  { id: 'sensor-device', name: 'Sensor / device budgeting', description: 'Plan capital expenditures for hardware fleets.' },
  { id: 'integration', name: 'Integration cost', description: 'Forecast costs for connecting systems and APIs.' },
  { id: 'cloud-connectivity', name: 'Cloud / connectivity cost', description: 'Model ongoing data and server expenses.' },
  { id: 'maintenance', name: 'Maintenance / support cost', description: 'Anticipate long-term operating costs.' },
  { id: 'tco', name: 'Total cost of ownership', description: 'Calculate the comprehensive lifespan cost.' },
  { id: 'build-vs-buy', name: 'Build vs buy', description: 'Compare custom development against commercial solutions.' }
];

const formatCurrency = (val: number) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);
};

export const tools: Tool[] = [
  {
    id: 'iot-app-cost-calculator',
    title: 'IoT App Cost Calculator',
    description: 'Estimate software development costs for farm and rural IoT applications.',
    category: 'IoT app cost',
    primaryOutcome: 'Estimated Build Cost',
    fields: [
      { id: 'complexity', label: 'App Complexity', type: 'select', options: ['Basic', 'Moderate', 'Advanced'], defaultValue: 'Moderate' },
      { id: 'platforms', label: 'Target Platforms', type: 'select', options: ['Web Only', 'Mobile Only', 'Web + Mobile'], defaultValue: 'Web + Mobile' },
      { id: 'integrationPoints', label: 'Integration Points', type: 'range', min: 0, max: 10, step: 1, defaultValue: 2 },
    ],
    calcFn: (v) => {
      let base = v.complexity === 'Basic' ? 15000 : (v.complexity === 'Moderate' ? 45000 : 90000);
      let multiplier = v.platforms === 'Web + Mobile' ? 1.5 : 1.0;
      let integrationCost = Number(v.integrationPoints) * 3500;
      let total = (base * multiplier) + integrationCost;
      return {
        result: formatCurrency(total),
        breakdown: {
          'Base App Cost': formatCurrency(base * multiplier),
          'Integration Costs': formatCurrency(integrationCost)
        }
      };
    },
    howItWorks: [
      'Select the core complexity of your application (Basic, Moderate, Advanced).',
      'Choose whether the app will run on Web, Mobile, or both platforms.',
      'Estimate the number of external integration points (e.g., weather API, John Deere API).'
    ],
    definitions: [
      { term: 'Integration Points', definition: 'Connections to external APIs or existing farm management software.' },
      { term: 'Target Platforms', definition: 'The environments where your app will operate natively.' }
    ],
    faqs: [
      { question: 'Does this include hosting costs?', answer: 'No, this only estimates the upfront build/development costs. Hosting is calculated separately in the Cloud Connectivity Calculator.' },
      { question: 'What is considered an "Advanced" app?', answer: 'Advanced apps usually involve real-time map tracking, machine learning models, or complex multi-user permission systems.' }
    ]
  },
  {
    id: 'automation-budget-estimator',
    title: 'Automation Project Budget Estimator',
    description: 'Structure your financial plan for major automation deployments.',
    category: 'Automation project cost',
    primaryOutcome: 'Project Budget Baseline',
    fields: [
      { id: 'areaAcres', label: 'Project Area (Acres)', type: 'number', defaultValue: 100 },
      { id: 'automationType', label: 'Primary Automation', type: 'select', options: ['Irrigation', 'Feeding', 'Climate Control'], defaultValue: 'Irrigation' },
      { id: 'laborSavings', label: 'Target Labor Savings (%)', type: 'range', min: 10, max: 80, step: 5, defaultValue: 30 }
    ],
    calcFn: (v) => {
      const area = Number(v.areaAcres) || 0;
      const baseCostPerAcre = v.automationType === 'Irrigation' ? 800 : (v.automationType === 'Feeding' ? 1200 : 2500);
      const complexityMul = 1 + (Number(v.laborSavings) / 100);
      const total = area * baseCostPerAcre * complexityMul;
      return {
        result: formatCurrency(total),
        breakdown: {
          'Hardware / Install': formatCurrency(total * 0.7),
          'Software / Setup': formatCurrency(total * 0.3)
        }
      };
    }
  },
  {
    id: 'sensor-network-cost',
    title: 'Sensor Network Cost Calculator',
    description: 'Calculate the upfront capital required for sensors, gateways, and field hardware.',
    category: 'Sensor / device budgeting',
    primaryOutcome: 'Hardware Cost Estimate',
    fields: [
      { id: 'sensorCount', label: 'Number of Sensors', type: 'number', defaultValue: 50 },
      { id: 'sensorType', label: 'Sensor Complexity', type: 'select', options: ['Basic (Temp/Humidity)', 'Advanced (Soil/Flow/Weather)'], defaultValue: 'Advanced (Soil/Flow/Weather)' },
      { id: 'gatewayCount', label: 'Number of Gateways', type: 'number', defaultValue: 2 }
    ],
    calcFn: (v) => {
      const sensors = Number(v.sensorCount) || 0;
      const gateways = Number(v.gatewayCount) || 0;
      const costPerSensor = v.sensorType.includes('Basic') ? 45 : 185;
      const costPerGateway = 850;
      const total = (sensors * costPerSensor) + (gateways * costPerGateway);
      return {
        result: formatCurrency(total),
        breakdown: {
          'Sensors': formatCurrency(sensors * costPerSensor),
          'Gateways': formatCurrency(gateways * costPerGateway)
        }
      };
    }
  },
  {
    id: 'connectivity-cloud-cost',
    title: 'Connectivity and Cloud Cost Estimator',
    description: 'Forecast recurring monthly costs for cellular/LoRaWAN plans and cloud servers.',
    category: 'Cloud / connectivity cost',
    primaryOutcome: 'Monthly OPEX',
    fields: [
      { id: 'deviceCount', label: 'Active Connected Devices', type: 'number', defaultValue: 150 },
      { id: 'connectionType', label: 'Connection Type', type: 'select', options: ['Cellular (LTE-M/NB-IoT)', 'LoRaWAN', 'Wi-Fi / Local'], defaultValue: 'Cellular (LTE-M/NB-IoT)' },
      { id: 'dataFreq', label: 'Data Frequency', type: 'select', options: ['Low (Hourly+)', 'High (Per Minute)'], defaultValue: 'Low (Hourly+)' }
    ],
    calcFn: (v) => {
      const devices = Number(v.deviceCount) || 0;
      let costPerDevice = 0;
      if (v.connectionType.includes('Cellular')) costPerDevice = 1.5;
      if (v.connectionType.includes('LoRaWAN')) costPerDevice = 0.25;
      
      let cloudBase = 40;
      if (v.dataFreq.includes('High')) {
         costPerDevice *= 1.5;
         cloudBase = 120;
      }
      
      const total = (devices * costPerDevice) + cloudBase;
      return {
        result: formatCurrency(total) + '/mo',
        breakdown: {
          'Connectivity': formatCurrency(devices * costPerDevice) + '/mo',
          'Cloud Hosting': formatCurrency(cloudBase) + '/mo'
        }
      };
    }
  },
  {
    id: 'maintenance-cost-planner',
    title: 'Maintenance Cost Planner',
    description: 'Plan for break-fix, spare parts, and technician labor over time.',
    category: 'Maintenance / support cost',
    primaryOutcome: 'Annual Maintenance Run Rate',
    fields: [
      { id: 'capitalDeployed', label: 'Total Hardware Capital ($)', type: 'number', defaultValue: 25000 },
      { id: 'environment', label: 'Environment Harshness', type: 'select', options: ['Mild (Indoor/Protected)', 'Moderate (Outdoor Ag)', 'Extreme (Corrosive/Heavy Wear)'], defaultValue: 'Moderate (Outdoor Ag)' },
    ],
    calcFn: (v) => {
      const cap = Number(v.capitalDeployed) || 0;
      let rate = 0.05; // 5%
      if (v.environment.includes('Moderate')) rate = 0.12;
      if (v.environment.includes('Extreme')) rate = 0.22;
      
      const total = cap * rate;
      return {
        result: formatCurrency(total) + '/yr',
        breakdown: {
          'Spare Parts (60%)': formatCurrency(total * 0.6) + '/yr',
          'Labor (40%)': formatCurrency(total * 0.4) + '/yr'
        }
      };
    }
  },
  {
    id: 'build-vs-buy-comparison',
    title: 'Build vs Buy Comparison Tool',
    description: 'Objectively compare building your own solution versus licensing a SaaS platform.',
    category: 'Build vs buy',
    primaryOutcome: 'Optimal Strategy Recommendation',
    fields: [
      { id: 'saasMonthly', label: 'SaaS Monthly Cost ($)', type: 'number', defaultValue: 399 },
      { id: 'customBuildCap', label: 'Custom Build Upfront Cost ($)', type: 'number', defaultValue: 45000 },
      { id: 'customBuildMaint', label: 'Custom Build Monthly Maint ($)', type: 'number', defaultValue: 150 },
      { id: 'horizonYears', label: 'Analysis Horizon (Years)', type: 'range', min: 1, max: 10, step: 1, defaultValue: 5 }
    ],
    calcFn: (v) => {
      const saasMo = Number(v.saasMonthly) || 0;
      const buildUpfront = Number(v.customBuildCap) || 0;
      const buildMo = Number(v.customBuildMaint) || 0;
      const years = Number(v.horizonYears) || 1;
      const months = years * 12;
      
      const saasTotal = saasMo * months;
      const buildTotal = buildUpfront + (buildMo * months);
      
      return {
        result: saasTotal < buildTotal ? 'BUY (SaaS is cheaper)' : 'BUILD (Custom is cheaper)',
        breakdown: {
          [`SaaS TCO (${years} Yrs)`]: formatCurrency(saasTotal),
          [`Build TCO (${years} Yrs)`]: formatCurrency(buildTotal)
        }
      };
    }
  },
  {
    id: 'tco-calculator',
    title: 'Total Cost of Ownership Calculator',
    description: 'Understand the true 5-to-10 year cost of your technology investments.',
    category: 'Total cost of ownership',
    primaryOutcome: 'Lifecycle Cost',
    fields: [
      { id: 'capex', label: 'Initial Capital Exp ($)', type: 'number', defaultValue: 15000 },
      { id: 'opexMo', label: 'Monthly Operating Exp ($)', type: 'number', defaultValue: 250 },
      { id: 'lifespan', label: 'Expected Lifespan (Years)', type: 'range', min: 1, max: 15, step: 1, defaultValue: 7 },
      { id: 'inflation', label: 'Annual Inflation/Escalation (%)', type: 'number', defaultValue: 3 }
    ],
    calcFn: (v) => {
      const cap = Number(v.capex) || 0;
      const opexMo = Number(v.opexMo) || 0;
      const years = Number(v.lifespan) || 0;
      const inf = (Number(v.inflation) || 0) / 100;
      
      let totalOpex = 0;
      let currentOpexYr = opexMo * 12;
      for (let i = 0; i < years; i++) {
        totalOpex += currentOpexYr;
        currentOpexYr *= (1 + inf);
      }
      
      const total = cap + totalOpex;
      return {
        result: formatCurrency(total),
        breakdown: {
          'Initial CAPEX': formatCurrency(cap),
          'Lifetime OPEX': formatCurrency(totalOpex)
        }
      };
    }
  },
  {
    id: 'smart-farm-roi',
    title: 'Smart Farm ROI Estimator',
    description: 'Project financial returns from yield improvements and labor reduction.',
    category: 'Automation project cost',
    primaryOutcome: 'Estimated Payback Period',
    fields: [
      { id: 'systemCost', label: 'Total System Cost ($)', type: 'number', defaultValue: 35000 },
      { id: 'annualLaborSavings', label: 'Annual Labor Savings ($)', type: 'number', defaultValue: 12000 },
      { id: 'annualYieldIncrease', label: 'Annual Yield Value Increase ($)', type: 'number', defaultValue: 8500 }
    ],
    calcFn: (v) => {
      const cost = Number(v.systemCost) || 0;
      const savings = Number(v.annualLaborSavings) || 0;
      const yieldInc = Number(v.annualYieldIncrease) || 0;
      
      const totalAnnualBenefit = savings + yieldInc;
      
      if (totalAnnualBenefit <= 0) {
        return {
          result: 'No Return',
          breakdown: { 'Annual Benefit': '$0' }
        };
      }
      
      const paybackYears = cost / totalAnnualBenefit;
      return {
        result: paybackYears.toFixed(1) + ' Years',
        breakdown: {
          'Total System Cost': formatCurrency(cost),
          'Annual Financial Benefit': formatCurrency(totalAnnualBenefit)
        }
      };
    }
  }
];

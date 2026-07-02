import { Tool, Category } from './types';

export const categories: Category[] = [
  { id: 'operations-planning', name: 'Operations & Logs', description: 'Tools for planning checks, logging faults, and managing recurring tasks.' },
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
    },
    howItWorks: [
      'Enter the project area in acres to establish a baseline scale.',
      'Select the primary automation type being deployed (Irrigation, Feeding, etc.).',
      'Target a realistic labor savings percentage to calculate the complexity multiplier.'
    ],
    definitions: [
      { term: 'Hardware / Install', definition: 'The physical equipment and labor required to get the system physically running.' },
      { term: 'Software / Setup', definition: 'Configuration, subscription fees, and integration services required for operation.' }
    ],
    faqs: [
      { question: 'Why does labor savings affect the cost?', answer: 'Achieving higher labor savings typically requires more advanced sensors, complex software rules, and higher precision hardware.' }
    ]
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
    },
    howItWorks: [
      'Enter the total number of sensors required for your deployment.',
      'Select the complexity of the sensors (basic environmental vs. advanced agronomic).',
      'Input the number of gateways needed to backhaul the data to the cloud.'
    ],
    definitions: [
      { term: 'Gateway', definition: 'A centralized hub that collects data from local sensors (via LoRaWAN or Bluetooth) and sends it to the internet.' },
      { term: 'Basic Sensor', definition: 'Simple, low-cost sensors measuring ambient metrics like air temperature and humidity.' }
    ],
    faqs: [
      { question: 'How many sensors can one gateway handle?', answer: 'A standard LoRaWAN gateway can easily handle hundreds of sensors, provided they are within line-of-sight range.' }
    ]
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
    },
    howItWorks: [
      'Enter the number of active, connected devices in your fleet.',
      'Select the primary backhaul connection type for these devices.',
      'Choose the data frequency to determine cloud hosting and processing overhead.'
    ],
    definitions: [
      { term: 'OPEX', definition: 'Operating Expenses; the ongoing costs required to keep the system running monthly.' },
      { term: 'LoRaWAN', definition: 'Long Range Wide Area Network. A low-power networking protocol ideal for battery-operated sensors.' }
    ],
    faqs: [
      { question: 'Why is cellular more expensive than LoRaWAN?', answer: 'Cellular requires a SIM card and a carrier subscription per device, whereas LoRaWAN uses unlicensed spectrum with a shared backhaul gateway.' }
    ]
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
    },
    howItWorks: [
      'Input the total upfront capital deployed for your hardware.',
      'Select the harshness of the environment where the hardware operates.',
      'The calculator estimates a standard run rate for parts and technician labor based on wear and tear.'
    ],
    definitions: [
      { term: 'Run Rate', definition: 'The forecasted annualized cost of keeping the hardware operational.' },
      { term: 'Harsh Environment', definition: 'Outdoor agricultural settings exposed to UV, moisture, dust, or corrosive chemicals.' }
    ],
    faqs: [
      { question: 'Is labor included in these estimates?', answer: 'Yes, typical maintenance budgeting sets aside 40% of the maintenance pool for technician labor and 60% for spare parts.' }
    ]
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
    },
    howItWorks: [
      'Input the monthly cost of an off-the-shelf SaaS alternative.',
      'Estimate the upfront capital required to build a custom solution.',
      'Provide the expected monthly maintenance cost to keep the custom build running.',
      'Select the time horizon to calculate the break-even point and Total Cost of Ownership (TCO).'
    ],
    definitions: [
      { term: 'SaaS', definition: 'Software as a Service. Licensing an existing platform for a monthly fee.' },
      { term: 'Custom Build', definition: 'Engineering a proprietary software solution tailored specifically to your operation.' }
    ],
    faqs: [
      { question: 'Does a custom build always win over long horizons?', answer: 'Often yes on paper, but custom builds carry execution risk, security liabilities, and developer turnover risks that SaaS avoids.' }
    ]
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
    },
    howItWorks: [
      'Enter the initial capital expenditure for the technology.',
      'Input the standard monthly operating expense (subscriptions, data, basic upkeep).',
      'Select the expected lifespan of the investment.',
      'Set an annual inflation rate to account for rising operational costs over time.'
    ],
    definitions: [
      { term: 'CAPEX', definition: 'Capital Expenditure. The upfront cost to purchase and install the system.' },
      { term: 'Lifecycle Cost', definition: 'The true total cost over the absolute lifespan of the asset, including inflation.' }
    ],
    faqs: [
      { question: 'Why include inflation?', answer: 'Over a 5 to 10 year lifespan, compounding inflation significantly increases the nominal cost of subscription fees and labor.' }
    ]
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
    },
    howItWorks: [
      'Enter the total cost of the installed automation or sensor system.',
      'Estimate the annual dollar value of labor saved by the system.',
      'Estimate the annual dollar value of yield protected or increased by the system.',
      'The tool calculates how many years it takes for the system to pay for itself.'
    ],
    definitions: [
      { term: 'Payback Period', definition: 'The time required to recover the cost of an investment through financial benefits.' },
      { term: 'Yield Value Increase', definition: 'Financial gain from producing more crop, reducing shrinkage, or improving quality grades.' }
    ],
    faqs: [
      { question: 'What is a good payback period?', answer: 'For agricultural technology, a payback period of under 3 years is generally considered an excellent investment.' }
    ]
  },
  {
    id: 'water-check-planner',
    title: 'Water Check OS & Alert Planner',
    description: 'Calculate the true cost of manual water checks and plan automated alert thresholds.',
    category: 'Operations & Logs',
    primaryOutcome: 'Annual Manual Check Cost',
    fields: [
      { id: 'waterSites', label: 'Number of Water Sites', type: 'number', defaultValue: 5 },
      { id: 'timePerSite', label: 'Drive/Check Time per Site (mins)', type: 'number', defaultValue: 15 },
      { id: 'checksPerWeek', label: 'Checks per Week', type: 'number', defaultValue: 3 },
      { id: 'laborRate', label: 'Labor Rate ($/hr)', type: 'number', defaultValue: 25 }
    ],
    calcFn: (v) => {
      const sites = Number(v.waterSites) || 0;
      const mins = Number(v.timePerSite) || 0;
      const freq = Number(v.checksPerWeek) || 0;
      const rate = Number(v.laborRate) || 0;
      
      const hoursPerWeek = (sites * mins * freq) / 60;
      const costPerWeek = hoursPerWeek * rate;
      const annualCost = costPerWeek * 52;
      
      return {
        result: formatCurrency(annualCost) + '/yr',
        breakdown: {
          'Weekly Labor Hours': hoursPerWeek.toFixed(1) + ' hrs',
          'Weekly Cost': formatCurrency(costPerWeek)
        }
      };
    },
    howItWorks: [
      'Enter the number of troughs, tanks, or water sites you check.',
      'Estimate the average time it takes to drive to and inspect one site.',
      'Input how often these are checked weekly and your internal labor rate.',
      'The calculator reveals the hidden annual cost of manual water monitoring.'
    ],
    definitions: [
      { term: 'Water Site', definition: 'Any stock tank, trough, or remote pump requiring visual inspection.' },
      { term: 'Manual Check Cost', definition: 'The operational expense of driving to a site just to verify water presence.' }
    ],
    faqs: [
      { question: 'Why does manual checking cost so much?', answer: 'Drive time and labor hours add up quickly over a year, often exceeding the cost of automated sensors within months.' }
    ]
  },
  {
    id: 'pump-trouble-logger',
    title: 'Pump Trouble Logger & Risk Estimator',
    description: 'Track pump symptoms to estimate failure risk and potential replacement costs before a total breakdown.',
    category: 'Operations & Logs',
    primaryOutcome: 'Failure Risk Status',
    fields: [
      { id: 'pumpAge', label: 'Pump Age (Years)', type: 'number', defaultValue: 5 },
      { id: 'symptom', label: 'Current Symptom', type: 'select', options: ['None', 'Odd Sound / Vibration', 'Short Cycling', 'Low Pressure', 'Tripping Breaker'], defaultValue: 'Short Cycling' },
      { id: 'replacementCost', label: 'Estimated Replacement Cost ($)', type: 'number', defaultValue: 3500 }
    ],
    calcFn: (v) => {
      const age = Number(v.pumpAge) || 0;
      const symptom = v.symptom as string;
      const cost = Number(v.replacementCost) || 0;
      
      let risk = 'LOW';
      let multiplier = 0;
      
      if (symptom === 'Odd Sound / Vibration') { risk = 'ELEVATED'; multiplier = 0.3; }
      else if (symptom === 'Short Cycling') { risk = 'HIGH'; multiplier = 0.6; }
      else if (symptom === 'Low Pressure') { risk = 'HIGH'; multiplier = 0.7; }
      else if (symptom === 'Tripping Breaker') { risk = 'CRITICAL'; multiplier = 0.9; }
      else if (age > 10) { risk = 'ELEVATED'; multiplier = 0.2; }
      
      const riskExposure = cost * multiplier;
      
      return {
        result: risk,
        breakdown: {
          'Financial Risk Exposure': formatCurrency(riskExposure),
          'Full Replacement Cost': formatCurrency(cost)
        }
      };
    },
    howItWorks: [
      'Select the age of your pump and any current symptoms.',
      'Input the cost to replace the pump (hardware and labor).',
      'The tool calculates a risk status and the financial exposure you carry by delaying maintenance.'
    ],
    definitions: [
      { term: 'Short Cycling', definition: 'When a pump turns on and off too rapidly, usually indicating a pressure tank issue.' },
      { term: 'Financial Risk Exposure', definition: 'The estimated cost probability of a sudden failure based on current symptoms.' }
    ],
    faqs: [
      { question: 'What should I do if the risk is Critical?', answer: 'Call a technician immediately. Tripping breakers or severe short cycling can destroy the pump motor quickly.' }
    ]
  },
  {
    id: 'remote-inspection-proof',
    title: 'Remote Inspection Proof Tool',
    description: 'Calculate the value of an audit trail for remote property checks and contractor accountability.',
    category: 'Operations & Logs',
    primaryOutcome: 'Annual Accountability Value',
    fields: [
      { id: 'remoteSites', label: 'Remote Sites to Check', type: 'number', defaultValue: 3 },
      { id: 'visitsPerMonth', label: 'Contractor Visits per Month', type: 'number', defaultValue: 4 },
      { id: 'costPerVisit', label: 'Cost per Visit ($)', type: 'number', defaultValue: 150 },
      { id: 'disputeRate', label: 'Disputed / Missed Check Rate (%)', type: 'range', min: 0, max: 50, step: 1, defaultValue: 10 }
    ],
    calcFn: (v) => {
      const sites = Number(v.remoteSites) || 0;
      const visits = Number(v.visitsPerMonth) || 0;
      const cost = Number(v.costPerVisit) || 0;
      const rate = Number(v.disputeRate) || 0;
      
      const totalVisits = sites * visits * 12;
      const annualSpend = totalVisits * cost;
      const riskValue = annualSpend * (rate / 100);
      
      return {
        result: formatCurrency(riskValue) + '/yr',
        breakdown: {
          'Total Annual Spend': formatCurrency(annualSpend),
          'Value of Verification (ROI)': formatCurrency(riskValue)
        }
      };
    },
    howItWorks: [
      'Enter how many remote locations require third-party or employee verification.',
      'Input the frequency and cost of these visits.',
      'Estimate how often a check is missed or disputed.',
      'The calculator outputs the direct financial value of implementing NFC/QR proof-of-presence systems.'
    ],
    definitions: [
      { term: 'Proof-of-Presence', definition: 'Using a digital scan (like NFC or QR) to cryptographically prove a person was at a specific physical location.' }
    ],
    faqs: [
      { question: 'How do I implement this?', answer: 'You can use rugged NFC tags at gates or tanks. When contractors tap them with their phone, it logs a timestamp and GPS coordinate.' }
    ]
  },
  {
    id: 'freeze-event-planner',
    title: 'Freeze Event Planner',
    description: 'Assess vulnerability and plan winter operations before a severe weather event strikes.',
    category: 'Operations & Logs',
    primaryOutcome: 'Freeze Vulnerability Score',
    fields: [
      { id: 'exposedLines', label: 'Exposed Water Lines (ft)', type: 'number', defaultValue: 100 },
      { id: 'unheatedTroughs', label: 'Unheated Troughs', type: 'number', defaultValue: 4 },
      { id: 'backupPower', label: 'Backup Power Available', type: 'select', options: ['Yes - Automatic', 'Yes - Manual', 'No'], defaultValue: 'No' },
      { id: 'tempDrop', label: 'Expected Temp Drop (°F)', type: 'number', defaultValue: 15 }
    ],
    calcFn: (v) => {
      const lines = Number(v.exposedLines) || 0;
      const troughs = Number(v.unheatedTroughs) || 0;
      const power = v.backupPower as string;
      const tempDrop = Number(v.tempDrop) || 0;
      
      let score = 0;
      score += lines * 0.1;
      score += troughs * 5;
      
      if (power === 'No') score += 30;
      else if (power === 'Yes - Manual') score += 10;
      
      if (tempDrop <= 20) score += 10;
      else if (tempDrop <= 10) score += 25;
      else if (tempDrop <= 0) score += 50;
      
      let vulnerability = 'LOW';
      if (score > 80) vulnerability = 'CRITICAL';
      else if (score > 50) vulnerability = 'HIGH';
      else if (score > 25) vulnerability = 'MODERATE';
      
      return {
        result: vulnerability,
        breakdown: {
          'Vulnerability Points': score.toFixed(0),
          'Action Required': score > 50 ? 'Immediate Prep' : 'Standard Monitoring'
        }
      };
    },
    howItWorks: [
      'Input the length of exposed plumbing and number of unheated water sources.',
      'Indicate your backup power situation and the forecasted minimum temperature.',
      'The tool outputs a vulnerability score to prioritize your winterization tasks.'
    ],
    definitions: [
      { term: 'Vulnerability Score', definition: 'A weighted metric estimating the likelihood of infrastructure damage during a hard freeze.' }
    ],
    faqs: [
      { question: 'Why does backup power matter for freezes?', answer: 'Many well pumps and trough heaters require electricity. Losing power during a freeze accelerates freezing in pipes and tanks.' }
    ]
  },
  {
    id: 'fence-fault-tracker',
    title: 'Fence Fault Tracker & Cost Estimator',
    description: 'Track electric fence faults and estimate the true cost of recurring perimeter escapes.',
    category: 'Operations & Logs',
    primaryOutcome: 'Annual Fault Cost',
    fields: [
      { id: 'perimeterLength', label: 'Perimeter Length (Miles)', type: 'number', defaultValue: 5 },
      { id: 'faultsPerMonth', label: 'Average Faults per Month', type: 'number', defaultValue: 2 },
      { id: 'timeToFind', label: 'Time to Find/Fix (Hours)', type: 'number', defaultValue: 3 },
      { id: 'laborRate', label: 'Labor Rate ($/hr)', type: 'number', defaultValue: 25 }
    ],
    calcFn: (v) => {
      const faults = Number(v.faultsPerMonth) || 0;
      const hours = Number(v.timeToFind) || 0;
      const rate = Number(v.laborRate) || 0;
      
      const monthlyCost = faults * hours * rate;
      const annualCost = monthlyCost * 12;
      
      return {
        result: formatCurrency(annualCost) + '/yr',
        breakdown: {
          'Annual Hours Spent': (faults * hours * 12) + ' hrs',
          'Monthly Labor Drain': formatCurrency(monthlyCost)
        }
      };
    },
    howItWorks: [
      'Enter the number of faults you experience monthly.',
      'Estimate how long it takes to walk the line, find the short, and fix it.',
      'The calculator reveals how much labor capital is wasted on manual fence walking compared to automated fault monitors.'
    ],
    definitions: [
      { term: 'Fault', definition: 'A short in the electric fence caused by weeds, fallen branches, or broken insulators dropping the voltage.' }
    ],
    faqs: [
      { question: 'Can this be automated?', answer: 'Yes, fence voltage monitors can alert you instantly when voltage drops, and some can even divide the fence into zones to pinpoint the fault location.' }
    ]
  }
];

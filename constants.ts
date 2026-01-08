import { TaxProfile } from './types';

export const TAX_DATA: TaxProfile[] = [
  {
    id: 'ae',
    country: 'United Arab Emirates',
    flag: '🇦🇪',
    currency: 'Dirham',
    currencyCode: 'AED',
    cit: {
      standardRate: 9,
      description: '9% on taxable income exceeding AED 375,000. 0% for Qualifying Free Zone Persons.',
      incentives: ['0% Corporate Tax for Free Zone entities on qualifying income', 'No tax on capital gains/dividends for participating interests']
    },
    pit: {
      brackets: [{ rate: 0 }],
      threshold: Infinity,
      description: 'No Personal Income Tax on employment income.'
    },
    salesTax: {
      name: 'VAT',
      standardRate: 5,
      reducedRates: '0% on exports, international transport',
      exemptions: 'Financial services, residential property, local transport',
      registrationThreshold: 'Mandatory: AED 375,000 turnover'
    },
    additionalLevies: ['Municipality fees on hotel/rent', 'Knowledge Fee'],
    residencyRules: 'Physical presence > 183 days or 90 days with permanent place of abode/employment.',
    withholding: {
      dividends: '0%',
      interest: '0%'
    }
  },
  {
    id: 'in',
    country: 'India',
    flag: '🇮🇳',
    currency: 'Rupee',
    currencyCode: 'INR',
    cit: {
      standardRate: 25,
      description: '25% for turnover < INR 400 Cr, otherwise 30%. New manufacturing companies option: 15%. + Surcharge & Cess.',
      incentives: ['Section 80 deductions', 'GIFT City IFSC tax holidays', 'PLI Schemes']
    },
    pit: {
      brackets: [
        { rate: 0, max: 300000 },
        { rate: 5, min: 300001, max: 600000 },
        { rate: 10, min: 600001, max: 900000 },
        { rate: 15, min: 900001, max: 1200000 },
        { rate: 20, min: 1200001, max: 1500000 },
        { rate: 30, min: 1500001 }
      ],
      threshold: 300000,
      description: 'Progressive rates under new regime. 4% Health & Education Cess applies to tax.'
    },
    salesTax: {
      name: 'GST',
      standardRate: 18,
      reducedRates: '5%, 12%, 28% (luxury/sin goods)',
      exemptions: 'Essential foods, healthcare, education',
      registrationThreshold: 'INR 20 Lakhs (Services), INR 40 Lakhs (Goods)'
    },
    additionalLevies: ['Health & Education Cess (4% of tax)', 'Surcharges based on income level'],
    residencyRules: 'Resident if present 182+ days. Global income taxed for Residents.',
    withholding: {
      dividends: '10% (Resident), 20% + Surcharge (Non-Resident)',
      interest: '10% (Resident), 20% (Non-Resident)'
    }
  },
  {
    id: 'pk',
    country: 'Pakistan',
    flag: '🇵🇰',
    currency: 'Rupee',
    currencyCode: 'PKR',
    cit: {
      standardRate: 29,
      description: '29% Standard Rate. Small companies: 20%.',
      incentives: ['Technology zone incentives', 'Solar/Renewable energy exemptions']
    },
    pit: {
      brackets: [
        { rate: 0, max: 600000 },
        { rate: 2.5, min: 600001, max: 1200000 },
        { rate: 35, min: 6000000 } // Simplified top tier
      ],
      threshold: 600000,
      description: 'Progressive slabs. Salaried vs Non-salaried classes differ.'
    },
    salesTax: {
      name: 'Sales Tax',
      standardRate: 18,
      reducedRates: 'Various reduced rates for specific sectors',
      exemptions: 'Pharmaceuticals, basic foods, books',
      registrationThreshold: 'PKR 10 Million annual turnover (Manufacturers)'
    },
    additionalLevies: ['Super Tax (1-10% based on income)', 'Workers Welfare Fund (2%)'],
    residencyRules: 'Present 183+ days in tax year.',
    withholding: {
      dividends: '15% (Standard)',
      interest: '15% (Standard)'
    }
  },
  {
    id: 'cn',
    country: 'China',
    flag: '🇨🇳',
    currency: 'Yuan',
    currencyCode: 'CNY',
    cit: {
      standardRate: 25,
      description: '25% Standard. 15% for High-Tech Enterprises. 20% for Small Low-Profit Enterprises.',
      incentives: ['High-New Technology Enterprise (HNTE) 15%', 'R&D Super Deduction']
    },
    pit: {
      brackets: [
        { rate: 3, max: 36000 },
        { rate: 10, min: 36001, max: 144000 },
        { rate: 20, min: 144001, max: 300000 },
        { rate: 25, min: 300001, max: 420000 },
        { rate: 30, min: 420001, max: 660000 },
        { rate: 35, min: 660001, max: 960000 },
        { rate: 45, min: 960001 }
      ],
      threshold: 60000,
      description: 'Comprehensive income taxed progressively up to 45%.'
    },
    salesTax: {
      name: 'VAT',
      standardRate: 13,
      reducedRates: '9% (Retail, transport, real estate), 6% (Services), 3% (Small scale)',
      exemptions: 'Contraceptives, antique books, agricultural products',
      registrationThreshold: 'CNY 5 Million (General Taxpayer)'
    },
    additionalLevies: ['Urban Maintenance & Construction Tax (7%)', 'Education Surcharge (3%)'],
    residencyRules: 'Domiciled or reside for 183 days. 6-year rule for global income exemption.',
    withholding: {
      dividends: '10% (Non-resident)',
      interest: '10% (Non-resident)'
    }
  },
  {
    id: 'vn',
    country: 'Vietnam',
    flag: '🇻🇳',
    currency: 'Dong',
    currencyCode: 'VND',
    cit: {
      standardRate: 20,
      description: '20% Standard. Preferential rates (10-17%) for specific projects.',
      incentives: ['Economic Zones', 'High-tech zones', 'Software production (4 years exemption)']
    },
    pit: {
      brackets: [
        { rate: 5, max: 60000000 },
        { rate: 10, min: 60000001, max: 120000000 },
        { rate: 35, min: 960000001 } // Top tier
      ],
      threshold: 132000000, // 11m/month
      description: 'Progressive rates 5% to 35%.'
    },
    salesTax: {
      name: 'VAT',
      standardRate: 10,
      reducedRates: '5% (Essential goods, water, medical)',
      exemptions: 'Software, untreated farm produce',
      registrationThreshold: 'VND 1 Billion annual revenue'
    },
    additionalLevies: ['Business License Fee (Annual)', 'Social Insurance'],
    residencyRules: '183 days presence or permanent residence registered.',
    withholding: {
      dividends: '5% (Individuals only, Corps exempt)',
      interest: '5%'
    }
  },
  {
    id: 'bd',
    country: 'Bangladesh',
    flag: '🇧🇩',
    currency: 'Taka',
    currencyCode: 'BDT',
    cit: {
      standardRate: 27.5,
      description: '27.5% for Private Ltd non-listed. 20% for Listed. Banks/Tobacco higher.',
      incentives: ['IT/Software enabled services tax exemption', 'PPP Project exemptions']
    },
    pit: {
      brackets: [
        { rate: 0, max: 350000 },
        { rate: 5, min: 350001, max: 450000 },
        { rate: 25, min: 1650001 } // Top tier
      ],
      threshold: 350000,
      description: 'Progressive up to 25%. Non-residents flat 30%.'
    },
    salesTax: {
      name: 'VAT',
      standardRate: 15,
      reducedRates: '5%, 7.5%, 10% (Trade)',
      exemptions: 'Basic food, livestock, social welfare',
      registrationThreshold: 'BDT 30 Million turnover'
    },
    additionalLevies: ['Health Development Surcharge', 'Environment Protection Surcharge'],
    residencyRules: 'Present 182 days in income year.',
    withholding: {
      dividends: '10-15% (Residents), 20% (Non-residents)',
      interest: '10-20%'
    }
  },
  {
    id: 'kh',
    country: 'Cambodia',
    flag: '🇰🇭',
    currency: 'Riel',
    currencyCode: 'KHR',
    cit: {
      standardRate: 20,
      description: '20% Standard ("Tax on Income"). Oil/Gas/Mining 30%.',
      incentives: ['Qualified Investment Projects (QIP) tax holidays up to 9 years']
    },
    pit: {
      brackets: [
        { rate: 0, max: 1500000 }, // Monthly thresholds roughly
        { rate: 5, min: 1500001, max: 2000000 },
        { rate: 20, min: 12500001 }
      ],
      threshold: 1500000, // Monthly KHR
      description: 'Tax on Salary (0-20%). Non-residents flat 20%.'
    },
    salesTax: {
      name: 'VAT',
      standardRate: 10,
      reducedRates: '0% (Exports)',
      exemptions: 'Public postal, hospital, unprocessed farm goods',
      registrationThreshold: 'Small taxpayer threshold varies; Real Regime mandatory for most corps.'
    },
    additionalLevies: ['Minimum Tax (1% of turnover)', 'Patent Tax'],
    residencyRules: 'Domicile or principal place of abode, or present > 182 days.',
    withholding: {
      dividends: '14% (Non-resident)',
      interest: '14% (Non-resident), 15% (Domestic fixed deposit)'
    }
  }
];
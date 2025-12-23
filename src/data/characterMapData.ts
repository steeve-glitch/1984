export const nodes = [
  { id: 'winston', label: 'Winston Smith', x: 50, y: 50, isCentral: true },
  { id: 'julia', label: 'Julia', x: 30, y: 70 },
  { id: 'obrien', label: "O'Brien", x: 70, y: 70 },
  { id: 'bigbrother', label: 'Big Brother', x: 50, y: 15 },
  { id: 'parsons', label: 'Tom Parsons', x: 20, y: 40 },
  { id: 'syme', label: 'Syme', x: 80, y: 40 },
  { id: 'charrington', label: 'Mr. Charrington', x: 50, y: 85 },
];

export const edges = [
  // Relationships
  { from: 'winston', to: 'julia' },
  { from: 'winston', to: 'obrien' },
  { from: 'winston', to: 'bigbrother' },
  { from: 'winston', to: 'parsons' },
  { from: 'winston', to: 'syme' },
  { from: 'winston', to: 'charrington' },
  { from: 'julia', to: 'bigbrother' },
  { from: 'obrien', to: 'bigbrother' },
  { from: 'parsons', to: 'bigbrother' },
];
export const COLORS = {
  primary: '#00C9A7',
  dark: '#075E50',
  background: '#F0FFF5',
  white: '#FFFFFF',
  text: '#173B35',
  gray: '#7A9690',
  light: '#DDF8EB',
  red: '#FF6575',
};

export const transactions = [
  { id: '1', title: 'Shopping', category: 'Shopping', amount: -12500, icon: '🛍️', date: 'Today' },
  { id: '2', title: 'Salary', category: 'Income', amount: 250000, icon: '💰', date: 'Yesterday' },
  { id: '3', title: 'Coffee', category: 'Food', amount: -1800, icon: '☕', date: 'Yesterday' },
  { id: '4', title: 'Taxi', category: 'Transport', amount: -3200, icon: '🚕', date: 'Monday' },
  { id: '5', title: 'Groceries', category: 'Food', amount: -18500, icon: '🛒', date: 'Sunday' },
];

export const money = (value) =>
  `${Math.abs(value).toLocaleString('en-US')} ₸`;
# PricingSection Component

A modern, interactive pricing section component for EZII Payroll that allows users to calculate their exact pricing based on employee count.

## Features

- **Interactive Pricing Calculator**: Dropdown to select employee ranges with dynamic pricing
- **Real-time Price Updates**: Price changes based on selected employee count
- **Responsive Design**: Adapts to all screen sizes
- **Modern UI**: Clean, professional design with smooth animations
- **Enterprise Section**: Dedicated section for enterprise solutions

## Usage

### Basic Usage
```jsx
import PricingSection from '../PricingSection';

function App() {
  return (
    <div>
      <PricingSection />
    </div>
  );
}
```

## Component Structure

### Main Sections
1. **Main Heading**: "Get your Exact Price. No Hidden Fees. Pay Only for What You Use!"
2. **Know Your Price Section**: Interactive pricing calculator
3. **Responsible Pricing**: Value proposition and pricing philosophy
4. **Enterprise Section**: Enterprise solution information

### Interactive Elements
- **Employee Range Dropdown**: Select from predefined employee ranges
- **Employee Count Display**: Shows selected employee count
- **Price Display**: Dynamic pricing based on selection
- **Get Started Button**: Call-to-action button
- **Enterprise Button**: Link to enterprise consultation

## Pricing Tiers

| Employee Range | Price (₹/month) |
|----------------|-----------------|
| 1-10 Employees | ₹1,000 |
| 11-50 Employees | ₹2,000 |
| 51-100 Employees | ₹3,500 |
| 101-250 Employees | ₹6,000 |
| 251-500 Employees | ₹10,000 |
| 501+ Employees | ₹15,000 |

## Styling

### Color Scheme
- **Primary**: #667eea (Blue)
- **Secondary**: #764ba2 (Purple)
- **Text**: #2d3748 (Dark Gray)
- **Background**: Gradient from #f8f9ff to #e8f0ff

### Responsive Breakpoints
- **Desktop**: 1200px+ (Two-column layout)
- **Tablet**: 768px-1024px (Adjusted spacing)
- **Mobile**: <768px (Single-column layout)

### Animations
- **Button Hover**: Lift effect with shadow
- **Dropdown Focus**: Border color change with glow
- **Smooth Transitions**: 0.3s ease transitions

## Props

Currently, the component doesn't accept any props and uses internal state management for the pricing calculator.

## Dependencies

- React (useState hook)
- Next.js Image component
- SCSS modules for styling

## Images Used

- **Employee Illustration**: `https://ezii.co.in/wp-content/uploads/2024/12/employee.webp`
- **Pricing Visual**: `https://ezii.co.in/wp-content/uploads/2024/11/pricing-1.webp`
- **Background Pattern**: `/assets/kjgrn-1734668824.png`

## Accessibility

- Proper ARIA labels for dropdown
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers
- Progressive enhancement for older browsers 
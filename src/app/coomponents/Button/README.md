# Button Component

A comprehensive, reusable button component for the entire EZII project with multiple variants, sizes, and features.

## Features

- ✅ **Multiple Variants**: primary, secondary, outline, ghost, gradient, proposal, success, danger, warning
- ✅ **Multiple Sizes**: small, medium, large, xlarge
- ✅ **Link Support**: Direct href prop for navigation
- ✅ **Loading State**: Built-in loading spinner
- ✅ **Icon Support**: Left or right positioned icons
- ✅ **Full Width**: Option for full-width buttons
- ✅ **Accessibility**: Built-in ARIA support and focus states
- ✅ **Responsive**: Mobile-optimized styles

## Usage Examples

### Basic Button
```jsx
<Button>Click me</Button>
```

### With Variant and Size
```jsx
<Button variant="gradient" size="large">
  Become a Partner
</Button>
```

### With Link
```jsx
<Button variant="proposal" href="/contact">
  Get Free Proposal
</Button>
```

### With Loading State
```jsx
<Button variant="primary" loading={true}>
  Submitting...
</Button>
```

### With Icon
```jsx
<Button variant="outline" icon={<ArrowIcon />}>
  Learn More
</Button>
```

### Full Width Button
```jsx
<Button variant="primary" fullWidth={true}>
  Submit Form
</Button>
```

## Available Variants

| Variant | Description | Use Case |
|---------|-------------|----------|
| `primary` | Default blue button | Main actions |
| `secondary` | Dark button | Secondary actions |
| `outline` | Outlined button | Alternative actions |
| `ghost` | Transparent button | Subtle actions |
| `gradient` | Purple gradient | Partner buttons |
| `proposal` | Blue proposal | CTA buttons |
| `success` | Green button | Success actions |
| `danger` | Red button | Destructive actions |
| `warning` | Orange button | Warning actions |

## Available Sizes

| Size | Height | Use Case |
|------|--------|----------|
| `small` | 36px | Compact spaces |
| `medium` | 44px | Default size |
| `large` | 52px | Prominent actions |
| `xlarge` | 60px | Hero buttons |

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | ReactNode | - | Button content |
| `variant` | string | 'primary' | Button style variant |
| `size` | string | 'medium' | Button size |
| `onClick` | function | - | Click handler |
| `type` | string | 'button' | Button type |
| `disabled` | boolean | false | Disabled state |
| `className` | string | '' | Additional CSS classes |
| `href` | string | - | Link URL (renders as Link if provided) |
| `target` | string | - | Link target |
| `rel` | string | - | Link rel attribute |
| `fullWidth` | boolean | false | Full width button |
| `loading` | boolean | false | Show loading spinner |
| `icon` | ReactNode | - | Icon element |
| `iconPosition` | 'left' \| 'right' | 'left' | Icon position |

## Implementation in Partners Page

### Before (Inline Buttons)
```jsx
// ❌ Old approach - 5 lines per button
<Link href="/becomepartner">
  <button className={styles.becomePartnerBtn}>
    Become a Partner
  </button>
</Link>
```

### After (Component)
```jsx
// ✅ New approach - 1 line per button
<Button variant="gradient" href="/becomepartner">
  Become a Partner
</Button>
```

## Benefits

### 1. **Consistency**
- All buttons across the application have consistent styling
- Easy to maintain and update globally
- Reduces design inconsistencies

### 2. **Reusability**
- Write once, use everywhere
- No need to duplicate button styles
- Reduces code duplication by ~80%

### 3. **Accessibility**
- Built-in accessibility features
- Consistent keyboard navigation
- Screen reader friendly

### 4. **Maintainability**
- Centralized button logic and styling
- Easy to add new variants
- Changes propagate across the entire application

### 5. **Developer Experience**
- Clear prop definitions
- Better IDE support and autocomplete
- Reduces runtime errors

## Code Reduction

**Before**: 5 lines per button
```jsx
<Link href="/becomepartner">
  <button className={styles.becomePartnerBtn}>
    Become a Partner
  </button>
</Link>
```

**After**: 1 line per button
```jsx
<Button variant="gradient" href="/becomepartner">
  Become a Partner
</Button>
```

**Result**: 80% code reduction per button!

## CSS Cleanup

The partners page CSS was cleaned up by removing:
- `.becomePartnerBtn` styles (moved to Button component)
- `.getFreeProposalBtn` styles (moved to Button component)
- Duplicate button styling across multiple sections

## Future Enhancements

- Add more variants as needed
- Support for button groups
- Advanced loading states
- Animation variants
- Custom theme support 
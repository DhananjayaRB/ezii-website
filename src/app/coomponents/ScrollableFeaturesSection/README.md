# ScrollableFeaturesSection Component

A reusable React component for creating scrollable features sections with rotating images.

## Features

- **Responsive Design**: Adapts to different screen sizes
- **Image Rotation**: Automatic image slideshow with customizable interval
- **Scrollable Content**: Left-side scrollable content boxes
- **Sticky Images**: Right-side sticky image container
- **Customizable**: Accepts custom content and images
- **Background Effects**: Built-in background patterns and gradients
- **Smooth Animations**: CSS transitions and keyframe animations

## Usage

### Basic Usage (with default content)

```jsx
import ScrollableFeaturesSection from '../ScrollableFeaturesSection';

function MyPage() {
  return (
    <div>
      <h1>My Page</h1>
      <ScrollableFeaturesSection />
    </div>
  );
}
```

### Advanced Usage (with custom content)

```jsx
import ScrollableFeaturesSection from '../ScrollableFeaturesSection';

function MyPage() {
  const customContentBoxes = [
    {
      title: "Custom Feature 1",
      subtitle: "Subtitle for feature 1",
      description: "Description of the first feature",
      subsections: [
        {
          title: "Subsection 1",
          content: "Content for subsection 1"
        },
        {
          title: "Subsection 2", 
          content: "Content for subsection 2"
        }
      ]
    },
    {
      title: "Custom Feature 2",
      description: "Description of the second feature",
      subtitle: "List of benefits",
      listItems: [
        "Benefit 1",
        "Benefit 2",
        "Benefit 3"
      ]
    }
  ];

  const customImages = [
    { src: "/assets/custom-image-1.webp", alt: "Custom Image 1", width: 600, height: 400 },
    { src: "/assets/custom-image-2.webp", alt: "Custom Image 2", width: 600, height: 400 }
  ];

  return (
    <div>
      <h1>My Page</h1>
      <ScrollableFeaturesSection 
        contentBoxes={customContentBoxes}
        images={customImages}
        rotationInterval={3000}
      />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `contentBoxes` | Array | Default EZII content | Array of content box objects |
| `images` | Array | Default EZII images | Array of image objects |
| `sectionTitle` | String | "EZII Payroll Features" | Section title (currently unused) |
| `rotationInterval` | Number | 2000 | Image rotation interval in milliseconds |

## Content Box Structure

Each content box object can have the following properties:

```javascript
{
  title: "Required - Main heading",
  subtitle: "Optional - Sub heading", 
  description: "Optional - Main description",
  additionalContent: "Optional - Additional paragraph",
  subsections: [ // Optional - Array of subsections
    {
      title: "Subsection title",
      content: "Subsection content"
    }
  ],
  listItems: [ // Optional - Array of list items
    "List item 1",
    "List item 2"
  ]
}
```

## Image Object Structure

Each image object should have:

```javascript
{
  src: "/path/to/image.webp", // Required - Image path
  alt: "Image description",    // Required - Alt text
  width: 600,                 // Required - Image width
  height: 400                 // Required - Image height
}
```

## Styling

The component uses CSS modules with the following main classes:

- `.scrollableFeaturesSection` - Main container
- `.scrollableContainer` - Grid layout container
- `.scrollableContent` - Left-side scrollable area
- `.contentBox` - Individual content boxes
- `.fixedImages` - Right-side image container
- `.imageContainer` - Image wrapper
- `.fixedImage` - Individual images

## Responsive Breakpoints

- **Desktop**: 1fr 2fr grid (1/3 content, 2/3 images)
- **Tablet**: 1fr 1.5fr grid
- **Mobile**: 1fr grid (stacked)

## Background Effects

The component includes:
- Gradient background
- kjgrn-1734668824.png background image
- dots3.svg repeating pattern
- Glassmorphism effects on content boxes

## Animations

- **Image Rotation**: Automatic slideshow with slide-in animation
- **Content Hover**: Subtle lift effect on content boxes
- **Image Hover**: Scale effect on images
- **Scroll Animations**: Smooth transitions during image changes 
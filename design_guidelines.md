# Vidhmahee Constructions - Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from professional construction/architecture portfolios with modern corporate aesthetics. Clean, trust-building design that emphasizes professionalism and expertise.

## Core Design Elements

### Typography
- **Primary Font**: Poppins (Google Fonts)
- **Hierarchy**:
  - Hero/Headlines: 48px-64px, Bold (700)
  - Section Titles: 36px-42px, SemiBold (600)
  - Subheadings: 24px-28px, Medium (500)
  - Body Text: 16px-18px, Regular (400)
  - Navigation: 16px, Medium (500)

### Color Palette
- **Primary**: Royal Blue (#1E3A8A)
- **Secondary**: White (#FFFFFF)
- **Accent**: Golden (#D4AF37) for highlights/borders
- **Neutral**: Light Gray (#F3F4F6) for backgrounds, Dark Gray (#374151) for secondary text

### Layout System
**Spacing**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 (e.g., p-8, mb-12, gap-6)
- Section padding: py-20 desktop, py-12 mobile
- Container: max-w-7xl with px-6 for content sections
- Component gaps: space-y-8 for vertical stacking

## Special Features

### Entry Animation Sequence
1. **Double-Door Opening**: Screen splits from center, doors slide left/right revealing blue background
2. **Logo Reveal**: Company logo fades in at center (2-second display)
3. **Logo Rise & Fade**: Logo moves upward 100px while fading out
4. **Tagline Animation**: "Building Dreams with Strength & Precision" types in or fades in
5. **Transition**: After 3 seconds, smooth fade to home page

### Navigation
- **Sticky header** with white background, subtle shadow on scroll
- Menu items: Home | About Us | Projects | Services | Training | Contact
- **Hover effects**: Smooth 2px bottom border in Royal Blue, 0.3s transition
- Mobile: Hamburger menu with slide-in drawer

## Component Library

### Hero Section
- **Background**: Soft-focus construction site image with 40% blue overlay
- **Layout**: Left-aligned content (max-w-2xl)
- Company logo (120px height)
- Tagline: "Quality Beyond Concrete" (24px, Medium)
- Subtle fade-in animation on load

### About Us Section
- **White background**
- Two-column layout (text left, images right on desktop)
- Company description in 18px body text
- 2-3 construction work images in grid (rounded corners, subtle shadow)
- Fade-in on scroll animation

### Projects Gallery
- **Card Grid**: 3 columns desktop, 2 tablet, 1 mobile
- Each card:
  - Project image (aspect-ratio 4:3)
  - Title overlay on hover with blue gradient background
  - Project name + location + year
  - **Hover effect**: Image zoom (scale-105), smooth 0.4s transition
  - Border: 1px light gray, hover adds golden accent border

### Services Section
- **Light gray background** (#F3F4F6)
- Icon cards in 3-column grid (2 mobile)
- Each card (white background):
  - Icon placeholder (64px, blue circle background)
  - Service title (20px, SemiBold)
  - Brief description (16px)
  - **Hover**: Light blue background (#DBEAFE), subtle glow shadow, lift effect (translateY -4px)

### Training & Internship Section
- **White background**
- Centered content (max-w-4xl)
- Section title + description paragraph
- **Bullet points** with checkmark icons:
  - Practical site visits
  - Mentorship from engineers
  - Certificate of Completion
- **CTA Button**: "Join Now" - Royal blue background, white text, rounded-lg, px-8 py-4
  - Links to mailto:vidhmaheeconstructions@gmail.com
  - Hover: Darker blue, slight scale

### Footer
- **Royal Blue background**, white text
- Three-column layout:
  - Column 1: Company info + tagline
  - Column 2: Contact details (location icon, phone icon, email icon)
  - Column 3: Social media icons (Facebook, Instagram, LinkedIn - 32px each)
- Bottom bar: Copyright text, centered
- All links have subtle hover brightness increase

## Animations & Interactions
- **Scroll animations**: Fade-in with slide-up (translateY 20px to 0) using Intersection Observer
- **Transition timing**: 0.3s ease for hover effects, 0.6s for scroll animations
- **Smooth scroll**: Enabled for anchor navigation
- **Subtle effects only**: No distracting motion, professional appearance

## Images
**Required Images**:
1. **Hero Background**: Wide-angle construction site or building facade (1920x1080, soft-focus with blue overlay)
2. **About Us Gallery**: 2-3 images of construction projects or team at work sites (square/portrait format)
3. **Project Cards**: 3 project images showcasing residential, commercial, and villa projects (landscape 4:3 ratio)
4. **Company Logo**: Professional construction logo (SVG preferred, displayed at various sizes)

All images should convey professionalism, quality craftsmanship, and modern construction practices.

## Responsive Behavior
- Desktop (1024px+): Full multi-column layouts
- Tablet (768px-1023px): 2-column grids, adjusted spacing
- Mobile (<768px): Single column, stacked sections, larger touch targets (min 44px)
- Navigation collapses to hamburger menu at 768px
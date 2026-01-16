# Plan Studies Page

## Overview
The Plan Studies page (`/plan-studies`) is a comprehensive guide for international students planning to study in Korea. It provides detailed information about the Korean education system, application process, financial planning, and student life.

## Page Structure

### 1. Hero Section
- **Title**: "Plan your studies" (유학 계획하기)
- **Subtitle**: Clear, encouraging message about the ease of planning
- **Description**: Brief overview of what the page offers

### 2. Main Categories (10 sections)
Organized in a responsive grid layout with cards:

1. **Korea's Education System** - Overview of higher education structure
2. **School Types** - Information about different educational institutions
3. **Certified Universities** - List of internationally recognized universities
4. **TOPIK & Korean Study** - Korean language proficiency requirements
5. **Study Expenses** - Cost breakdown and budgeting guide
6. **Scholarships** - Available financial aid opportunities
7. **Student Visa** - Visa application process and requirements
8. **Application FlowChart** - Step-by-step application guide
9. **Online Application** - Digital application platform information
10. **Guidebook** - Downloadable resources

### 3. Additional Information (3 sections)
- **Find Department & University** - Search functionality
- **Online Korean Learning** - Language learning resources
- **Online Consultation** - Support and Q&A services

### 4. Stories Section (3 videos)
YouTube embedded videos featuring:
- **GKS Alumni Training** - Government scholarship program
- **International Student Interview** - Real student experiences
- **Study Opportunities** - Overview of available programs

### 5. Quick Links Section
Fast access buttons for:
- University/department search
- Guidebook download
- Certified university list
- Online applications
- TOPIK exam information
- Scholarship search

### 6. Call-to-Action Section
Prominent CTA with:
- Encouraging title
- Action buttons (Get Started, Ask Questions)
- Links to signup and AI chat

## Features

### Design Elements
- **Card-based Layout**: Modern, clean card design with hover effects
- **Icons**: Lucide React icons for visual consistency
- **Gradient Backgrounds**: Subtle gradients using brand colors
- **Grid Pattern**: Background texture for depth
- **Responsive Grid**: 1/2/3 column layouts based on screen size

### Interactions
- **Hover Effects**: Cards lift and change shadow on hover
- **Smooth Transitions**: All animations use CSS transitions
- **Icon Animations**: Icons scale on hover
- **External Links**: Properly handle external resources with `target="_blank"`

### Accessibility
- **Semantic HTML**: Proper heading hierarchy
- **ARIA Labels**: Appropriate labels for interactive elements
- **Keyboard Navigation**: Fully keyboard accessible
- **Screen Reader Friendly**: Descriptive text for all content

## Internationalization

The page supports 13 languages with complete translations:
- English (en)
- Korean (ko)
- Chinese Simplified (zh)
- Japanese (ja)
- Vietnamese (vi)
- Mongolian (mn)
- Arabic (ar)
- Hindi (hi)
- Spanish (es)
- French (fr)
- German (de)
- Russian (ru)
- Thai (th)

All text content is loaded from `src/i18n/locales/[lang].json` under the `planStudies` key.

## Technical Details

### Component Structure
```
PlanStudies.tsx
├── Header (from layout)
├── Hero Section
├── Main Categories Section
│   └── PlanCard components (grid)
├── Additional Info Section
│   └── PlanCard components (grid)
├── Stories Section
│   └── YouTube iframes (grid)
├── Quick Links Section
│   └── Button components (grid)
├── CTA Section
└── Footer (from layout)
```

### PlanCard Component
Reusable card component with props:
- `icon`: React node (Lucide icon)
- `title`: Translation key
- `description`: Translation key
- `link`: Optional URL (internal or external)
- `external`: Boolean for external links

### Styling
- **Tailwind CSS**: Utility-first approach
- **Custom Grid Pattern**: `.bg-grid-pattern` utility class
- **Brand Colors**: Primary green (`--primary`), light green, gold accents
- **Responsive**: Mobile-first design with breakpoints

### Dependencies
- `react-i18next`: For translations
- `react-router-dom`: For navigation
- `lucide-react`: For icons
- `@/components/ui/*`: shadcn/ui components
- `@/components/layout/*`: Header and Footer

## Routes
- Main page: `/plan-studies`
- Future sub-routes can be added for each category

## Integration Points

### Header Navigation
The page is linked in the main navigation:
- Desktop: Top navigation bar with dropdown
- Mobile: Hamburger menu

### Related Pages
- `/chat`: AI advisor for questions
- `/signup`: User registration to get started
- `/profile`: User profile for personalized recommendations

### External Links
- TOPIK exam: `https://www.topik.go.kr/`
- Korean language learning: `https://www.kosnet.go.kr/`
- YouTube videos: Embedded from Study in Korea channel

## Future Enhancements

### Planned Features
1. **Search Functionality**: University/department search
2. **Filter System**: Filter universities by criteria
3. **Comparison Tool**: Compare multiple universities
4. **Bookmark System**: Save favorite universities
5. **Progress Tracker**: Track application progress
6. **Document Checklist**: Required documents tracker
7. **Timeline Calculator**: Personalized timeline
8. **Cost Calculator**: Budget planning tool

### Content Additions
1. **Success Stories**: More student testimonials
2. **Virtual Tours**: 360° campus tours
3. **Live Chat**: Real-time support
4. **Webinar Calendar**: Upcoming events
5. **FAQ Section**: Common questions
6. **Blog Integration**: Latest study abroad news

## Maintenance

### Regular Updates
- Keep scholarship information current
- Update visa requirements
- Refresh university rankings
- Add new video content
- Update statistics and data

### Content Review
- Quarterly review of all content
- Annual translation updates
- User feedback integration
- SEO optimization

## SEO Considerations
- Descriptive page title
- Meta descriptions for each section
- Structured data markup
- Alt text for all images
- Internal linking strategy
- Mobile optimization
- Fast loading times

## Analytics
Track user behavior:
- Page views and time on page
- Click-through rates on cards
- Video engagement
- External link clicks
- Conversion to signup
- Language preferences

## Support
For questions or issues related to this page:
1. Check the main README.md
2. Review component documentation
3. Test translations in all languages
4. Verify responsive design
5. Check browser compatibility

# CSS Layout Patterns: Week Three Documentation

## Overview
This week explored fundamental CSS layout patterns that form the backbone of modern web design. Through four distinct projects, we implemented and mastered key layout techniques used in professional development.

## Projects & Layout Patterns

### 1. **Stark Enterprises** - 12-Column Grid Layout
**Pattern**: Classic Grid System  
**Live Demo**: [stark-enterpises.netlify.app](https://stark-enterpises.netlify.app/)

**Purpose**: Structured, corporate layout with precise content alignment

**Key Features**:
- 12-column responsive grid system
- Consistent spacing and alignment
- Professional, business-appropriate aesthetic

**Technical Implementation**:
```css
.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 30px;
}

/* Column spanning examples */
header h1 { grid-column: span 5; }
header nav { grid-column: span 6; }
main img { grid-column: span 6; }
main .welcome { grid-column: 8 / span 5; }
main .card { grid-column: span 4; }

```

**Use Cases**: Corporate websites, portfolios, any content requiring structured presentation

---

### 2. **Nishinoya Yuu** - Full Column Grid Layout
**Pattern**: Asymmetrical Grid  
**Live Demo**: [nishinoya-yuu-karasuno.netlify.app](https://nishinoya-yuu-karasuno.netlify.app/)

**Purpose**: Dynamic, visually engaging layout with varied column widths

**Key Features**:
- Mixed column ratios (1.2fr 1fr 1fr)
- Full-viewport height sections
- Dramatic visual impact

**Technical Implementation**:
```css
main {
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr;
  min-height: 100vh;
}

.panel {
  display: grid;
  grid-template-columns: 1fr;
  padding: 30px 60px;
}

.panel.welcome {
  background-color: #323230;
  grid-auto-rows: 1fr;
}

.panel.about {
  grid-template-rows: 1fr 1fr;
}

.panel.photos {
  grid-template-rows: 1fr 2fr;
}
```

**Responsive Behavior**:
```css
@media screen and (max-width: 1000px) {
  main { grid-template-columns: 1fr 1fr; }
  .panel.welcome { grid-column: span 2; }
}

@media screen and (max-width: 760px) {
  main { grid-template-columns: 1fr; }
}
```

**Use Cases**: Artistic portfolios, landing pages, content that benefits from visual hierarchy

---

### 3. **Express Men Fashion** - Masonry Layout
**Pattern**: Pinterest-Style Grid  
**Live Demo**: [express-men-fashion.netlify.app](https://express-men-fashion.netlify.app/)

**Purpose**: Dynamic, content-first layout with variable height items

**Key Features**:
- Variable height content blocks
- Organic, flowing arrangement
- Optimized for visual content discovery

**Technical Implementation**:
```css
.masonry-grid {
  columns: 3;
  column-gap: 20px;
}

.masonry-item {
  break-inside: avoid;
  margin-bottom: 20px;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
```

**Responsive Behavior**:
```css
@media (max-width: 1200px) {
  .masonry-grid { columns: 2; }
}

@media (max-width: 768px) {
  .masonry-grid { columns: 1; }
}
```

**Use Cases**: Image galleries, blogs, social media feeds, e-commerce product displays

---

### 4. **Miles Morales Fan Page** - Multi-Column Layout
**Pattern**: Newspaper-Style Columns  
**Live Demo**: [miles-morales-fan-page.netlify.app](https://miles-morales-fan-page.netlify.app/)

**Purpose**: Optimized text readability and content flow


**Use Cases**: Articles, blogs, documentation, any text-heavy content

---

## Conclusion

This week's exploration of CSS layout patterns provided a comprehensive foundation in modern web layout techniques. From structured grid systems to dynamic masonry layouts, each pattern serves specific purposes and solves distinct design challenges.

The key insight is that there's no "one size fits all" solution—successful web design involves choosing the right layout pattern for the content and context. By mastering these fundamental patterns, we've built a toolkit that can adapt to any design requirement while maintaining performance, accessibility, and user experience.

These skills form the foundation for more advanced CSS techniques and will remain relevant as web technologies continue to evolve.

---
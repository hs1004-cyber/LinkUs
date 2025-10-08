# LinkUs Design Guidelines

## Design Approach
**Reference-Based**: Drawing inspiration from Instagram's visual engagement, BeReal's authentic sharing, and Threads' conversational flow. Youth-focused with emotion-centric visual language.

## Core Design Principles
- **Emotional Clarity**: Visual elements reflect and enhance emotional content
- **Approachable Intimacy**: Balance anonymous sharing with warm, inviting aesthetics
- **Dynamic Energy**: Youth-oriented vibrancy without overwhelming the content

## Color Palette

**Primary Colors (Dark Mode):**
- Background: 222 10% 12%
- Surface: 222 10% 16%
- Card Background: 222 10% 18%
- Text Primary: 0 0% 95%
- Text Secondary: 0 0% 70%

**Primary Colors (Light Mode):**
- Background: 0 0% 98%
- Surface: 0 0% 100%
- Card Background: 0 0% 100%
- Text Primary: 222 15% 15%
- Text Secondary: 222 10% 40%

**Brand Colors:**
- Primary Accent: 260 60% 65% (soft purple for empathy/connection)
- Secondary Accent: 340 65% 70% (warm pink for emotional warmth)

**Emotion Tag Colors:**
- Happy: 45 90% 60%
- Excited: 25 85% 60%
- Calm: 200 60% 65%
- Thoughtful: 280 50% 70%
- Nostalgic: 20 60% 65%

**Interaction Colors:**
- Like/Empathy: 340 65% 70%
- Comment: 210 60% 60%
- Success: 145 60% 55%

## Typography

**Font Families:**
- Primary: 'Inter' (Google Fonts) - clean, modern readability
- Accent: 'Outfit' (Google Fonts) - friendly, rounded for emotions/tags

**Scale:**
- Hero: text-5xl md:text-6xl, font-bold (Outfit)
- Section Heading: text-3xl md:text-4xl, font-bold
- Card Title: text-xl font-semibold
- Body: text-base leading-relaxed
- Caption/Meta: text-sm text-secondary
- Emotion Tags: text-xs uppercase tracking-wide font-medium (Outfit)

## Layout System

**Spacing Primitives:** Tailwind units of 2, 4, 6, 8, 12, 16, 24
- Card padding: p-6
- Section spacing: py-16 md:py-24
- Component gaps: gap-4 to gap-8
- Inline spacing: space-x-2, space-x-4

**Container System:**
- Max width: max-w-6xl for content, max-w-4xl for feeds
- Section padding: px-4 md:px-6
- Card grids: Masonry-style or grid-cols-1 md:grid-cols-2 lg:grid-cols-3

## Component Library

**Experience Cards:**
- Rounded corners: rounded-2xl
- Shadow: shadow-sm hover:shadow-md transition
- Border: border border-white/5 (dark) / border-black/5 (light)
- Header: Emotion tag chip + timestamp
- Content: Title (bold), body text, 3-line clamp initially
- Footer: Like count + comment count + author nickname
- Image: Rounded-lg, aspect-video or aspect-square

**Emotion Tags:**
- Pill shape: rounded-full px-3 py-1
- Colored backgrounds with 10% opacity
- Small, uppercase text
- Icon support (optional emoji/icon prefix)

**Navigation:**
- Fixed top bar with blur backdrop: backdrop-blur-lg bg-surface/80
- Logo: Outfit font, gradient text or solid brand color
- CTA button: Primary accent, rounded-full, px-6 py-2.5

**Forms (Experience Creation):**
- Large textarea: min-h-32, rounded-xl
- Emotion selector: Grid of clickable pills
- Image upload: Dashed border dropzone with preview
- Submit button: Full-width on mobile, auto on desktop, rounded-full

**Admin Dashboard:**
- Table-based or card-based post list
- Metrics displayed prominently: Large numbers with icons
- Quick actions: Icon buttons for delete/edit
- Auth screen: Centered card with gradient border

**Interactions:**
- Like button: Heart icon with scale animation, color change to pink
- Comment count: Speech bubble icon, opens slide-over panel
- Hover states: Subtle lift (translateY -1px) + shadow increase

## Landing Page Structure

**Hero Section (60vh minimum):**
- Large hero image: Abstract youth lifestyle/connection imagery with gradient overlay
- Centered headline: "우리의 일상과 경험이 자연스럽게 이어지는 연결 플랫폼"
- Subheading: Target audience callout
- Primary CTA: "경험 공유하기" (Share Experience)
- Floating card preview elements

**Real-Time Feed Section:**
- Title: "지금 공유되는 순간들" (Moments Being Shared)
- Masonry grid of experience cards (live updates)
- Auto-refresh indicator with pulse animation
- "Load More" or infinite scroll

**Features Section:**
- 3-column grid on desktop: Emotion cards, Empathy matching, Anonymous sharing
- Icon + title + description format
- Soft background cards with hover lift

**How It Works Section:**
- 3-step visual flow: Create → Share → Connect
- Numbered steps with connecting lines
- Screenshot/mockup images

**CTA Section:**
- Centered, gradient background
- "오늘의 경험을 공유해보세요" (Share Today's Experience)
- Large button with arrow icon

## Images

**Required Images:**
1. **Hero Background**: Vibrant, slightly blurred lifestyle photo of young people connecting, abstract shapes, or emotional color gradients (full-width, 60vh minimum)
2. **Feature Icons/Illustrations**: Simple line art or icons for emotion cards, matching algorithm, anonymous feed
3. **How It Works Mockups**: UI screenshots showing card creation, feed view, empathy interaction
4. **Experience Card Placeholders**: Sample lifestyle photos for demo cards in feed

**Image Treatment:**
- Rounded corners throughout
- Subtle overlays for text legibility
- Gradient masks on hero imagery

## Accessibility & Polish

- Dark mode default with light mode toggle
- All form inputs maintain consistent styling in both modes
- Focus states: 2px ring in accent color
- Loading states: Skeleton screens for cards
- Empty states: Friendly illustrations with helpful text
- Toast notifications: Top-right, slide-in animation
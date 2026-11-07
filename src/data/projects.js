import weatherImg from '../assets/projects/weather.svg'
import nexchatImg from '../assets/projects/nexchat.svg'
import istakkImg from '../assets/projects/istakk.svg'
import videoImg from '../assets/projects/video.svg'

// ──────────────────────────────────────────────────────────────────────────
// All project information is edited here. Nothing else needs to change.
//
// • `liveUrl` / `githubUrl`: leave as '' and the button is simply not shown, so
//   the site never links to a page that doesn't exist. Fill them in when ready.
// • `image`: swap the placeholder import above for a real screenshot, e.g.
//   import weatherImg from '../assets/projects/weather.png'
// • `categories` must use the filter names listed in `projectFilters` below.
// • Objectives and features for projects other than NexChat are sample text:
//   CUSTOMIZE them so they describe what you actually built.
// ──────────────────────────────────────────────────────────────────────────

export const projectFilters = ['All', 'Web Development', 'React Applications', 'Video Editing']

export const projects = [
  {
    id: 'nexchat',
    title: 'NexChat',
    category: 'React Application',
    categories: ['React Applications', 'Web Development'],
    featured: true,
    image: nexchatImg,
    imageAlt: 'NexChat messaging app interface (placeholder artwork)',
    description:
      'A real-time messaging application featuring user authentication, conversations, and messaging functionality.',
    longDescription:
      'NexChat is a full-stack, real-time messaging app. People sign in securely, find other users, and chat instantly, with live online status and support for sharing images and videos. The interface adapts between light and dark themes and lets users pick a chat wallpaper.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    objectives: [
      'Deliver instant, reliable one-to-one messaging.',
      'Handle authentication without building a custom login system.',
      'Ship a clean, responsive interface that works on desktop and mobile.',
    ],
    features: [
      'Secure sign-in and sign-up with Clerk',
      'Real-time messages and online presence with Socket.IO',
      'Image and video sharing with ImageKit uploads',
      'Conversation list and user search',
      'Light/dark theme and customizable chat wallpaper',
    ],
    liveUrl: 'https://real-time-chat-app-full-stack.onrender.com',
    githubUrl: 'https://github.com/aashocks/NexChat',
  },
  {
    id: 'weather-app',
    title: 'Weather Application',
    category: 'React Application',
    categories: ['React Applications', 'Web Development'],
    featured: false,
    image: weatherImg,
    imageAlt: 'Weather application interface (placeholder artwork)',
    description:
      'A responsive weather application that displays real-time weather information using a weather API.',
    longDescription:
      'A responsive weather app that fetches live conditions from a weather API and presents them in a clear, glanceable layout that works on any screen size.',
    tech: ['React', 'JavaScript', 'CSS', 'API Integration'],
    objectives: [
      'Practice working with third-party APIs and asynchronous data.',
      'Present live data clearly, with sensible loading and error states.',
    ],
    features: [
      'Search weather by city',
      'Current conditions and temperature',
      'Responsive layout for mobile and desktop',
      'Loading and error handling',
    ],
    liveUrl: '', // CUSTOMIZE
    githubUrl: '', // CUSTOMIZE
  },
  {
    id: 'istakk',
    title: 'iStakk Inventory Management System',
    category: 'Web Development',
    categories: ['Web Development'],
    featured: false,
    image: istakkImg,
    imageAlt: 'iStakk inventory dashboard (placeholder artwork)',
    description:
      'An inventory management system designed to help businesses monitor products, manage stock, and organize inventory operations.',
    longDescription:
      'iStakk helps small businesses keep track of what they have in stock. It brings product records, stock levels, and day-to-day inventory operations into one organized system.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    objectives: [
      'Replace manual stock tracking with a single organized system.',
      'Make it quick to see what is available and what needs restocking.',
    ],
    features: [
      'Product and stock management',
      'Inventory monitoring',
      'Organized records backed by a MySQL database',
    ],
    liveUrl: '', // CUSTOMIZE
    githubUrl: '', // CUSTOMIZE
  },
  {
    id: 'video-editing',
    title: 'Creative Video Editing',
    category: 'Video Editing',
    categories: ['Video Editing'],
    featured: false,
    image: videoImg,
    imageAlt: 'Video editing timeline (placeholder artwork)',
    description:
      'A collection of creative video editing work demonstrating visual storytelling, transitions, pacing, and editing techniques.',
    longDescription:
      'A selection of edited videos that showcase storytelling through pacing, transitions, and visual style, from short-form content to longer pieces.',
    tech: ['Video Editing', 'Motion Graphics', 'Transitions', 'Storytelling'],
    objectives: [
      'Tell a clear story through pacing and rhythm.',
      'Use transitions and motion to support the message, not distract from it.',
    ],
    features: [
      'Cuts, pacing, and narrative structure',
      'Transitions and motion graphics',
      'Colour and visual polish',
    ],
    liveUrl: '', // CUSTOMIZE: link to your reel or channel
    githubUrl: '',
  },
]

import realEstateProjectImage from "../photos/Luxury Real Estate Property Discovery & Investment Website.webp";
import gameDashboardProjectImage from "../photos/Game Store Dashboard UI Kit.webp";
import healthAppProjectImage from "../photos/videoframe_1606.png";
import zyniqProjectImage from "../photos/AI Productivity Assistant App - Zyniq.webp";

export const SITE = {
  name: "Raxio",
  title: "Nexus",
  url: "https://www.emoiss.com",
  email: "kevinvaghela15@gmail.com",
  phone: "+91 8200070225",
  location: "India · Remote-first",
  description:
    "Raxio designs and builds custom software, web platforms, mobile apps, and automation systems for startups, SMEs, and enterprises.",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    id: "custom-software",
    title: "Custom Software Development",
    copy: "Purpose-built platforms that match your workflows, not generic templates.",
  },
  {
    id: "web",
    title: "Web Development",
    copy: "Fast, secure, SEO-ready websites and web apps that convert visitors into clients.",
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    copy: "iOS and Android experiences with clean UX, reliable APIs, and room to scale.",
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    copy: "Interfaces that feel premium, stay accessible, and reduce friction at every step.",
  },
  {
    id: "automation",
    title: "Business Automation",
    copy: "Connect tools, remove repetitive work, and keep operations running with less overhead.",
  },
  {
    id: "consulting",
    title: "Software Consulting",
    copy: "Architecture, stack choices, and delivery plans before you spend on the wrong build.",
  },
];

export const reasons = [
  { title: "Unique Ideas", copy: "We start from your market, not a recycled playbook." },
  { title: "Progressive Technology", copy: "Modern stacks chosen for speed, security, and longevity." },
  { title: "Expert Team", copy: "Designers and engineers who ship production software, not slides." },
  { title: "Scalable Solutions", copy: "Architecture that grows with traffic, teams, and new products." },
  { title: "Long-term Support", copy: "Launch is the midpoint. We stay for iteration and care." },
];

export const processSteps = [
  { step: "01", title: "Discover", copy: "Goals, users, constraints, and success metrics." },
  { step: "02", title: "Plan", copy: "Scope, architecture, timeline, and delivery checkpoints." },
  { step: "03", title: "Design", copy: "Flows, visual system, and interactive prototypes." },
  { step: "04", title: "Develop", copy: "Secure, tested software with weekly visible progress." },
  { step: "05", title: "Launch & Support", copy: "Go-live, monitoring, and a clear support cadence." },
];

export const projects = [
  {
    slug: "orbit-commerce",
    title: "Luxury Real Estate Property Discovery & Investment Website",
    category: "Luxury Real Estate",
    summary:
      "A premium real estate website focused on luxury property discovery, investment opportunities, and an elegant user experience.",
    outcome:
      "A modern, responsive interface for showcasing high-end properties, real estate services, market insights, and consultation journeys.",
    tagline: "A premium digital experience for discovering luxury properties and smarter real estate investments.",
    features: [
      "Luxury property listings",
      "Property search and filtering",
      "Buy, sell, and rent categories",
      "Featured properties and pricing",
      "Real estate services and market insights",
      "Investment content, FAQs, and consultation CTAs",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "React", "Figma", "UI/UX Design"],
    accent: "from-sky-400/30 to-indigo-500/20",
    image: realEstateProjectImage,
  },
  {
    slug: "pulse-ops",
    title: "Gaming & Live Streaming Dashboard UI",
    category: "UI/UX Design | Gaming | Dashboard | Web Design",
    summary:
      "A modern gaming and live-streaming dashboard designed to help users discover live content, follow streamers, explore gaming categories, and manage their gaming experience through a clean and intuitive interface.",
    outcome:
      "An engaging streaming-platform experience with organized navigation, live content discovery, community interactions, and clear activity management in one dashboard.",
    tagline: "A clean and engaging gaming dashboard built for seamless live-stream discovery and community interaction.",
    features: [
      "Gaming dashboard and live streaming channels",
      "Followed channels and streamer profiles",
      "Search functionality and popular gaming categories",
      "Notifications and follower interactions",
      "Wallet management, orders, and products",
      "Gaming community and account settings",
      "Responsive modern UI/UX design",
    ],
    technologies: ["UI/UX Design", "Figma", "Web Design", "Responsive Design"],
    accent: "from-violet-400/30 to-fuchsia-500/15",
    image: gameDashboardProjectImage,
  },
  {
    slug: "lumen-health",
    title: "MonaMed – Healthcare & Virtual Care Mobile App",
    category: "UI/UX Design | Mobile App | Healthcare | Product Design",
    summary:
      "A modern healthcare mobile app designed to simplify virtual care, doctor appointments, lab tests, medical records, and healthcare services through an intuitive and user-friendly interface.",
    outcome:
      "A trusted mobile-first experience that brings doctors, virtual care, lab tests, check-ups, medical records, and healthcare packages into one accessible platform.",
    tagline: "A simple and trusted digital healthcare experience that puts essential medical services at users’ fingertips.",
    features: [
      "Virtual healthcare and doctor services",
      "Healthcare service and lab test booking",
      "Check-ups and healthcare packages",
      "Medical records and prescription information",
      "Doctor visits and service search",
      "Personalized healthcare experience",
      "Login, sign up, and mobile-first responsive UI",
    ],
    technologies: ["UI/UX Design", "Figma", "Mobile App Design", "Wireframing", "Prototyping", "Visual Design"],
    accent: "from-teal-400/25 to-sky-500/20",
    image: healthAppProjectImage,
  },
  {
    slug: "atlas-erp",
    title: "Zyniq – AI Productivity & Personal Assistant App",
    category: "UI/UX Design | Mobile App | AI | Productivity | Product Design",
    summary:
      "An AI-powered productivity assistant designed to help users plan their day, manage tasks, organize schedules, and interact with an intelligent assistant through text and voice.",
    outcome:
      "A personalized mobile-first productivity experience with daily planning, task progress, conversational assistance, and hands-free voice interaction.",
    tagline: "An intelligent AI companion that helps users plan, organize, and get more done throughout their day.",
    features: [
      "AI-powered personal assistant",
      "Daily schedule and task management",
      "Task progress tracking and reminders",
      "AI chat interface and voice mode",
      "Standup drafting and inbox summarization",
      "Smart schedule adjustments and planning",
      "Personalized mobile-first dashboard",
    ],
    technologies: ["UI/UX Design", "Figma", "Mobile App Design", "AI Product Design", "Wireframing", "Prototyping", "Interaction Design"],
    accent: "from-amber-300/20 to-orange-500/10",
    image: zyniqProjectImage,
  },
];

export const projectTypes = [
  "Custom Software",
  "Web Development",
  "Mobile App",
  "UI/UX Design",
  "Business Automation",
  "Consulting",
  "Not sure yet",
];

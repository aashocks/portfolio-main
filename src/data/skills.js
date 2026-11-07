import { BookOpen, Code, Film, Palette, PenTool, Smartphone } from 'lucide-react'
import { FaCss3Alt, FaFigma, FaGitAlt, FaGithub, FaHtml5, FaJs, FaReact } from 'react-icons/fa'
import { VscVscode } from 'react-icons/vsc'

export const skillGroups = [
  {
    title: 'Frontend',
    skills: [
      { label: 'HTML5', icon: FaHtml5 },
      { label: 'CSS3', icon: FaCss3Alt },
      { label: 'JavaScript', icon: FaJs },
      { label: 'React.js', icon: FaReact },
      { label: 'Responsive Web Design', icon: Smartphone },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { label: 'Git', icon: FaGitAlt },
      { label: 'GitHub', icon: FaGithub },
      { label: 'VS Code', icon: VscVscode },
      { label: 'Figma', icon: FaFigma },
    ],
  },
  {
    title: 'Creative',
    skills: [
      { label: 'Video Editing', icon: Film },
      { label: 'Visual Storytelling', icon: BookOpen },
      { label: 'UI Design', icon: Palette },
      { label: 'Content Creation', icon: PenTool },
    ],
  },
]

export const services = [
  {
    id: 'web',
    icon: Code,
    title: 'Web Development',
    description:
      'Building responsive, modern, and user-friendly websites using contemporary frontend technologies.',
    tags: [
      'React Development',
      'Responsive Websites',
      'Frontend Development',
      'UI Implementation',
      'Website Optimization',
    ],
  },
  {
    id: 'video',
    icon: Film,
    title: 'Video Editing',
    description:
      'Creating engaging visual content through creative editing, storytelling, and polished video presentation.',
    tags: [
      'Video Editing',
      'Content Creation',
      'Motion Graphics',
      'Transitions',
      'Visual Storytelling',
    ],
  },
]

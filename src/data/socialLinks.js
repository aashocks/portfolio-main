import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

// CUSTOMIZE: paste your profile URLs. Entries with an empty `url` are hidden
// automatically, so the site never shows a link that goes nowhere.
export const socialLinks = [
  { id: 'github', label: 'GitHub', url: 'https://github.com/aashocks', icon: FaGithub },
  { id: 'linkedin', label: 'LinkedIn', url: '', icon: FaLinkedinIn },
  { id: 'facebook', label: 'Facebook', url: '', icon: FaFacebookF },
  { id: 'instagram', label: 'Instagram', url: '', icon: FaInstagram },
]

export const activeSocialLinks = socialLinks.filter((link) => link.url)

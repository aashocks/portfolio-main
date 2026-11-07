import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

// CUSTOMIZE: paste your profile URLs. Entries with an empty `url` are hidden
// automatically, so the site never shows a link that goes nowhere.
export const socialLinks = [
  { id: 'github', label: 'GitHub', url: 'https://github.com/aashocks', icon: FaGithub },
  { id: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/allen-aldrich-formento-b80b38359/', icon: FaLinkedinIn },
  { id: 'facebook', label: 'Facebook', url: 'https://www.facebook.com/Aa.formento.5', icon: FaFacebookF },
  { id: 'instagram', label: 'Instagram', url: 'https://www.instagram.com/aaformento/', icon: FaInstagram },
]

export const activeSocialLinks = socialLinks.filter((link) => link.url)

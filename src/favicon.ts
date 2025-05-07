import profilePic from './assets/images/profile pic.jpeg';

// Set favicon dynamically
export function setFavicon() {
  const link = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
  if (link) {
    link.href = profilePic;
  } else {
    const newLink = document.createElement('link');
    newLink.rel = 'icon';
    newLink.href = profilePic;
    document.head.appendChild(newLink);
  }
} 
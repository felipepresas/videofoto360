// Smooth scroll to element
export const scrollTo = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const headerOffset = 80; // Height of your header
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

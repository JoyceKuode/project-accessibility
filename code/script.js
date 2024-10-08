//DOM Selectors
const navButtons = document.querySelectorAll('#top-nav button')
const fadeInSections = document.querySelectorAll('.fade-in-section')
const topButton = document.getElementById('scroll-button')
const footer = document.getElementById('footer')

// Check for prefers-reduced-motion
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Event listeners for navigation buttons
navButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    const sectionId = event.target.getAttribute('data-section')
    const section = document.getElementById(sectionId)
    section.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth'
    })
  })
})

// IntersectionObserver to handle fade-in sections
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
      observer.unobserve(entry.target)
    } else {
      entry.target.classList.remove('visible')
    }
  })
})

// Observe each fade-in section
fadeInSections.forEach(section => {
  observer.observe(section)
})

// Handle scroll event to show/hide the back-to-top button
window.addEventListener('scroll', () => {
  const footerRect = footer.getBoundingClientRect()
  const footerInView = footerRect.top < window.innerHeight && footerRect.bottom >= 0

  if (document.documentElement.scrollTop > 300 && !footerInView) {
    topButton.style.display = 'block'
    topButton.style.opacity = '1'
  } else {
    topButton.style.opacity = '0'
    topButton.style.display = 'none'
  }
})

// Event listener for back-to-top button
topButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' })
})

const navButtons = document.querySelectorAll('#top-nav button')

navButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    const sectionId = event.target.getAttribute('data-section')
    const section = document.getElementById(sectionId)
    section.scrollIntoView({
      behavior:
        'smooth'
    })
  })
})

// Scroll-triggered animation
const sections = document.querySelectorAll('.fade-in-section')

const appearOnScroll = () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top
    const triggerPoint = window.innerHeight * 0.8

    if (sectionTop < triggerPoint) {
      section.classList.add('visible')
    }
  })
}

window.addEventListener('scroll', appearOnScroll)
const navButtons = document.querySelectorAll('#top-nav button')

const fadeInSections = document.querySelectorAll('.fade-in-section')

const topButton = document.querySelector('.back-to-top')

const youtubeVideo = document.getElementById('youtube-video')

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


const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')

      if (entry.target === youtubeVideo) {
        youtubeVideo.setAttribute('tabindex', '0') // Make video controls accessible
      }

      // Unobserve element after it becomes visible
      observer.unobserve(entry.target)
    } else {
      entry.target.classList.remove('visible')

      if (entry.target === youtubeVideo) {
        youtubeVideo.setAttribute('tabindex', '-1')
      }
    }
  })
})

fadeInSections.forEach(section => {
  observer.observe(section)
})




window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop > 300) {
    topButton.style.display = 'block'
    topButton.style.opacity = '1'
  } else {
    topButton.style.opacity = '0'
    setTimeout(() => {
      topButton.style.display = 'none'
    }, 300)
  }
})

document.querySelector('.back-to-top').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


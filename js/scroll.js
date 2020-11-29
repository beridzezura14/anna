const faders = document.querySelectorAll('.fade-in');



const appearOption = {
  threshold: 1
}; 

const appeareOnScroll = new 
IntersectionObserver(function(entries, appeareOnScroll)

 {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    }
    else{
      entry.target.classList.add("appear");
      appeareOnScroll.unobserver(entry.target);
    }
  })
}, appearOption);

faders.forEach(fader => {
  appeareOnScroll.observe(fader);
});
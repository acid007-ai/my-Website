const page = location.pathname.split('/').pop()||'index.html';
document.querySelectorAll('nav a').forEach(a=>{
  a.classList.toggle('active-link', a.getAttribute('href')===page);
});
 
// Reveal
const ro = new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('visible')),{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>ro.observe(el));
 
// Swipe nav toggle (mobile)
let startX=0;
document.addEventListener('touchstart',e=>startX=e.touches[0].clientX,{passive:true});
document.addEventListener('touchend',e=>{
  const diff=e.changedTouches[0].clientX-startX;
  const nav=document.querySelector('nav');
  if(!nav)return;
  if(diff>60) nav.classList.remove('hidden');
  if(diff<-60) nav.classList.add('hidden');
});

document.querySelectorAll('.aboutnav a').forEach(a=>{
  if(a.getAttribute('href')===page) a.classList.add('active-link');
});

/*validation parttt*/
function validation() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let textarea = document.getElementById("textareaa").value.trim();

    let emailRegx = /^[a-zA-Z0-9._%+-]+@(gmail\.com|hotmail\.com)$/;

  
    // Name validation
    if (!name) {
        document.getElementById("namee").innerHTML = "Name should be included";
        return false;
    }

    // Email validation
    if (!emailRegx.test(email)) {
        document.getElementById("emaill").innerHTML =
            "Email is incorrect (use gmail.com or hotmail.com)";
        return false;
    }

    // Textarea validation
    if (!textarea) {
        document.getElementById("textareaaa").innerHTML =
            "Textarea must be included";
        return false;
    }

    return true;
}
 const cursor = document.getElementById('cursor');
  const ring = document.getElementById('ring');
  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top = my + 'px';
  });

  function animateRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  document.querySelectorAll('button, a').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width = '20px';
      cursor.style.height = '20px';
      ring.style.width = '60px';
      ring.style.height = '60px';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width = '12px';
      cursor.style.height = '12px';
      ring.style.width = '40px';
      ring.style.height = '40px';
    });
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
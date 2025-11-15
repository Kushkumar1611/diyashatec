
const rslider = document.getElementById('rslider');
        const scrollSpeed = 1; // Pixels to move per frame (lower = smoother)
        let position = rslider.offsetTop;
        function scrollSmoothly() {
            position -= scrollSpeed;
            rslider.style.top = position + 'px';
            // Reset to bottom when fully off-screen at top
            if (position < -rslider.offsetHeight) {
                position = window.innerHeight;
            }
            requestAnimationFrame(scrollSmoothly);
        }
        scrollSmoothly(); // Start the smooth scroll
        

const lslider = document.getElementById('lslider');
        const lscrollSpeed = 1; // Pixels to move per frame (lower = smoother)
        let lposition = lslider.offsetTop;
        function lscrollSmoothly() {
            lposition -= lscrollSpeed;
            lslider.style.top = lposition + 'px';
            // Reset to bottom when fully off-screen at top
            if (lposition < -lslider.offsetHeight) {
                lposition = window.innerHeight;
            }
            requestAnimationFrame(lscrollSmoothly);
        }
        lscrollSmoothly(); // Start the smooth scroll

      
  const menuToggle = document.getElementById("menu-toggle");
  const navbar = document.querySelector(".navbar");

  menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });


  
const vslider = document.getElementById('videoSlider');
        const items = slider.children;
        let vcurrentIndex = 1;
        const totalItems = items.length;
        const vslideInterval = 3000; // Auto-slide every 5 seconds
        function autoSlide() {
            vcurrentIndex = (currentIndex + 1) % totalItems;
            const scrollAmount = items[vcurrentIndex].offsetLeft - slider.offsetLeft;
            vslider.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
        // Start auto-sliding
        let autoSlideInterval = setInterval(autoSlide, vslideInterval);
        // Pause on hover
        slider.addEventListener('mouseenter', () => {
            clearInterval(autoSlideInterval);
        });
        slider.addEventListener('mouseleave', () => {
            autoSlideInterval = setInterval(autoSlide, vslideInterval);
        });
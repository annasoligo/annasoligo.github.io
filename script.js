// Update this in your script.js file
document.addEventListener("DOMContentLoaded", function () {
    const drone = document.getElementById("drone");
  
    // Create body of the drone
    const body = document.createElement("div");
    body.className = "body";
    drone.appendChild(body);

  
    let mouseX = 0;
    let mouseY = 0;
    let prevX = 0;
    let prevY = 0;
  
    document.addEventListener("mousemove", function (e) {
      mouseX = e.pageX;
      mouseY = e.pageY;
    });
  
    let blurIntensity = 1; // Initial blur intensity

function moveDrone() {
  const deltaX = mouseX - prevX;
  const deltaY = mouseY - prevY;
  const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  const angle = Math.atan2(deltaY, deltaX);

  const speed = 0.05;
  const easing = 0.05;

  const targetX = prevX + distance * Math.cos(angle);
  const targetY = prevY + distance * Math.sin(angle);

  prevX += (targetX - prevX) * easing;
  prevY += (targetY - prevY) * easing;

  drone.style.left = prevX + "px";
  drone.style.top = prevY + "px";
  drone.style.transform = `rotate(${angle}rad)`;

  // Calculate the blur intensity based on the movement speed
  blurIntensity = 0.5+ distance * 0.05; // Adjust the multiplier as needed

  // Apply the blur effect to the propellers
  document.querySelectorAll('.propeller').forEach(propeller => {
    propeller.style.filter = `blur(${blurIntensity}px)`;
  });

  requestAnimationFrame(moveDrone);
}

function decreaseBlur() {
  // Decrease the blur intensity when the drone isn't moving
  blurIntensity *= 0.5; // Adjust the decay factor as needed

  // Apply the blur effect to the propellers
  document.querySelectorAll('.propeller').forEach(propeller => {
    propeller.style.filter = `blur(${blurIntensity}px)`;
  });

  requestAnimationFrame(decreaseBlur);
}

// Start the drone movement and blur decrease
moveDrone();
decreaseBlur();
  });

document.addEventListener('DOMContentLoaded', function() {
    const arrowLink = document.getElementById('arrow-link');

    arrowLink.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = arrowLink.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });

document.addEventListener('DOMContentLoaded', function() {
  const slideshowContainer = document.querySelector('.slideshow-container');
  const slideshowImages = document.querySelectorAll('.slideshow-image');

  let currentImageIndex = 0;

  function showNextImage() {
    
    slideshowImages[currentImageIndex].style.opacity = 0;
    currentImageIndex = (currentImageIndex + 1) % slideshowImages.length;
    
    slideshowImages[currentImageIndex].style.opacity = 1;
  }

  // Initial setup
  slideshowImages.forEach((image, index) => {
    if (index !== 0) {
      image.style.opacity = 0;
    }
  });

  // Set interval to switch images every 12 seconds
  setInterval(showNextImage, 12000);
});


document.addEventListener("DOMContentLoaded", function () {
  // Get references to the .landing, .drone, and header elements
  const landingDiv = document.querySelector(".landing");
  const droneDiv = document.querySelector(".drone");
  const header = document.querySelector("header");

  // Function to handle mouse events for fading .drone div
  function handleMouseEvents(event) {
    droneDiv.style.transition = "opacity 0.2s"; // Set transition property
    droneDiv.style.opacity = event.type === "mouseenter" ? 1 : 0;
  }

  // Add event listeners to both .landing and header elements
  landingDiv.addEventListener("mouseenter", handleMouseEvents);
  landingDiv.addEventListener("mouseleave", handleMouseEvents);
  header.addEventListener("mouseenter", handleMouseEvents);
  header.addEventListener("mouseleave", handleMouseEvents);
});
  

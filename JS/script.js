document.addEventListener("DOMContentLoaded", function() {
    // Wait for the DOM to be fully loaded before executing the script
    const scrollToProductsButton = document.getElementById('scrollToProducts');

    // Get the "Scroll to Products" button element by its ID
    if (scrollToProductsButton) {
        // If the button exists, attach a click event listener to it
        scrollToProductsButton.addEventListener('click', function() {
            // Redirect to the "products.html" page when the button is clicked
            window.location.href = '../html/products.html';
        });
    }

    const scrollToBrandIdentityButton = document.getElementById('scrollToBrandIdentity');

    // Get the "Scroll to Brand Identity" button element by its ID
    if (scrollToBrandIdentityButton) {
        // If the button exists, attach a click event listener to it
        scrollToBrandIdentityButton.addEventListener('click', function() {
            const brandIdentitySection = document.getElementById('brand-identity');
            // Get the "brand-identity" section element by its ID
            if (brandIdentitySection) {
                // If the section exists, scroll smoothly to it
                brandIdentitySection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    const scrollToCEOButton = document.getElementById('scrollToCEO');

    // Get the "Scroll to CEO" button element by its ID
    if (scrollToCEOButton) {
        // If the button exists, attach a click event listener to it
        scrollToCEOButton.addEventListener('click', function() {
            const ceoSection = document.getElementById('CEO');
            // Get the "CEO" section element by its ID
            if (ceoSection) {
                // If the section exists, scroll smoothly to it
                ceoSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Function to check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        // Get the bounding rectangle of the element relative to the viewport
        return (
            rect.top >= 0 && // Top edge of the element is visible
            rect.left >= 0 && // Left edge of the element is visible
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && // Bottom edge of the element is visible
            rect.right <= (window.innerWidth || document.documentElement.clientWidth) // Right edge of the element is visible
        );
    }

    // Function to add an animation class to elements when they enter the viewport
    function animateOnScroll() {
        const identityContent = document.getElementById('identity-content');
        // Get the "identity-content" element by its ID
        const identityImage = document.getElementById('identity-image');
        // Get the "identity-image" element by its ID

        if (isInViewport(identityContent)) {
            // If the "identity-content" element is in the viewport, add the "animate" class to it
            identityContent.classList.add('animate');
        }
        if (isInViewport(identityImage)) {
            // If the "identity-image" element is in the viewport, add the "animate" class to it
            identityImage.classList.add('animate');
        }
    }

    // Add an event listener for the scroll event
    window.addEventListener('scroll', animateOnScroll);

    // Call the `animateOnScroll` function initially to check if elements are in the viewport on page load
    animateOnScroll();
});
// Function to handle scroll event
function handleScroll() {
  const ceoContainer = document.querySelector('.ceo-container');
  // Get the element with the class "ceo-container"
  if (isInViewport(ceoContainer)) {
    // If the element is in the viewport, add the "animate" class
    ceoContainer.classList.add('animate');
  } else {
    // If the element is not in the viewport, remove the "animate" class
    ceoContainer.classList.remove('animate');
  }
}

// Attach scroll event listener
document.addEventListener('scroll', handleScroll);
document.addEventListener("DOMContentLoaded", function() {
    const seeMoreButton = document.getElementById("see-more-button");
    const productDescription = document.getElementById("product-description");

    seeMoreButton.addEventListener("click", function() {
        if (productDescription.classList.contains("expanded")) {
            productDescription.classList.remove("expanded");
            seeMoreButton.textContent = "See More";
        } else {
            productDescription.classList.add("expanded");
            seeMoreButton.textContent = "See Less";
        }
    });
});

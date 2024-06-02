// careers.js

// Function to open the modal
function openModal(jobId) {
    const modal = document.getElementById("jobModal");
    const modalJobDetails = document.getElementById("modal-job-details");
    
    // Sample job details
    const jobDetails = {
        "marketing-specialist": {
            title: "Marketing Specialist",
            location: "New York, NY",
            description: "We are looking for a creative and driven marketing specialist to help us grow our brand.",
            responsibilities: "Responsibilities include creating marketing campaigns, analyzing market trends, and collaborating with the sales team.",
            qualifications: "Bachelor's degree in Marketing or related field, 3+ years of experience in marketing."
        },
        "product-designer": {
            title: "Product Designer",
            location: "Los Angeles, CA",
            description: "Join our design team to create beautiful and functional products that delight our customers.",
            responsibilities: "Responsibilities include designing product concepts, creating prototypes, and working with engineers to bring designs to life.",
            qualifications: "Bachelor's degree in Design or related field, 2+ years of experience in product design."
        },
        "sales-manager": {
            title: "Sales Manager",
            location: "Chicago, IL",
            description: "Lead our sales team and drive the growth of our business through strategic initiatives.",
            responsibilities: "Responsibilities include managing the sales team, developing sales strategies, and achieving sales targets.",
            qualifications: "Bachelor's degree in Business or related field, 5+ years of experience in sales management."
        }
    };

    const job = jobDetails[jobId];

    modalJobDetails.innerHTML = `
        <h2>${job.title}</h2>
        <p><strong>Location:</strong> ${job.location}</p>
        <p>${job.description}</p>
        <h3>Responsibilities</h3>
        <p>${job.responsibilities}</p>
        <h3>Qualifications</h3>
        <p>${job.qualifications}</p>
        <h3>Apply for this position</h3>
        <form id="application-form">
            <div class="form-group">
                <label for="applicant-name">Name:</label>
                <input type="text" id="applicant-name" name="name" required>
            </div>
            <div class="form-group">
                <label for="applicant-email">Email:</label>
                <input type="email" id="applicant-email" name="email" required>
            </div>
            <div class="form-group">
                <label for="applicant-message">Message:</label>
                <textarea id="applicant-message" name="message" rows="5" required></textarea>
            </div>
            <div class="form-group">
                <label for="applicant-cv">Attach CV:</label>
                <input type="file" id="applicant-cv" name="cv" required>
            </div>
            <button type="submit">Submit Application</button>
        </form>
    `;

    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById("jobModal");
    modal.style.display = "none";
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    const modal = document.getElementById("jobModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

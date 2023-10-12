// Function to open the modal for a specific project
function openModal(projectId) {
    const modal = document.getElementById(projectId + '-modal');
    modal.style.display = 'block';
}

// Function to close the modal for a specific project
function closeModal(projectId) {
    const modal = document.getElementById(projectId + '-modal');
    modal.style.display = 'none';
}

// Event listeners for each project
document.querySelectorAll('.grid-item').forEach((project) => {
    const projectId = project.getAttribute('id');
    const openModalBtn = project.querySelector('#open-modal-btn');
    const closeBtn = project.querySelector('.close');

    openModalBtn.addEventListener('click', () => openModal(projectId));
    closeBtn.addEventListener('click', () => closeModal(projectId));
    window.addEventListener('click', (event) => {
        if (event.target === document.getElementById(projectId + '-modal')) {
            closeModal(projectId);
        }
    });
});


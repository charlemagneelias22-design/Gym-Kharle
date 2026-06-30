function flipCard(card) {
    card.querySelector('.flip-card-inner').classList.toggle('flipped');
}

document.addEventListener("DOMContentLoaded", () => {
    // 1. Grab the workouts link in the sidebar
    const workoutLink = document.querySelector('a[href="#workouts-section"]');
    // 2. Grab the main content panel that is handling the scrolling
    const mainContent = document.querySelector('.main-content');
    // 3. Grab the workout target element
    const workoutTarget = document.getElementById('workouts-section');

    if (workoutLink && mainContent && workoutTarget) {
        workoutLink.addEventListener('click', function(e) {
            e.preventDefault(); // Stop the instant snapping default jump
            
            // Calculate exact position inside the scrollable .main-content box
            const targetPosition = workoutTarget.offsetTop - 20; 

            // Force the container box itself to glide smoothly to the target position
            mainContent.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    }
});

// Keep your existing flip card function below it
function flipCard(card) {
    card.querySelector('.flip-card-inner').classList.toggle('flipped');
}
function toggleAccordion(header) {
    const item = header.parentElement;
    const content = item.querySelector('.accordion-content');
    const arrow = item.querySelector('.arrow');
    
    // Check if this item is already open
    const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';
    
    // Optional: Close other folders when a new one opens
    document.querySelectorAll('.accordion-content').forEach(el => el.style.maxHeight = '0px');
    document.querySelectorAll('.arrow').forEach(el => el.style.transform = 'rotate(0deg)');
    
    // If it was closed, slide it down and rotate the arrow 180 degrees
    if (!isOpen) {
        content.style.maxHeight = content.scrollHeight + "px";
        arrow.style.transform = "rotate(180deg)";
    }

    
}
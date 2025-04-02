// Contact form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    // Let FormSubmit handle the submission, no need to prevent default
    // Just show the alert after submission
    setTimeout(() => {
        alert('Thank you for your message! I’ll get back to you soon.');
        this.reset(); // Clear the form
    }, 100); // Small delay to ensure submission happens first
});

// Lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxCaption = document.getElementById('lightbox-caption');
const closeBtn = document.querySelector('.close-btn');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const galleryImages = document.querySelectorAll('.gallery-img');

// Define albums with titles, images, and optional captions
const albums = {
    album1: {
        title: "Animals",
        images: [
            { src: 'images/album1/album1-cover.jpg', caption: 'Random pictures of animals that I took' },
            { src: 'images/album1/album1-1.jpg', caption: 'Shark' },
            { src: 'images/album1/album1-2.jpg', caption: 'Zebra' },
            { src: 'images/album1/album1-3.jpg',caption: 'Tiger' } // No caption
        ]
    },
    album2: {
        title: "Food",
        images: [
            { src: 'images/album2/album2-cover.jpg', caption: 'Random pictures of food that I took' },
            { src: 'images/album2/album2-1.jpg', caption: 'Pizza' },
            { src: 'images/album2/album2-2.jpg', caption: 'Pancakes' },
            { src: 'images/album2/album2-3.jpg', caption: 'IDK it might be ramen' }
        ]
    },
    album3: {
        title: "Urban Adventures",
        images: [
            { src: 'images/album3/album3-cover.jpg', caption: 'City Lights' },
            { src: 'images/album3/album3-2.jpg' },
            { src: 'images/album3/album3-3.jpg' }
        ]
    },
    album4: {
        title: "Landscapes Unraveled",
        images: [
            { src: 'images/album4/album4-cover.jpg' },
            { src: 'images/album4/album4-2.jpg', caption: 'Mountain Majesty' },
            { src: 'images/album4/album4-3.jpg' }
        ]
    }
};

let currentAlbum = null;
let currentIndex = 0;

function updateLightbox() {
    const album = albums[currentAlbum];
    const image = album.images[currentIndex];
    lightboxTitle.textContent = album.title;
    lightboxImg.src = image.src;
    lightboxCaption.textContent = image.caption || ''; // Empty if no caption
}

galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        currentAlbum = img.getAttribute('data-album');
        currentIndex = 0; // Start at the cover
        updateLightbox();
        lightbox.style.display = 'flex';
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
    currentAlbum = null;
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
        currentAlbum = null;
    }
});

prevBtn.addEventListener('click', () => {
    if (currentAlbum) {
        currentIndex = (currentIndex - 1 + albums[currentAlbum].images.length) % albums[currentAlbum].images.length;
        updateLightbox();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentAlbum) {
        currentIndex = (currentIndex + 1) % albums[currentAlbum].images.length;
        updateLightbox();
    }
});
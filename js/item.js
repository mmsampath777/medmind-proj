document.addEventListener('DOMContentLoaded', () => {
    const bookmarkButton = document.getElementById('b1');

    // Herb data to store (you can replace this data with dynamic values)
    const herbData = {
        name: 'Ginger',
        scientificName: 'Zingiber officinale',
        image: 'images/image1.jpg',
        description: 'Ginger is a flowering plant whose rhizome, commonly known as ginger root, is widely used as a spice and traditional medicine.',
        id: 1,
        link: 'ginger.html'
    };

    // Check if already bookmarked
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    const isBookmarked = bookmarks.some(item => item.id === herbData.id);

    // If already bookmarked, change the button text to "Go to Bookmarks"
    if (isBookmarked) {
        bookmarkButton.innerHTML = '<i class="fa-solid fa-bookmark"></i>&nbsp;&nbsp;Go to Bookmarks';
    }

    // Add click event listener to the bookmark button
    bookmarkButton.addEventListener('click', () => {
        if (!isBookmarked) {
            // Store herb data in localStorage
            bookmarks.push(herbData);
            localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

            // Change button text to "Go to Bookmarks"
            bookmarkButton.innerHTML = '<i class="fa-solid fa-bookmark"></i>&nbsp;&nbsp;Go to Bookmarks';
            window.location.reload();
        } else {
            // Redirect to bookmarks page (you can replace this with the actual link to the bookmarks page)
            window.location.href = 'cart.html'; // Update this URL as per your bookmark page
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const bookmarkButton = document.getElementById('b2');

    // Herb data to store (you can replace this data with dynamic values)
    const herbData = {
        name: 'Ashwagandha',
        scientificName: 'Withania somnifera',
        image: 'images/ashwagandha1.jpg',
        description: 'Ashwagandha is a small shrub with yellow flowers, native to India and North Africa. Its roots are known for their strong medicinal properties and have been used in Ayurvedic medicine for centuries. The plant can grow up to 1.5 meters tall and has oval leaves and red fruit similar to a raisin.',
        id: 2,
        link: 'ashwagandha.html'
    };

    // Check if already bookmarked
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    const isBookmarked = bookmarks.some(item => item.id === herbData.id);

    // If already bookmarked, change the button text to "Go to Bookmarks"
    if (isBookmarked) {
        bookmarkButton.innerHTML = '<i class="fa-solid fa-bookmark"></i>&nbsp;&nbsp;Go to Bookmarks';
    }

    // Add click event listener to the bookmark button
    bookmarkButton.addEventListener('click', () => {
        if (!isBookmarked) {
            // Store herb data in localStorage
            bookmarks.push(herbData);
            localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

            // Change button text to "Go to Bookmarks"
            bookmarkButton.innerHTML = '<i class="fa-solid fa-bookmark"></i>&nbsp;&nbsp;Go to Bookmarks';
            window.location.reload();
        } else {
            // Redirect to bookmarks page (you can replace this with the actual link to the bookmarks page)
            window.location.href = 'cart.html'; // Update this URL as per your bookmark page
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const bookmarkButton = document.getElementById('b3');

    // Herb data to store (you can replace this data with dynamic values)
    const herbData = {
        name: 'Aloe Vera',
        scientificName: 'Aloe barbadensis miller',
        image: 'images/aloevera1.jpg',
        description: 'Aloe Vera is a succulent plant species known for its thick, fleshy leaves that contain a soothing gel. The gel is widely used for its healing, moisturizing, and anti-inflammatory properties. Aloe Vera is commonly grown in tropical climates and is a popular ingredient in skincare, health, and wellness products.',
        id: 3,
        link: 'aloevera.html'
    };

    // Check if already bookmarked
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    const isBookmarked = bookmarks.some(item => item.id === herbData.id);

    // If already bookmarked, change the button text to "Go to Bookmarks"
    if (isBookmarked) {
        bookmarkButton.innerHTML = '<i class="fa-solid fa-bookmark"></i>&nbsp;&nbsp;Go to Bookmarks';
    }

    // Add click event listener to the bookmark button
    bookmarkButton.addEventListener('click', () => {
        if (!isBookmarked) {
            // Store herb data in localStorage
            bookmarks.push(herbData);
            localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

            // Change button text to "Go to Bookmarks"
            bookmarkButton.innerHTML = '<i class="fa-solid fa-bookmark"></i>&nbsp;&nbsp;Go to Bookmarks';
            window.location.reload();
        } else {
            // Redirect to bookmarks page (you can replace this with the actual link to the bookmarks page)
            window.location.href = 'cart.html'; // Update this URL as per your bookmark page
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const bookmarkButton = document.getElementById('b4');

    // Herb data to store (you can replace this data with dynamic values)
    const herbData = {
        name: 'Neem',
        scientificName: 'Azadirachta indica',
        image: 'images/aloevera1.jpg',
        description: ' Neem is a fast-growing tree native to the Indian subcontinent, known for its broad, green leaves and small, white flowers. The seeds, leaves, and bark of the neem tree are widely used in traditional medicine for their antibacterial, antifungal, and anti-inflammatory properties. Neem oil is especially valued for its medicinal and insecticidal uses.',
        id: 4,
        link: 'neem.html'
    };

    // Check if already bookmarked
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    const isBookmarked = bookmarks.some(item => item.id === herbData.id);

    // If already bookmarked, change the button text to "Go to Bookmarks"
    if (isBookmarked) {
        bookmarkButton.innerHTML = '<i class="fa-solid fa-bookmark"></i>&nbsp;&nbsp;Go to Bookmarks';
    }

    // Add click event listener to the bookmark button
    bookmarkButton.addEventListener('click', () => {
        if (!isBookmarked) {
            // Store herb data in localStorage
            bookmarks.push(herbData);
            localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

            // Change button text to "Go to Bookmarks"
            bookmarkButton.innerHTML = '<i class="fa-solid fa-bookmark"></i>&nbsp;&nbsp;Go to Bookmarks';
            window.location.reload();
        } else {
            // Redirect to bookmarks page (you can replace this with the actual link to the bookmarks page)
            window.location.href = 'cart.html'; // Update this URL as per your bookmark page
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const bookmarkButton = document.getElementById('b5');

    // Herb data to store (you can replace this data with dynamic values)
    const herbData = {
        name: 'Tulsi',
        scientificName: 'Ocimum sanctum',
        image: 'images/aloevera1.jpg',
        description: ' Tulsi is an aromatic plant native to the Indian subcontinent, revered in Hinduism and widely used in Ayurvedic medicine. The plant has green or purple leaves and small white or purple flowers. It is known for its potent adaptogenic, anti-inflammatory, and antibacterial properties, making it beneficial for overall health and well-being.',
        id: 5,
        link: 'tulsi.html'
    };

    // Check if already bookmarked
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    const isBookmarked = bookmarks.some(item => item.id === herbData.id);

    // If already bookmarked, change the button text to "Go to Bookmarks"
    if (isBookmarked) {
        bookmarkButton.innerHTML = '<i class="fa-solid fa-bookmark"></i>&nbsp;&nbsp;Go to Bookmarks';
    }

    // Add click event listener to the bookmark button
    bookmarkButton.addEventListener('click', () => {
        if (!isBookmarked) {
            // Store herb data in localStorage
            bookmarks.push(herbData);
            localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

            // Change button text to "Go to Bookmarks"
            bookmarkButton.innerHTML = '<i class="fa-solid fa-bookmark"></i>&nbsp;&nbsp;Go to Bookmarks';
            window.location.reload();
        } else {
            // Redirect to bookmarks page (you can replace this with the actual link to the bookmarks page)
            window.location.href = 'cart.html'; // Update this URL as per your bookmark page
        }
    });
});
// Get elements
const noteButton = document.getElementById('note-button');
const modal = document.getElementById('note-modal');
const noteTextarea = document.getElementById('note-textarea');
const saveBtn = document.getElementById('save-btn');
const discardBtn = document.getElementById('discard-btn');

// Open modal
noteButton.addEventListener('click', () => {
    const savedNote = localStorage.getItem('userNote');
    noteTextarea.value = savedNote ? savedNote : ''; // Show saved note if available
    modal.style.display = 'block';
});

// Save note to localStorage
saveBtn.addEventListener('click', () => {
    const noteContent = noteTextarea.value;
    localStorage.setItem('userNote', noteContent); // Save to localStorage
    modal.style.display = 'none'; // Close modal
});

// Discard changes and close modal
discardBtn.addEventListener('click', () => {
    modal.style.display = 'none'; // Close modal without saving changes
});

// Close modal if clicked outside of it
window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

 // Comment modal elements
 const commentButton = document.getElementById('comment-button');
 const commentModal = document.getElementById('comment-modal');
 const commentTextarea = document.getElementById('comment-textarea');
 const submitCommentBtn = document.getElementById('submit-comment-btn');
 const successMessage = document.getElementById('comment-success');

 // Open note modal
 noteButton.addEventListener('click', () => {
     const savedNote = localStorage.getItem('userNote');
     noteTextarea.value = savedNote ? savedNote : ''; // Show saved note if available
     noteModal.style.display = 'block';
 });

 // Save note to localStorage
 saveBtn.addEventListener('click', () => {
     const noteContent = noteTextarea.value;
     localStorage.setItem('userNote', noteContent); // Save to localStorage
     noteModal.style.display = 'none'; // Close modal
 });

 // Discard changes and close note modal
 discardBtn.addEventListener('click', () => {
     noteModal.style.display = 'none'; // Close modal without saving changes
 });

 // Open comment modal
 commentButton.addEventListener('click', () => {
     commentTextarea.value = ''; // Clear previous input
     commentModal.style.display = 'block';
 });

 // Submit comment and show success message
 submitCommentBtn.addEventListener('click', () => {
     commentModal.style.display = 'none'; // Close modal
     successMessage.style.display = 'block'; // Show success message
     setTimeout(() => {
         successMessage.style.display = 'none'; // Hide success message after 3 seconds
     }, 3000);
 });

 // Close modals if clicked outside of modal content
 window.addEventListener('click', (event) => {
     if (event.target == noteModal) {
         noteModal.style.display = 'none';
     }
     if (event.target == commentModal) {
         commentModal.style.display = 'none';
     }
 });
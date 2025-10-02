const pages = [
    { title: "Allopathy", url: "allopathy.html" },
    { title: "Aloe Vera", url: "aloevera.html" },
    { title: "Amoxicillin", url: "amoxicilin.html" },
    { title: "Ampicillin", url: "ampicillin.html" },
    { title: "Ashwagandha", url: "aswagandha.html" },
    { title: "Ayurveda", url: "ayurveda.html" },
    { title: "Bakthi Yoga", url: "bakthiyoga.html" },
    { title: "Cart", url: "cart.html" },
    { title: "Cefixime", url: "cefixime.html" },
    { title: "Citrizine", url: "citrizine.html" },
    { title: "Cow Unani", url: "cowunnani.html" },
    { title: "Ginger", url: "ginger.html" },
    { title: "Jnana Yoga", url: "jnanayoga.html" },
    { title: "Jujube Unani", url: "jujbeunnani.html" },
    { title: "Karma Yoga", url: "karmayoga.html" },
    { title: "Liquorice Unani", url: "liquoriceunnani.html" },
    { title: "Madder Siddha", url: "maddersiddha.html" },
    { title: "Marshmallow Unani", url: "marshmallowunnani.html" },
    { title: "Natha Isuri Siddha", url: "nathaisoorisiddha.html" },
    { title: "Neem", url: "neem.html" },
    { title: "Paracetamol", url: "paracetomal.html" },
    { title: "Pirandai Siddha", url: "pirandaisiiddha.html" },
    { title: "Power Yoga", url: "poweryoga.html" },
    { title: "Sebesten Unnai", url: "sebestenunnai.html" },
    { title: "Seenthil Siddha", url: "seenthilsiddha.html" },
    { title: "Siddha", url: "siddha.html" },
    { title: "Thanner Vittan Siddha", url: "thannervittansiddha.html" },
    { title: "Tulsi", url: "tulsi.html" },
    { title: "Unani", url: "unani.html" },
    { title: "Yoga", url: "yoga.html" },
    { title: "Yin Yoga", url: "yinyoga.html" }
];

// Function to filter search results
function searchFunction() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filteredPages = pages.filter(page => page.title.toLowerCase().includes(query));
    displayResults(filteredPages);
}

// Function to display the filtered results
function displayResults(results) {
    const resultContainer = document.getElementById('searchResults');
    resultContainer.innerHTML = '';

    // If no results, show a message
    if (results.length === 0) {
        resultContainer.innerHTML = '<li>No results found</li>';
        return;
    }

    // Add each result to the list
    results.forEach(page => {
        const listItem = document.createElement('li');
        listItem.textContent = page.title;
        listItem.onclick = () => {
            window.location.href = page.url;
        };
        resultContainer.appendChild(listItem);
    });
}
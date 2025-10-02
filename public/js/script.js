document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('searchbtn');
    const searchResultsDiv = document.getElementById('search-results');
    let searchResults = [];
  
    const plants = [
      { name: 'Ginger', url: 'ginger.html' },
      { name: 'Aloe Vera', url: 'aloevera.html' },
      { name: 'Neem', url: 'neem.html' },
      { name: 'ayurveda', url: 'ayurveda.html' },
      { name: 'aswagandha', url: 'aswagandha.html' },
      // Add more plant names and URLs here as needed
    ];
  
    // Function to show the search results
    function showSearchResults(results) {
      searchResultsDiv.innerHTML = '';
      searchResultsDiv.style.display = 'block';
  
      if (results.length > 0) {
        results.forEach(result => {
          const itemDiv = document.createElement('div');
          itemDiv.classList.add('search-result-item');
          itemDiv.textContent = result.name;
          itemDiv.addEventListener('click', () => {
            window.location.href = result.url;
            clearSearch();
          });
          searchResultsDiv.appendChild(itemDiv);
        });
      } else {
        const notFoundDiv = document.createElement('div');
        notFoundDiv.classList.add('not-found');
        notFoundDiv.textContent = 'Searched Item Not Found';
        searchResultsDiv.appendChild(notFoundDiv);
      }
    }
  
    // Function to clear search input and results
    function clearSearch() {
      searchInput.value = '';
      searchResultsDiv.innerHTML = '';
      searchResultsDiv.style.display = 'none';
    }
  
    // Function to handle search logic
    function handleSearch(query) {
      query = query.toLowerCase();
      if (query.includes('ginger')) {
        searchResults = [{ name: 'Ginger', url: 'ginger.html' }];
      } else if (query.includes('plant')) {
        searchResults = [
          { name: 'Ginger', url: 'ginger.html' },
          { name: 'Aloe Vera', url: 'aloevera.html' }
        ];
      } else {
        searchResults = [];
      }
  
      showSearchResults(searchResults);
    }
  
    // Handle search on clicking the search button
    searchButton.addEventListener('click', () => {
      const query = searchInput.value;
      handleSearch(query);
    });
  
    // Handle search on pressing "Enter" key
    searchInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        const query = searchInput.value;
        handleSearch(query);
      }
    });
  
    // Real-time search while typing
    searchInput.addEventListener('input', (event) => {
      const query = event.target.value;
      handleSearch(query);
    });
  
    // Hide the floating search results if clicking outside
    document.addEventListener('click', (event) => {
      if (!event.target.closest('.search')) {
        searchResultsDiv.style.display = 'none';
      }
    });
  });
  

  //Popup display
  document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("popupModal");
    const closeBtn = document.querySelector(".close-btn");
  
    // Show modal on page load
    modal.style.display = "block";
  
    // Close modal when 'x' is clicked
    closeBtn.addEventListener("click", function() {
      modal.style.display = "none";
    });
  
    // Hide modal when clicking outside of the content
    window.addEventListener("click", function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
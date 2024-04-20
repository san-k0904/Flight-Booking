function search() {
    // Get the search box and result container
    const searchBox = document.querySelector('.searchbox');
    const resultContainer = document.querySelector('.result-container');
  
    // Toggle the visibility of the search box and result container
    searchBox.style.display = 'none';
    resultContainer.style.display = 'block';
  
    // Get the search query and flight information
    const query = document.querySelector('#FROM').value;
    const flightInfo = document.querySelector('#TO').value;
  
    // Update the flight information in the result container
    const resultHTML = `
        <div class="result">
        <div class="time">
        <p>Time: 8:00 - 16:00</p>
        </div>
        <div class="date_time">
        <p>Date: 22/04/24</p>
        </div>
        <div class="airplane-id">
        <p>AE780</p>
        </div>
        <div class="airline-name">
        <p>Indigo</p>
        </div>
        </div>
    `;
    resultContainer.innerHTML = resultHTML;
  }
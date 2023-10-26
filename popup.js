// document.getElementById('callApi').addEventListener('click', () => {
//     chrome.scripting.executeScript({
//       target: {tabId: tab.id},
//       function: () => {
//         // Insert code here to open the API in a new tab
//       },
//     });
//   });

document.getElementById('callApi').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length > 0) {
        const tab = tabs[0];
        const domain = new URL(tab.url).hostname;
        const apiUrl = `http://localhost:5000/?domain=${domain}`;

        // Make the API call
        fetch(apiUrl)
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json(); // Assuming the API returns JSON
          })
          .then((data) => {
            // Handle the API response data here
            console.log('API response:', data);
          })
          .catch((error) => {
            console.error('API error:', error);
          });
      }
    });
  });

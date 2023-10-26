chrome.action.onClicked.addListener(async (tab) => {
    const domain = new URL(tab.url).hostname;
    const apiUrl = `http://localhost:5000/?domain=${domain}`;
    const response = await fetch(apiUrl);
    // Handle the API response here
});
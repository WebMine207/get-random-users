const apiBaseUrl = 'https://randomuser.me/api/';

const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

export async function fetchData() {
    try {
        var apiURL = apiBaseUrl;     
        const response = await fetch(apiURL, options);
      if (!response.ok) {
        return "Network response was not ok.";
      }
      const data = await response.json();
      return data.results;
    } catch (error) {
      return error.message;
    }
  }


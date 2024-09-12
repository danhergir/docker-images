const API_URL = 'http://localhost:5000/getMyInfo';

async function fetchMyInfo() {
  try {
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const json = await response.json();
    
    document.getElementById("name").textContent = `${json.name} ${json.lastname}`;
    document.getElementById("author").textContent = `2023 - Hecho por ${json.author}`;
    document.getElementById("facebookLink").href = `https://www.facebook.com/${json.socialMedia.facebookUser}`;
    document.getElementById("instagramUser").href = `https://www.instagram.com/${json.socialMedia.instagramUser}`;
    document.getElementById("xUser").href = `https://www.x.com/${json.socialMedia.xUser}`;
    document.getElementById("githubUser").href = `https://www.github.com/${json.socialMedia.githubUser}`;
    document.getElementById("linkedinUser").href = `https://www.linkedin.com/in/${json.socialMedia.linkedin}`;
    document.getElementById("website").href = json.blog;
  } catch (error) {
    console.error("Error fetching data:", error);
    document.getElementById("name").textContent = "Error loading data";
    document.getElementById("author").textContent = "Error loading data";
  }
}

fetchMyInfo();
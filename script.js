// Function to fetch random food dish from the Foodish API
async function getRandomFoodDish() {
    try {
      let response = await fetch('https://foodish-api.com/api/');
      if (!response.ok) {
        displayRandomFoodDish('Failed to fetch data');
      }
      let data = await response.json();
      console.log(data)
      return data.image;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }
  
  // Function to display the random food dish image on the webpage
  async function displayRandomFoodDish() {
    let header=document.querySelector("h2")
    document.body.append(header)
    let imageUrl = await getRandomFoodDish();
    try {
      let imgElement = document.createElement('img');
      if (imageUrl) {
        
        imgElement.src = imageUrl;
        imgElement.alt = 'Random Food Dish';
        imgElement.className="container-fluid"
        imgElement.style.width="800px"
        imgElement.style.height="650px"
        document.body.append(imgElement)
      } 
      else {
        imgElement.innerHTML = 'Failed to fetch data';
      }
    }
    catch (error) {
      console.error('Error displaying food dish:', error);
      let errorMessage = document.createElement('p');
      errorMessage.textContent = 'Error displaying food dish';
      document.body.append(errorMessage);
    }
  }
  
  // Display random food dish when the page loads
  document.addEventListener('DOMContentLoaded', displayRandomFoodDish);


  

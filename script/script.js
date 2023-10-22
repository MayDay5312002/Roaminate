const ACCESSKEY = `86vtECIwJi6ItVAALShGOSAVa0GVe1rBxhij-Q8sKCs`;

let endPoint = `https://api.unsplash.com/photos/random/?client_id=${ACCESSKEY}&query=famouse landmark`;

//create the URL schema

let background = document.querySelector("body");

/*
Note reminder : async fulfills promise of returning a value or rejecting the promise with na error 

await keyword wait for promise object to resovle b4 proceeding to next statement
*/
async function fetchAndSetBackgroundImage(endPoint) {
  try {
    const response = await fetch(endPoint);
    if (!response.ok) {
      throw new Error("Request failed");
    }
    const jsonData = await response.json();
    background.style.backgroundImage = `url(${jsonData.urls.regular})`;
  } catch (error) {
    console.error("Error:", error);
  }
}

// Call the async function
fetchAndSetBackgroundImage(endPoint);

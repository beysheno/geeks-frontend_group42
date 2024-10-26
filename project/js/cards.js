const card = document.querySelector(".card_list");

const url = " https://jsonplaceholder.typicode.com/posts";
const cardPhoto = "../img/harry.webp";
const getPost = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    Object.values(data)
      .slice(0, 4)
      .forEach((post) => {
        const cardItem = document.createElement("div");
        cardItem.setAttribute("class", "card-item");
        cardItem.innerHTML = `
    <p class='card-title'>${post.title}</p>
     <div class="card-photo"><img  src="${cardPhoto}" alt="${post.id}"></div>
    <p class='card-body'>${post.body}</p>
    `;
        card.appendChild(cardItem);
      });
  } catch (error) {
    console.log(error);
  }
};
getPost();

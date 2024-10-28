const card = document.querySelector(".card_list");
const URL = "https://jsonplaceholder.typicode.com/posts";
const cardPhoto = "../images/openbook.svg";
const getPost = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();

    data.slice(0, 6).forEach((item) => {
      const post = document.createElement("div");
      post.setAttribute("class", "card_post");
      post.innerHTML = `
      <p class='card-title'>${item.title}</p>
     <div class="card-photo"><img  src="${cardPhoto}" alt="${item.id}"></div>
    <p class='card-body'>${item.body}</p>
      `;
      card.appendChild(post);
    });
  } catch (error) {
    console.log(error);
  }
};
getPost();

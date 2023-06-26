
  function displayNews(data) {
    const newsdetails = document.getElementById("root");

    data.articles.forEach((news) => {
      const col = document.createElement("div");
      col.className = "w3-quarter";

      const card = document.createElement("div");
      card.className = "w3-card w3-margin";

      const image = document.createElement("img");
      image.src = news.image;
      image.alt = news.title;
      image.style.width = "100%";

      const cardBody = document.createElement("div");
      cardBody.className = "w3-container";

      const newsHeading = document.createElement("h3");
      newsHeading.innerHTML = news.title;

      const source = document.createElement("p");
      source.className = "text-muted";
      source.innerHTML = "Source: " + news.source.name;

      const description = document.createElement("p");
      description.className = "text-muted";
      description.innerHTML = news.description;

      const link = document.createElement("a");
      link.className = "btn btn-dark";
      link.setAttribute("target", "_blank");
      link.href = news.url;
      link.innerHTML = "Read more";

      cardBody.appendChild(newsHeading);
      cardBody.appendChild(source);
      cardBody.appendChild(description);
      cardBody.appendChild(link);

      card.appendChild(image);
      card.appendChild(cardBody);

      col.appendChild(card);

      newsdetails.appendChild(col);
    });
  }

  // Function to fetch news from GNews API
  function fetchNews() {
    const apiKey = "e9555ee316e98a222cbdfbe2fda0ebc6";
    const url = `https://gnews.io/api/v4/search?q=food&token=${apiKey}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        displayNews(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // Call the fetchNews function to load news when the page loads
  fetchNews();


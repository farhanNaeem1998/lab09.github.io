// Fetch data from the API
fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-06-05&sortBy=publishedAt&apiKey=1fdb1cd4c69c4458858948f202dd5ccf')
    .then(response => response.json())
    .then(data => {
        const products = data.articles;

        // Get the product grid container
        const productGrid = document.getElementById('productGrid');

        // Iterate over the products and create grid cells
        products.forEach(product => {
            const { title, urlToImage, description } = product;

            // Create a grid cell
            const gridCell = document.createElement('div');
            gridCell.classList.add('col-md-6', 'mb-4');

            // Create the product card
            const card = document.createElement('div');
            card.classList.add('card');

            // Create the image element
            const imageElement = document.createElement('img');
            imageElement.src = urlToImage;
            imageElement.classList.add('card-img-top');
            card.appendChild(imageElement);

            // Create the card body
            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');

            // Create the title element
            const titleElement = document.createElement('h5');
            titleElement.classList.add('card-title');
            titleElement.textContent = title;
            cardBody.appendChild(titleElement);

            // Create the description element
            const descriptionElement = document.createElement('p');
            descriptionElement.classList.add('card-text');
            descriptionElement.textContent = description;
            cardBody.appendChild(descriptionElement);

            // Append the card body to the card
            card.appendChild(cardBody);

            // Append the card to the grid cell
            gridCell.appendChild(card);

            // Append the grid cell to the product grid
            productGrid.appendChild(gridCell);
        });
    })
    .catch(error => console.log(error));

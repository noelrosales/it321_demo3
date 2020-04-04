const URL = 'https://newsapi.org/v2/top-headlines?apiKey=ff55591e19c74c018563bc1852ae1dde&country=ph&category=technology&q=&page=1&pageSize=50'
const news = document.querySelector('.news')

fetch(URL)
   .then(data => data.json())
   .then(response => {
       //handle response here ...
       console.log(response)
       const articles = response.articles
       let newsItem = ''
       localStorage.setItem('bookmarks', JSON.stringify(articles))
       articles.forEach(article => {
         newsItem += `
          <div class="news-item">
            <h1> ${article.title} </h1>
            <p> ${article.description} </p>
            <a href="${article.url}"> Visit Link </a>
          </div>
         `
       });

       news.innerHTML = newsItem
   })
   .catch(error => {
       // handle failed requests here ...
   })


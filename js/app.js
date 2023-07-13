const searchForm = document.querySelector('.search-form')
searchForm.addEventListener('submit', async(m) => {
      m.preventDefault();
      const searchTerm = searchForm.elements.query.value;
      //===========
      // const searchText = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
      //Or
      const config = {params: {q: searchTerm}}
      const searchText = await axios.get(`https://api.tvmaze.com/search/shows`, config)
      //
      //============
      createImg(searchText.data)
      searchForm.elements.query.value = '';
})


const createImg = (shows) => {
      for (let result of shows) {
            if (result.show.image.medium) {
                  const img = document.createElement('img')
                  img.src = result.show.image.medium;
                  document.body.append(img)    
            }
      }
}


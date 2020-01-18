



    // URL para acessar a api
    //let baseURL = 'https://api.themoviedb.org/3/';

    // Chave da api
    //let APIKEY = "323e64a92d60093c30b3a0592469e12b";

    // retorna os filmes com melhores avaliações
    /*    let topRatedMovie = function (page) {
        let url = ''.concat(baseURL, '/movie/top_rated?api_key=', APIKEY, '&language=en-US&page=', page);
        fetch(url)
        .then(result=>result.json())
        .then((data)=>{
            let data_json = JSON.stringify(data);
            return data_json[1];
            
            
            
        })
      
    }*/

///////////////////////////////////////////

 
        //const APIKEY is inside key.js
        let baseURL = 'https://api.themoviedb.org/3/';
        let configData = null;
        let baseImageURL = null;
        let APIKEY = "323e64a92d60093c30b3a0592469e12b";
        
        let topRatedMovie = function () {
            let url = "".concat(baseURL, 'configuration?api_key=', APIKEY); 
            fetch(url)
            .then((result)=>{
                return result.json();
            })
            .then((data)=>{
                baseImageURL = data.images.secure_base_url;
                configData = data.images;
                //console.log('config:', data);
                //console.log('config fetched');
                runSearch('Fight Club')
            })
            .catch(function(err){
                alert(err);
            });
        }
        
        let runSearch = function (keyword) {
            let url = ''.concat(baseURL, 'search/movie?api_key=', APIKEY, '&query=', keyword);
            fetch(url)
            .then(result=>result.json())
            .then((data)=>{
                let data_json = JSON.stringify(data, null, 4);
                //process the returned data
                document.getElementById('output').innerHTML = data_json;
                //work with results array...
                let data_results = data.results;
                let image = data.results[1].backdrop_path; 
                console.log(data.results[1]);

                return data.results[1].title;
                
                
                
            })
        }
        
      
   


    export default { topRatedMovie };
window.onload = function() 
{

    
    var searchBtn = document.querySelector('#searchBtn');
    var httpRequest;
  
    searchBtn.addEventListener('click', function(element) 
    {
      element.preventDefault();
  
      httpRequest = new XMLHttpRequest();
  
      // GET Request
      var url = "superheroes.php";
      httpRequest.onreadystatechange = heroList;
      httpRequest.open('GET', url);
      httpRequest.send();
    });

    function heroList() 
    {
        if (httpRequest.readyState === XMLHttpRequest.DONE) 
        {
            
            if (httpRequest.status === 200) 
            {
                
                let response = httpRequest.responseText;
                alert(response);

            } 
            else 
            {
                alert('There was a problem with the request.');
            }
        }
    }
    






      const searchResult = document.getElementById('result');
      let heroData = [];
      

      const searching = async () => 
      {
          try 
          {
              const res = await fetch('http://localhost/info2180-lab4/superheroes.php');
              superhero = await res.json();
              heroInfo(superhero);
          } 
          catch (err) 
          {
              console.error(err);
          }
      };
      
      const heroInfo = (char) => 
      {
          const htmlString = char

              .map((character) => 
              {
                  return `
                  
                    <h3>${character.alias}</h3>
                    <h4>${character.name}</h4>
                    <p>${character.biography}</p>
                  
              `;
              })
              .join('');
          result.innerHTML = htmlString;
      };
      
      searching();
        

    
        
    

    
  





    

};
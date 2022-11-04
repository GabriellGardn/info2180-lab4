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
      
};
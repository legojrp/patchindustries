<!DOCTYPE html>
<html>
  <body>
    <p>
      <?php echo json_decode($_GET["data"]) ?>
</p>
<p>This is patchindustries.com. I don't know whats here at the moment, because everything i make could be in a subdirectory. This is a playground testing website. With that, turtle game is <a href="/turtle/">here</a> or my work in progress, not even close to in progress <a href="/Custom-Start-Page/">here</a>. Heres github for you <a href="https://github.com/legojrp">here</a>. </p>
  
<script>
  var json = {
    "data":{
     "settings": {
          "prependOfSearch":"home/users/google>",
         "searchEngine":"https://google.com/search?q=$"
     },
      "messages":[ 
          ""
      ],
     "links":[
          {"name":"Canvas", "link":"https://hse.instructure.com"},
          {"name":"FlightRadar24", "link":"https://flightradar24.com"},
          {"name":"Google","link":"https://google.com"},
          {"name":"Wikipedia", "link" : "https://Wikipedia.org"},
          {"name":"Skyward", "link": "https://sis.hse.k12.in.us/scripts/wsisa.dll/WService=wsEAplus/seplog01.w"},
          {"name":"ESPN", "link":"https://espn.com"},
          {"name":"NBC News","link":"https://nbcnews.com"},
          {"name":"NFL.com","link":"https://nfl.com"},
          {"name":"Spaceflight Now", "link":"https://spaceflightnow.com"},
          {"name":"SpaceNews", "link":"https://spacenews.com"},
          {"name":"Github", "link":"https://github.com"},
          {"name":"Patch Industries", "link":"https://patchindustries.com"}
      ]
    
  }
 }


</script>
</body>
</html>

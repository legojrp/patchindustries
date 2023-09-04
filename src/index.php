<!DOCTYPE html>
<html>
  <body>
    <p>
      <?php echo json_decode($_GET["data"]) ?>
</p>
<p>If you are looking for custom start page, go <a href="./Start-Page/">here</a></p>
  
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

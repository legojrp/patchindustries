let outputArray = []
let arrayLoop = -1;
let data;
$(function(){
    URLSearchParams.set(json);


    $.post('getinfo.php', function(data){
        //Messages
        if (!data){
             console.error("hey theres no data here: " + data)
        }
        for (let i=0; i<data.messages.length;i++){
            outputArray.push(data.messages[i]);
        }
        // Links
        for (let i=0; i<data.links.length;i++){ 
            outputArray.push(`<a href="${data.links[i].link}">[${data.links[i].name}]</a>`);
        }
        //Label
        let searchDiv = document.createElement("div");
        let label = document.createElement("label");
        let input = document.createElement("input");
        input.type = "text";
        input.name = "searchLine";
        input.id = "searchLine";
        label.textContent = data.settings.prependOfSearch;
        searchDiv.insertAdjacentElement("beforeend", label);
        searchDiv.insertAdjacentElement("beforeend", input);
        outputLoop();
        document.querySelector(".container").insertAdjacentElement("beforeend", searchDiv);
        document.querySelector("#searchLine").focus();
    });
});
function outputLoop(){
    arrayLoop++;
    if (outputArray[arrayLoop]){
        document.querySelector("#linkpile").innerHTML += `<p>${outputArray[arrayLoop]}</p>`;
        outputLoop();
    }
}
document.addEventListener("keypress", function(event){
    if (event.which === 13){
        if (isValidUrl($("#searchLine").val())){
            window.open($("#searchLine").val().includes("http") ? $("#searchLine").val() : "https://"+ $("#searchLine").val())
        }
        else {
            window.open(data.settings.searchEngine.replace("$",$("#searchLine").val()),"_self")
        }
    }
})
document.addEventListener("click",function(){
    $("#searchLine").focus()
})

function isValidUrl(string) {
    if (string){
        var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    }
    return (res !== null)
  };

function parseURLParams(url) {
    var queryStart = url.indexOf("?") + 1,
        queryEnd   = url.indexOf("#") + 1 || url.length + 1,
        query = url.slice(queryStart, queryEnd - 1),
        pairs = query.replace(/\+/g, " ").split("&"),
        parms = {}, i, n, v, nv;

    if (query === url || query === "") return;

    for (i = 0; i < pairs.length; i++) {
        nv = pairs[i].split("=", 2);
        n = decodeURIComponent(nv[0]);
        v = decodeURIComponent(nv[1]);

        if (!parms.hasOwnProperty(n)) parms[n] = [];
        parms[n].push(nv.length === 2 ? v : null);
    }
    return parms;
}





var json = {
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

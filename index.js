const http=require('http');
const fs=require('fs');
var requests=require('requests');

const homeFile=fs.readFileSync('home.html',"utf-8");

const replaceVal=(tempeVal, orgVal) =>{

    let temperature=tempeVal.replace("{%tempval%}", (orgVal.main.temp-273.15).toFixed(2));
    temperature=temperature.replace("{%tempMin%}", (orgVal.main.temp_min-273.15).toFixed(2));
    temperature=temperature.replace("{%tempMax%}", (orgVal.main.temp_max-273.15).toFixed(2));
    temperature=temperature.replace("{%location%}", orgVal.name);
    temperature=temperature.replace("{%country%}", orgVal.sys.country);
    temperature=temperature.replace("{%tempStatus%}", orgVal.weather[0].main);
    return temperature;
};

const server=http.createServer((req, res)=>{
    if(req.url=="/homepage")
    {
        requests("https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=bce2e1b8ed16c7feef62192c642b42c0")
    
        .on("data", (chunk) =>{
            const objData=JSON.parse(chunk);
            const arrData=[objData]; 
            const realTimeData = arrData.map((val) => replaceVal(homeFile, val)).join("");
            //console.log(realTimeData);
            res.write(realTimeData);
        })
        .on("end", (err)=>{
            if(err)
                return console.log("connection faised",err);
            res.end();
        });
    }
});

server.listen(8000,"127.0.0.1",()=>{
    console.log("Listening on port 8000");
});
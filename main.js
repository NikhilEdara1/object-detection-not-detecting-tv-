A="";
objects=[];
status1="";



function setup()
{
    canvas=createCanvas(380,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(380,380);
}
function start(){
    x=ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML="Status: detecting objects";

}
function modelloaded()
{
console.log("modelloaded");
status1=true;
x.detect(A,cocoa);
}
function cocoa(erorr,result)
{
    if(erorr)
    {console.log(erorr)}
    console.log(result);
    objects=result;
}

function draw()
{
    image(video,0,0,380,380);
    if(status1 != "")
    {
        r=random(255);
        g=random(255);
        b=random(255);
        for(var i=0; i<objects.length;i++)
        {
            document.getElementById("status").innerHTML="Staus: Target has been indetified";
           document.getElementById("no-objects").innerHTML="number of objects detected: "+objects.length; 
            fill(r,g,b);
            c=floor(objects[i].confidence*100)
    text(objects[i].label+ " "+c+"%",objects[i].x+10,objects[i].y+15);
    noFill();
     stroke(r,g,b);
     rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
    
}

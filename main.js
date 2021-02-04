function setup () {
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,400)
    canvas.position(560,150)

    posenet=ml5.poseNet(video,modelLoaded)
    posenet.on('pose',gotPoses)
}
function preload(){

}
function draw(){
    background('#1cdae8')
}

function modelLoaded(){
    console.log("MODEL LOADED!!!");
}
function gotPoses(results){
    len=results.length

        if(len>0){
            console.log(results)
        }
    
}

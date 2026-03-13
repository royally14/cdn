const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if(id){

const videoUrl = "https://cdn2.videy.co/" + id + ".mp4";

const player = document.getElementById("player");
const download = document.getElementById("download");

if(player){
player.src = videoUrl;
}

if(download){
download.href = videoUrl;
}

}

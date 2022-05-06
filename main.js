
const  Api="AIzaSyD85F2Vt3=ykW=f8N0r3OlBeDRHpbteHFM";
const Apin="AIzaSyB7E96ovHMTgwWrCU4oIvehb1EdumGqBaU";

// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=kgf%202&key=[YOUR_API_KEY]


const search = async () => {
     try{
 const query=document.getElementById("query").value;
const url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}%202&key=${Apin}`
       const res= await fetch(url)
       const data= await res.json();
      
      append(data.items)
     }catch(err){
         console.log(err)
     }
};

const append =(videos) =>{
    console.log(videos)
    let show_vid =document.getElementById("videos");

    videos.forEach(({id:{videoId},snippet:{title}}) => {
        let div =document.createElement("div");
       
        let iframe=document.createElement("iframe");
        iframe.src=`https://www.youtube.com/embed/${videoId}`;

        iframe.width="100%";

        iframe.height="100%";
        iframe.allow="fullscreen"
        let name =document.createElement("h5");
        name.innerText=title;
        div.append(iframe,name);
       show_vid.append(div);
});
}

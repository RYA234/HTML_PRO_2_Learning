onmessage = function(e){
    var title = document.querySelector("#title");
    title.innerText = e.data;
};

onerror = function(err){
    console.error(err.message);
}
var data ={
    name : "Jason",
    last : "Blue"
}
var app = new Vue({
    el : "#app" ,
    data : {
        name : data.name,
        last : data.last,
        titleTxt : data.titleTxt || "Content"
    }
})

//更改name
// $('#app').text = "Joker" ;
app.name = "Joker"
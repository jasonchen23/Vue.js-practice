var defaults ={
    name : "default",
    last : "default",
    titleTxt : "Content",
    imgScr : "https://i.picsum.photos/id/866/300/300.jpg?hmac=9qmLpcaT9TgKd6PD37aZJZ_7QvgrVFMcvI3JQKWVUIQ",
    comments: [
        {
          user: "jay",
          text: "好讚的文章"
        },
        {
          user: "ray",
          text: "酷的文章"
        }
      ]
}
var data ={
    name : "Jason",
    last : "Blue",
    titleTxt : "Content",
    imgScr : "https://i.picsum.photos/id/866/300/300.jpg?hmac=9qmLpcaT9TgKd6PD37aZJZ_7QvgrVFMcvI3JQKWVUIQ",
    comments: [
        {
          user: "jay",
          text: "好讚的文章"
        },
        {
          user: "ray",
          text: "酷的文章"
        }
      ]
}
var app = new Vue({
    el : "#app" ,
    data : {
        name : data.name || defaults.name,
        last : data.last || defaults.last,
        titleTxt : data.titleTxt || defaults.titleTxt,
        imgScr : data.imgScr || defaults.imgScr,
        comments : data.comments || defaults.comments,
    }
})
var app4 = new Vue({
    el : "#app-4" ,
    data : {
        todos: [
            {text: 'Learn JavaScipt'},
            {text: 'Learn Vue'},
            {text: 'Build something awesome'}
        ]
    }
})
var app2 = new Vue({
     el :"#app-2" ,
     data : {
         items : [

         ]
     }
    })
var app_test = new Vue({
    el: "#app_test",
})
//更改name
// $('#app').text = "Joker" ;
app.name = "Joker"
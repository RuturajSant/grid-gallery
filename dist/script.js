function addImage(imgs) {
  // Get the expanded image
  var big = document.getElementById("big-image");
  // Get the image text
  // var imgText = document.getElementById("imgtext");
  // Use the same src in the expanded image as the image being clicked on from the grid
  big.src = imgs.src;
}
















// var imgs =[{
//   id:1, src:"https://images.unsplash.com/photo-1621318164442-6f69d3453489?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMzkzMjUxOQ&ixlib=rb-1.2.1&q=85"
// },{id:2,  src:"https://images.unsplash.com/photo-1621359729423-dcbdbac348fb?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMzkzMzA1Nw&ixlib=rb-1.2.1&q=85"},
// {id:3,
//   src:"https://images.unsplash.com/photo-1611132558562-a00d47639510?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMzkzMzg1NA&ixlib=rb-1.2.1&q=85"},
// {id:4,
//   src:"https://images.unsplash.com/photo-1513460587394-905bb175a04c?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMzkzMzc5Mw&ixlib=rb-1.2.1&q=85"},
// {id:5,
//   src:"https://images.unsplash.com/photo-1622222297891-f62ae0012fa3?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMzkzMzcyNg&ixlib=rb-1.2.1&q=85"},         
// {id:6,
//   src:"https://images.unsplash.com/photo-1621787889493-dd21093938ac?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMzkzMzY5Mg&ixlib=rb-1.2.1&q=85"},
// {id:7,
//   src:"https://images.unsplash.com/photo-1616001089004-04948fc0e6c1?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMzkzMzg5NA&ixlib=rb-1.2.1&q=85"},
// {id:8,
//   src:"https://images.unsplash.com/photo-1621206593424-6e4e8f6336e9?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMzkzMzU4NA&ixlib=rb-1.2.1&q=85"},
// {id:9,
//   src:"https://images.unsplash.com/photo-1601642354452-e69d78a0b8f2?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMzkzMzUxNQ&ixlib=rb-1.2.1&q=85"},           
// {id:10,
//   src:"https://images.unsplash.com/photo-1623093386041-a0915e5a1ca4?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMzkzMzA1Nw&ixlib=rb-1.2.1&q=85"}];

// const big = document.querySelector(".big");
// const smalls = document.querySelectorAll(".small");

// var first = document.createElement('img');
//   first.src = imgs[0].src;
//   document.querySelector(".big").appendChild(first);
// smalls.forEach(small => {
//   small.addEventListener('click',() =>{
//     var v = parseInt(small.getAttribute("id")) -1;
//     while (big.firstChild) {
//   big.removeChild(big.firstChild);
// }
//   var img = document.createElement('img');
//   img.src = imgs[v].src;
//   document.querySelector(".big").appendChild(img);
//   }); 
// });

// // $('.big').append("<img src="+imgs[0].src+">");

// // $('.small').each(function(){
// //    $(this).click(function(){
// //      $('.big').empty();
// //      var v = parseInt($(this).attr("id")) - 1;
// //      console.log(v);
// //        $('.big').append("<img src="+imgs[v].src+">"); 
// //    });
// //  });
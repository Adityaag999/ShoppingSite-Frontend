const wrapper= document.querySelector(".sliderWrapper")
const menuItems=document.querySelectorAll(".menuItem")
console.log(menuItems)

//Products Array for Product Class for colours and image
const products=[
{
    id:0,
    title:"Air Force",
    price:119,
    colors:[
        {
            code:"black",img:"./img/air.png",
        },{
            code:"darkblue",img:"./img/air2.png",
        },
    ],

},
{
    id:1,
    title:"Air Jordan",
    price:119,colors:[
        {
            code:"white",img:"./img/jordan.png",
        },{
            code:"green",img:"./img/jordan2.png",
        },
    ],
},
{
    id:2,
    title:"Air Blazer",
    price:119,colors:[
        {
            code:"white",img:"./img/blazer.png",
        },{
            code:"green",img:"./img/blazer2.png",
        },
    ],
},
{
    id:3,
    title:"Air Crater",
    price:119,colors:[
        {
            code:"black",img:"./img/crater.png",
        },{
            code:"white",img:"./img/crater2.png",
        },
    ],
},
{
    id:4,
    title:"Air Hippie",
    price:119,colors:[
        {
            code:"grey",img:"./img/hippie.png",
        },{
            code:"black",img:"./img/hippie2.png",
        },
    ],
},
]

let choosenProduct = products[0];

const currentProductImg=document.querySelector(".productImg");
const currentProductTitle=document.querySelector(".productTitle");
const currentProductPrice=document.querySelector(".productPrice");
const currentProductColors=document.querySelectorAll(".color");
const currentProductSizes=document.querySelectorAll(".size");

//Listener for navBottom bar
//For Slider
menuItems.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        //change the current slide
        wrapper.style.transform=`translateX(${-100 * index}vw)`
        //change the choosen product
        choosenProduct=products[index];
        //change texts of current product
        currentProductTitle.textContent=choosenProduct.title;
        currentProductPrice.textContent="Rs"+choosenProduct.price;
        currentProductImg.src=choosenProduct.colors[0].img;
        //Assigning new colours for every model as mentioned in Array
     currentProductColors.forEach((color,index)=>{
        color.style.backgroundColor=choosenProduct.colors[index].code;
     });
    });
})
//To make colors functional on image
currentProductColors.forEach((color,index)=>{
     color.addEventListener("click",()=>{
         currentProductImg.src=choosenProduct.colors[index].img
     })
});
//Sizes Selection
currentProductSizes.forEach((size,index)=>{
   size.addEventListener("click",()=>{
    //TO Deselect other sizes
    currentProductSizes.forEach((size)=>{
      size.style.backgroundColor="rgba(116, 111, 111, 0.342)"
      size.style.color="black"
    });
    size.style.backgroundColor="black"
    size.style.color="white"
   })
})
//To show payment page when BuyNow of FeaturesBar is Clicked
//To close payment page when close Button is clicked
const productButton=document.querySelector(".productButton");
const payment=document.querySelector(".payment");
const close=document.querySelector(".close");

productButton.addEventListener("click",()=>{
    payment.style.display="flex";
})
close.addEventListener("click",()=>{
    payment.style.display="none";
})
window.onload = function(){

    let newCart = JSON.parse(localStorage.getItem("newCart"));

    let cart = JSON.parse(localStorage.getItem("cartItems")) ;

    



   br_if: if(newCart == null){

      break br_if;

   }else{

      var object = newCart.reduce(

         (obj,item) => Object.assign(obj,{

            ["productId"]:item.id,

            ["productName"]:item.name,

            ["productQuantity"]:item.quantity,

            ["productPrice"]:item.price,

            ["productImg"]:item.img



         }),{}

      )

         cart.push(object)

   }



     let totalArray = []

     let totalSum= 0

     const DIV = document.createElement('div');

     DIV.setAttribute('class','container');

     var row = document.createElement('div')

     row.setAttribute("class","row")

     let SpanTotal = document.getElementById("SpanTotal")



     for(let key in cart){



        var col = document.createElement("div")

        col.setAttribute("class","col-md-4 col-12")



        var cartImg = document.createElement("div")

        cartImg.setAttribute("class","cartImg")





         let Img = document.createElement("img");

         Img.setAttribute("src", cart[key].productImg)



         Img.setAttribute("width","150px")

         Img.setAttribute("height","150px")

         Img.setAttribute("class","pro-img")

         Img.style.border = "1px solid #a23"

         let name = document.createElement("p");

         name.innerHTML = cart[key].productName

         

         name.style.display = "inline-block"

         name.style.margin = "100px 0 0 10px"

         name.style.color = "#a23"

         cartImg.appendChild(Img)

        cartImg.appendChild(name)

         col.appendChild(cartImg)

         row.appendChild(col)

         DIV.appendChild(row)

         document.body.appendChild(DIV)



         var col1 = document.createElement("div")

         col1.setAttribute("class","col-md-2 col-12")

         let price = document.createElement("span")

         price.setAttribute("class","price ml-md-5 ml-0")

         price.innerHTML = `$ ${cart[key].productPrice}`

         price.style.display = "inline-block"

         price.style.marginTop = "100px"



         price.style.color = "#a23"



         col1.appendChild(price)

         row.appendChild(col1)





         var col2 = document.createElement("div")

         col2.setAttribute("class","col-md-4 col-12")



         let input = document.createElement("input")

         input.setAttribute("class", "cartInput ml-md-5 ml-0")





         input.setAttribute("id",cart[key].productId)

         input.setAttribute("type","number")

         input.setAttribute("max", cart[key].productQuantity)

         input.setAttribute("min","1")

         input.setAttribute("value", "1")





         col2.appendChild(input)

         row.appendChild(col2)



        

         var col3 = document.createElement("div")

         col3.setAttribute("class","col-md-2 col-12")

         let priceTotal = document.createElement("span")

         priceTotal.setAttribute("class","ml-md-5 ml-0")

        

        

        

         priceTotal.style.display = "inline-block"

         priceTotal.style.marginTop = "100px"

       

         col3.appendChild(priceTotal)

         row.appendChild(col3)

         

     

         input.addEventListener("change",function(ev){

            target = ev.target

            let inputValue = target.value

            let productPrice = cart[key].productPrice 

            let productTotal = inputValue * parseInt(productPrice)

            priceTotal.innerHTML = productTotal



            totalArray.push(parseInt(productTotal))

            totalSum = sumFn(totalArray)

            SpanTotal.innerHTML = totalSum

           

         })

        

     }

}

let sum = 0

let uniqueArr= [];

let sumFn = function(arr){

  //console.log(sum);

      for(let i=0; i<arr.length;i++){

         if(uniqueArr.indexOf(arr[i])=== -1){

            uniqueArr.push(arr[i])

            sum += Number(uniqueArr[i])

         }

      }

      

      return sum 

  }

     

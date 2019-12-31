window.onload = function(){

    getCartItems: if(localStorage.getItem('cartItems') == null){

        break getCartItems;

    }else{

        var Cartsss = JSON.parse(localStorage.getItem('cartItems'));

        let arr34 = [];

        for(let key in Cartsss){

            arr34.push({

            productId:Cartsss[key].productId,

            productName:Cartsss[key].productName,

            productQuantity:Cartsss[key].productQuantity,

            productPrice:Cartsss[key].productPrice,

            productImg:Cartsss[key].productImg

            });

        }

        localStorage.setItem('OldCart' , JSON.stringify(arr34));

    }

}

var RES = []

let count = document.getElementById("counter")

let totalSpan = document.getElementById("total")

// let productsLocal=JSON.parse(localStorage.getItem("cartItems"));

let getImagesAndRender = (renderImages) => {

    count.innerHTML = localStorage.getItem("count")



    totalSpan.innerHTML = localStorage.getItem("total");





    const URL = 'https://gist.githubusercontent.com/a7med-hussien/7fc3e1cba6abf92460d69c0437ce8460/raw/da46abcedf99a3d2bef93a322641926ff60db3c3/products.json';

    const METHOD = 'GET';

    let xhr = new XMLHttpRequest();

    xhr.open(METHOD, URL);

    xhr.send();

    xhr.onerror = (err) => {

        console.error(err);

    }

    xhr.onload = (res) => {

        if (xhr.status == 200) {

             RES = JSON.parse(xhr.response);

            return renderImages(RES);

        }

    }

}









let cart = []

let counter = 0

let cartPrice=0;



let fixed = document.getElementById("fixed")





let renderImagesTOHTml = (images) => {

    const DIV = document.createElement('div');

    DIV.setAttribute('class','container');

    var row = document.createElement('div')

    row.setAttribute("class","row")

    for (let i = 0; i < images.ProductCollection.length; i++) {

       

        var col = document.createElement("div")

        col.setAttribute("class","col-md-4")



        var productContainr = document.createElement("div")

        productContainr.setAttribute("class","product")



        const IMG = document.createElement("img");

        IMG.src = images.ProductCollection[i].ProductPicUrl;

        IMG.setAttribute("width","250px")

        IMG.setAttribute("height","250px")



        IMG.setAttribute('id',`${images.ProductCollection[i].ProductId}`)



        let name = document.createElement("p")

        name.setAttribute("class","Pname")

        name.innerHTML = images.ProductCollection[i].Name



        let descContainer = document.createElement("div")

        descContainer.setAttribute("class","descContainer")





        let desc = document.createElement("div")

        desc.setAttribute("class","desc")



        let currencySpan = document.createElement("span")

        currencySpan.style.color = "#a23"

        currencySpan.style.fontSize = "20px"

        // currencySpan.style.display = "inline-block"

        // currencySpan.style.paddingLeft="5px"

        currencySpan.innerHTML = images.ProductCollection[i].CurrencyCode





        let priceSpan = document.createElement("span")

        priceSpan.style.color = "#a23"

        priceSpan.style.fontSize = "25px"

        // priceSpan.style.fontWeight = "bold"







        priceSpan.innerHTML = images.ProductCollection[i].Price 

        // priceSpan.innerHTML+= + Number(images.ProductCollection[i].currencyCode)

        let btnImg = document.createElement("img")



        btnImg.setAttribute("id","btnImg")

        btnImg.setAttribute("src","../imgs/shopping-cart.png")

        btnImg.setAttribute("price", images.ProductCollection[i].Price)



        

        desc.appendChild(btnImg)

        descContainer.appendChild(currencySpan)





        descContainer.appendChild(priceSpan)



        descContainer.appendChild(desc);

        productContainr.appendChild(IMG)

        productContainr.appendChild(name)

        productContainr.appendChild(descContainer)

        col.appendChild(productContainr)

        row.appendChild(col)

        DIV.appendChild(row);



        let data = []



        IMG.addEventListener("click",function(ev){

            console.log(ev.target);

            data.push({

                id : images.ProductCollection[i].ProductId,

                name: images.ProductCollection[i].Name,

                status : images.ProductCollection[i].Status,

                quantity : images.ProductCollection[i].Quantity,

                price : images.ProductCollection[i].Price,

                description : images.ProductCollection[i].Description,

                img : images.ProductCollection[i].ProductPicUrl,

                category : images.ProductCollection[i].Category

            })

            localStorage.setItem("product",JSON.stringify(data))

            window.location.href = "view.html?id="+ images.ProductCollection[i].ProductId

        })



        $(btnImg).on('click' , function(ev){

           

        cart.push({

            id : images.ProductCollection[i].ProductId,

            name: images.ProductCollection[i].Name,

            quantity : images.ProductCollection[i].Quantity,

            price : images.ProductCollection[i].Price,

            img : images.ProductCollection[i].ProductPicUrl

        })



        let local = []



        for(let key in cart){

            local.push({

                productId : cart[key].id,

                productName : cart[key].name,

                productQuantity : cart[key].quantity,

                productPrice: cart[key].price,

                productImg : cart[key].img

            })

            const arr = [...new Map(local.map(item =>

                [item['productId'],item])).values()]

                

            localStorage.setItem("cartItems", JSON.stringify(arr))



            var newCartssIemss = JSON.parse(localStorage.getItem('OldCart'));

            let array = [];

            for(let key  in newCartssIemss){



                array.push({

                    productId:newCartssIemss[key].productId,

                    productName:newCartssIemss[key].productName,

                    productQuantity:newCartssIemss[key].productQuantity,

                    productPrice:newCartssIemss[key].productPrice,

                    productImg:newCartssIemss[key].productImg

                });

                vvv: if(array == null){

                    break vvv;

                 }else{

                    var object = array.reduce(

                       (obj,item) => Object.assign(obj,{

                          ["productId"]:item.productId,

                          ["productName"]:item.productName,

                          ["productQuantity"]:item.productQuantity,

                          ["productPrice"]:item.productPrice,

                          ["productImg"]:item.productImg

              

                       }),{}

                    );

                       local.push(object);

                       console.log(object)

                       const arr66 = [...new Map(local.map(item =>

                        [item['productId'],item])).values()]

                        localStorage.setItem('cartItems' , JSON.stringify(arr66));

                    }

            }

           

        }



        counter++

        localStorage.setItem("count",counter)



        count.innerHTML = localStorage.getItem("count")

        // console.log(counter);

        let btnPrice = ev.target.getAttribute("price")

        let btnPrice1 = Number(btnPrice);

        cartPrice=Number(localStorage.getItem("total"))+btnPrice1

        console.log(cartPrice)



        localStorage.setItem("total",cartPrice)

        totalSpan.innerHTML = localStorage.getItem("total");  

        })

        fixed.addEventListener('click' , function(){

            window.location.href = "cart.html";

        })

    }

    document.body.appendChild(DIV);

}

getImagesAndRender(renderImagesTOHTml);



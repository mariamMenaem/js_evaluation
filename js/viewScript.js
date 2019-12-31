window.onload = function () {



    let newArr = []



    let product = JSON.parse(localStorage.getItem("product"));

    console.log(product[0].name);







    const DIV = document.createElement('div');

    DIV.setAttribute('class', 'container');

    var row = document.createElement('div')

    row.setAttribute("class", "row")



    for (let key in product) {

        var col = document.createElement("div")

        col.setAttribute("class", "col-md-4")



        var divImg = document.createElement("div")

        divImg.setAttribute("class", "divImg")

        let Img = document.createElement("img");

        Img.setAttribute("width", "300px")

        Img.setAttribute("height", "300px")

        Img.setAttribute("src", product[key].img)

        Img.setAttribute("class", "pro-img")

        divImg.appendChild(Img)



        var col1 = document.createElement("div")

        col1.setAttribute("class", "col-md-4")



        let descCont = document.createElement("div")

        descCont.setAttribute("class", "description")



        let category = document.createElement("h5");

        category.style.color = "grey"

        category.innerHTML = product[key].category

        let desc = document.createElement("p");

        desc.setAttribute("class", "descP")

        desc.innerHTML = product[key].description



        descCont.appendChild(category)

        descCont.appendChild(desc)

        col1.appendChild(descCont)



        var col2 = document.createElement("div")

        col2.setAttribute("class", "col-md-4")



        let priceDiv = document.createElement("div");

        let status = document.createElement("p");

        status.setAttribute("class", "statusP")

        // let hr = document.createElement("hr")

        let price = document.createElement("p")

        price.setAttribute("class", "priceP")

        let quantity = document.createElement("span")

        let input = document.createElement("input")

        input.setAttribute("id", "input")

        input.setAttribute("max", product[key].quantity)

        input.setAttribute("min", "1")

        input.setAttribute("type", "number")

        let btn = document.createElement("button")









        priceDiv.setAttribute("class", "priceCard")

        status.innerHTML = product[key].status

        price.innerHTML = `$ ${product[key].price}`

        quantity.setAttribute("class", "cardInput")

        btn.innerHTML = "Add to Cart"

        btn.setAttribute("class", "cardBtn")

        input.setAttribute("value", product[key].quantity)

        quantity.innerHTML = "Quantity :"

        priceDiv.appendChild(status)

        priceDiv.appendChild(price)

        priceDiv.appendChild(quantity)

        priceDiv.appendChild(input)

        priceDiv.appendChild(btn)



        col2.appendChild(priceDiv)

        col.appendChild(divImg)

        row.appendChild(col)

        row.appendChild(col1)

        row.appendChild(col2)



        DIV.appendChild(row)

        document.body.appendChild(DIV)



        btn.addEventListener("click", function(){

             newArr.push({

                 id : product[key].id,

                 name : product[key].name,

                 quantity : product[key].quantity,

                 price : product[key].price,

                 img : product[key].img,

             })



             let newCart = []

            for(key in newArr){

                newCart.push({

                    id : newArr[key].id,

                    name : newArr[key].name,

                    quantity :  newArr[key].quantity,

                    price : newArr[key].price,

                    img : newArr[key].img

                })

            }

            localStorage.setItem("newCart", JSON.stringify(newCart))

        })





    }

}



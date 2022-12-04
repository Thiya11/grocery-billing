//creating objects set

const fruits = {
    Mango: ["Mango", 50, "https://static.toiimg.com/photo/69185542.cms"],
    Banana: ["Banana", 5, "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg"],
    Pineapple: ["Pineapple", 30, "https://media.istockphoto.com/photos/whole-with-slice-ripe-pineapple-isolated-on-white-background-picture-id1064819674?k=20&m=1064819674&s=612x612&w=0&h=WIYJDrmo9L6xh8-l0dCkmCCb9_rIBQhhp4m2MXK_XMc="],
    Apple: ["Apple", 120, "https://cdn.britannica.com/95/182495-050-F88677C7/apples-cut-apple-foreground.jpg"]  
}

const vegetables = {
    Onion: ["Onion", 60, "https://m.economictimes.com/thumb/msid-87512016,width-1200,height-900,resizemode-4,imgsize-82074/onion.jpg"],
    Tomato: ["Tomato",20, "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Bright_red_tomato_and_cross_section02.jpg/800px-Bright_red_tomato_and_cross_section02.jpg"],
    Brinjal: ["Brinjal", 25, "https://www.isaaa.org/kc/cropbiotechupdate/files/images/421202194321AM.jpg"],
    Carrot: ["Carrot", 50, "https://foodandnutrition.org/wp-content/uploads/Savor-Carrots.jpg"],   
}
const Pantry = {
    Sunflower: ["Sunflower Oil", 230,"https://upload.wikimedia.org/wikipedia/commons/0/08/Sunflower_oil_and_sunflower.jpg"],
    Coconut: ["Coconut Oil", 200, "https://images.marico.in/uploads/img-0010-shutterstock-1549188695-4610.jpg"],
    Rice: ["Rice", 40, "https://www.bazarsardar.com/wp-content/uploads/2021/04/Miniket-Rice-10-kg.jpg"],
    mflour:["Maida flour", 50, "https://rukminim1.flixcart.com/image/416/416/kgmla4w0/flour/9/t/n/2-organic-maida-wheat-maida-flour-1-maida-vedarth-original-imafwtu5fxrgf6qz.jpeg?q=70"],
}

//creating image and button and input type style objct sets for reuse

const image = {
    pos: "absolute",
    width: "150px",
    height: "100px",
    left: "15px",
    top: "15px"
}

const input ={
    position:"absolute",
    width: "50px",
    left : "400px"
}

const button = {
    position: "absolute",
    width: "100px",
    height: "40px",
    left: "600px",
    color: "white",
    bgcolor: "green"
}

const para ={
    position: "absolute",
    font: "24px",
    left: "250px",
}

const rate = {
    rupee: "&#8377",
    position: "relative",
    left: "15px"
}

const quant = {
    position: "absolute",
    left: "470px"
}

// initial conditions

document.getElementById("fruits-menu").style.display = "block"
document.getElementById("veg-menu").style.display = "none"
document.getElementById("pantry-menu").style.display = "none"

//top-menu actions

function fruitsList()
{
    document.getElementById("veg-menu").style.display = "none"
    document.getElementById("pantry-menu").style.display = "none"
    document.getElementById("fruits-menu").style.display = "block"
}

function vegList()
{
    document.getElementById("veg-menu").style.display = "block"
    document.getElementById("pantry-menu").style.display = "none"
    document.getElementById("fruits-menu").style.display = "none"
}
function pantryList()
{
    document.getElementById("veg-menu").style.display = "none"
    document.getElementById("pantry-menu").style.display = "block"
    document.getElementById("fruits-menu").style.display = "none"
}
//fruits list 


    let mangoData = document.getElementById("item-1") //image insertion
    let mangoImage = document.createElement("img")
    mangoImage.setAttribute('src', fruits.Mango[2])
    mangoImage.style.position = image.pos
    mangoImage.style.width = image.width
    mangoImage.style.left = image.left
    mangoImage.style.top = image.top
    mangoImage.style.height = image.height
    mangoData.appendChild(mangoImage)

    let mangopara = document.createElement ("span") //fruit name and price insertion
    mangopara.innerHTML = "Mango<br>"
    let mangorate = document.createElement ("span")
    mangorate.innerHTML = "&#8377 50"
    mangopara.appendChild(mangorate)
    mangoData.appendChild(mangopara)
    mangopara.style.position="relative"
    mangopara.style.left = "250px"
    mangopara.style.top = "30px"
    mangopara.style.fontSize = "24px"
    mangorate.style.position="relative"
    mangorate.style.left = "15px"
    mangorate.style.top = "2px"

   
    let mangoInput = document.createElement("input") //fruit quantity insertion
    mangoInput.type = "number"
    mangoInput.style.position = "absolute"
    mangoInput.style.left = input.left
    mangoInput.style.top = "45px"
    mangoInput.style.width = input.width
    mangoData.appendChild(mangoInput)

    let mangoqunat = document.createElement("p")
    mangoqunat.innerHTML = "Kg"
    mangoqunat.style.position = "absolute"
    mangoqunat.style.left = "470px"
    mangoqunat.style.top = "30px"
    mangoData.appendChild(mangoqunat)
    


    let mangoBtn = document.createElement("button") //add to cart button
    mangoBtn.innerHTML = "Add to Cart"
    mangoBtn.style.position="absolute"
    mangoBtn.style.left = "600px"
    mangoBtn.style.top = "30px"
    mangoBtn.style.width = "100px"
    mangoBtn.style.height = "40px"
    mangoBtn.style.color = "white"
    mangoBtn.style.background = "green"
    mangoData.appendChild(mangoBtn)


    let bananaData = document.getElementById("item-2")
    let bananaImage = document.createElement("img")
    bananaImage.style.position = image.pos
    bananaImage.style.width = image.width
    bananaImage.style.height = image.height
    bananaImage.style.left = image.left
    bananaImage.style.top = "135px"
    bananaImage.setAttribute('src',fruits.Banana[2])
    bananaData.appendChild(bananaImage)

    let bananaPara = document.createElement("span")
    bananaPara.innerHTML = "Banana <br>"
    bananaPara.style.position = para.position
    bananaPara.style.left = para.left
    bananaPara.style.fontSize = para.font
    bananaPara.style.top = "160px"
    let bananarate = document.createElement("span")
    bananarate.innerHTML = "&#8377 5"
    bananaPara.appendChild(bananarate)
    bananaData.appendChild(bananaPara)

    let bananaInput = document.createElement("input")
    bananaInput.type = "number"
    bananaInput.style.position = input.position
    bananaInput.style.left = input.left
    bananaInput.style.width = input.width
    bananaInput.style.top = "170px"
    bananaData.appendChild(bananaInput)
    
    let bananaQuant = document.createElement("p")
    bananaQuant.innerHTML = "Nos"
    bananaQuant.style.position = quant.position
    bananaQuant.style.left = quant.left
    bananaQuant.style.top = "160px"
    bananaData.append(bananaQuant)

    let bananaBtn = document.createElement("button")
    bananaBtn.innerHTML = "Add to Cart"
    bananaBtn.style.position = button.position
    bananaBtn.style.left = button.left
    bananaBtn.style.width = button.width
    bananaBtn.style.height = button.height 
    bananaBtn.style.color = button.color
    bananaBtn.style.background = button.bgcolor
    bananaBtn.style.top = "150px"
    bananaData.append(bananaBtn)  

    let pineData = document.getElementById("item-3")
    let pineImage = document.createElement("img")
    pineImage.setAttribute('src',fruits.Pineapple[2])
    pineData.appendChild(pineImage)
    pineImage.style.position = image.pos
    pineImage.style.left = image.left
    pineImage.style.width = image.width
    pineImage.style.height = image.height
    pineImage.style.top = "275px"
    
    let pinePara = document.createElement("span")
    pinePara.innerHTML = "Pine Apple <br>"
    pinePara.style.position = para.position
    pinePara.style.left = para.left
    pinePara.style.fontSize = para.font
    pinePara.style.top = "300px"
    let pinerate = document.createElement("span")
    pinerate.innerHTML = "&#8377 30"
    pinePara.appendChild(pinerate)
    pineData.appendChild(pinePara)

    let pineInput = document.createElement("input")
    pineInput.type = "number"
    pineInput.style.position = input.position
    pineInput.style.left = input.left
    pineInput.style.width = input.width
    pineInput.style.top = "300px"
    pineData.appendChild(pineInput)
    
    let pineQuant = document.createElement("p")
    pineQuant.innerHTML = "Nos"
    pineQuant.style.position = quant.position
    pineQuant.style.left = quant.left
    pineQuant.style.top = "290px"
    pineData.append(pineQuant)

    let pineBtn = document.createElement("button")
    pineBtn.innerHTML = "Add to Cart"
    pineBtn.style.position = button.position
    pineBtn.style.left = button.left
    pineBtn.style.width = button.width
    pineBtn.style.height = button.height 
    pineBtn.style.color = button.color
    pineBtn.style.background = button.bgcolor
    pineBtn.style.top = "280px"
    pineData.append(pineBtn)

    let appleData = document.getElementById("item-4")
    let appleImage =document.createElement("img")
    appleImage.setAttribute('src',fruits.Apple[2])
    appleData.appendChild(appleImage)
    appleImage.style.position =image.pos
    appleImage.style.left = image.left
    appleImage.style.width = "150px"
    appleImage.style.heihgt ="100px"
    appleImage.style.left = image.left
    appleImage.style.top = "395px"

    let applePara = document.createElement("span")
    applePara.innerHTML = "Apple <br>"
    applePara.style.position = para.position
    applePara.style.left = para.left
    applePara.style.fontSize = para.font
    applePara.style.top = "420px"
    let applerate = document.createElement("span")
    applerate.innerHTML = "&#8377 120"
    applePara.appendChild(applerate)
    appleData.appendChild(applePara)

    let appleInput = document.createElement("input")
    appleInput.type = "number"
    appleInput.style.position = input.position
    appleInput.style.left = input.left
    appleInput.style.width = input.width
    appleInput.style.top = "430px"
    appleData.appendChild(appleInput)
    
    let appleQuant = document.createElement("p")
    appleQuant.innerHTML = "Kg"
    appleQuant.style.position = quant.position
    appleQuant.style.left = quant.left
    appleQuant.style.top = "420px"
    appleData.append(appleQuant)

    let appleBtn = document.createElement("button")
    appleBtn.innerHTML = "Add to Cart"
    appleBtn.style.position = button.position
    appleBtn.style.left = button.left
    appleBtn.style.width = button.width
    appleBtn.style.height = button.height 
    appleBtn.style.color = button.color
    appleBtn.style.background = button.bgcolor
    appleBtn.style.top = "420px"
    appleData.append(appleBtn)

    //vegetables list

    let onionData = document.getElementById("item-5") //image insertion
    let onionImage = document.createElement("img")
    onionImage.setAttribute('src', vegetables.Onion[2])
    onionImage.style.position = image.pos
    onionImage.style.width = image.width
    onionImage.style.left = image.left
    onionImage.style.top = image.top
    onionImage.style.height = image.height
    onionData.appendChild(onionImage)

    let onionpara = document.createElement ("span") //fruit name and price insertion
    onionpara.innerHTML = "Onion<br>"
    let onionrate = document.createElement ("span")
    onionrate.innerHTML = "&#8377 60"
    onionpara.appendChild(onionrate)
    onionData.appendChild(onionpara)
    onionpara.style.position="relative"
    onionpara.style.left = "250px"
    onionpara.style.top = "30px"
    onionpara.style.fontSize = "24px"
    onionrate.style.position="relative"
    onionrate.style.left = "1px"
    onionrate.style.top = "2px"

   
    let onionInput = document.createElement("input") //fruit quantity insertion
    onionInput.type = "number"
    onionInput.style.position = "absolute"
    onionInput.style.left = input.left
    onionInput.style.top = "45px"
    onionInput.style.width = input.width
    onionData.appendChild(onionInput)

    let onionqunat = document.createElement("p")
    onionqunat.innerHTML = "Kg"
    onionqunat.style.position = "absolute"
    onionqunat.style.left = "470px"
    onionqunat.style.top = "30px"
    onionData.appendChild(onionqunat)
    


    let onionBtn = document.createElement("button") //add to cart button
    onionBtn.innerHTML = "Add to Cart"
    onionBtn.style.position="absolute"
    onionBtn.style.left = "600px"
    onionBtn.style.top = "30px"
    onionBtn.style.width = "100px"
    onionBtn.style.height = "40px"
    onionBtn.style.color = "white"
    onionBtn.style.background = "green"
    onionData.appendChild(onionBtn)

    let tomatoData = document.getElementById("item-6")
    let tomatoImage = document.createElement("img")
    tomatoImage.style.position = image.pos
    tomatoImage.style.width = image.width
    tomatoImage.style.height = image.height
    tomatoImage.style.left = image.left
    tomatoImage.style.top = "135px"
    tomatoImage.setAttribute('src',vegetables.Tomato[2])
    tomatoData.appendChild(tomatoImage)

    let tomatoPara = document.createElement("span")
    tomatoPara.innerHTML = "Tomato <br>"
    tomatoPara.style.position = para.position
    tomatoPara.style.left = para.left
    tomatoPara.style.fontSize = para.font
    tomatoPara.style.top = "160px"
    let tomatorate = document.createElement("span")
    tomatorate.innerHTML = "&#8377 20"
    tomatoPara.appendChild(tomatorate)
    tomatoData.appendChild(tomatoPara)

    let tomatoInput = document.createElement("input")
    tomatoInput.type = "number"
    tomatoInput.style.position = input.position
    tomatoInput.style.left = input.left
    tomatoInput.style.width = input.width
    tomatoInput.style.top = "170px"
    tomatoData.appendChild(tomatoInput)
    
    let tomatoQuant = document.createElement("p")
    tomatoQuant.innerHTML = "Kg"
    tomatoQuant.style.position = quant.position
    tomatoQuant.style.left = quant.left
    tomatoQuant.style.top = "160px"
    tomatoData.append(tomatoQuant)

    let tomatoBtn = document.createElement("button")
    tomatoBtn.innerHTML = "Add to Cart"
    tomatoBtn.style.position = button.position
    tomatoBtn.style.left = button.left
    tomatoBtn.style.width = button.width
    tomatoBtn.style.height = button.height 
    tomatoBtn.style.color = button.color
    tomatoBtn.style.background = button.bgcolor
    tomatoBtn.style.top = "150px"
    tomatoData.append(tomatoBtn)  

    let brinjalData = document.getElementById("item-7")
    let brinjalImage = document.createElement("img")
    brinjalImage.setAttribute('src',vegetables.Brinjal[2])
    brinjalData.appendChild(brinjalImage)
    brinjalImage.style.position = image.pos
    brinjalImage.style.left = image.left
    brinjalImage.style.width = image.width
    brinjalImage.style.height = image.height
    brinjalImage.style.top = "275px"
    
    let brinjalPara = document.createElement("span")
    brinjalPara.innerHTML = "Brinjal <br>"
    brinjalPara.style.position = para.position
    brinjalPara.style.left = para.left
    brinjalPara.style.fontSize = para.font
    brinjalPara.style.top = "300px"
    let brinjalrate = document.createElement("span")
    brinjalrate.innerHTML = "&#8377 25"
    brinjalPara.appendChild(brinjalrate)
    brinjalData.appendChild(brinjalPara)

    let brinjalInput = document.createElement("input")
    brinjalInput.type = "number"
    brinjalInput.style.position = input.position
    brinjalInput.style.left = input.left
    brinjalInput.style.width = input.width
    brinjalInput.style.top = "300px"
    brinjalData.appendChild(brinjalInput)
    
    let brinjalQuant = document.createElement("p")
    brinjalQuant.innerHTML = "Kg"
    brinjalQuant.style.position = quant.position
    brinjalQuant.style.left = quant.left
    brinjalQuant.style.top = "290px"
    brinjalData.append(brinjalQuant)

    let brinjalBtn = document.createElement("button")
    brinjalBtn.innerHTML = "Add to Cart"
    brinjalBtn.style.position = button.position
    brinjalBtn.style.left = button.left
    brinjalBtn.style.width = button.width
    brinjalBtn.style.height = button.height 
    brinjalBtn.style.color = button.color
    brinjalBtn.style.background = button.bgcolor
    brinjalBtn.style.top = "280px"
    brinjalData.append(brinjalBtn)

    let carrotData = document.getElementById("item-8")
    let carrotImage =document.createElement("img")
    carrotImage.setAttribute('src',vegetables.Carrot[2])
    carrotData.appendChild(carrotImage)
    carrotImage.style.position =image.pos
    carrotImage.style.left = image.left
    carrotImage.style.width = "150px"
    carrotImage.style.heihgt ="100px"
    carrotImage.style.left = image.left
    carrotImage.style.top = "395px"

    let carrotPara = document.createElement("span")
    carrotPara.innerHTML = "Carrot <br>"
    carrotPara.style.position = para.position
    carrotPara.style.left = para.left
    carrotPara.style.fontSize = para.font
    carrotPara.style.top = "420px"
    let carrotrate = document.createElement("span")
    carrotrate.innerHTML = "&#8377 50"
    carrotPara.appendChild(carrotrate)
    carrotData.appendChild(carrotPara)

    let carrotInput = document.createElement("input")
    carrotInput.type = "number"
    carrotInput.style.position = input.position
    carrotInput.style.left = input.left
    carrotInput.style.width = input.width
    carrotInput.style.top = "430px"
    carrotData.appendChild(carrotInput)
    
    let carrotQuant = document.createElement("p")
    carrotQuant.innerHTML = "Kg"
    carrotQuant.style.position = quant.position
    carrotQuant.style.left = quant.left
    carrotQuant.style.top = "420px"
    carrotData.append(carrotQuant)

    let carrotBtn = document.createElement("button")
    carrotBtn.innerHTML = "Add to Cart"
    carrotBtn.style.position = button.position
    carrotBtn.style.left = button.left
    carrotBtn.style.width = button.width
    carrotBtn.style.height = button.height 
    carrotBtn.style.color = button.color
    carrotBtn.style.background = button.bgcolor
    carrotBtn.style.top = "420px"
    carrotData.append(carrotBtn)
//Pantry List
let sunData = document.getElementById("item-9") //image insertion
    let sunImage = document.createElement("img")
    sunImage.setAttribute('src', Pantry.Sunflower[2])
    sunImage.style.position = image.pos
    sunImage.style.width = image.width
    sunImage.style.left = image.left
    sunImage.style.top = image.top
    sunImage.style.height = image.height
    sunData.appendChild(sunImage)

    let sunpara = document.createElement ("span") //fruit name and price insertion
    sunpara.innerHTML = "Sunflower Oil<br>"
    let sunrate = document.createElement ("span")
    sunrate.innerHTML = "&#8377 230"
    sunpara.appendChild(sunrate)
    sunData.appendChild(sunpara)
    sunpara.style.position="relative"
    sunpara.style.left = "250px"
    sunpara.style.top = "30px"
    sunpara.style.fontSize = "24px"
    sunrate.style.position="relative"
    sunrate.style.left = "1px"
    sunrate.style.top = "2px"

   
    let sunInput = document.createElement("input") //fruit quantity insertion
    sunInput.type = "number"
    sunInput.style.position = "absolute"
    sunInput.style.left = input.left
    sunInput.style.top = "45px"
    sunInput.style.width = input.width
    sunData.appendChild(sunInput)

    let sunqunat = document.createElement("p")
    sunqunat.innerHTML = "L"
    sunqunat.style.position = "absolute"
    sunqunat.style.left = "470px"
    sunqunat.style.top = "30px"
    sunData.appendChild(sunqunat)
    


    let sunBtn = document.createElement("button") //add to cart button
    sunBtn.innerHTML = "Add to Cart"
    sunBtn.style.position="absolute"
    sunBtn.style.left = "600px"
    sunBtn.style.top = "30px"
    sunBtn.style.width = "100px"
    sunBtn.style.height = "40px"
    sunBtn.style.color = "white"
    sunBtn.style.background = "green"
    sunData.appendChild(sunBtn)

    let cocoData = document.getElementById("item-10")
    let cocoImage = document.createElement("img")
    cocoImage.style.position = image.pos
    cocoImage.style.width = image.width
    cocoImage.style.height = image.height
    cocoImage.style.left = image.left
    cocoImage.style.top = "135px"
    cocoImage.setAttribute('src',Pantry.Coconut[2])
    cocoData.appendChild(cocoImage)

    let cocoPara = document.createElement("span")
    cocoPara.innerHTML = "Coconut Oil <br>"
    cocoPara.style.position = para.position
    cocoPara.style.left = para.left
    cocoPara.style.fontSize = para.font
    cocoPara.style.top = "160px"
    let cocorate = document.createElement("span")
    cocorate.innerHTML = "&#8377 200"
    cocoPara.appendChild(cocorate)
    cocoData.appendChild(cocoPara)

    let cocoInput = document.createElement("input")
    cocoInput.type = "number"
    cocoInput.style.position = input.position
    cocoInput.style.left = input.left
    cocoInput.style.width = input.width
    cocoInput.style.top = "170px"
    cocoData.appendChild(cocoInput)
    
    let cocoQuant = document.createElement("p")
    cocoQuant.innerHTML = "L"
    cocoQuant.style.position = quant.position
    cocoQuant.style.left = quant.left
    cocoQuant.style.top = "160px"
    cocoData.append(cocoQuant)

    let cocoBtn = document.createElement("button")
    cocoBtn.innerHTML = "Add to Cart"
    cocoBtn.style.position = button.position
    cocoBtn.style.left = button.left
    cocoBtn.style.width = button.width
    cocoBtn.style.height = button.height 
    cocoBtn.style.color = button.color
    cocoBtn.style.background = button.bgcolor
    cocoBtn.style.top = "150px"
    cocoData.append(cocoBtn)  

    let riceData = document.getElementById("item-10")
    let riceImage = document.createElement("img")
    riceImage.setAttribute('src',Pantry.Rice[2])
    riceData.appendChild(riceImage)
    riceImage.style.position = image.pos
    riceImage.style.left = image.left
    riceImage.style.width = image.width
    riceImage.style.height = image.height
    riceImage.style.top = "275px"
    
    let ricePara = document.createElement("span")
    ricePara.innerHTML = "Rice <br>"
    ricePara.style.position = para.position
    ricePara.style.left = para.left
    ricePara.style.fontSize = para.font
    ricePara.style.top = "300px"
    let ricerate = document.createElement("span")
    ricerate.innerHTML = "&#8377 40"
    ricePara.appendChild(ricerate)
    riceData.appendChild(ricePara)

    let riceInput = document.createElement("input")
    riceInput.type = "number"
    riceInput.style.position = input.position
    riceInput.style.left = input.left
    riceInput.style.width = input.width
    riceInput.style.top = "300px"
    riceData.appendChild(riceInput)
    
    let riceQuant = document.createElement("p")
    riceQuant.innerHTML = "Kg"
    riceQuant.style.position = quant.position
    riceQuant.style.left = quant.left
    riceQuant.style.top = "290px"
    riceData.append(riceQuant)

    let riceBtn = document.createElement("button")
    riceBtn.innerHTML = "Add to Cart"
    riceBtn.style.position = button.position
    riceBtn.style.left = button.left
    riceBtn.style.width = button.width
    riceBtn.style.height = button.height 
    riceBtn.style.color = button.color
    riceBtn.style.background = button.bgcolor
    riceBtn.style.top = "280px"
    riceData.append(riceBtn)

    let maidaData = document.getElementById("item-11")
    let maidaImage =document.createElement("img")
    maidaImage.setAttribute('src', Pantry.mflour[2])
    maidaData.appendChild(maidaImage)
    maidaImage.style.position =image.pos
    maidaImage.style.left = image.left
    maidaImage.style.width = "150px"
    maidaImage.style.heihgt ="100px"
    maidaImage.style.left = image.left
    maidaImage.style.top = "395px"

    let maidaPara = document.createElement("span")
    maidaPara.innerHTML = "Maida <br>"
    maidaPara.style.position = para.position
    maidaPara.style.left = para.left
    maidaPara.style.fontSize = para.font
    maidaPara.style.top = "420px"
    let maidarate = document.createElement("span")
    maidarate.innerHTML = "&#8377 50"
    maidaPara.appendChild(maidarate)
    maidaData.appendChild(maidaPara)

    let maidaInput = document.createElement("input")
    maidaInput.type = "number"
    maidaInput.style.position = input.position
    maidaInput.style.left = input.left
    maidaInput.style.width = input.width
    maidaInput.style.top = "430px"
    maidaData.appendChild(maidaInput)
    
    let maidaQuant = document.createElement("p")
    maidaQuant.innerHTML = "Kg"
    maidaQuant.style.position = quant.position
    maidaQuant.style.left = quant.left
    maidaQuant.style.top = "420px"
    maidaData.append(maidaQuant)

    let maidaBtn = document.createElement("button")
    maidaBtn.innerHTML = "Add to Cart"
    maidaBtn.style.position = button.position
    maidaBtn.style.left = button.left
    maidaBtn.style.width = button.width
    maidaBtn.style.height = button.height 
    maidaBtn.style.color = button.color
    maidaBtn.style.background = button.bgcolor
    maidaBtn.style.top = "420px"
    maidaData.append(maidaBtn)

//assigning functions for the buttons

mangoBtn.onclick = function() {displaymango()}
bananaBtn.onclick = function(){displaybanana()}
pineBtn.onclick = function(){displaypine()}
appleBtn.onclick = function(){displayapple()}
tomatoBtn.onclick = function() {displaytomato()}
onionBtn.onclick = function() {displayOnion()}
brinjalBtn.onclick= function() {displaybrinjal()}
carrotBtn.onclick = function(){displaycarrot()}
sunBtn.onclick = function(){displaysun()}
cocoBtn.onclick = function(){displaycoco()}
riceBtn.onclick = function(){displayrice()}
maidaBtn.onclick = function(){displaymaida()}

//creating elements inside the cart section

document.getElementById("selected-items").style.display = "none"
document.getElementById("items-price").style.display = "none"
document.getElementById("total-price").style.display = "none"

let cart = document.getElementById("cart-section-title")
let showadded = document.createElement("button")
showadded.innerHTML = "Show Added Items"
showadded.style.width = "200px"
showadded.style.height = "50px"
showadded.style.color = "Black"
showadded.style.position = "relative"
showadded.style.left = "50px"
showadded.style.fontSize = "20px"
showadded.style.border = "2px solid yellow"
showadded.style.borderRadius = "20%"
showadded.onclick = function() {show()}
showadded.style.background = "yellow"
cart.appendChild(showadded)


let selected = document.getElementById("selected-items")
let selitems = document.createElement("span")
selected.style.position = "absolute"
selected.style.width = "51.5%"
selected.style.heihgt = "10%"
selitems.style.fontSize = "20px"
selitems.style.position = "relative"
selitems.style.left = "10px"
selected.appendChild(selitems)

let price = document.getElementById("items-price")
let selprice =document.createElement("span")
selprice.style.position = "relative"
selprice.style.fontSize = "20px"

price.appendChild(selprice)

let total = document.getElementById("total-price")
let totprice = document.createElement("span")
totprice.style.position = "absolute"
totprice.style.fontSize = "32px"
totprice.style.left = "1230px"
totprice.style.top = "530px"
let tottitle = document.createElement("p")
tottitle.innerHTML = "Total Amount(Rs.): "
tottitle.style.fontSize = "20px"
total.appendChild(tottitle)
total.appendChild(totprice)

const tot = []

//cart visibility 

function show()
{
document.getElementById("selected-items").style.display = "block"
document.getElementById("items-price").style.display = "block"
document.getElementById("total-price").style.display = "block"
}


//cart section scripts

function displaymango()
{
    if (mangoInput.value <= 0)
    {
        selitems.innerHTML.remove()
    }
    selitems.innerHTML += fruits.Mango[0] + ": " + mangoInput.value + " Kg"+ "<br>"
    selprice.innerHTML += `Rs. ` + fruits.Mango[1] * mangoInput.value
    let gap = document.createElement("br")
    selprice.appendChild(gap)

    tot.push((fruits.Mango[1] * mangoInput.value))
    let sum = tot.reduce(add)
    function add(total, value)
    {
        return total + value
    }
    totprice.innerHTML = sum

}

function displaybanana()
{
    if (bananaInput.value <= 0)
    {
        selitems.innerHTML.remove()
    }
    selitems.innerHTML += fruits.Banana[0] + ": " + bananaInput.value +" Nos" + "<br>"
    selprice.innerHTML += `Rs. `+fruits.Banana[1] * bananaInput.value
    let gap = document.createElement("br")
    selprice.appendChild(gap)

    tot.push((fruits.Banana[1] * bananaInput.value))
    let sum = tot.reduce(add)
    function add(total, value)
    {
        return total+value
    }
    totprice.innerHTML = sum

}
function displaypine()
{
    if (pineInput.value <= 0)
    {
        selitems.innerHTML.remove()
    }
    selitems.innerHTML += fruits.Pineapple[0] + ": " + pineInput.value +" Nos" + "<br>"
    selprice.innerHTML += `Rs. `+ fruits.Pineapple[1] * pineInput.value
    let gap = document.createElement("br")
    selprice.appendChild(gap)

    tot.push((fruits.Pineapple[1] * pineInput.value))
    let sum = tot.reduce(add)
    function add(total, value)
    {
        return total+value
    }
    totprice.innerHTML = sum

}

function displayapple()
{
    if (appleInput.value <= 0)
    {
        selitems.innerHTML.remove()
    }
    selitems.innerHTML += fruits.Apple[0] + ": " + appleInput.value +" Kg" + "<br>"
    selprice.innerHTML +=`Rs. `+ fruits.Apple[1] * appleInput.value
    let gap = document.createElement("br")
    selprice.appendChild(gap)

    tot.push((fruits.Apple[1] * appleInput.value))
    let sum = tot.reduce(add)
    function add(total, value)
    {
        return total+value
    }
    totprice.innerHTML = sum

}
function displayOnion()
{
    if (onionInput.value <= 0)
    {
        selitems.innerHTML.remove()
    }
    selitems.innerHTML += vegetables.Onion[0] + ": " + onionInput.value +" Kg" + "<br>"
    selprice.innerHTML += `Rs. `+ vegetables.Onion[1] * onionInput.value
    let gap = document.createElement("br")
    selprice.appendChild(gap)

    tot.push((vegetables.Onion[1] * onionInput.value))
    let sum = tot.reduce(add)
    function add(total, value)
    {
        return total+value
    }
    totprice.innerHTML = sum

}
function displaytomato()
{
    if (tomatoInput.value <= 0)
    {
        selitems.innerHTML.remove()
    }
    selitems.innerHTML += vegetables.Tomato[0] + ": " + tomatoInput.value +" Kg" + "<br>"
    selprice.innerHTML +=`Rs. `+ vegetables.Tomato[1] * tomatoInput.value
    let gap = document.createElement("br")
    selprice.appendChild(gap)

    tot.push((vegetables.Tomato[1] * tomatoInput.value))
    let sum = tot.reduce(add)
    function add(total, value)
    {
        return total+value
    }
    totprice.innerHTML = sum

}
function displaybrinjal()
{
    if (brinjalInput.value <= 0)
    {
        selitems.innerHTML.remove()
    }
    selitems.innerHTML += vegetables.Brinjal[0] + ": " + brinjalInput.value +" Kg" + "<br>"
    selprice.innerHTML += `Rs. ` +  vegetables.Brinjal[1] * brinjalInput.value
    let gap = document.createElement("br")
    selprice.appendChild(gap)

    tot.push((vegetables.Brinjal[1] * brinjalInput.value))
    let sum = tot.reduce(add)
    function add(total, value)
    {
        return total+value
    }
    totprice.innerHTML = sum

}

function displaycarrot()
{
    if (carrotInput.value <= 0)
    {
        selitems.innerHTML.remove()
    }
    selitems.innerHTML += vegetables.Carrot[0] + ": " + carrotInput.value +" Kg" + "<br>"
    selprice.innerHTML += `Rs. ` +  vegetables.Carrot[1] * carrotInput.value
    let gap = document.createElement("br")
    selprice.appendChild(gap)

    tot.push((vegetables.Carrot[1] * carrotInput.value))
    let sum = tot.reduce(add)
    function add(total, value)
    {
        return total+value
    }
    totprice.innerHTML = sum

}
function displaysun()
{
    if (sunInput.value <= 0)
    {
        selitems.innerHTML.remove()
    }
    selitems.innerHTML += Pantry.Sunflower[0] + ": " + sunInput.value +" L" + "<br>"
    selprice.innerHTML += `Rs. ` +  Pantry.Sunflower[1] * sunInput.value
    let gap = document.createElement("br")
    selprice.appendChild(gap)

    tot.push((Pantry.Sunflower[1] * sunInput.value))
    let sum = tot.reduce(add)
    function add(total, value)
    {
        return total+value
    }
    totprice.innerHTML = sum

}
function displaycoco()
{
    if (cocoInput.value <= 0)
    {
        selitems.innerHTML.remove()
    }
    selitems.innerHTML += Pantry.Coconut[0] + ": " + cocoInput.value +" L" + "<br>"
    selprice.innerHTML += `Rs. ` +  Pantry.Coconut[1] * cocoInput.value
    let gap = document.createElement("br")
    selprice.appendChild(gap)

    tot.push((Pantry.Coconut[1] * cocoInput.value))
    let sum = tot.reduce(add)
    function add(total, value)
    {
        return total+value
    }
    totprice.innerHTML = sum

}function displayrice()
{
    if (riceInput.value <= 0)
    {
        selitems.innerHTML.remove()
    }
    selitems.innerHTML += Pantry.Rice[0] + ": " +riceInput.value +" L" + "<br>"
    selprice.innerHTML += `Rs. ` +  Pantry.Rice[1] * riceInput.value
    let gap = document.createElement("br")
    selprice.appendChild(gap)

    tot.push((Pantry.Rice[1] * riceInput.value))
    let sum = tot.reduce(add)
    function add(total, value)
    {
        return total+value
    }
    totprice.innerHTML = sum

}function displaymaida()
{
    if (maidaInput.value <= 0)
    {
        selitems.innerHTML.remove()
    }
    selitems.innerHTML += Pantry.mflour[0] + ": " + maidaInput.value +" L" + "<br>"
    selprice.innerHTML += `Rs. ` +  Pantry.mflour[1] * maidaInput.value
    let gap = document.createElement("br")
    selprice.appendChild(gap)

    tot.push((Pantry.mflour[1] * maidaInput.value))
    let sum = tot.reduce(add)
    function add(total, value)
    {
        return total+value
    }
    totprice.innerHTML = sum

}
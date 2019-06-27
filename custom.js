

//Get title
let newName = window.prompt("Type in desired title!");
//Get ourPrice
let ourPrice = window.prompt("Type in our price!");
//Construct Modify()
function Modify(e){
    if(e.select != null){
        e.mod();    
    } else {
        return;
    }
};


const elObjects = [
    //Define PRICE
     {
        select: document.getElementById("summary-prices"),
        mod: function(){
            document.getElementById("summary-prices").setAttribute('style', 'font-size: 50px; margin-bottom: 10px;');
        }
    },
    //Define NAME
    {
        select: document.getElementById("product-name"),
        mod: function(){
            if(newName.trim() === ''){
                document.getElementById("product-name").setAttribute('style', 'font-size: 40px; margin-bottom: 10px; line-height: 1;');
            } else {
                document.getElementById("product-name").setAttribute('style', 'font-size: 40px; margin-bottom: 10px; line-height: 1;');
                document.getElementById("product-name").innerHTML = newName;
            }
        }
    },
    //Define ourLabel
    {
        select: document.getElementById("summary-prices"),
        mod: function(){
            let ourLabelElement = document.createElement('div');
            ourLabelElement.innerHTML = `
            <div style="padding-bottom: 20px; margin-bottom: 5px;">
                <img src=${chrome.extension.getURL('PriceLabel.jpg')} alt="United Textiles Price" style="max-width: 100%">
                <h1 style="font-size: 80px; margin-bottom: 30px; text-align: center; color: red; line-height: 1;">${ourPrice}</h1>
                <br>
                <h1 style="font-size: 40px; text-align: center; font-style: italic">50% Off Rug Pad w/ Purchase</h1>
            </div>
            `;
            ourLabelElement.setAttribute('style', 'margin-top: 20px;')
            document.getElementById("summary-prices").appendChild(ourLabelElement);
        }
    },
    //Define shopSecondary to remove unneccessary details on page
    {
        select: document.getElementsByClassName("shop__secondary"),
        mod: function(){
            for(var i = 0; i<document.getElementsByClassName("shop__secondary").length; i++){
                document.getElementsByClassName("shop__secondary")[i].parentNode.removeChild(document.getElementsByClassName("shop__secondary")[i]);
            };
        }
    },
    //Define description truncated
    {
        select: document.getElementById("product-description-truncated"),
        mod: function(){
            document.getElementById("product-description-truncated").setAttribute('style', 'display: none;');
        }
    },
    //Define full-description
    {
        select: document.getElementById("product-description-full"),
        mod: function(){
            document.getElementById("product-description-full").setAttribute('style', 'display: block; font-size: 17px;');
        }
    },
    //Define variant drop-down
    {
        select: document.getElementById("variant-drop-down"),
        mod: function(){
            document.getElementById("variant-drop-down").setAttribute('style', 'display: none;');
        }
    },
    //Define prodbar
    {
        select: document.getElementById("prodbar"),
        mod: function(){
            document.getElementById("prodbar").setAttribute('style', 'display: none;');
        }
    },
    //Remove Ratings
    {
        select: document.getElementById("product-rating-reviews"),
        mod: function(){
            document.getElementById("product-rating-reviews").setAttribute('style', 'display: none;');
        }
    }
];

elObjects.forEach(obj => Modify(obj));



var totals = document.getElementsByClassName('os-total-col');



function removeRow(ourPrice, price, total){
    const min = ((parseFloat(ourPrice.replace(/[$,]/g , '')).toFixed(0)*2)-15);
    const numPrice = parseFloat(price.replace(/[$, ]/g , '')).toFixed(0);
    if(min > numPrice){
        total.parentNode.remove();
    } else{
        console.log('removeRow(); didnt work' + total.innerHTML + `min: ${min} numPrice: ${numPrice}`);
    }
};

Array.from(totals).forEach(total => {
    let sellerTotal = total.innerHTML;
    removeRow(ourPrice, sellerTotal, total);
    total.style.fontSize = '27px';
})

const newTotals = document.getElementsByClassName('os-total-col');
let newPrice = Math.trunc(parseFloat(newTotals[1].innerText.replace(/[$, ]/g, ''))).toString();

const priceStringCreator = string => {
    if(string.length < 4){
        return '$'.concat(string);
    } else {
        return '$'.concat([string.slice(0, 1), string.slice(1)].join());
    }
}

document.getElementById("summary-prices").childNodes[0].childNodes[0].innerText = priceStringCreator(newPrice);








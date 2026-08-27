

function toggleMenu1(){

    const menu1 = document.getElementById("mobileMenu");
    const icon1 = document.getElementById("hamburgerIcon1");

    menu1.classList.toggle("open");

    if(menu1.classList.contains("open")){

        icon1.classList.remove("fa-bars");
        icon1.classList.add("fa-xmark");

    } else {

        icon1.classList.remove("fa-xmark");
        icon1.classList.add("fa-bars");

    }

}

function toggleMenu(){

    const menu = document.getElementById("floatMenu");
    const icon= document.getElementById("hamburgerIcon");

    menu.classList.toggle("open");

    if(menu.classList.contains("open")){

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

}

function toggleMenu2(){

    const menu2 = document.getElementById("floatMenu1");
    const icon2 = document.getElementById("hamburgerIcon2");

    menu2.classList.toggle("open");

    if(menu2.classList.contains("open")){

        icon2.classList.remove("fa-bars");
        icon2.classList.add("fa-xmark");

    } else {

        icon2.classList.remove("fa-xmark");
        icon2.classList.add("fa-bars");

    }

}

const floatMenu1 = document.getElementById("floatMenu1");
const hamburger1 = document.getElementById("hamburger1");

window.addEventListener("scroll", () => {
    if(window.scrollY > 50){
        floatMenu1.classList.add("show");
    }else{
        floatMenu1.classList.remove("show");
    }
});

const dots = document.querySelectorAll(".dot");
const cards = document.querySelectorAll(".info-card");

if (dots.length && cards.length) {

    dots.forEach(dot => {

        dot.addEventListener("click", () => {

            dots.forEach(item => item.classList.remove("on"));
            dot.classList.add("on");

            cards.forEach(card => card.classList.remove("on"));

            const target = dot.dataset.card;
            const targetEl = document.getElementById(target);

            if (targetEl) {
                targetEl.classList.add("on");
            }
        });

    });
}


const coffees = [

{
    country: "COLOMBIA",
    subtitle: "SINGLE ORIGIN",

    pack: "img/coffee_pack_4.png",

    info: {
        taste: "A sophisticated and comforting cup that captures the essence of Colombian coffee. This lot leads with a bright, zesty Red Berry acidity, which transitions into the deep Baker's Chocolate comforting note.",
        history: "Finca Palmichal is high on the western side of the Central Andes mountain range, near the municipality of Genova, in the department of Quindío. Quindío enjoys two rainy seasons — one from September to November and another from April to June, which means two flowering periods and therefore two harvests. The latter is considered the mitaca, but production here is evenly split between the seasons and coffee is picked all year long.",
        deets: "Silky Body <br> Region: La Coqueta, Genova, Quindio <br> Milling Process: Washed and Dried <br> Varieties: Castillo <br> Acidity: Bright and Winey"
    },

    map: "colombia"
},

{
    country: "BRAZIL",
    subtitle: "SINGLE ORIGIN",

    pack: "img/coffee_pack_6.png",

    info: {
        taste: "An espresso from Lambari delivers a rich and indulgent experience, with deep notes of Molasses and Dried Fruits, wrapped in a velvety smooth body that lingers on the palatel.",
        history: "Smallholders farmers are individuals or families who manage small plots of land, typically less than a few hectares, using mostly family labor to grow crops or raise livestock. <br> In Lambari, Brazil, these farmers play a crucial role in the local agricultural economy, often cultivating coffee and other crops using sustainable practices passed down through generations. They focus on quality over quantity, contributing to the rich diversity of Brazilian agriculture, and often participate in cooperative systems to improve their market access and economic resilience.",
        deets: "Velvety Body <br> Region: Circuito das Águas, Brazil <br> Milling Process: Mixed Processing <br> Varieties: Lambari "
    },

    map: "brazil"
},

{
    country: "ETHIOPIA",
    subtitle: "SINGLE ORIGIN",

    pack: "img/coffee_pack_5.png",

    info: {
        taste: "This features one of our all-time favourite coffees, with a long-lasting aftertaste and a full body. Bringing up flavors Strawberry, with a bright Meyer Lemon acidity and a soothing Cacao final taste.",
        history: "In 2006, brothers Asefa and Mulugeta Dukamo founded Daye Bensa, a coffee grower and exporter in Ethiopia. Daye Bensa exports coffee from its farm, in the Shantawene Village, as well as from \"out growers\" (or smallholders) in three villages: Shantawene, Karamo and Bombe. <br> Ethiopia Shantawene is named after the village where the majority of the people who work on the farm, many of them women, are from. <br> Shantawene has won 7th place (from more than 1,400 entries) in the 2020 Cup of Excellence in Ethiopia!",
        deets: "Silky Body <br> Region: Sidamo, Ethiopia <br> Milling Process: Fully Washed <br> Varieties: Heirloom Ethiopia"
    },

    map: "ethiopia"
},

{
    country: "KENYA",
    subtitle: "SINGLE ORIGIN",

    pack: "img/coffee_pack_7.png",

    info: {
        taste: "A vibrant and complex cup with a velvety body and a bright citric acidity. Sweet notes of Caramel balance beautifully with the rich depth of Dark Chocolate, creating a clean and memorable finish.",
        history: "Kilele is a carefully selected coffee from Kenya, a country renowned for producing some of the world's most distinctive and sought-after coffees. Grown at high altitudes in nutrient-rich volcanic soils, Kenyan coffees benefit from ideal growing conditions that contribute to their remarkable clarity and brightness. <br> The name \"Kilele\" means \"peak\" or \"summit\" in Swahili, reflecting the exceptional quality standards and the elevated regions where these coffees are cultivated. <br> Through meticulous harvesting and processing methods, Kilele showcases the bold character and refined sweetness that have made Kenyan coffee famous among specialty coffee enthusiasts worldwide.",
        deets: "Velvety Body <br> Region: Kenya <br> Milling Process: Washed <br> Varieties: SL28, SL34"
    },

    map: "kenya"
}

];

const country = document.getElementById("country");
const packImg = document.getElementById("pack-img");
const tasteCard = document.getElementById("taste-card");
const historyCard = document.getElementById("history-card");
const deetsCard = document.getElementById("deets-card");
const worldMap = document.getElementById("world-map");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let currentCoffee = 0;

let coffeeSystemReady =
    country &&
    packImg &&
    tasteCard &&
    historyCard &&
    deetsCard;

let moveMap = null;

if (worldMap) {

    const locations = {
        brazil: { x: 430, y: 25, scale: 2.0 },
        colombia: { x: 730, y: 200, scale: 2.1 },
        ethiopia: { x: -510, y: 250, scale: 2 },
        kenya: { x: -510, y: 105, scale: 2 }
    };

    moveMap = function(country) {
        const loc = locations[country];
        if (!loc) return;

        worldMap.style.transform =
            `translate(${loc.x}px, ${loc.y}px) scale(${loc.scale})`;
    };
}

if (coffeeSystemReady) {

    function updateCoffee() {
        const coffee = coffees[currentCoffee];

        country.textContent = coffee.country;
        packImg.src = coffee.pack;

        tasteCard.innerHTML = coffee.info.taste;
        historyCard.innerHTML = coffee.info.history;
        deetsCard.innerHTML = coffee.info.deets;

        if (worldMap) {
            moveMap(coffee.map);
        }

        document.querySelectorAll(".country-highlight")
            .forEach(item => item.classList.remove("active"));

        const highlight = document.getElementById(coffee.map + "-highlight");
        if (highlight) highlight.classList.add("active");
    }

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener("click", () => {
            currentCoffee = (currentCoffee + 1) % coffees.length;
            updateCoffee();
        });

        prevBtn.addEventListener("click", () => {
            currentCoffee = (currentCoffee - 1 + coffees.length) % coffees.length;
            updateCoffee();
        });
    }

    updateCoffee();
}
   



const blends = [

{
    title: "GOLDEN HOUR",
    pack: "img/coffee_pack_1.png",

    info:{
        taste: "Golden Hour opens with a gentle honeyed sweetness - bright but never sharp. As it cools, notes of sun-warmed Stone Fruit unfold. The finish is soft Milk Chocolate, smooth and balanced.",
        history: "Named after the most cinematic time of day that provides the most beautiful, soft, warm, and golden lighting. This blend is meant to evoke the care-free, timeless nostalgia that is summertime in Southern California. Brew up a cup for that early morning sunrise sesh, or finish up your day chasing that light as it disappears beyond the horizon. <br> <br>Golden Hour has and always will be Guatemala, Ethiopia, and Colombia. An all-star blend of origins that we have direct relationships with. It tastes like sweet honey, bright stone fruit, and silky milk chocolate. Creating a bright, round, and delicious cup - perfect for the epic adventures or quiet moments at home.",
        deets: "Silky Body <br> Roast Level: Medium <br> Acidity: Bright, but balanced <br> Origin: Direct Relationship"
    }
},

{
    title: "NIGHT OWL",
    pack: "img/coffee_pack_2.png",

    info:{
    taste: "Night Owl delivers a rich and comforting cup, led by roasted Hazelnut sweetness and deep Chocolate notes. A subtle Red Berry brightness lingers beneath the surface, creating a smooth, full-bodied blend that shines during late nights and slow evenings.",
    history: "Designed for the dreamers, creators, and anyone whose best ideas arrive after dark, Night Owl is a blend crafted for the quiet hours. Whether you're working late, reading one more chapter, or sharing conversations that stretch past midnight, this coffee provides a dependable companion. <br><br> Carefully selected coffees come together to create a profile that is bold yet approachable, balancing nutty sweetness, berry complexity, and chocolate richness. The result is a comforting cup that feels familiar from the first sip to the last.",
    deets: "Full Body <br> Roast Level: Medium-Dark <br> Acidity: Low & Smooth <br> Tasting Notes: Hazelnut, Red Berry & Chocolate"
}

},

{
    title: "EARLY BIRD",
    pack: "img/coffee_pack_3.png",

    info:{
        taste: "Early Bird greets the day with a bright and uplifting character. Sweet Hazelnut notes provide balance while lively Red Berry flavors add vibrancy. A smooth Chocolate finish ties everything together, creating an energetic yet approachable cup for the morning hours.",
        history: "Created for sunrise seekers and first-light adventurers, Early Bird celebrates the optimism of a new day. Inspired by fresh starts, morning rituals, and the quiet excitement of what lies ahead, this blend is designed to accompany those first moments before the world fully wakes up. <br><br> Combining coffees chosen for clarity, sweetness, and balance, Early Bird offers a cheerful and dependable brew. It's the kind of coffee that makes early mornings feel less like a challenge and more like an opportunity.",
        deets: "Balanced Body <br> Roast Level: Medium <br> Acidity: Bright & Crisp <br> Tasting Notes: Hazelnut, Red Berry & Chocolate"
    }
}

];

const blendSection = document.querySelector(".blend-gallery");

const dots1 = document.querySelectorAll(".dot");
const cards1 = document.querySelectorAll(".info-card-bl");

if (dots1.length && cards1.length) {

    dots1.forEach(dot => {

        dot.addEventListener("click", () => {

            dots1.forEach(d => d.classList.remove("on"));
            dot.classList.add("on");

            cards1.forEach(card => card.classList.remove("on"));

            const target = document.getElementById(dot.dataset.card);
            if (target) target.classList.add("on");

        });

    });
}

const titleBl = document.getElementById("bl-country");
const packBl = document.getElementById("pack-img-bl");
const tasteBl = document.getElementById("taste-card-bl");
const historyBl = document.getElementById("history-card-bl");
const deetsBl = document.getElementById("deets-card-bl");
const variants = document.querySelectorAll(".variant");

if (titleBl && packBl && tasteBl && historyBl && deetsBl && variants.length) {

    function updateBlend(index) {
        const blend = blends[index];

        titleBl.textContent = blend.title;
        packBl.src = blend.pack;

        tasteBl.innerHTML = blend.info.taste;
        historyBl.innerHTML = blend.info.history;
        deetsBl.innerHTML = blend.info.deets;
    }

    variants.forEach((variant, index) => {
        variant.addEventListener("click", () => {

            updateBlend(index);

            variants.forEach(v => v.classList.remove("active"));
            variant.classList.add("active");

        });
    });

    updateBlend(0);
}

const switchButton = document.querySelector(".opt");
const switchImage = document.querySelector(".opt-mug");

const titleMerch = document.getElementById("merch-name");
const titleType = document.getElementById("print-type");
const model = document.getElementById("merch-item");

const merchVariants = document.querySelectorAll(".variant-merch");

const prints = [

{
    title: "CERAMIC MUG",
    type: "BIG TYPE PRINT",

    colors: [
        "img/mug1.png",
        "img/mug_drip_2.png",
        "img/mug_drip_3.png"
    ],

    switchIcon: "img/mug2.png"
},

{
    title: "CERAMIC MUG",
    type: "WAVY DRIP PRINT",

    colors: [
        "img/mug2.png",
        "img/beige_mug.png",
        "img/orange_mug.png"
    ],

    switchIcon: "img/mug1.png"
}

];

let currentPrint = 0;
let currentColor = 0;


function renderProduct() {

    const print = prints[currentPrint];

   if (titleMerch) titleMerch.textContent = print.title;
    if (titleType) titleType.textContent = print.type;

    if (model) model.src = print.colors[currentColor];


   if (switchImage) switchImage.src = print.switchIcon;


    merchVariants.forEach((variant, index) => {

        const img = variant.querySelector("img");

        if (img && print.colors[index]) {
            img.src = print.colors[index];
        }

        variant.classList.toggle(
            "active",
            index === currentColor
        );
    });

}

if (switchButton) {

    switchButton.addEventListener("click", () => {

        currentPrint++;

        if (currentPrint >= prints.length) {
            currentPrint = 0;
        }

        currentColor = 0;

        renderProduct();

    });

}

merchVariants.forEach((variant, index) => {
    variant.addEventListener("click", () => {
        currentColor = index;
        renderProduct();
    });
});
renderProduct();

//hoodie


const switchButtonH = document.querySelector(".optH");
const switchImageH = document.querySelector(".opt-hoodie");

const titleMerchH = document.getElementById("merch-name-1");
const titleTypeH = document.getElementById("print-type-1");
const modelH = document.getElementById("merch-item-hoodie");

const merchVariantsH = document.querySelectorAll(".variant-merch-1");

const printsH = [

{
    title: "BIG PRINT HOODIE",
    type: "LOGO INVERT",

    colors: [
        "img/Hoodie1.png",
        "img/Hoodie2.png",
        "img/Hoodie3.png",
        "img/Hoodie4.png"
    ],

    switchIcon: "img/Hoodie1.2.png"
},

{
    title: "BIG PRINT HOODIE",
    type: "OVERLAPING TYPE",

    colors: [
         "img/Hoodie1.2.png",
        "img/Hoodie1.2.2.png",
        "img/Hoodie1.2.3.png",
        "img/Hoodie1.2.4.png"
    ],

    switchIcon: "img/Hoodie1.png"
}

];

let currentPrintH = 0;
let currentColorH = 0;

function renderProductH() {

    const printH = printsH[currentPrintH];

    if (titleMerchH) titleMerchH.textContent = printH.title;
    if (titleTypeH) titleTypeH.textContent = printH.type;

    if (modelH) modelH.src = printH.colors[currentColorH];

    if (switchImageH) switchImageH.src = printH.switchIcon;

    merchVariantsH.forEach((variant, index) => {

        const img = variant.querySelector("img");

        if (img && printH.colors[index]) {
            img.src = printH.colors[index];
        }

        variant.classList.toggle(
            "active",
            index === currentColorH
        );
    });
}

if (switchButtonH) {

    switchButtonH.addEventListener("click", () => {

        currentPrintH++;

        if (currentPrintH >= printsH.length) {
            currentPrintH = 0;
        }

        currentColorH = 0;

        renderProductH();
    });
}

merchVariantsH.forEach((variant, index) => {
    variant.addEventListener("click", () => {
        currentColorH = index;
        renderProductH();
    });
});
renderProductH();


//tshirt


const switchButtonT = document.querySelector(".optT");
const switchImageT = document.querySelector(".opt-tee");

const titleMerchT = document.getElementById("merch-name-2");
const titleTypeT = document.getElementById("print-type-2");
const modelT = document.getElementById("merch-item-tee");

const merchVariantsT = document.querySelectorAll(".variant-merch-2");

const printsT = [

{
    title: "DRIP TYPE TEE",
    type: "CHEST PRINT",

    colors: [
        "img/tshirt_drip1.png",
        "img/tshirt_drip2.png",
        "img/tshirt_drip3.png",
        "img/tshirt_drip4.png"
    ],

    switchIconT: "img/tshirt_drip1.2.png"
},

{
   title: "DRIP TYPE TEE",
    type: "FULL FRONT PRINT",

    colors: [
        "img/tshirt_drip1.2.png",
        "img/tshirt_drip1.2.2.png",
        "img/tshirt_drip1.2.3.png",
        "img/tshirt_drip1.2.4.png"
    ],

    switchIconT: "img/tshirt_drip1.png"
}

];

let currentPrintT = 0;
let currentColorT = 0;

function renderProductT() {

    const printT = printsT[currentPrintT];

    if (titleMerchT) titleMerchT.textContent = printT.title;
    if (titleTypeT) titleTypeT.textContent = printT.type;

    if (modelT) modelT.src = printT.colors[currentColorT];

    if (switchImageT) switchImageT.src = printT.switchIconT;

    merchVariantsT.forEach((variant, index) => {

        const img = variant.querySelector("img");

        if (img && printT.colors[index]) {
            img.src = printT.colors[index];
        }

        variant.classList.toggle(
            "active",
            index === currentColorT
        );
    });
}

if (switchButtonT) {

    switchButtonT.addEventListener("click", () => {

        currentPrintT++;

        if (currentPrintT >= printsT.length) {
            currentPrintT = 0;
        }

        currentColorT = 0;

        renderProductT();
    });
}

merchVariantsT.forEach((variant, index) => {
    variant.addEventListener("click", () => {
        currentColorT = index;
        renderProductT();
    });
});
renderProductT();


//tote


const switchButtonTt = document.querySelector(".optTt");
const switchImageTt = document.querySelector(".opt-tote");

const titleMerchTt = document.getElementById("merch-name-3");
const titleTypeTt = document.getElementById("print-type-3");
const modelTt = document.getElementById("merch-item-tote");

const merchVariantsTt = document.querySelectorAll(".variant-merch-3");

const printsTt = [

{
    title: "CALICO TOTE BAG",
    type: "BIG LOGO PRINT",

    colors: [
        "img/tote_1.png",
        "img/tote_2.png",
        "img/tote_3.png"
    ],

    switchIconTt: "img/tote_2.1.png"
},

{
   title: "DRIP TYPE TEE",
    type: "FULL FRONT PRINT",

    colors: [
        "img/tote_2.1.png",
        "img/tote_2.2.png"
    ],

    switchIconTt: "img/tote_1.png"
}

];

let currentPrintTt = 0;
let currentColorTt = 0;

function renderProductTt() {

    const printTt = printsTt[currentPrintTt];

    if (titleMerchTt) titleMerchTt.textContent = printTt.title;
    if (titleTypeTt) titleTypeTt.textContent = printTt.type;

    if (modelTt) modelTt.src = printTt.colors[currentColorTt];

    if (switchImageTt) switchImageTt.src = printTt.switchIconTt;

    merchVariantsTt.forEach((variant, index) => {

    const img = variant.querySelector("img");

    if (printTt.colors[index]) {

        variant.style.display = "block";

        if (img) {
            img.src = printTt.colors[index];
        }

    } else {

        variant.style.display = "none";

    }

    variant.classList.toggle(
        "active",
        index === currentColorTt
    );
});

}

if (switchButtonTt) {

    switchButtonTt.addEventListener("click", () => {

        currentPrintTt++;

        if (currentPrintTt >= printsTt.length) {
            currentPrintTt = 0;
        }

        currentColorTt = 0;

        renderProductTt();
    });
}

merchVariantsTt.forEach((variant, index) => {
    variant.addEventListener("click", () => {
        currentColorTt = index;
        renderProductTt();
    });
});
renderProductTt();

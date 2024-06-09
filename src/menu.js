export default function menuContent(img1, img2, img3, img4){
    console.log("this is the function that builds the menu page");

    const divContent = document.getElementById("content");
    const title = createTitleNode();
    divContent.append(title);

    const contents = createContentNodes(img1, img2, img3, img4);
    for (const key in contents) {
        // console.log(contents[key]);
        if (Object.hasOwnProperty.call(contents, key)) {
            divContent.append(contents[key]);            
        }
    }

}

function createTitleNode(){
    let title = document.createElement('h1');
    title.id = "menu-title";
    title.textContent = "Menu Items";

    return title;
}

function createContentNodes(img1, img2, img3, img4) {
    const menu1 = document.createElement("div");
    menu1.id = "menu-1";
    menu1.classList = "body-box";
    const menu2 = document.createElement("div");
    menu2.id = "menu-2";
    menu2.classList = "body-box";

    menu1.append(createItemNode(1, img1, "tiramisu", "Tasty Tiramisu", 4))
    menu1.append(createItemNode(2, img2, "swiss rolls", "Scrumtious Swiss Rolls", 3));
    menu2.append(createItemNode(3, img3, "lava cake", "Luxurious Lava Cake", 7));
    menu2.append(createItemNode(4, img4, "pumpkin pie", "Perfect Pumpkin Pie", 5));


    return {menu1, menu2};
}

function createItemNode(itemNumber, imgSrc, imgAlt, itemText, price){
    let item = document.createElement("div");
    item.classList = "menu-item";
    item.id = `item-${itemNumber}`;

    let imageDiv = document.createElement('div');
    imageDiv.id = `image-${itemNumber}`;
    imageDiv.classList = 'menu-image';
    const image = document.createElement('img');
    image.src = imgSrc;
    image.alt = imgAlt;
    imageDiv.append(image)

    let menuText = document.createElement("div");
    menuText.classList = "menu-text";
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let div1 = document.createElement('div');
    div1.textContent = itemText;
    let div2 = document.createElement('div');
    let span = document.createElement('span');
    span.textContent = `$${price}`;
    div2.append(span);

    menuText.append(p1);
    menuText.append(div1);
    menuText.append(div2);
    menuText.append(p2);
    item.append(imageDiv);
    item.append(menuText);

    return(item)

}
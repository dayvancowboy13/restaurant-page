export default function contactContent(imgXur){
    console.log("this is the function to load the contact page");

    const divContent = document.getElementById("content");
    const title = createTitleNode();
    divContent.append(title);

    const contents = createContentNodes(imgXur);

    for (const key in contents) {
        if (Object.hasOwnProperty.call(contents, key)) {
            divContent.append(contents[key]);            
        }
    }
}

function createTitleNode(){
    let title = document.createElement('h1');
    title.id = "contact-title";
    title.textContent = "Contact";

    return title;
}

function createContentNodes(imgXur){
    const bodyLeft = document.createElement('div');
    bodyLeft.id = "contact-left";
    bodyLeft.classList = "body-box";
    const reachXur = document.createElement('div');
    reachXur.id = "reach-xur";
    const h3Left = document.createElement('h3');
    h3Left.textContent = "How to reach Xur";
    const pLeft = document.createElement('p');
    pLeft.textContent = "Xur is a tricksy and unpredictable fellow. He just can't stay in one place for long. The best way to reach Xur is just to keep your eye out for him ;)"
    reachXur.append(h3Left);
    reachXur.append(pLeft);
    bodyLeft.append(reachXur);

    const divImg = document.createElement('div');
    divImg.id = 'contact-img';
    const xurImg = document.createElement('img');
    xurImg.src = imgXur;
    xurImg.alt = "xur, agent of the nine";
    divImg.append(xurImg);
    bodyLeft.append(divImg);

    const bodyRight = document.createElement('div');
    bodyRight.id = "contact-right";
    bodyRight.classList = "body-box";
    const h3Right = document.createElement('h3');
    h3Right.textContent = "About Stock";
    const pRight = document.createElement('p');
    pRight.textContent = "Again, Xur is unpredictable. His stock may vary, but we can guarantee he will always have something listen on the menu page."

    bodyRight.append(h3Right);
    bodyRight.append(pRight);

    return {bodyLeft, bodyRight};
}
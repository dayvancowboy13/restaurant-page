export default function homeContent (){
    const divContent = document.getElementById("content");
    // console.log(divContent.childElementCount);

    const title = createTitleNode();

    const contents = createContentNodes();
    // console.log(contents.intro);

    divContent.append(title);
    for (const key in contents) {
        // console.log(contents[key]);
        if (Object.hasOwnProperty.call(contents, key)) {
            divContent.append(contents[key]);            
        }
    }
    // divContent.append(contents.intro)
}

function createTitleNode(){
    let title = document.createElement('h1');
    title.id = "store-name";
    title.textContent = "Xur's Wandering Frozen Delights";

    return title;
}

function createContentNodes(){
    let intro = document.createElement('div');
    let hours = document.createElement('div');
    let location = document.createElement('div');

    intro.id = "intro";
    hours.id = "hours";
    location.id = "location";

    intro.classList = "body-box";
    hours.classList = "body-box";
    location.classList = "body-box";

    intro = populateIntro(intro);
    hours = populateHours(hours);
    location = populateLocation(location);

    return {intro, hours, location};
}

function populateIntro (intro){
    let head = document.createElement('h3');
    head.textContent = "Intro";
    let para = document.createElement('p');
    para.textContent = `Do you long for some surprise and excitement in your life? Look no further!
    With Xur's Wandering Frozen Delights, you never know where we'll show up next!
    Maybe while you're out for a Sunday drive, or taking the dog for his mid-afternoon poop-walk. BAM! Xur is there with your
    favorite frozen snack!`;

    intro.append(head)
    intro.append(para)

    return intro;
}

function populateHours(hours) {
    let head = document.createElement('h3');
    head.textContent = "Hours";
    hours.append(head)

    let ul = document.createElement('ul');
    let liSun = document.createElement('li');
    let liMon = document.createElement('li');
    let liTues = document.createElement('li');
    let liWed = document.createElement('li');
    let liThurs = document.createElement('li');
    let liFri = document.createElement('li');
    let liSat = document.createElement('li');

    liSun.textContent = "Sunday: 9am - 7pm";
    liMon.textContent = "Monday: 12pm - 6pm";
    liTues.textContent = "Tuesday: 2pm - 5pm";
    liWed.textContent = "Wednesday: 11am - 4pm";
    liThurs.textContent = "Thursday: 12pm - 6pm";
    liFri.textContent = "Friday: 9am - 6pm";
    liSat.textContent = "Saturday: 9am - 7pm";
    ul.append(liSun);
    ul.append(liMon);
    ul.append(liTues);
    ul.append(liWed);
    ul.append(liThurs);
    ul.append(liFri);
    ul.append(liSat);


    hours.append(ul);
    return hours;
}

function populateLocation (location){
    let head = document.createElement('h3');
    head.textContent = "Location";
    location.append(head)

    let para = document.createElement('p');
    para.textContent = `Where ever we so please when the moment strikes us =^)`;
    location.append(para);

    return location
}
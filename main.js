let images = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/6.jpg', 'img/7.jpg', 'img/8.jpg', 'img/9.jpg', 'img/10.jpg', 'img/11.jpg', 'img/12.jpg', 'img/13.jpg', 'img/14.jpg', 'img/15.jpg', 'img/16.jpg', 'img/17.jpg', 'img/18.jpg', 'img/19.jpg', 'img/20.jpg']

function Include() {
  let imageContainer = document.getElementById('imageContainer');
  let imageFullscreen = document.getElementById('fullscreen');
  imageFullscreen.innerHTML = ``;
  imageContainer.innerHTML = ``;
  for (let i = 0; i < images.length; i++) {
    imageContainer.innerHTML += /*html*/ `
             <img onclick="imageOpen(${i})" class="imagebox" src="${images[i]}">
        `;
  }
}

function dateTime() {
  const time = new Date().getHours();
  let greeting;
  if (time < 6) {
    greeting = "HUMANS NEED TO SLEEP!";
  } else if (time < 10) {
    greeting = "I WISH YOU A GOOD MORNING!";
  } else if (time < 18) {
    greeting = "I WISH YOU A GOOD DAY!";
  } else {
    greeting = "I WISH YOU A GOOD MORNING!";
  }
  document.getElementById("greetstime").innerHTML = greeting;
}

function imageOpen(i) {
  let imageFullscreen = document.getElementById('fullscreen');
  let imageContainer = document.getElementById('imageContainer');
  imageContainer.innerHTML = ``;
  imageFullscreen.innerHTML = ``;
  imageFullscreen.innerHTML = /*html*/`
    <div class="imageFullscreen" id="imageFullscreen">
        <button class="imageButton returnButton imageIcon" onclick="Include()"><img src="img/arrowreturn.png"></button>
        <div class="iconPosition">
            <button class="imageIcon" onclick="imageDelete(${i})"><img class="trashButton" src="img/trash.png"></button>
        </div>  
        <button class="imageButton leftButton imageIcon" onclick="imagePrevious(${i})"><img src="img/arrowleft.png"></button>
        <button class="imageButton rightButton imageIcon" onclick="imageNext(${i})"><img src="img/arrowright.png"></button>
        <img src="${images[i]}" id="MakeFull" onclick="makeFullScreen(${i})" class="imageFullscreenShow">
    </div>
    `;
}

function makeFullScreen() {
  var element = document.getElementById("MakeFull");
  if (!document.Fullscreen && !document.webkitFullScreen && !document.msRequestFullscreen) {
    if (element.requestFullScreen) {
      element.requestFullScreen();
    } else if (element.webkitRequestFullScreen) {
      element.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  }
}

function imageNext(i) {
  if (i < images.length - 1) {
    imageOpen(i + 1);
  } else {
    imageOpen(0);
  }
}

function imagePrevious(i) {
  if (i > 0) {
    imageOpen(i - 1);
  } else {
    imageOpen(images.length - 1);
  }
}

function imageDelete(i) {
  images.splice(i, 1);
  if (i < images.length) {
    imageNext();
  } else if (i > 0) {
    imagePrevious();
  } else {
    Include();
  }
}














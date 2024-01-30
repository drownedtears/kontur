addButtonsHoverEvent();
addLevelsHoverEvent();

addButtonsClickEvent();
addLevelsClickEvent();

function addButtonsHoverEvent() {
  let buttons = document.getElementsByClassName("button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("mouseover", (ev) => {
      let button = ev.target;
      if (button.src.includes("-off")) {
        button.src = "../../img/trainer/button-off-h.png";
      }
      if (button.src.includes("-on")) {
        button.src = "../../img/trainer/button-on-h.png";
      }
    });
    buttons[i].addEventListener("mouseout", (ev) => {
      let button = ev.target;
      if (button.src.includes("-off")) {
        button.src = "../../img/trainer/button-off.png";
      }
      if (button.src.includes("-on")) {
        button.src = "../../img/trainer/button-on.png";
      }
    });
  }
}

function addButtonsClickEvent() {
  let buttons = document.getElementsByClassName("button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (ev) => {
      let button = ev.target;
      if (button.src.includes("-off")) {
        button.src = "../../img/trainer/button-on-h.png";
      } else if (button.src.includes("-on")) {
        button.src = "../../img/trainer/button-off-h.png";
      }
    });
  }
}

function addLevelsHoverEvent() {
  let levels = document.getElementsByClassName("level");
  for (let i = 0; i < levels.length; i++) {
    levels[i].addEventListener("mouseover", (ev) => {
      let level = ev.target;
      if (level.src.includes("-down")) {
        level.src = "../../img/trainer/level-down-h.png";
      } else if (level.src.includes("-up")) {
        level.src = "../../img/trainer/level-up-h.png";
      }
    });
    levels[i].addEventListener("mouseout", (ev) => {
      let level = ev.target;
      if (level.src.includes("-down")) {
        level.src = "../../img/trainer/level-down.png";
      } else if (level.src.includes("-up")) {
        level.src = "../../img/trainer/level-up.png";
      }
    });
  }
}

function addLevelsClickEvent() {
  let levels = document.getElementsByClassName("level");
  for (let i = 0; i < levels.length; i++) {
    levels[i].addEventListener("click", (ev) => {
      let level = ev.target;
      if (level.src.includes("-up")) {
        level.src = "../../img/trainer/level-down-h.png"
      } else if (level.src.includes("-down")) {
        level.src = "../../img/trainer/level-up-h.png"
      }
    });
  }
}



const sel = (id) => {
  return document.getElementById(id);
};

const object1 = sel("object1");
const btn1 = sel("btn1");
const object2 = sel("object2");
const btn2 = sel("btn2");

const themes = ["default-theme", "light-theme", "dark-theme"];

const changeTheme = (object) => {
  let currentIndex = 0;
  for (let i = 0; i < themes.length; i++) {
    if (object.classList.contains(themes[i])) {
      currentIndex = i;
      break;
    }
  }

  object.classList.remove(...themes);
  const nextIndex = (currentIndex + 1) % themes.length;
  object.classList.add(themes[nextIndex]);

};

btn1.addEventListener("click", ()=> changeTheme(object1));
btn2.addEventListener("click",() =>  changeTheme(object2));

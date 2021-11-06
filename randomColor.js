const fav = document.querySelectorAll('#fav ul li');

(() => {
    for(let i=0; i<fav.length; i++) {
        let bgColor = `rgba( ${new Array(3).fill().map(v => Math.round(Math.random() * 255)).join(", ")},.7 )`;
        fav[i].style.backgroundColor = bgColor;
    }
})();
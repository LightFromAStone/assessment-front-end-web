document.getElementById('color').addEventListener('click', evt => {
   alert(`${evt.target.textContent} is blue`);
})
document.getElementById('place').addEventListener('click', evt => {
   alert(`${evt.target.textContent} is my home`);
})
document.getElementById('ritual').addEventListener('click', evt => {
   alert(`${evt.target.textContent} is reading before bed`);
})

//---- Additional stuff not technically part of assigment -----//

document.getElementById('animeRecommend').addEventListener('submit', evt => {
   evt.preventDefault();
   alert('Your recommendations have not been submitted because this site is fake')
})

const addShowBtn = document.getElementById('addShow');

function addNewShow() {
   let newShow = document.createElement('li');

   document.getElementById('animeList').appendChild(newShow).innerHTML = `<input type="text" placeholder="Anime title">`;
}
addShowBtn.addEventListener('click', addNewShow);
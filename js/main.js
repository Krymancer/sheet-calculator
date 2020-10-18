import races from './races.js';
import classes from './classes.js';
import Char from './Char.js';

const calcButton = document.getElementById('bt');

const charDiv = document.getElementById('char');
const charDiv2 = document.getElementById('char2');

const stats = [].slice.call(document.getElementsByClassName('stat'));
const lvl = document.getElementById('lvl');

function getStats() {
    let arr = [];
    stats.forEach(stat => {
        arr.push(parseInt(stat.value <= 1 ? 1 : stat.value));
    });

    return arr;
}


calcButton.addEventListener('click', () => {
    console.log(lvl.value,getStats());
    const c = new Char(lvl.value,getStats());
    //const c = new Char(3,[25,10,21,10,11,1,14,16]);


    charDiv.innerHTML = c.getString()[0];
    charDiv2.innerHTML = c.getString()[1];
});

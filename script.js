ReactDOM.render(<img src='https://i.postimg.cc/Btvt0vR0/cat2.png'></img> , document.getElementById('cat2'))
ReactDOM.render(<img src='https://i.postimg.cc/gLr0qM3J/cat.png'></img> , document.getElementById('cat'))


document.getElementById('cat').addEventListener('click', function(){
    document.getElementById('cat').style.display = 'none';
    document.getElementById('cat2').style.display = 'flex';
    textmain();
});
document.getElementById('cat2').addEventListener('click', function(){
    document.getElementById('cat2').style.display = 'none';
    document.getElementById('cat').style.display = 'flex';
    textmain();
    
});
    
const textmassiv = ["чо😀", "АААА😇😇😇😱", "ЧО😱", "бум😂🤣", "ьбуьуьу🤣", "5464😱😱😱", "ШТО😱", "пипяо😇", "спасяба🥰🥰", "вхуеит😱", "ам😇","ррр","бебебе🤓","ято🤓","фыр😇","фырфыр😱","ьббь🤨","уьуь😱","ухаха🧐","уха🤓","чоделать🤨","пдыщ😡","ясдох😡","ыы😡","ебануца😡","74 05 82🤨","DSGDSG🤨","КАК СПАТЬ😡","ФТОО😓","фтоо😓"]
function textmain() {
    var random = Math.floor(Math.random() * 30);
    var randomtext = Math.floor(Math.random() * 30);
    console.log(random);
    console.log(randomtext);
    document.getElementById('text').innerHTML = textmassiv[randomtext];
    if (random >= 15) {
        document.getElementById('text').style.transform = 'rotate(' + '-' + random + 'deg)';
    } else {
        document.getElementById('text').style.transform = 'rotate(' + random + 'deg)';
    }
    
}

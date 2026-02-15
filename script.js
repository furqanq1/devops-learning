let count = 0;
const countDisplay = document.getElementById('count');
const btn = document.getElementById('actionBtn');

// बटन क्लिक पर 'Action'
btn.addEventListener('click', () => {
    count++;
    countDisplay.innerText = count;
    
    // हर क्लिक पर रैंडम कलर बदलें
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    countDisplay.style.color = "#" + randomColor;
});

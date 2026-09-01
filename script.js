let count = 0;
function changeText() {
    count++;
    document.getElementById('msg').textContent = `你刚刚触发了一段 TypeScript。这是第 ${count} 次点击。`;
}

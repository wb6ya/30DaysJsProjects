const wrapper = document.querySelector('.wrapper'),
box = wrapper.querySelector('.box'),
header = wrapper.querySelector('.content h2'),
content = wrapper.querySelector('.content p')

box.addEventListener('mousedown', () => {
    box.classList.add('active');
    box.addEventListener('mousemove', onDrag);
});

box.addEventListener('mouseup', () => {
    box.classList.remove('active');
    header.textContent = 'Drag Me';
    content.textContent = 'Click and drag the handle to move this box around.';
    box.removeEventListener('mousemove', onDrag);
});

function onDrag(e) {
    header.textContent = 'Dragging...';
    let getStyle = window.getComputedStyle(box);
    let x = e.clientX - wrapper.offsetLeft - parseInt(getStyle.width) / 2;
    let y = e.clientY - wrapper.offsetTop - parseInt(getStyle.height) /
2;
    box.style.left = `${x}px`;
    box.style.top = `${y}px`;
}
const x = document.getElementById('main-video');
const y = document.getElementById('playBtn');
const z = document.getElementById('rangeArea');
const a = document.getElementById('muteBtn');
const b = document.getElementById('volumeArea');


y.addEventListener('click', function(){
if(x.click)
{
  y.play();
}
else
{
    x.paused();
    y.innerHTML = '&#9658;';
}
});

x.addEventListener('timeupdate',function()
{
const progress = (x.currentTime / x.duration) * 100;
z.value = progress;
});

z.addEventListener('input',function()
{
    const time = (z.value / 100) * x.duration;
    x.currentTime = time;
});

a.addEventListener('click',function()
{
if (x.muted)
{
    x.muted = false;
    a.innerHTML = '&#128266;';
    b.value = x.volume;
}
else
{
    x.muted = true;
    a.innerHTML = '&#128263;';
    b.value = 0;
}
});
b.addEventListener('input', function()
{
x.volume = b.value;
if(b.value > 0)
{
    x.muted = false;
    a.innerHTML = '&#128266;';
}
else{
    x.muted = true;
    a.innerHTML = '&#128266;';
}
});
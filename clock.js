(function () {
  function ColorNumber() {
    const oHoure = document.querySelector('#houre');
    const oMinute = document.querySelector('#minute');
    const oSecond = document.querySelector('#second');
    const nowTime = new Date();
    const nowHoure = nowTime.getHours();
    const nowMinute = nowTime.getMinutes();
    const nowSecond = nowTime.getSeconds();
    const houreDeg = (nowMinute / 60) * 30;
    const minuteDeg = (nowSecond / 60) * 6;

    oHoure.style.WebkitTransform = `rotate(${nowHoure * 30 + houreDeg}deg)`;
    oMinute.style.WebkitTransform = `rotate(${nowMinute * 6 + minuteDeg}deg)`;
    oSecond.style.WebkitTransform = `rotate(${nowSecond * 6}deg)`;
  }
  ColorNumber();
  setInterval(ColorNumber, 1000);
}());

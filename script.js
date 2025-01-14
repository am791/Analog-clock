let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
const realTimedata = document.querySelector('[real-time-data]');
const timeZones = moment.tz.names();

const selectElemnt = document.getElementById('time-zone-dropdown');
timeZones.forEach((zone) => {
    const option = document.createElement('option');
    option.value = zone;
    option.textContent = zone;
    selectElemnt.appendChild(option);
});

window.onload = function() {
    setTimeout(function() {
        const loader = document.getElementById("load");
        const clockContainer = document.getElementById("main");

        loader.style.display = "none";
        clockContainer.style.display = "flex";
    }, 1500);

    setInterval(displayTime, 1000);
};



function displayTime() {
    const selectedZone = document.getElementById('time-zone-dropdown').value;
    if(selectedZone) {
        const localTime = moment().tz(selectedZone);
        let hh = localTime.format('HH');
        let mm = localTime.format('mm');
        let ss = localTime.format('ss');

        let hRotation = 30*hh + mm/2;
        let mRotation = 6*mm;
        let sRotation = 6*ss;

        hr.style.transform = `rotate(${hRotation}deg)`;
        min.style.transform = `rotate(${mRotation}deg)`;
        sec.style.transform = `rotate(${sRotation}deg)`;

        realTimedata.innerText = `Time: ${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}:${String(ss).padStart(2, '0')}`;
    }
    
}
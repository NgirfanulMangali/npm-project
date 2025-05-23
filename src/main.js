import dayjs from 'dayjs';
import MicroModal from 'micromodal';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

MicroModal.init();

const timeZoneName = Intl.DateTimeFormat().resolvedOptions().timeZone;
document.getElementById("country").textContent = timeZoneName;

const dateUser = dayjs().format("dddd,D MMMM,YYYY")
document.getElementById("date").textContent = dateUser;



// modal

const form = document.getElementById('timezone-form');
const result = document.getElementById('country');
const zone = document.getElementById('timeNow');

let intervalId;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const selectedZone = form.timezone.value;
    result.textContent = `${selectedZone}`;

    if (intervalId) {
        clearInterval(intervalId);
    }


    function time() {
        const now = dayjs().tz(selectedZone).format('hh:mm:ss A');
        zone.textContent = now;
    }
    time();
    intervalId = setInterval(time, 1000);
});


const zone2 = document.getElementById('timeNow');
function time() {
    const now = dayjs().format('hh:mm:ss A');
    zone2.textContent = now;
}
time();
intervalId = setInterval(time, 1000);
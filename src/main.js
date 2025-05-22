import dayjs from 'dayjs';
import MicroModal from 'micromodal';

MicroModal.init();



function updateTime() {
    const currentTime = dayjs().format('h:mm:ss A')
    document.getElementById("timeNow").textContent = currentTime;
}
updateTime();

setInterval(updateTime, 1000);

const timeZoneName = Intl.DateTimeFormat().resolvedOptions().timeZone;
document.getElementById("country").textContent = timeZoneName;

const dateUser = dayjs().format("dddd,D MMMM,YYYY")
document.getElementById("date").textContent = dateUser;


document.getElementById("edit")
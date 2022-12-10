var globals = {
    date: null,
    weekday: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
}

function getRandomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function generateDate() {
    var randomDate = getRandomDate(new Date(1600, 0, 1), new Date());
    globals.date = randomDate
    document.querySelector('.js-date').textContent = `${randomDate.getDate()} ${globals.month[randomDate.getMonth()]}, ${randomDate.getFullYear()}`;
    document.querySelector('.js-weekday').textContent = '';
    document.querySelector('.js-show-weekday').style.display = 'block';
    document.querySelector('.js-generate-date').style.display = 'none';
}

function showWeekday(date) {
    document.querySelector('.js-weekday').textContent = globals.weekday[date.getDay()];
    document.querySelector('.js-generate-date').style.display = 'block';
    document.querySelector('.js-show-weekday').style.display = 'none';
}

document.querySelector('.js-generate-date').addEventListener('click', generateDate);
document.querySelector('.js-show-weekday').addEventListener('click', function() { showWeekday(globals.date) });
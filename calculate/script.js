var globals = {
    date: null,
    dateRange: {
        earliest: null,
        latest: null,
    },
    weekday: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
}

function init() {
    setGlobalDateRange();
    setupListeners();
}

function setGlobalDateRange() {
    const parsedUrl = new URL(window.location.href);
    var earliestDate = parsedUrl.searchParams.getAll('earliest_date').length ? parsedUrl.searchParams.getAll('earliest_date') : '1600-01-01';
    var latestDate = parsedUrl.searchParams.getAll('latest_date').length ? parsedUrl.searchParams.getAll('latest_date') : '2100-12-31';
    earliestDate = moment(earliestDate, "YYYY-MM-DD");
    latestDate = moment(latestDate, "YYYY-MM-DD");
    globals.dateRange.earliest = earliestDate.toDate();
    globals.dateRange.latest = latestDate.toDate();
}

function setupListeners() {
    document.querySelector('.js-generate-date').addEventListener('click', generateDate);
    document.querySelector('.js-show-weekday').addEventListener('click', function() { showWeekday(globals.date) });
}

function getRandomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function generateDate() {
    var randomDate = getRandomDate(globals.dateRange.earliest, globals.dateRange.latest);
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

init();
$('#currentDay').text(moment().format('dddd MMMM Do YYYY'));
let $saveBtn = $('.saveBtn');
let hour = moment().hours();

$saveBtn.on('click', () => {
    let time = $(this).siblings('.hour').text();
    let plan = $(this).siblings('.plan').val();
    localStorage.setItem(time, plan);
});

// iterate over .hour divs
$('.hour').each(() => {
    let currentHour = $(this).text();
    let currentPlan = localStorage.getItem(currentHour);

    if (currentPlan !== null) {
        $(this).siblings('.plan').val(currentPlan);
    }
});

// iterate over each .time-block row
$('.time-block').each(function() {
    let currentHour = parseInt($(this).data('hour'));
    let timeBlockClass;

    if (currentHour > hour) {
        timeBlockClass = 'future';
    } else if (currentHour === hour) {
        timeBlockClass = 'present';
    } else {
        timeBlockClass = 'past';
    }

    $(this).addClass('past');
});
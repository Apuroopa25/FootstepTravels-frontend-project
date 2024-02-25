window.onload = function () {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    document.getElementById('start-date').min = today;
};

function setMinEndDate() {
    document.getElementById('start-date').style.color = '#FFC72C';
    var startDate = document.getElementById('start-date').value;
    document.getElementById('end-date').disabled = false;
    document.getElementById('end-date').min = startDate;
    document.getElementById('end-date').style.color = '#FFC72C';
}


function bookNowFn() {

    let destination = document.getElementById('whereto').value;
    let people = document.getElementById('noofpersons').value;
    let startDate = document.getElementById('start-date').value;
    let endDate = document.getElementById('end-date').value;
    let description = document.getElementById('userdetails').value.length;

    if (destination && people && startDate && endDate) {
        if (description < 50 || description > 500) {
            alert('Description must be of length 50-500');
        }
        else {
            alert('Booking successful!');
            document.getElementById('destination').value = '';
            document.getElementById('people').value = '';
            document.getElementById('start-date').value = '';
            document.getElementById('end-date').value = '';
            document.getElementById('description').value = '';
        }
    } else {
        if (destination == 'whereto') {
            alert('Please select your destination!');
        }
        else {
            alert('Please fill in all fields.');
        }
    }
}
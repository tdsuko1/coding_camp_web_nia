// function goToBooking() {
//     window. location.assign("bookingform.html") ;
// }
// function process() {
//     var package= document.getElementById('package').value;
//     var num_of_people = document.getElementById('num-of-people').value
//     var totalPayment= package * num_of_people;
//     document.getElementById('total').innerHTML = totalPayment;
//     setTimeout( ()=> {
//         alert('Thank you!')
//         window.location.assign('about.html')
//     } , 1000)
// }

function goToBooking(id) {
    window. location.href="bookingform.html?option_id=" + id
}

function selectOptionFromUrlParam() {
    var urlParams = new URLSearchParams(window.location.search)
    var selectedOptionId = urlParams.get("option_id")
    if(selectedOptionId){
        var selectElement = document.getElementById("package")
        var optionToSelect = document.getElementById(selectedOptionId)
        if(optionToSelect){
            selectElement.value= optionToSelect.value
        }
    }
}

function process() {
    var package= document.getElementById('package').value;
    var num_of_people = document.getElementById('num-of-people').value
    var totalPayment= package * num_of_people;
    document.getElementById('total').innerHTML = totalPayment;
    setTimeout( ()=> {
        alert('Thank you!')
        window.location.assign('about.html')
    } , 1000)
}

function select_div(element_id) {
    return document.querySelectorAll(element_id);
}

var inputs = select_div('.controls input');

function handleUpdate() {
    var name = this.name;
    var value = this.value;
    var suffix = this.dataset.sizing || '';

    document.documentElement.style.setProperty('--' + name, value + suffix);
}

var events = [
    "change",
    "mousemove"
];

inputs.forEach(function (input) {
    var number_of_events = events.length;
    for (var i = 0; i < number_of_events; i++) {
        input.addEventListener(events[i], handleUpdate);
    }
});

//Still need to figure this out (for compatibility issues with FireFox and IE)
//    for (var i = 0, all_events = events.length; i < events; i++) {
//        inputs.addEventListener(all_events[i], handleUpdate);
//    }
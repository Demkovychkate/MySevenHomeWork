let numOrStr = prompt('input number or string');

switch(numOrStr) {
    case null:
    alert('ви скасували');
    break;

    case ' ':
    alert('Empty String');
    break;

    case NaN :
    alert ('number is Ba_NaN');
    break;

    default:
    alert ('OK!');
}



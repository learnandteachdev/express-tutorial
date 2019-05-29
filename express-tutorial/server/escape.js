const escape = function(entry){
    let data = String(entry).
    replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#039;').
    replace('<', '').replace(';', '').replace('javascript');

    return data;
}

module.experts = {
    escape: escape
}
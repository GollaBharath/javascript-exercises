const getTheTitles = function(books) {
    li = []
    for (x in books) {
        li.push(books[x]['title'])
    }
    return li
};

// Do not edit below this line
module.exports = getTheTitles;

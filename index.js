const filterBox = document.querySelectorAll('.box');


function toFilterTickets() {
    var checkbox = document.getElementById('checkbox');

    let filterClass = event.target.dataset['f'];

    if(checkbox.checked)
    {
        filterBox.forEach(elem => {
                    elem.classList.remove('hide');
                    if (!elem.classList.contains(filterClass)) {
                        elem.classList.add('hide');
                    }
                });
    }

    else {
        filterBox.forEach(elem => {
            elem.classList.remove('hide');
        });
    };
};


function toFilterTickets_noStops() {
    var checkbox = document.getElementById('checkbox-no-stops');

    let filterClass = event.target.dataset['f'];

    if(checkbox.checked)
    {
        filterBox.forEach(elem => {
                    elem.classList.remove('hide');
                    if (!elem.classList.contains(filterClass)) {
                        elem.classList.add('hide');
                    }
                });
    }

    else {
        filterBox.forEach(elem => {
            elem.classList.remove('hide');
        });
    };
};

function toFilterTickets_airlines() {
    var checkbox = document.getElementById('lot');

    let filterClass = event.target.dataset['f'];

    if(checkbox.checked)
    {
        filterBox.forEach(elem => {
                    elem.classList.remove('hide');
                    if (!elem.classList.contains(filterClass)) {
                        elem.classList.add('hide');
                    }
                });
    }

    else {
        filterBox.forEach(elem => {
            elem.classList.remove('hide');
        });
    };
};

function toFilterTickets_airlines_aeroflot() {
    var checkbox = document.getElementById('aeroflot');

    let filterClass = event.target.dataset['f'];

    if(checkbox.checked)
    {
        filterBox.forEach(elem => {
                    elem.classList.remove('hide');
                    if (!elem.classList.contains(filterClass)) {
                        elem.classList.add('hide');
                    }
                });
    }

    else {
        filterBox.forEach(elem => {
            elem.classList.remove('hide');
        });
    };
};

document.querySelector('input#sort-asc').onclick = function () {
    sortList('data-price');
}
document.querySelector('input#sort-desc').onclick = function () {
    sortListDesc('data-price');
}
document.querySelector('input#sort-duration').onclick = function () {
    sortList('data-duration');
}

function sortList(sortType) {
    let items = document.querySelector('.block-cover');
    for (let i = 0; i < items.children.length - 1; i++) {
        for (let j = i; j < items.children.length; j++) {
            if (+items.children[i].getAttribute(sortType) > +items.children[j].getAttribute(sortType)) {
                console.log(1);
                let replacedNode = items.replaceChild(items.children[j], items.children[i]);
                insertAfter(replacedNode, items.children[i]);
            }
        }
    }
}

function sortListDesc(sortType) {
    let items = document.querySelector('.block-cover');
    for (let i = 0; i < items.children.length - 1; i++) {
        for (let j = i; j < items.children.length; j++) {
            if (+items.children[i].getAttribute(sortType) < +items.children[j].getAttribute(sortType)) {
                console.log(1);
                let replacedNode = items.replaceChild(items.children[j], items.children[i]);
                insertAfter(replacedNode, items.children[i]);
            }
        }
    }
}


function insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}





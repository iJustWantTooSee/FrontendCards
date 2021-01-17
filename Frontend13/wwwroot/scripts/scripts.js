document.addEventListener('DOMContentLoaded', () => {
    let navigation = document.querySelectorAll('.page-item');
    let currentPage = 1;
    let newPage = 1;

    const card1 = document.querySelector('#page-1');
    const card2 = document.querySelector('#page-2');
    const card3 = document.querySelector('#page-3');

    let temp1 = document.querySelector('#page-1').cloneNode(true);
    let temp2 = document.querySelector('#page-2').cloneNode(true);
    let temp3 = document.querySelector('#page-3').cloneNode(true);


    card1.firstElementChild.firstElementChild.remove();
    card2.firstElementChild.firstElementChild.remove();
    card3.firstElementChild.firstElementChild.remove();
    for (var i = 0; i < 5; i++) {
        navigation[i].addEventListener('click', chooseAndShowNewPage);
    }

    for (var i = 0; i < 7; i++) {
        var tempCard = temp1.firstElementChild.firstElementChild.cloneNode(true);
        card1.firstElementChild.appendChild(tempCard);
    }

    for (var i = 0; i < 6; i++) {
        var tempCard = temp2.firstElementChild.firstElementChild.cloneNode(true);
        card2.firstElementChild.appendChild(tempCard);
    }

    for (var i = 0; i < 5; i++) {
        var tempCard = temp3.firstElementChild.firstElementChild.cloneNode(true);
        card3.firstElementChild.appendChild(tempCard);
    }


    function chooseAndShowNewPage(event) {
        switch (event.target.id) {
            case 'first-page-link':
                newPage = 1;
                break;
            case 'second-page-link':
                newPage = 2;
                break;
            case 'third-page-link':
                newPage = 3;
                break;
            case 'previous-page-link':
                if (currentPage != 1) {
                    newPage = currentPage - 1;
                }
                break;
            case 'next-page-link':
                if (currentPage != 3) {
                    newPage = currentPage + 1;
                }
                break;
        }
        show();
    }

    function show() {
        if (currentPage != newPage) {
            let target = $('#page-' + newPage);
            let prevTarget = $('#page-' + currentPage);
            prevTarget.collapse('hide');
            setTimeout(() => target.collapse('show'), 500);
            currentPage = newPage;
        }
    }
});
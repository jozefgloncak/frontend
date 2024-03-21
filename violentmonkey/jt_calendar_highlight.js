/**
 * Display 50 colleagues in calendar and after refresh of calendar
 * hightlight current day.
 */

/**
 * Highlight {@code cell} left and right borders.
 *
 * @param cell
 */
function highlightCell(cell) {
    cell.style.borderRight = 'solid 5px red';
    cell.style.borderLeft = 'solid 5px red';
}

/**
 * Highlight all cells in column which represents current day.
 *
 * Highlighted is cell in header and cells in body
 */
function highlight() {
    let currentDay = new Date().getDate();

    //highlight cell for current day in table header
    let headerEl = document.querySelector("#Grid .k-grid-header thead tr")
    highlightCell(headerEl.children[currentDay]);

    //hightligh cells for current day in table body
    let tableBodyTrEls = document.querySelector("#Grid .k-grid-container tbody");
    for (let trEl of tableBodyTrEls.children) {
        highlightCell(trEl.children[currentDay]);
    }
}

/**
 * Register mutation observer for div element which holds div with class '.k-loading-mask' during loading
 * of data.
 */
function registerMutator() {
    //obtain reference to div where .k-loading-mask element is inserted during reload (parent container)
    maskEl = document.querySelector(".k-grid-container .k-grid-content")

    //define what to after loading finished (when element with class .k-loading-mask will disappear)
    //=> highlight function.
    var x = new MutationObserver(function (e) {
        if (e[0].removedNodes.length > 0) {
            highlight();
            // x.disconnect(); //remove listener after finishing reload
        }
    });

    x.observe(maskEl, { childList: true });

}

/**
 * Click on dropdown menu item with 50 records per page and register mutator observer (to find out when
 * page refress will be done)
 */
function displayAndHighlight50() {
    registerMutator()
    document.querySelectorAll(".k-picker")[3].click();
    pageSizeItemsEl = document.querySelectorAll(".k-animation-container .k-list-item")[2].click();

}


setTimeout(displayAndHighlight50, 1000);

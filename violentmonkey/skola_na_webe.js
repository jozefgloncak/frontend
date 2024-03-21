/**
 *
 * @param strDate
 * @returns {Date}
 */
function toDate(strDate) {
    let dateItems = strDate.split(/[. :]/)

    let result = new Date();
    result.setFullYear(dateItems[2], dateItems[1] -1, dateItems[0])
    if (dateItems.length > 3) {
        result.setHours(dateItems[3], dateItems[4], 0, 0)
    } else {
        result.setHours(0, 0, 0, 0)
    }
    return result;
}

function addCellToRow(tr, value, width = 'auto') {
    let tdEl = document.createElement("td");
    tdEl.textContent = value;
    tdEl.style.width = width;
    tdEl.style.borderBottom='solid 1px';
    tr.appendChild(tdEl);
}

/**
 * Prepare HTML container which and to which will be added data.
 *
 * @return table to which data should be added
 */
function prepareHTMLContainer() {
    let dummyEl = document.querySelector("#dummyId");
    if (dummyEl) {
        dummyEl.remove();
    }

    divEl = document.createElement("div");
    divEl.style.height = '350px';
    divEl.id = 'dummyId';
    divEl.style.overflowY = 'auto';

    tableEl = document.createElement("table");
    tableEl.style.fontSize = '12px';

    let trEl = document.createElement("tr");

    addCellToRow(trEl, 'Posl. akt.', '75px');
    addCellToRow(trEl, 'Termin', '75px');
    addCellToRow(trEl, 'Predmet', '160px');
    addCellToRow(trEl, 'Nazov', '100px');
    addCellToRow(trEl, 'Text');

    let textEl = document.createElement("th")
    textEl.textContent = 'Text';
    tableEl.appendChild(trEl);

    divEl.append(tableEl);
    document.querySelector("#obj_homework").prepend(divEl);
    return tableEl;
}

function fetchAndRenderData() {
    let tableEl = prepareHTMLContainer()

    let tasks = [];
    let asyncFetches = [];
    for (let link of document.querySelectorAll(".btn")) {
        let fetchItem = fetch(link.href)
            .then(data => data.text())
            .then(page => {
                doc = new DOMParser().parseFromString(page, "text/html")
                let rowItems = doc.querySelectorAll('#snippet-readOnlyTeacherHomework- .edit_curriculum > div > div')
                let subjectName = doc.querySelector('#obj_student_homework').textContent;
                subjectName = subjectName.substring(subjectName.indexOf(": ") + 2).trim();

                task = [toDate(rowItems[0].textContent),
                    toDate(rowItems[1].textContent),
                    subjectName,
                    rowItems[2].textContent,
                    rowItems[3].textContent
                    ];

                tasks.push(task);
                return doc;
            });
        asyncFetches.push(fetchItem)
    }

    Promise.all(asyncFetches)
        .then((data) => {
            tasks.sort((a,b) => -(a[0] - b[0]));
            console.log(tasks);
            for (let task of tasks) {
                let trEl = document.createElement("tr");
                addCellToRow(trEl, task[0].toLocaleDateString());
                addCellToRow(trEl, task[1].toLocaleDateString());
                addCellToRow(trEl, task[2]);
                addCellToRow(trEl, task[3]);
                addCellToRow(trEl, task[4]);
                tableEl.appendChild(trEl)
            }
        })
}




fetchAndRenderData();



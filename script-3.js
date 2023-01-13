'use strict';
let SubjectInputElement = document.getElementById('inputSubjectName');
let marksInputElement = document.getElementById('inputObtainedMarks');
let totalInputElement = document.getElementById('inputTotalMarks');
let currentInputField = ""
let currentTableCell = '';
let calculateBtn = document.getElementById('calculate-grade');
let total = 0;
let obtainedMark = 0;


let focusid = '';


function focusId(e) {
    focusid = e;
}


const checkpercentage = function () {
    const allFields = [...document.querySelectorAll("td")]
    console.log(allFields)
    const allFieldsResult = allFields.every(function (element) {
        return element.getAttributeNode("attempt").value == "attempted"


    })
    if (allFieldsResult) {
        document.querySelector("#calculate-grade").disabled = false;
    }
}



const calculatePercentage = function () {
    if (document.querySelector(`#${SubjectInputElement.value}-total`).getAttributeNode("attempt").value === "attempted" && document.querySelector(`#${SubjectInputElement.value}-marks`).getAttributeNode("attempt").value === "attempted") {
        document.querySelector(`#${SubjectInputElement.value}-title`).setAttribute("attempt", "attempted");
        //subjectName = document.querySelector('#inputSubjectName').value;
        const ObtainedMarks = Number(document.querySelector(`#${SubjectInputElement.value}-marks`).textContent);
        const totalMarks = Number(document.querySelector(`#${SubjectInputElement.value}-total`).textContent);
        const perctg = Math.trunc((ObtainedMarks / totalMarks) * 100);
        if (Number(perctg) >= 0 && Number(perctg) <= 100) {
            document.querySelector(`#${SubjectInputElement.value}-percentage`).textContent = perctg;
            document.querySelector(`#${SubjectInputElement.value}-percentage`).setAttribute("attempt", "attempted");

        } else {
            document.querySelector(`#${SubjectInputElement.value}-percentage`).textContent = "-";
            document.querySelector(`#${SubjectInputElement.value}-percentage`).setAttribute("attempt", "notattempted");

        }


    }
}


marksInputElement.addEventListener("input", function (event) {
    if (Number(event.target.value) > 100) {
        console.log(marksInputElement.value)
        event.target.value = event.target.value.slice(0, -1)

    }
    else {
        console.log(event.target.value)
        event.target.value = event.target.value;
    }

    document.querySelector(`#${SubjectInputElement.value}-marks`).textContent = event.target.value;
    document.querySelector(`#${SubjectInputElement.value}-marks`).setAttribute("attempt", "attempted");
    calculatePercentage();
    checkpercentage();

})

totalInputElement.addEventListener("input", function (event) {
    if (Number(event.target.value) > 100) {
        console.log(totalInputElement.value)
        event.target.value = event.target.value.slice(0, -1)

    }
    else {
        console.log(event.target.value)
        event.target.value = event.target.value;
    }
    document.querySelector(`#${SubjectInputElement.value}-total`).textContent = event.target.value;
    document.querySelector(`#${SubjectInputElement.value}-total`).setAttribute("attempt", "attempted");


    calculatePercentage();
    checkpercentage();
})




// marksInputElement.addEventListener("change", (e) => {
//     console.log(e)
//     this.addEventListener("")

//     if (e.target.value <= 100) {
//         e.target.value = e.target.value
//     } else {
//         e.target.value = e.target.value.slice(0, -1)
//     }
//     console.log(e.target.value)
//     console.log(e.target.type)


// }, true)


/*marksInputElement.addEventListener("keydown", function (e) {
    console.log("before:" + marksInputElement.value + e.key);
    let modified = marksInputElement.value + e.key
    if (Number(marksInputElement.value + e.key) > 100) {
        marksInputElement.setAttribute("maxLength", "2")
        //currentInputField = document.querySelector(`#${subjectname}-${this.name}`)
    }
    else {
        marksInputElement.setAttribute("maxLength", "3")
    }
 
    const subjectname = SubjectInputElement.value.toLowerCase();
    console.log(e.key);
    currentTableCell = document.querySelector(`#${subjectname}-${this.name}`);
    const currentTableCelltext = currentTableCell.textContent + e.key;
    if (e.key === "Backspace") {
        let txt = currentTableCell.textContent.slice(0, -1)
        currentTableCell.textContent = txt;
        currentTableCell.setAttribute("attempt", "attempted")
 
    } else if (Number(currentTableCell.textContent) === 0) {
        currentTableCell.textContent = e.key;
        currentTableCell.setAttribute("attempt", "attempted")
    }
 
    else if (currentTableCelltext.match(/^([0-9]|[1-9][0-9]|100)$/)) {
        currentTableCell.textContent += e.key
 
    }
 
    if (document.querySelector(`#${subjectname}-total`).getAttributeNode("attempt").value === "attempted" && document.querySelector(`#${subjectname}-marks`).getAttributeNode("attempt").value === "attempted") {
        document.querySelector(`#${subjectname}-title`).setAttribute("attempt", "attempted");
        //subjectName = document.querySelector('#inputSubjectName').value;
        const ObtainedMarks = Number(document.querySelector(`#${subjectname}-marks`).textContent);
        const totalMarks = Number(document.querySelector(`#${subjectname}-total`).textContent);
        const perctg = Math.trunc((ObtainedMarks / totalMarks) * 100);
        document.querySelector(`#${subjectname}-percentage`).textContent = perctg;
        document.querySelector(`#${subjectname}-percentage`).setAttribute("attempt", "attempted");
 
 
    }
 
    const allFields = [...document.querySelectorAll("td")]
    console.log(allFields)
    const allFieldsResult = allFields.every(function (element) {
        return element.getAttributeNode("attempt").value == "attempted"
 
 
    })
    if (allFieldsResult) {
        document.querySelector("#calculate-grade").disabled = false;
    }
 
 
 
 
})*/



/*totalInputElement.addEventListener("keydown", function (e) {
    console.log("before:" + totalInputElement.value + e.key);
    let modified = totalInputElement.value + e.key
    if (Number(totalInputElement.value + e.key) > 100) {
        totalInputElement.setAttribute("maxLength", "2")
    }
    else {
        totalInputElement.setAttribute("maxLength", "3")
    }
 
    const subjectname = SubjectInputElement.value.toLowerCase();
    console.log(e.key);
    currentTableCell = document.querySelector(`#${subjectname}-${this.name}`);
    const currentTableCelltext = currentTableCell.textContent + e.key;
    if (e.key === "Backspace") {
        let txt = currentTableCell.textContent.slice(0, -1)
        currentTableCell.textContent = txt;
        currentTableCell.setAttribute("attempt", "attempted")
 
    } else if (Number(currentTableCell.textContent) === 0) {
        currentTableCell.textContent = e.key;
        currentTableCell.setAttribute("attempt", "attempted")
    }
 
    else if (currentTableCelltext.match(/^([0-9]|[1-9][0-9]|100)$/)) {
        currentTableCell.textContent += e.key;
        currentTableCell.setAttribute("attempt", "attempted")
    }
 
    const allFields = [...document.querySelectorAll("td")]
    console.log(allFields)
    const allFieldsResult = allFields.every(function (element) {
        return element.getAttributeNode("attempt").value == "attempted"
 
 
    })
    if (allFieldsResult) {
        document.querySelector("#calculate-grade").disabled = false;
    }
 
 
 
})*/




document.querySelector('#calculate-grade').addEventListener('click', function () {
    let tableRows = document.querySelectorAll(".data-row")
    // document.querySelector('#calculate-grade').removeAttribute(disabled)
    for (let i = 0; i < tableRows.length; i++) {
        total += Number(document.querySelector(`tr:nth-child(${i + 1} ) td:nth-child(3)`).textContent)
        obtainedMark += Number(document.querySelector(`tr:nth-child(${i + 1} ) td:nth-child(4)`).textContent)
        console.log(total)
        console.log(obtainedMark)
    }


    document.querySelector("#total-marks").textContent = `${total}`;
    document.querySelector("#obtained-marks").textContent = `${obtainedMark}`;

    const percentage = Math.trunc((obtainedMark / total) * 100);
    console.log(`${obtainedMark}  / ${total}`);
    console.log("percentage", percentage);
    if (percentage >= 90 & percentage <= 100) {
        document.querySelector("#message").textContent = `A`;
    }
    else if (percentage >= 80 & percentage < 90) {
        document.querySelector("#message").textContent = `B`;
    }

    else if (percentage >= 70 & percentage < 80) {
        document.querySelector("#message").textContent = `C`;
    }
    else {
        document.querySelector("#message").textContent = `Fail`;

    }

    //document.querySelector("#demo").innerHTML = tableTemplate;





})

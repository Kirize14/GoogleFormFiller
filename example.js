/*
Config Zone
*/
let checkboxToClick = [0];
let radioToClick = [0];
let autoSubmit = false;


// If form are not accessible due to high traffic then reload
if(document.querySelectorAll('title')[0].innerText == "Too Many Requests")location.reload();


let answerBox = document.querySelectorAll("input:enabled, select:enabled, textarea:enabled");
let questionBox = document.querySelectorAll("input:enabled, select:enabled, textarea:enabled");
for (let i = 0; i < questionBox.length; i++) {
    let question = questionBox[i].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('div').innerText;
    let answer;
    //Question Zone
    //Only edit between this line

    if (['ast', 'urname', 'สกุล'].some(keyword => question.includes(keyword))) {
        answer = 'This goes the last name';
    }
    if (['assport', 'พาส'].some(keyword => question.includes(keyword))) {
        answer = "Here's go the passport number";
    }






    //End of question Zone
    if (answer !== '') {
        answerBox[i].focus();
        document.execCommand('selectAll', false, null);
        document.execCommand('insertText', false, answer);
    }
    if(questionBox.length-1 == i)
    {
        checkBox();
    }
}


async function checkBox()
    {
        for(let i = 0 ; i < checkboxToClick.length ; i++)
        {
            let checkboxToClick = document.querySelectorAll('div[role="checkbox"]')[i]
            if(checkboxToClick)checkboxToClick.click();
        }
        for(let i = 0 ; i < radioToClick.length ; i++)
        {
            let radioToClick = document.querySelectorAll('div[role="radio"]')[i]
            if(radioToClick)radioToClick.click();
        }
        if(autoSubmit == true)
        {

            let submit = document.querySelectorAll("span");
            for (let i = 0; i < submit.length; i++) {
                if(submit[i].innerText == "Submit" || submit[i].innerText == "ส่ง") submit[i].click();
                if(submit[i].innerText == "ถัดไป" || submit[i].innerText == "Next") submit[i].click();
            }
        }
    }

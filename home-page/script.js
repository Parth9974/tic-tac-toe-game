// function show1(param1)
// {
//     if(param1==='x')
//     {
//         return 'x';
//     }
//     else if(param1==='o')
//     {
//         return 'o';
//     }
// }
// function show2(param2)
// {
//     if(param2===1)
//     {
//         return 1;
//     }
//     else if(param2===2)
//     {
//         return 2;
//     }
//     else if(param2===3)
//     {
//         return 3;
//     }
//     else if(param2===4)
//     {
//         return 4;
//     }
//     else if(param2===5)
//     {
//         return 5;
//     }
//     else if(param2===6)
//     {
//         return 6;
//     }
//     else if(param2===7)
//     {
//         return 7;
//     }
//     else if(param2===8)
//     {
//         return 8;
//     }
//     else if(param2===9)
//     {
//         return 9;
//     }
// }
// function show3(param1,param2)
// {
//     let ans1=show1(param1);
//     let ans2=show2(param2);
//     if(ans1==='x')
//     {
//         document.querySelector(`.box${ans2}`).innerHTML='X';
//     }
//     else if(ans1==='o')
//     {
//         document.querySelector(`.box${ans2}`).innerHTML='O';
//     }
// }

let currentSymbol = null; // store the symbol

let moveHistory = [];
function show1(symbol) {
    if (symbol === 'x' || symbol === 'o') {
        currentSymbol = symbol;
    }
}

function show2(position) {
    if (currentSymbol && position >= 1 && position <= 9) {
        const box = document.querySelector(`.box${position}`);
        if (box && box.innerHTML === '') { // prevent overwriting
            box.innerHTML = currentSymbol.toUpperCase();
            moveHistory.push(box);
            currentSymbol = currentSymbol === 'x' ? 'o' : 'x';
        }
    }
    let box1 = document.querySelector('.box1').innerHTML;
    let box2 = document.querySelector('.box2').innerHTML;
    let box3 = document.querySelector('.box3').innerHTML;
    let box4 = document.querySelector('.box4').innerHTML;
    let box5 = document.querySelector('.box5').innerHTML;
    let box6 = document.querySelector('.box6').innerHTML;
    let box7 = document.querySelector('.box7').innerHTML;
    let box8 = document.querySelector('.box8').innerHTML;
    let box9 = document.querySelector('.box9').innerHTML;

    if (box1 !== '' && box1 === box2 && box2 === box3) {
        document.querySelector('.result').innerHTML = 'We have A Winner!!';
    }
    else if (box2 !== '' && box2 === box5 && box5 === box8) {
        document.querySelector('.result').innerHTML = 'We have A Winner!!';
    }
    else if (box1 !== '' && box1 === box4 && box4 === box7) {
        document.querySelector('.result').innerHTML = 'We have A Winner!!';
    }
    else if (box1 !== '' && box1 === box5 && box5 === box9) {
        document.querySelector('.result').innerHTML = 'We have A Winner!!';
    }
    else if (box3 !== '' && box3 === box6 && box6 === box9) {
        document.querySelector('.result').innerHTML = 'We have A Winner!!';
    }
    else if (box3 !== '' && box3 === box5 && box5 === box7) {
        document.querySelector('.result').innerHTML = 'We have A Winner!!';
    }
    else if (box4 !== '' && box4 === box5 && box5 === box6) {
        document.querySelector('.result').innerHTML = 'We have A Winner!!';

    }
    else if (box7 !== '' && box7 === box8 && box8 === box9) {
        document.querySelector('.result').innerHTML = 'We have A Winner!!';
    }
    else if(box1!=='' && box2!=='' && box3!=='' && box4!=='' && box5!=='' && box6!=='' && box7!=='' && box8!=='' && box9!==''){
        document.querySelector('.result').innerHTML = 'TIE :|';
    }
}
function clear_btn() {
    if (confirm("Do you want to proceed?")) {
        console.log("User clicked OK");

    } else {
        console.log("User clicked Cancel");
          return;
    }
    for (let i = 1; i <= 9; i++) {
        let box = document.querySelector(`.box${i}`);
        box.innerHTML = '';
    }
    document.querySelector('.result').innerHTML = '';
}
function delete_last() {
    if (moveHistory.length > 0) {
        const lastBox = moveHistory.pop();
        lastBox.innerHTML = ''; // Clear the box
        // Revert symbol
        currentSymbol = currentSymbol === 'x' ? 'o' : 'x';
    }
    document.querySelector('.result').innerHTML = '';
}
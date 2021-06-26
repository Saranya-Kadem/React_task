const sortedNum = [1,2,3,4,5,6,7,8,9];

function displayCards(numList) {
    for(let i=0; i<9; i++) {
        const ele = document.getElementById(i+1);
        ele.innerText = numList[i];
    }
}

function displaySortedArray() {
    displayCards(sortedNum);
}

function displayShuffledArray() {
    var numList = [...sortedNum];
    for(let i=numList.length-1; i>0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = numList[i];
        numList[i] = numList[j];
        numList[j] = temp;
    }
    displayCards(numList);
}
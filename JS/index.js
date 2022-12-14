const quantity = document.querySelectorAll(".quantity");

let speed = 200;

quantity.forEach((counter, index) => {
    function updateCounter() {
        const target = Number(counter.dataset.target);
        const initailNumber = Number(counter.innerText)
        const incPerCount = target / speed;

        if(initailNumber < target){
            counter.innerText = new Intl.NumberFormat().format(Math.ceil(initailNumber + incPerCount));
            setTimeout(updateCounter, 10);
        }
    }
    updateCounter();
})
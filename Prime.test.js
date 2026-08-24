function isPrime(num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

function checkPrime() {
    const n = parseInt(document.getElementById("number").value);
    const result = document.getElementById("result");

    if (isNaN(n)) {
        result.innerText = "Please enter a number";
    } else if (isPrime(n)) {
        result.innerText = "Prime Number";
    } else {
        result.innerText = "Not Prime Number";
    }
}

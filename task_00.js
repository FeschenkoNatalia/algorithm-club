const readline = require("readline");

function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Input a number: ", n => {
        if (n && Number.isInteger(+n))
            findNumbers(+n);
        else
            console.log("Try again, input a number!");
    rl.close();
    });
}


function findNumbers(n) {
    var res = new Array;
    var nLength = parseInt(n.toString().length);
    var x = n - 9 * nLength;
    x = x > 0 ? x : 0;
    for (var i = x; i < n; i++) {
        var sum = 0, t = i;
        while (t) {
            sum += t % 10;
            t = Math.floor(t / 10);
        }
        if (sum + i === n)
            res.push(i);
    }
    console.log(res.length);
    for (var i = 0; i < res.length; i++)
        console.log(res[i]);
}

main();

// Make change dinayc problem 

class MakeChange {

    constructor() { }

    // make change problem
    makeChange = function (amount, coins) {

        let cache = {};

        let me = this;

        console.log(me);

        if (!amount) {
            return [];
        }

        if (cache[amount]) {
            return cache[amount];
        }

        var min = [], newMin, newAmount;

        for (var i = 0; i < coins.length; i++) {

            var coin = coins[i];
            newAmount = amount - coin;

            if (newAmount >= 0) {
                newMin = me.makeChange(newAmount);
            }

            if (
                newAmount >= 0 &&
                (newMin.length < min.length - 1 || !min.length)
                && (newMin.length || !newAmount)
            ) {

                min = [coin].concat(newMin);
                console.log('new Min ' + min + ' for ' + amount);

            }
        }

        let change = (cache[amount] = min);

        console.log('min ' + min + ' for ' + amount);

        return change

    }

    // knapsack problem 
    knapSack = (capacity, weight, values, n) => {

        let i, w, a, b, kS = [];

        for (i = 0; i <= n; i++) {
            kS[i] = [];
        }

        for (i = 0; i <= n; i++) {
            for (w = 0; w <= capacity; w++) {

                if (i == 0 || w == 0) {

                    kS[i][w] = 0;

                } else if (weight[i - 1] <= w) {

                    a = values[i - 1] + kS[i - 1][w - weight[i - 1]];
                    b = kS[i - 1][w];
                    kS[i][w] = a > b ? a : b;

                } else {

                    kS[i][w] = kS[i - 1][w];

                }
            }
        }

        return kS[n][capacity];

    };

    findValues = (n, capacity, kS, weights, values) => {
        let i = n, k = capacity;

        console.log('Items that are part of the solution:');

        while (i > 0 && k > 0) {

            if (kS[i][k] !== kS[i - 1][k]) {

                console.log(
                    `item ${i} can be part of solution w,v: ${weights[i - 1]}, ${values[i - 1]}`
                );

                i--;
                k -= weights[i];

            } else {

                i--;

            }
        }
    };

    lcs = (wordX, wordY) => {

        let m = wordX.length,
            n = wordY.length,
            l = [],
            i, j, a, b;

        for (i = 0; i <= m; ++i) {
            l[i] = [];
            for (j = 0; j <= n; ++j) {
                l[i][j] = 0;
            }
        }

        for (i = m - 1; i >= 0; --i) {
            for (j = n - 1; j >= 0; --j) {

                if (wordX[i] === wordY[j]) {

                    l[i][j] = l[i + 1][j + 1] + 1;

                } else {

                    a = l[i + 1][j];
                    b = l[i][j + 1];

                    l[i][j] = a > b ? a : b;

                }
            }
        }

        return l[0][0];

    }

    printSolution = (solution, wordX, m, n) => {

        let a = m,
            b = n,
            x = solution[a][b],
            answer = '';

        while (x !== 0) {

            if (solution[a][b] === 'diagonal') {

                answer = wordX[a - 1] + answer;
                a--;
                b--;

            } else if (solution[a][b] === 'left') {

                b--;

            } else if (solution[a][b] === 'top') {

                a--;

            }

            x = solution[a][b];

        }

        console.log('lcs: ' + answer);

    }

}

// const coins = [1, 5, 10, 25];
// const makeChange = new MakeChange(coins);
// makeChange.makeChange(36);

// const capacity = 50;
// const values = [60, 100, 120];
// const weights = [10, 20, 30];
// const n = values.length;

 const makeChange = new MakeChange();
// const Ks = makeChange.knapSack(capacity, weights, values, n);

// console.log(Ks);

// makeChange.findValues(n, capacity, Ks, weights, values);

// const wordX = 'acbaed';
// const wordY = 'abcadf';
// const makeChange = new MakeChange();
// const lcs = makeChange.lcs(wordX, wordY);
// console.log(lcs);

const wordX = 'acbaed';
const wordY = 'abcadf';

makeChange.printSolution(solution, wordX, wordX.length, wordY.length);


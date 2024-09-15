const readline = require('readline');

 const rl = readline.createInterface({
                                     input: process.stdin,
                                      output: process.stdout
                                       });

const len = 31623;
 const primes = new Array(len).fill(0);
const bigPrimes = new Set();
let maxPrime = 0;

        function max(a, b) {
            return a > b ? a : b;
        }

    function factor(x) 
    {
        let i = 2;
        while (i * i <= x) 
        {
            if (x % i === 0) 
            {
                let q = 0;
                while (x % i === 0) 
                {
                    x /= i;
                    q++;
                }
                primes[i] = max(primes[i], q);
                maxPrime = max(maxPrime, i);
            }
            i++;
        }
         if (x > 1) {
             if (x >= len) 
             {
                 bigPrimes.add(x);
             }
              else 
              {
                  primes[x] = max(primes[x], 1);
                  maxPrime = max(maxPrime, x);
              }
        }
    }

let inputData = [];
let n, k;

rl.on('line', 
      ///--------------
      (line) => {
                inputData.push(line.trim());
    
                    if (inputData.length === 1) 
                    {
                        [n, k] = inputData[0].split(' ').map(Number);
                    } 
                     else if (inputData.length === 2) 
                            {
                                const numbers = inputData[1].split(' ').map(Number);

                                 for (const num of numbers) 
                                 {
                                     factor(num);
                                 }

                     let ans = 1;
                      for (let i = 0; i <= maxPrime; i++) 
                         {
                             if (primes[i] > 0) 
                             {
                                 for (let g = 0; g < primes[i]; g++) 
                                 {
                                     ans = (ans * i) % k;
                                 }
                             }
                         }

                        for (const prime of bigPrimes) 
                        {
                            ans = (ans * prime) % k;
                        }

                         console.log(ans % k);
                          rl.close();
                             }
               });

});

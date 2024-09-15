const readline = require('readline');

 const rl = readline.createInterface({
                                    input: process.stdin,
                                    output: process.stdout
                                    });

    function add(num, p) 
    {
        let curr = 1;
        let i = 0;
         while (true) 
         {
             num[i] = (num[i] + curr) % p;
              if (num[i] !== 0) 
              {
                  break;
              }
               i++;
         }
    }

  rl.on('line', 
      ///----------
      (line) => {
                const [N, p] = line.split(' ').map(Number);

                let S = 0;
                const num = new Array(30).fill(0);

                 for (let i = 0; i < N; ++i) 
                 {
                    let curr = 1;
                     for (const g of num) 
                     {
                        curr *= (g + 1);
                     }
                      S += curr;
                       add(num, p);
                 }

                  const All = N * (N + 1) / 2;
                   console.log(All - S);

                    rl.close();
});

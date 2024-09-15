const readline = require('readline');

 const rl = readline.createInterface({
                                    input: process.stdin,
                                    output: process.stdout
                                    });



                function mod(z, mm) 
                {
                    let r = 0;
                     for (const char of z) 
                     {
                         r = (r * 10 + parseInt(char, 10)) % mm;
                     }
                      return r;
                }



        function findMatchingFactorials(z) 
        {
            const R = [0, 0];
            R[0] = mod(z, 1000000000039);
            R[1] = mod(z, 999999999989);

            for (let i = 2; i <= 10000; i++) 
            {
                let Q = [1, 1];
                 for (let j = i; j <= 10000; j++) 
                 {
                     Q[1] = (Q[1] * j) % 999999999989;
                     Q[0] = (Q[0] * j) % 1000000000039;
                      if (Q[0] === R[0] && Q[1] === R[1]) 
                      {
                         return [i, j];
                      }
                } 
            }
             return null;
}

  rl.on('line', 
      ///---------
      (line) => {
                const z = line.trim();
                 const result = findMatchingFactorials(z);
                  if (result) 
                  {
                      console.log(result[0], result[1]);
                  }
                   rl.close();
});

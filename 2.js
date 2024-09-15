const readline = require('readline');
 const rl = readline.createInterface({
                                      input: process.stdin,
                                      output: process.stdout
                                     });

                function product(s1, s2) {
                    const dx1 = s1.p1.x - s1.p2.x;
                    const dy1 = s1.p1.y - s1.p2.y;
                    const dx2 = s2.p1.x - s2.p2.x;
                    const dy2 = s2.p1.y - s2.p2.y;
                     return dx1 * dx2 + dy1 * dy2;
                }

                function area(s1, s2) {
                    const dx1 = s1.p1.x - s1.p2.x;
                    const dy1 = s1.p1.y - s1.p2.y;
                    const dx2 = s2.p1.x - s2.p2.x;
                    const dy2 = s2.p1.y - s2.p2.y;
                     return Math.abs(dx1 * dy2 - dx2 * dy1);
                }

const enumerations = [
    [1, 2, 3],
     [1, 3, 2],
      [2, 3, 1],
       [2, 1, 3],
        [3, 1, 2],
         [3, 2, 1]
];

const Map = [];

        function prov(enum_) 
        {
           const l = [Map[0], ...enum_.map(j => Map[j])];
            for (let k = 1; k < 4; ++k) 
            {
                if (l[k].p1.x === l[k - 1].p2.x && l[k].p1.y === l[k - 1].p2.y) 
                {
                    continue;
                } 
                else if (l[k].p2.x === l[k - 1].p2.x && l[k].p2.y === l[k - 1].p2.y) 
                     {
                      [l[k].p1, l[k].p2] = [l[k].p2, l[k].p1];
                     } 
                     else 
                          {
                           return -1;
                          }
                if (product(l[k], l[k - 1]) !== 0) 
                {
                 return -1;
                }
            }
             if ((l[3].p2.x !== l[0].p1.x || l[3].p2.y !== l[0].p1.y) || product(l[3], l[0]) !== 0) 
             {
                return -1;
             }
              return area(l[0], l[3]);
        }

const input = [];
 rl.on('line',
   ////---------------------------------------------   
   (line) => {
            input.push(line.trim().split(' ').map(Number));
            if (input.length === 4) 
            {
               for (let i = 0; i < 4; ++i) 
               {
                    const [a, b, c, d] = input[i];
                     Map.push({ p1: { x: a, y: b }, p2: { x: c, y: d } });
               }

                for (const i of enumerations) 
                {
                   const x = prov(i);
                    if (x !== -1) 
                    {
                        console.log("YES");
                         console.log(x.toFixed(2));
                          rl.close();
                           return;
                    }
                }

                 console.log("NO");
                  rl.close();
            }
            }    
      );

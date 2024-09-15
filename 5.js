const input = require('fs').readFileSync('/dev/stdin', 'utf8');
  const [a, n] = input.trim().split(' ').map(Number);

   if (a === 1) 
   {
      console.log(n);
   } 
    else if (a === 2) 
    {
        if (n === 1) 
        {
            console.log(-1);
        } 
         else 
         {
             console.log(n * (n - 1));
         }
    } 
     else 
     {
        let eq = 0;
        let dif = n * (n - 1);
         for (let i = 0; i < a - 2; i++) 
         {
             const eq2 = eq;
              eq = dif;
               dif = dif * (n - 2) + eq2 * (n - 1);
         }
          if (dif === 0) 
          {
              console.log(-1);
          } 
           else 
           {
               console.log(dif);
           }
     }

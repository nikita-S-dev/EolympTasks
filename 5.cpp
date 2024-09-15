#include <iostream>
using namespace std;

int main() 
{
  int a, n;
   cin >> a >> n;
    if (a == 1) 
    {
       cout << n;
    } 
     else if (a == 2) 
           {
                if (n == 1) 
                {
                    cout << -1;
                } 
                 else 
                 {
                     cout << n * (n - 1);
                 }
            } 
      else 
      {
         long eq = 0, dif = n * (n - 1);
          for (int i = 0; i < a - 2; i++) 
          {
              long eq2 = eq;
               eq = dif;
                dif = dif * (n - 2) + eq2 * (n - 1);
          }
             if (dif == 0) 
             {
                 cout << -1;
             }
              else 
              {
                  cout << dif;
              } 
       }
}

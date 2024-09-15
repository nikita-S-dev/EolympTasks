#include <iostream>
using namespace std;

char z[40000];

    long long mod(long long mm)
    {
        long long r = 0;
         for (int i=0; z[i]; i++)
         {
             r %= mm;
              r*=10;
               r+= z[i] - '0';
         }
         return r%=mm;
    }

int main ()
{
    cin >> z;
    long long R[2];
    R[0] = mod(1000000000039);
    R[1] = mod(999999999989);
     for (int i=2;i<=10000;i++)
     {
        long long Q[2] = {1,1};
         for (int j=i;j<=10000;j++)
         {
             Q[1] *= j;
              Q[1] %= 999999999989;
             Q[0] *= j;
              Q[0] %= 1000000000039;
              
              
               if (Q[0] == R[0] && Q[1] == R[1])
               {
                   cout << i<<" "<<j;
                   return 0;
               }
         }
     }
}

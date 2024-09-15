#include <iostream>
#include <vector>
using namespace std;

            void add(int num[], int p)
            {
              int curr = 1;
               int i = 0;
                while (1)
                {
                   num[i] = (num[i]+curr)%p;
                    if (num[i]!=0)
                    {
                       break;
                    }
                     i++;
                }
            }

int main() 
{
    long N, p;
     cin >> N >> p;

      long long S = 0;
      int num[30]{0};
       for (long i = 0; i < N; ++i) 
       {
          long long curr = 1;
           for (int g : num) 
           {
               curr *= (g + 1);
           }
            S += curr;
              add(num, p);
           
       }

        long long All = N * (N + 1) / 2;
         cout << All-S ;
}

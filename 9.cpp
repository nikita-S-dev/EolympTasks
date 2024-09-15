#include <iostream>
#include <cmath>
using namespace std;

    int solve(int x) {
        int t = 0;
        double sqrt_x = sqrt(x);
         if (sqrt_x - static_cast<int>(sqrt_x) < 0.001) 
         {
             t = 1;
         }

          for (int a = static_cast<int>(sqrt_x) - t; a > 0; --a) 
          {
             if (x % a == 0) 
             {
                int b = x / a;
                 if ((b - a) % 2 == 0) 
                 {
                    return (b - a) / 2;
                 }
             }
         }
         return -1;
    }

int main() {
    int T;
     cin >> T;

      while (T--) 
      {
          int q;
           cin >> q;
            int ans = solve(q);
             cout << ans << endl;
      }

       return 0;
}

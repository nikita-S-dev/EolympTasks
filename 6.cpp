#include <iostream>
#include <vector>
using namespace std;

        int sighs(const string& x) 
        {
            int count = 0;
             for (char g : x) 
             {
                 if (g == '+' || g == '-' || g == '*' || g == ':') 
                 {
                     count++;
                 }
             }
              return count;
        }

int main() {
    int N, K;
     cin >> N >> K;

      vector<int> lis(N); 

       for (int i = 0; i < N; i++) 
       {
            string input;
             cin >> input;
              lis[i] = sighs(input);
       }

       vector<vector<int>> Map(N, vector<int>(K, 0));
        for (int i = 0; i<N; i++)
        {
            Map[i][0] = 1;
        }

         for (int i = 1; i < N; i++) 
         {
            int now = lis[i];
             for (int t = 0; t < i; t++) 
             {
         
                 if (lis[t] < now) 
                 {
                     for (int j = 1; j < K; j++) 
                     {
                         Map[i][j] += Map[t][j - 1];
                     }
                 }
             }
         }

            int ans = 0;
             for (int i = 0; i < N; i++) 
             {
                 ans += Map[i][K - 1];
             }

             if (ans == 0) 
             {
                 cout << -1 << endl;
             } 
              else 
              {
                  cout << ans << endl;
              }

              return 0;
}

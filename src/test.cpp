// #include <iostream>
// #include <limits.h>
// #include <cmath>
// #include <map>
// #include <algorithm>
// #include <vector>

// using namespace std;

// typedef unsigned int UINT;

// class Node
// {
// public:
//     int data;
//     Node *next;
// };

// int a = 10;

// string s = "asd";

// // C++ Program to demonstrate inline functions and classes
// #include <iostream>

// using namespace std;

// class operation
// {
//     int a, b, add, sub, mul;
//     float div;

// public:
//     void get();
//     void sum();
//     void difference();
//     void product();
//     void division();
// };
// void operation ::get()
// {
//     cout << "Enter first value:";
//     cin >> a;
//     cout << "Enter second value:";
//     cin >> b;
// }

// inline void operation ::sum()
// {
//     add = a + b;
//     cout << "Addition of two numbers: " << a + b << "\n";
// }

// inline void operation ::difference()
// {
//     sub = a - b;
//     cout << "Difference of two numbers: " << a - b << "\n";
// }

// inline void operation ::product()
// {
//     mul = a * b;
//     cout << "Product of two numbers: " << a * b << "\n";
// }

// inline void operation ::division()
// {
//     div = a / b;
//     cout << "Division of two numbers: " << a / b << "\n";
// }

// // int main(){
// //     Node n;
// //     UINT u = 30;
// //     int a = 20;
// //     n.data = 10;
// //     n.next = nullptr;
// //     cout << n.data << endl;
// //     cout << ::a;
// //     cout << LLONG_MAX << endl;
// //     cout << pow(2, 63) - 1 << endl;
// //     cout << (pow(2, 63) - 1 == LLONG_MAX) << endl;
// //     cout << (pow(2, 31) - 1 == INT_MAX) << endl;
// //     cout << numeric_limits<double>::max() << endl;
// //     cout << u << endl
// //          << s << endl;
// //     map<int, char> m = {{1, 'A'}, {2, 'B'}, {3, 'C'}, {4, 'D'}, {5, 'E'}};
// //     for (const auto c : m)
// //     {
// //         cout << c.first << ": " << c.second << endl;
// //     }
// //     cout << "Program using inline function\n";
// //     operation s;
// //     s.get();
// //     s.sum();
// //     s.difference();
// //     s.product();
// //     s.division();
// // }
// class box
// {
// public:
//     int *length;
//     int breadth;
//     int height;
//     int *p;

// public:
//     // Function that sets the dimensions
//     void set_dimensions(int length1, int breadth1,
//                         int height1, int x)
//     {
//         *length = length1;
//         breadth = breadth1;
//         height = height1;
//         p = new int;
//         *p = x;
//     }

//     // Function to display the dimensions
//     // of the Box object
//     void show_data()
//     {
//         cout << " Length = " << *length
//              << "\n Breadth = " << breadth
//              << "\n Height = " << height
//              << "\n P int pointing to = " << p
//              << endl;
//     }
// };

// // Driver Code
// // int main()
// // {
// //     // Object of class Box
// //     box B1, B3, B2;

// //     // Set dimensions of Box B1
// //     B1.set_dimensions(14, 12, 16, 100);

// //     // When copying the data of object
// //     // at the time of initialization
// //     // then copy is made through
// //     // COPY CONSTRUCTOR
// //     B2 = B1;
// //     int x = 10;
// //     B1.length = &x;

// //     // When copying the data of object
// //     // after initialization then the
// //     // copy is done through DEFAULT
// //     // ASSIGNMENT OPERATOR
// //     B3 = B1;
// //     B1.show_data();
// //     B2.show_data();
// //     B3.show_data();

// //     return 0;
// // }

// // clang++ -std=c++17 src/test.cpp -o test && ./test

// int main()
// {
//     int arr[] = {1, 2, 3};
//     int n = sizeof(arr) / sizeof(arr[0]);
//     vector<int> v(arr, arr + n);
//     int x = binary_search(v.begin(), v.end(), 2);
//     v.erase(find(v.begin(),v.end(),1));
//     cout << v.at(1) << endl;
// }

#include <iostream>

using namespace std;

int expandAroundCenter(const string &s, int left, int right)
{
    while (left >= 0 && right < s.length() && s[left] == s[right])
    {
        left--;
        right++;
    }
    return right - left - 1;
}

int main()
{
    string s = "1235";
    if (s.empty())
    {
        cout << "" << endl;
        return 0;
    }

    int start = 0, maxLen = 1;

    for (size_t i = 0; i < s.length(); i++)
    {
        int len1 = expandAroundCenter(s, i, i);
        int len2 = expandAroundCenter(s, i, i + 1);
        int maxLenCurr = max(len1, len2);

        if (maxLenCurr > maxLen)
        {
            maxLen = maxLenCurr;
            start = i - (maxLen - 1) / 2;
        }
    }

    cout << "Longest Palindromic Substring: " << s.substr(start, maxLen) << endl;
    return 0;
}

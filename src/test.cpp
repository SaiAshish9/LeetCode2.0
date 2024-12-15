#include <iostream>

using namespace std;

class Node {
    public:
        int data;
        Node *next;
};

int main(){
    Node n;
    n.data = 10;
    n.next = nullptr;
    cout << n.data << endl;
}

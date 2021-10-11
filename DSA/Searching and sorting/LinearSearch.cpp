#include<iostream>
using namespace std;

int linear(int n,int a[]){
    int i;
    for(i=0;i<6;i++){
        if(n==a[i]){
             return i;
             break;
        }
    }
    return -1;
}
int main(){
    int A[10] = {20,39,19,77,39,23};
    int i,n,key,temp=0;
    cout<<"enter element you want to search"<<endl;
    cin>>n;
    key = linear(n,A);
    cout<<"index is : "<<key;
}
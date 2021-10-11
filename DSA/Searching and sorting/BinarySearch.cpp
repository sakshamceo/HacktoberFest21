#include<iostream>
using namespace std;

int binary(int a[5],int s , int n){
   
    int mid,key,i;
    int start=0,end=s;
    for(i=0;i<s;i++){
        mid = (start+end)/2;
        if(n==a[mid]){
             return mid;
        }
        else if(n < a[mid]){
            end=mid-1;
        }       
        else if(n > a[mid]){
            start=mid+1;
        }    
    }
    return -1;
}

int main(){
    int a[5]={9,17,20,30,48};
    int s=5,n,key;
 
    cout<<"enter element you want to search : "<<endl;
    cin>>n;
    key = binary(a,s,n);
    cout<<" no. present at index : "<<key;   
}
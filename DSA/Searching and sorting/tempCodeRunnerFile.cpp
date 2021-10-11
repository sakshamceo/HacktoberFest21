#include<iostream>
using namespace std;

void insertionSort(int a[],int n){
     
     for(int i=1;i<n;i++){
        int j=i-1;
        int current = a[i];
        while(a[j]>current && j>=0){
        
            a[j+1]=a[j];
            j--;
        }
            a[j+1]=current;
    }
}

int main(){
    int n=10000;
    int a[n];
    for(int i=0;i<n;i++){
        a[i]=rand()%100;
    }
   
    insertionSort(a,n);
    for(int i=0;i<n;i++){
        cout<<a[i]<<" ";
    }
    
}
// 时间复杂度 O(n²)， 空间复杂度O(1) 不稳定排序
function selectionSort(a) {
    for (let i = 0; i < a.length; i++) {
        let max = 0;
        for (let j = 0; j < a.length - i; j++) {
            if (a[max] < a[j]) {
                max = j;
            }
        }
        let temp = a[a.length - i - 1];
        a[a.length - i - 1] = a[max];
        a[max] = temp;
    }
}


const arr = [4, 2, 4, 1, 5, 6];
selectionSort(arr);

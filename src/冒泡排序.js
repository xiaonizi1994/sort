// 相邻两数比较，取其大的放后面

// 时间复杂度 O(n²)， 空间复杂度O(1) 稳定排序
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

const arr = [4, 2, 4, 1, 5, 6];
bubbleSort(arr);



function insertionSort(a) {
    for (let i = 1; i < a.length; i++) {
        let j = i;
        let temp = a[i];
        while (j > 0 && temp < a[j - 1]) {
            a[j] = a[j - 1];
            j--;
        }
        a[j] = temp;
    }
}

const arr = [4, 2, 4, 1, 5, 6];
insertionSort(arr);

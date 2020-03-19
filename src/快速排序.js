function quickSort(a, left, right) {
    if (left < right) {
        const i = getIndex(arr, left, right);
        quickSort(a, left, i - 1);
        quickSort(a, i + 1, right);
    }

}

function getIndex(a, left, right) {
    const temp = a[right];
    let i = left;
    let j = right;
    while (i != j) {
        while (a[i] <= temp && i < j) {
            i++;
        }

        while (a[j] >= temp && i < j) {
            j--;
        }

        if (i < j) {
            let x = a[i];
            a[i] = a[j];
            a[j] = x;
        }

    }
    a[right] = a[i];
    a[i] = temp;
    return i;
}


const arr = [4, 2, 8, 1, 5, 7, 2, 6];
quickSort(arr, 0, arr.length - 1);

function mergeSort(a) {
    if (a.length === 1) {
        return a;
    }
    let mid = Math.ceil((0 + a.length) / 2);
    let leftArr = mergeSort(a.slice(0, mid));
    let rightArr = mergeSort(a.slice(mid, a.length));
    return merge(leftArr, rightArr);
}

function merge(left, right) {
    let x = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            x.push(left[i]);
            i++;
        } else {
            x.push(right[j]);
            j++;
        }
    }

    if (i < left.length) {
        return x.concat(left.slice(i, left.length));
    } else {
        return x.concat(right.slice(j, right.length));
    }
}

const arr = [4, 2, 4, 1, 5, 6, 0];
mergeSort(arr);

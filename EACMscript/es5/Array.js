let arr = [1, 2, 5, 5, 6, 8, 9, 8];

// 数组去重1
console.log([...new Set(arr)]) 

// 第二种
const arr1 = arr.filter((i, index) => {
    return arr.slice(index + 1, arr.length).indexOf(i) === -1
}) 
console.log(arr1)
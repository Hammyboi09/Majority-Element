/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    let i = 1;
    let element = nums[0];
    let count = 1;
    while (i < nums.length) {
        if (nums[i] !== element) {
            count--;
        } else {
            count++;
        }
        if (count < 0) {
            element = nums[i];
            count = 0;
        }
        i++;
    }
    return element;
};
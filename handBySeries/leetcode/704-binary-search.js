function search(nums, target) {
    let l = 0;
    let r = nums.length-1;
    
    while (l <= r) {
        const newLocal = l + r >> 1;
      let m = newLocal;
      if (nums[m] <= target) {
        l = m+1;
      } else {
        r = m-1;
      }
    }
    
    return r >= 0 && nums[r] === target ? r : -1;
  }
  
  search([1,4,6,9, 10], 9);
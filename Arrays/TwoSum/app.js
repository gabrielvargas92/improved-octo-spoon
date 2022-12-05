var twoSum = function(nums, target) {
    var dict = [];
    
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        
        const difVal = target - element;
        
        if(dict[difVal] >= 0)
        {
            return [dict[difVal], i]
        }

        dict[element] = i;

    }
};

console.log(twoSum([2,7,11,15], 9));
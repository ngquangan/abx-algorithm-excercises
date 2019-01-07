//https://leetcode.com/problems/construct-the-rectangle
/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    let arr = [];
    let d = 0;
    for(let i = 1 ; i <= area; i++) {
        for(let j = 1 ; j <= area /i; j++) {
            
            if(i >= j) {
                if(i * j === area) {
                    d = i - j;
                    arr.push({
                        area: [i, j],
                        d
                    })
                }
            }
            
        }
    }
    
    let lw = arr.reduce(
        (prev, current) => {
            return current.d < prev.d ? current : prev
        }, {area: [], d: area}
    );
    
    return lw.area;
};
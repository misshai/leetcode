//https://leetcode.com/problems/sum-root-to-leaf-numbers
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    if(!root) return 0;
    return dfs(root,0,0);
};
var dfs=function(node,  num,  sum){
    if(node == null) return sum;
 
    num = num*10 + node.val;
 
    // leaf
    if(node.left == null && node.right == null) {
        sum += num;
        return sum;
    }
 
    // left subtree + right subtree
    sum = dfs(node.left, num, sum) + dfs(node.right, num, sum);
    return sum;
}
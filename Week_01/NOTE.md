学习笔记
# 算法和数据结构



<a name="a0X55"></a>
## 0.目标

1. 整理不同数据结构 CRUD、排序的时间和空间复杂度不同，并比较优劣
1. 整理常见的算法思想

<br />
<a name="dpQuc"></a>
## 1.学习方式
<a name="yWzMw"></a>
#### 过遍数
第一遍

- 5 分钟 ：读题 + 思考
- 直接看题解
- 背诵、默写好的解法


<br />
<br />第二遍

- 自己写，leetCode 提交
- 多种写法，比较优劣


<br />第三遍

- 过一天后重复练习
- 根据不同的熟练程度，专项练习


<br />第四遍

- 过一周后，反复练习相同的题目


<br />第五遍

- 面试前一周恢复性训练



<a name="dQ0dP"></a>
#### 解题思路
> 代码最终无非就是 if/else、switch/case、while、for 和递归(recursion)

1. 暴力求解，直接遍历
1. 从特殊栗子开始总结规律，化繁为简，比如：斐波纳契数列（Fibonacci）问题
1. 升维度，一维数组升二维数据...
1. 时间换空间
1. 双指针思路


<br />注意：斐波纳契数列（Fibonacci）需要熟练掌握<br />

<a name="pX6OD"></a>
## 2. 常见的时间复杂度
![image.png](https://cdn.nlark.com/yuque/0/2020/png/176229/1587178048520-b6477334-25b4-4904-8af3-55addbf43de4.png#align=left&display=inline&height=448&margin=%5Bobject%20Object%5D&name=image.png&originHeight=896&originWidth=1378&size=271988&status=done&style=none&width=689)
<a name="pKjAg"></a>
## 3. 数据结构
<a name="Z5FVW"></a>
### 存储型结构
<a name="GXdLy"></a>
#### 1. 数组
**特点**<br />**实现**<br />

<a name="sgcFG"></a>
#### 2. 链表（Linked list）
特点 <br />分类 

- 单向
- 双向
- 循环


<br />实现<br />
<br />应用

- LRU Cache
> [https://www.jianshu.com/p/b1ab4a170c3c](https://www.jianshu.com/p/b1ab4a170c3c)

> [https://leetcode-cn.com/problems/lru-cache](https://leetcode-cn.com/problems/lru-cache)

> 					
				
			
		
	



<a name="T6BFA"></a>
#### 3. 跳表
> 如何提高链表线性查找的效率?在链表的基础上面升维，提高查找效率。时间复杂度降低到了 O(logn)

应用

- Redis - Skip List
> [https://redisbook.readthedocs.io/en/latest/internal-datastruct/](https://redisbook.readthedocs.io/en/latest/internal-datastruct/)
skiplist.html<br />
[https://www.zhihu.com/question/20202931](https://www.zhihu.com/question/20202931)



> 					
				
			
		
	

<a name="GrjDz"></a>
#### 总结对比
| 类型 | 查找 | 插入 | 删除 | 排序 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| Array | O(1) | O(n) | O(n) |  |  |
| Linked List | O(n) | O(1) | O(1) |  |  |
| Skip List | O(logn) | O(logn) | O(logn) |  |  |




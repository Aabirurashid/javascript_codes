# i=0
# while i<=6:
#     j=1
#     while j<=6-1:
#         print(" ",end="")
#         s=1
#         while s<=j:
#             print("*",end="")
#             s=s+1
#         j=j+1
#     print()
#     i=i-1

    
# table=int(input("enter the number:"))
# i=1
# while i<=10:
#     # table=int(input("enter the number:"))
    # if i%table==0:
    #     print(table,"*",i,"=",table*i)
    # i+=1

# a=4*[1,2,3,]
# print(a)

# a={'value1':5,'value2':4,'value3':3,'value4':2,'value5':1}
# d=1
# for i in a:
#     d=d*a[i]
#     print(d)

# a={"Aabiru":"karan","kupwara":"hirri"}
# b={}
# for x,y in a.items():
#     b[y]=x
# print(b)

# list = []
# list_1 =[]
# n = int(input("enter the total numbers inside list.:    "))
# i = 1
# while(i <= n):
#    num = int(input("enter the numbers you want to insert into list: "))
#    i +=1
#    list.append(num)
# print(list, " <--the given list by you is here.\n ")
  
# list.sort()
# print(list)
# print(max(list))


# num=1
# def fun():
#     num=3
#     print(num)
# fun()
# print(num)
# num=int(input("enter the number:"))
# i=1
# fact=1
# while i<=num:
#     fact=fact*i
#     i+=1
# print(fact)

# i=1
# k=1
# while i<=5:
#     b=1
#     while b<=5-i:
#         print(' ',end="")
#         b+=1
#     j=1
#     while j<k:
#         print("*",end="")
#         j+=1
#     k=k+2
#     print()
#     i+=1

# i=1
# while i<=5:
#     j=1
#     while j<=5:
#         print(6-i,end=" ")
#         j=j+1
#     print() 
#     i=i+1   


i=0
while i<=9:
    if(i%2==0):
        print(i)
    i+=1
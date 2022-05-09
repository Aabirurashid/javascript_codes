# a = [1,2,3,4,5,6]
# b = [2,3,1,0,6,7] 
# j=[]
# i=0
# while i<len(a):
#     k=a[i]
#     if k not in b:       
#      j.append(k)
#     i=i+1
# print(j)

# name=[ 'n', 'i', 't', 'i', 'n' ] 
# name=['m','o','m']
# i=1
# a=[]
# while i<=len(name):
#     a.append(name[-i])
#     i=i+1
# print(a)
# if (name==a):
#     print("palindrome")
# else:
#     print("not palindrome")

# numbers = [50, 40, 23, 70, 56, 12, 5, 10, 7] 
# i=0
# a=numbers[1]
# while i<len(numbers):
#      if numbers[i]>a:
#          a=numbers[i]   
#      i=i+1
# numbers.remove(a)
# i=0
# l=numbers[i]
# while i<len(numbers):
#      if numbers[i]>l:
#           l=numbers[i]
#      i=i+1
# print(l) 

# num=int(input("enter the number:"))
# i=1
# while i<=num:
#      print('"'+"q"+str(i)+'"','"'+"z"+str(i)+'"')
#      i+=1

# number = 30
# n = [10, 11, 12, 13, 14, 17, 18, 19] 
# i=0
# a=[]
# while i<len(n):
#     j=len(n)-1
#     while j>3:
#         if n[i]+n[j]==number:
#             a.append([n[i],n[j]])
#         j=j-1
#     i=i+1

# name=[ 'n', 'i', 't', 'y', 'n',] 
# # name=(input("enter the name"))
# a=[]
# i=1
# while i<=len(name):
#     a.append(name[-i])
#     i=i+1
# print(a)
# if (a==name):
#     print("palindrome")
# else:
#     print("not palindrome")


# magic_square = [
#     [8, 3, 4],
#     [1, 5, 9],
#     [6, 7, 2]
# ]
# i=0
# while (i<len(magic_square)):d=0
# while d<len(magic_square):
#     j=0
#     sum1=0
#     while j<len(magic_square[d]):
#         sum1=sum1+magic_square[d][j]
#         j=j+1
#     d=d+1
# print(sum1)
# c=0
# b=c
# sum3=0
# while c<len(magic_square):
#     sum3=sum3+magic_square[c][b]
#     c=c+1
#     sum=0
#     while j<len(magic_square[i]):
#         sum=sum+magic_square[i][j]
#         j=j+1      
#     i=i+1
# print(sum)    

# d=0
# while d<len(magic_square):
#     j=0
#     sum1=0
#     while j<len(magic_square[d]):
#         sum1=sum1+magic_square[d][j]
#         j=j+1
#     d=d+1
# print(sum1)
# c=0
# b=c
# sum3=0
# while c<len(magic_square):
#     sum3=sum3+magic_square[c][b]
#     c=c+1
# print(sum3)


# question_list=[
#     "how many continents are there",
#     "what is the capital of india",
#     "NG mai kon se course padhaya jata hai",
# ]
# option_list=[
#     ["four","nine","seven","eight"],
#     ["chandigarh","bhopal","chennai","delhi"],
#     ["software engineering","counseling","tourism","agriculture"]
# ]
# solution_list=[3,4,1]
# answer_list=[
#     ["1.four","3.seven"],
#     ["2.bhopal","4.delhi"],
#     ["1.software engineering","4.agriculture"]
# ]
# print("koun bnega crorepati(kbc)")
# i=0
# s=0
# count=0
# while i<len(question_list):
#     print(question_list[i])
#     j=0
#     k=1
#     while j<len(option_list[i]):
#         print(k,".",option_list[i][j])
#         k=k+1
#         j=j+1
#     num1=input("do u want 50 50 lifeline:")
#     if num1=="yes":
#         print("50 50 lifeline")
#         if count<1:
#             print(answer_list[i])
#             num2=int(input("enter the answer"))
#             if num2==solution_list[i]:
#                 s= s+10000
#                 print("your answer is correct")
#                 print("u win RS/-",s)
#             else:
#                 print("ur answer is incorrect")
#                 break
#             count=count+1
#         else:
#             print("u already use life line")
#             m=int(input("enter ur answer"))
#             if m==solution_list[i]:
#                 print("congrats, ur answer is right")
#                 s=s+1000
#                 print("u win",s)
#             else:
#                 print("ur answer is wrong")
#                 print("u can play again")
#                 print("u win",s)
#                 break
#     else:
#         k=int(input("enter your answer"))
#         if k==solution_list[i]:
#             print("right answer")
#             s=s+100000
#             print("u win RS/-",s)
#             print("congres")
#         else:                         
#             print("no chance")
#             print("ur answer is wrong")
#     i=i+1


# import json
# import re
# import os
# file=os.path.exists("user.json")
# print(file)
# if file==False:
#     dic2={}
#     list1=[]
#     dic1={}
#     print("***welcome to login and sign usigp page***")
#     user=input("what u want to do login or sign up:")
#     if user=="signup":
#         user_name=input("enter the user_name :")
#         password1=input("enter ur password:")
#         if re.search("[A-Z]",password1) and re.search("[a-z]",password1) and re.search("[0-9]",password1) and  re.search("[#$%&@]",password1):
#             password2=input("confirm ur password:")
#             # with open("user.json","w")as file :
#             #     data=json.dump()
#             if password1==password2:
#                 print("congrates",user_name)
#                 description=input("enter ur descriptinon:")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
#                 dob=input("enter ur dob:")
#                 hobbies=input("enter ur hobbies:")
#                 gender=input("enter ur gender f/m: ")
#                 l1=["name","password","describtion","DOB","Hobbies","Gender"]
#                 l2=[user_name,password1,description,dob,hobbies,gender]
#                 for i in range(0,len(l1)):
#                     dic2.update({l1[i]:l2[i]})
#                 list1.append(dic2)
#                 dic1.update({password2:list1})
#                 with open("user.json","w")as injson :
#                     json.dump(dic1, injson,indent=4)
#             else:
#                 print("Passwords didn't match.")                                                                                                                                    
#         else:
#             print("weak password")
# if file==True:
#     list1=[]
#     user=input("what u want to do login or sign up:")
#     if user=="signup":
#         user_name=input("enter the user_name: ")
#         password1=input("enter ur password:")
#         with open("user.json","r")as n :
#             data=json.load(n)
#         for data in password1:
#             print(data)
#             if i["password"]==password1:
#                 print("this account is areleay existst")
#                 print(data[i])
#                 break
#             if re.search("[A-Z]",password1) and re.search("[a-z]",password1) and re.search("[0-9]",password1) and  re.search("[#,$,%,&,@]",password1):
#                 password2=input("confirm ur password:")
#                 if password1==password2:
#                     print("congrates",user_name)
#                     description=input("enter ur descriptinon:")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
#                     dob=input("enter ur dob:")
#                     hobbies=input("enter ur hobbies:")
#                     gender=input("enter ur gender f/m :")
#                     print("congress",user_name,"u have successfully signup")
#                     l1=["name","password","describtion","DOB","Hobbies","Gender"]
#                     l2=[user_name,password2,description,dob,hobbies,gender]
#                     dic2={}
#                     for i in range(0,len(l1)):
#                         dic2.update({l1[i]:l2[i]})
#                     list1.append(dic2)
#                     data.update({password2:list1})
#                     with open("user.json","w")as injson :
#                         json.dump(data, injson,indent=2)
#                 else:
#                     print("Passwords didn't match.")                                                                                                                                    
#             else:
#                 print("weak password")

#     elif user=="login":
#         name=input("enter the usee_name:")
#         password=input("enter the password:")
#         with open("user.json","r")as file :
#             data=json.load(file)
#         for i in data:
#             if i==password:
#                 print("ur given information is correct")
#                 print(data[i])
#                 break
#         else:
#             print("sorry ur password is wrong")



# question_list=[
#     "how many continents are there",
#     "what is the capital of india",
#     "NG mai kon se course padhaya jata hai",
# ]
# option_list=[
#     ["four","nine","seven","eight"],
#     ["chandigarh","bhopal","chennai","delhi"],
#     ["software engineering","counseling","tourism","agriculture"]
# ]
# solution_list=[3,4,1]
# answer_list=[
#     ["1.four","3.seven"],
#     ["2.bhopal","4.delhi"],
#     ["1.software engineering","4.agriculture"]
# ]
# print("koun bnega crorepati(kbc)")
# i=0
# s=0
# count=0
# while i<len(question_list):
#     print(question_list[i])
#     j=0
#     k=1
#     while j<len(option_list[i]):
#         print(k,".",option_list[i][j])
#         k=k+1
#         j=j+1
#     num1=input("do u want 50 50 lifeline:")
#     if num1=="yes":
#         print("50 50 lifeline")
#         if count<1:
#             print(answer_list[i])
#             num2=int(input("enter the answer"))
#             if num2==solution_list[i]:
#                 s= s+10000
#                 print("your answer is correct")
#                 print("u win RS/-",s)
#             else:
#                 print("ur answer is incorrect")
#                 break
#             count=count+1
#         else:
#             print("u already use life line")
#             m=int(input("enter ur answer"))
#             if m==solution_list[i]:
#                 print("congrats, ur answer is right")
#                 s=s+1000
#                 print("u win",s)
#             else:
#                 print("ur answer is wrong")
#                 print("u can play again")
#                 print("u win",s)
#                 break
#     else:
#         k=int(input("enter your answer"))
#         if k==solution_list[i]:
#             print("right answer")
#             s=s+100000
#             print("u win RS/-",s)
#             print("congres")
#         else:                         
#             print("no chance")
#             print("ur answer is wrong")
#     i=i+1


# a="10"
# b=aabiru

# a=["zero","one","two","three","four","five","six","seven"]
# num=input("enter the number:")
# i=0
# while i<len(num):
#     s=int(num[i])
#     print(a[s])
#     i+=1


# var a=require("readline-sync")
# var b=["zero","one","two","three","four","five","six","seven","eight","nine"]
# var num=a.question("enter the number:")
# var i=0
# var m={}
# while (i<num.length){
#     s=Number(num[i])
#     m[i]=(num[i],b[s])
#     i++
# }
# console.log(m)
# mainStr = "the quick brown fox jumped over the lazy dog. the dog slept over the verandah."
# subStr = "over"
# replacementStr = "on" 
# l=mainStr.split()
# i=0
# while i<len(l):
#      if l[i]=="over":
#          x=mainStr.replace("over","on")
#      i=i+1
# print(x)

# mainStr = "the quick brown fox jumped over the lazy dog. the dog slept over the verandah."
# subStr = "over"
# replacementStr = "on" 
# l=mainStr.split()
# i=0
# while i<len(l):
#      if l[i]=="over":
#          x=mainStr.replace("over","on")
#      i=i+1
# print(x)

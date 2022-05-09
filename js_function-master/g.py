# a=6+3j
# b=str(a)
# print(b)
# x = 100
# y = 50
# print(x and y)
# x = 6
# y = 2
# print(x ** y)
# i=1
# k=1
# while i<=5:
#     b=1
#     while b<=5-i:
#         print(' ',end="")
#         b=b+1
#     j=1
#     while j<=k:
#         print("*",end='')
#         j=j+1
#     k=k+2
#     print()
#     i=i+1

# def calculator(number1,number2,operator):
#     if operator=="+":
#         return number1+number2
#     elif operator=="-":
#         return number1-number2
#     elif operator=="*":
#         return number1*number2
#     elif operator=="/":
#         return number1/number2
# a=int(input("enter first number"))
# b=int(input("enter second number"))
# o=input("enter operator")
# calculator(a,b,o)

# m=calculator(6,4,"-")
# print(m)
# b=calculator(6,4,"*")
# print(b)
# x=calculator(6,4,"/")
# print(x)
# # print(n+5)


# import json
# print("**WELCOME THE LOGIN AND SIGNUP PAGE**")
# user=input("what do u want login or signup:")
# if user=="signup":
#     user_name=input("enter the user name:")
#     password1=input("enter the password:")
#     password2=input("confirm the password:")
#     if password1==password2:
#         if password2 in "A-Z" or "a-z"and password2 in "2" or "8" and password2 in "$"or"2":
#             print("ur pasdsword is strong")
#             description=input("enter the discription:")
#             dob=input("enter the DOB :")
#             hobbies=input("enter the Hobbies:")
#             gender=input("enter the gender M/F:")
#             print("congrts",user_name,"u yave suessfully signuped")
#             user_details={"user_name":user_name,"password2":password2,"description":description,"DOB":dob,"hobbies":hobbies,"gender":gender}
#             with open("user.json","a")as file:
#                 a=json.dump(user_details,file,indent=4)
#                 print(a)
#         else:
#             print("ur password is not strong")
#     else:
#         print("ur password is wrong")

# elif user=="login":
#     name=input("enter the user_name:")
#     password=input("enter the password:")
#     with open("user.json","r") as file:
#         data=json.load(file)
#         if password==data["password2"]:
#             print("ur account has been logged sucessfully")
#             print("ur information is correct")
#             print(data)

# else:
#     print("ur information is wrong:")





# import json
# import re
# import os
# file=os.path.exists("user.json")
# print(file)
# if file==False:
#     print("not exit")
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
#             # with open("user.json","r")as file :
#             #     data=json.load(file)
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
#             print(data)
#         for i in data:
#             if i==password1:
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

# a=[5,10,15,25]
# print(a[::-2])
# a=["Aabiru",30,"python"]
# print(type(a))

# a=[5,10,15,25]
# print(a[::-2])
# a=["Aabiru",30,"python"]
# print(type(a))

# num=int(input("enter the number:"))
# a=num%10
# b=(num//10)%10
# c=(num//100)%10
# e=a
# print(num)


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


# i=0
# sum=0
# while i<5:
#     a=int(input("enter the number:"))
#     sum=sum+i
#     i+=1
# print(sum)

# for row in range(7):
#     for col in range(5):
#         if ((row==0 or row==3 or row==6)and (col>0 and col<6 )) or (col==0 and (row>0 and row<3)) or (col==3 and (row>3 and row<6)):
#             print("*",end=" ")
#         else:
#             print(end="")
#     print( )

# i=156
# while i<=246:
#     z=i-145
#     print(z)
#     i+=1

# my_dict = {'C1':[1,2,3],'C2':[5,6,7],'C3':[9,10,11]}

# my_dict = {'C1':[1,2,3],'C2':[5,6,7],'C3':[9,10,11]}
# print("C1","C2","C3")
# my_dict=C1,C2,C3.values(my_dict)
# i=0
# while (i<len(c1))
#   var j=0
#   while (j<C2.length)
#     var k=0
#     while (k<C3.length)
#       if (i==j and j==k)
#         console.log(c1[i],c2[j],c[3])
      
#       k+=1
    
#     j+=1

#   }
#   i+=1
# }


# import requests
# import json
# get_url=requests.get("https://api.merakilearn.org/courses")
# meraki_learn=get_url.json()
# with open("folder.json","w")as file_data:
#     file=json.dump(meraki_learn,file_data,indent=4)
# serial_number=1
# for i in meraki_learn:
#     print(serial_number,".",i["name"],":",i["id"])
#     serial_number+=1
# course_no=int(input("enter ur number do u want:"))
# print(meraki_learn[course_no-1]["name"])
# idd=meraki_learn[course_no-1]["id"]
# url=requests.get("http://api.merakilearn.org/courses/"+str(idd)+"/exercises")
# var=url.json()
# with open("topic.json","w")as k:
#     json.dump(var,k,indent=4)
#     serial_number2=1
#     list1=[]
#     list2=[]
# for j in var["course"]["exercises"]:
#     if j["parent_exercise_id"]==None:
#         print(serial_number2,j["name"])
#         print("   ",serial_number2,j["slug"])
#         serial_number2+=1
#         new_no=1
#         list1.append(j)
#         list2.append(j)
#         continue
#     if j["parent_exercise_id"]==j["id"]:
#         print(serial_number2,j["name"])
#         serial_number2+=1
#         new_no=1
#         list1.append(j)
#     for l in var["course"]["exercises"]:
#         if j["parent_exercise_id"]!=j["id"]:
#             print("     ",new_no,j["name"])
#             new_no+=1
#             list2.append(j)
#             break
# u1=input("what do u want previous or next(n/p):")
# if u1=="p":
#     serial_number=1
#     for i in meraki_learn:
#         print(serial_number,".",i["name"],":",i["id"])
#         serial_number+=1
#     course_no=int(input("enter ur number do u want:"))
#     print(meraki_learn[course_no-1]["name"])
#     idd=meraki_learn[course_no-1]["id"]
#     url=requests.get("http://api.merakilearn.org/courses/"+str(idd)+"/exercises")
#     var=url.json()
#     with open("topic.json","w")as k:
#         json.dump(var,k,indent=4)
#         serial_number2=1
#         list1=[]
#         list2=[]
#     for j in var["course"]["exercises"]:
#         if j["parent_exercise_id"]==None:
#             print(serial_number2,j["name"])
#             print("   ",serial_number2,j["slug"])
#             serial_number2+=1
#             new_no=1
#             list1.append(j)
#             list2.append(j)
#             continue
#         if j["parent_exercise_id"]==j["id"]:
#             print(serial_number2,j["name"])
#             serial_number2+=1
#             new_no=1
#             list1.append(j)
#         for l in var["course"]["exercises"]:
#             if j["parent_exercise_id"]!=j["id"]:
#                 print("     ",new_no,j["name"])
#                 new_no+=1
#                 list2.append(j)
#                 break
#     with open("topic1.json","w")as f:
#         json.dump(list1,f,indent=4)
#         parent=int(input("enter the parent exercise do want:"))
#         for k in list1:
#             if k["parent_exercise_id"]==k["id"]:
#                 print(list1[parent-1]["name"])
#                 num=(list1[parent-1]["id"])
#                 var=[]
#                 var3=[]
#                 new_no1=1
#                 for n in list2:
#                     if n["parent_exercise_id"]==num:
#                         print("  ",new_no1,n["name"])
#                         var.append(n["name"])
#                         var3.append(n["content"])
#                         new_no1+=1
#                 child=int(input("enter the child exercise do u want :"))
#                 new_no2=1
#                 for s in range(0,len(var)):
#                     if child==new_no2:
#                         print(var[s])
#                         print(var3[s])
#                     new_no2+=1
# elif u1=="n":
#     with open("topic1.json","w")as f:
#         json.dump(list1,f,indent=4)
#         parent=int(input("enter the parent exercise do want:"))
#         for k in list1:
#             if k["parent_exercise_id"]==k["id"]:
#                 print(list1[parent-1]["name"])
#                 num=(list1[parent-1]["id"])
#                 var=[]
#                 var3=[]
#                 new_no1=1
#                 for n in list2:
#                     if n["parent_exercise_id"]==num:
#                         print("  ",new_no1,n["name"])
#                         var.append(n["name"])
#                         var3.append(n["content"])
#                         new_no1+=1
#                 child=int(input("enter the child exercise do u want:"))
#                 new_no2=1
#                 for s in range(0,len(var)):
#                     if child==new_no2:
#                         print(var[s])
#                         print(var3[s])
#                     new_no2+=1

# def driver(speed):
#     if speed<70:
#         print("ok")
#     elif speed>70:
#         a=speed-70
#         b=a//5
#         print(b,"points")
#         if b>=12: 
#             print("lisence suspend")
# n=int(input("enter the number"))
# driver(n)
    


import requests
import json
get_url=requests.get("https://api.merakilearn.org/courses")
meraki_learn=get_url.json()
with open("folder.json","w")as file_data:
    file=json.dump(meraki_learn,file_data,indent=4)
serial_number=1
for i in meraki_learn:
    print(serial_number,".",i["name"],":",i["id"])
    serial_number+=1
course_no=int(input("enter ur number do u want:"))
print(meraki_learn[course_no-1]["name"])
idd=meraki_learn[course_no-1]["id"]
m1=input("what do u want pervious or next(n/p):")
if m1=="p":
    serial_number=1
    for i in meraki_learn:
        print(serial_number,".",i["name"],":",i["id"])
        serial_number+=1
    course_no=int(input("enter ur number do u want:"))
    print(meraki_learn[course_no-1]["name"])
    idd=meraki_learn[course_no-1]["id"]
elif m1=='n':
    url=requests.get("http://api.merakilearn.org/courses/"+str(idd)+"/exercises")
    var=url.json()
    with open("topic.json","w")as k:
        json.dump(var,k,indent=4)
        serial_number2=1
        list1=[]
        list2=[]
    for j in var["course"]["exercises"]:
        if j["parent_exercise_id"]==None:
            print(serial_number2,".",j["name"])
            print("      ",serial_number2,".",j["slug"])
            serial_number2+=1
            new_no=1
            list1.append(j)
            list2.append(j)
    for j in var["course"]["exercises"]:
        if j["parent_exercise_id"]==None:
            print(serial_number2,".",j["name"])
            print("    ",serial_number2,".",j["slug"])
            serial_number2+=1
            new_no=1
            list1.append(j)
            list2.append(j)
        continue
    if j["parent_exercise_id"]==j["id"]:
        print(serial_number2,".",j["name"])
        serial_number2+=1
        new_no=1 
        list1.append(j)
    for l in var["course"]["exercises"]:
        if j["parent_exercise_id"]!=j["id"]:
            print("     ",new_no,j["name"])
            new_no+=1
            list2.append(j)
            break
m1=input("what do u want pervious or next(n/p):")
if m1=="p":
    serial_number=1
    for i in meraki_learn:
        print(serial_number,".",i["name"],":",i["id"])
        serial_number+=1
    course_no=int(input("enter ur number do u want:"))
    print(meraki_learn[course_no-1]["name"])
    idd=meraki_learn[course_no-1]["id"]
    with open("topic1.json","w")as f:
        json.dump(list1,f,indent=4)
        point=int(input("enter the number point:"))
        for k in list1:
            if k["parent_exercise_id"]==k["id"]:
                print(list1[point-1]["name"])
                num=(list1[point-1]["id"])
                var=[]
                var3=[]
                new_no1=1
                for n in list2:
                    if n["parent_exercise_id"]==num:
                        print("  ",new_no1,n["name"])
                        var.append(n["name"])
                        var3.append(n["content"])
                    new_no1+=1
                point1=int(input("enter the point1 do u want:"))
                new_no2=1
                for s in range(0,len(var)):
                    if point1==new_no2:
                        print(var[s])
                        print(var3[s])
                    new_no2+=1
        


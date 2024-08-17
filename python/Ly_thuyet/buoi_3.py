# for i in range(1,101):
#     i+=i

# print(i)


# for kq in range(1,21):
#     if (kq % 2== 0): 
#         print(kq,end=" ")




# ds = ['apple','banana','cherry','date']

# for kq in ds:
#     print(kq,end=" ")


# chuoi = 'Hello, World!'
# for kq in chuoi:
#     print(kq,end=" ")

#Giai thừa
n = int(input("Nhập số nguyên dương n: "))
giai_thua = 1
for i in range(1, n + 1):
    giai_thua *= i
print(f"Giai thừa của {n} là {giai_thua}")


#bang cuu chuong
# for i in range(1,11):
#     for j in range(1,11):
#         print(i*j,end=" ")

#Kiểm tra một số có phải là số nguyên tố không
n=int(input("Nhập số nguyên n: "))

if n<2:
    print("{n} không phải là số nguyên tố")
else:
    SNT=True
    for i in range(2,n+1):
        if n%i == 0:
            SNT = False
            break
    if SNT:
        print("{n} là số nguyên tố")
    else:
        print("{n} không phải là SNT")


#Tính tổng các số nguyên từ a đến b
a = int(input("Nhập số nguyên a: "))
b = int(input("Nhập số nguyên b: "))
if a > b:
    temp = a
    a = b 
    b = temp
tong = 0
for i in range(a, b + 1):
    tong += i
print(f"Tổng các số nguyên trong khoảng từ {a} đến {b} là {tong}")

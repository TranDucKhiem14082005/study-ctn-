#cac phep tinh co ban
a = 5
b = 10
print('tong 2 so a va b: ',a+b)

a = 15
b = 7
print('hieu 2 so a va b: ',a-b)

a = 3
b = 4
print('tich 2 so a va b: ',a*b)

a = 20
b = 4
print('thuong 2 so a va b: ',a/b)
a = 2
b  = 3
print('luy thua 2 so a va b: ',a**b)

a = 17
b = 5
print('chia lay du 2 so a va b: ',a%b)

d  = 10
w = 5
print('chu vi hinh chu nhat la: ',(d+w)*2)

print('dien tich hinh chu nhat la: ',d*w)

a = 6
print('chu vi hinh vuong la: ',a*4)
print('dien tich hinh vuong la: ',a*a)

r = 7
print('dien tich hinh tron la: ',3.14*r*r)
print('chu vi hinh tron la: ',3.14*r*2)

#chia lay du

a = 10
b = 3
print('phep chia lay du: ',a%b)

a = -15
b = 4
print('phep chia lay du la: ',a%b)

a = 12345
b = 10
print('phep chia lay du 2 so a va b la: ',a%b)

a = 7
b = 5
print('phep chia lay du 2 so a va b la: ',a%b)

#luy thua

a = 2
b = 3
print('luy thua cua 2 so a va b la: ',a**b)
a = 5
b = -1
print('luy thua cua 2 so a va b la: ',a**b)
a = 10
b = 4
print('luy thua cua 2 so a va b la: ',a**b)
a = 3
b = 2
print('luy thua cua 2 so a va b la: ',a**b)
a = 7
b = 0
print('luy thua cua 2 so a va b la: ',a**b)

#chia lay nguyen
a = 10
b = 3
print('chia lay nguyen 2 so a va b la: ',a/b)

a = -15
b = 4
print('chia lay nguyen 2 so a va b la: ',a/b)

a = 12345
b = 10
print('chia lay nguyen 2 so a va b la: ',a/b)

a = 7
b = 5
print('chia lay nguyen 2 so a va b la: ',a/b)

a = 7
b = 1
print('chia lay nguyen 2 so a va b la: ',a/b)

#cau dieu kien
a=float(input("Nhap vao so a:"))
if (a%2==0):
    print("So chan")
else:
    print("So le")

a=int(input('nhap so nam '))
if(a%400 == 0):
    print('nam nhuan')
else:
    print('nam khong nhuan')

a=int(input("nhap so diem"))
if (a>= 50):
    print('dau')
else:
    print('rot')

a=input('nhap mat khau ')
if(a == "python"):
    print('mat khau dung')
else:
    print('mat khau khong dung')

a=float(input('nhap so a '))
if(a%3==0 and a%5==0):
    print('so chia het cho 3 va 5')
else:
    print('so khong chia het cho 3 va 5')

a=int(input('nhap mot so '))
kq="chan" if(a%2==0) else 'le'
print('a la so ',kq)

a=int(input('nhap so tuoi '))
kq = 'khong phai tre con' if(a>=13) else 'tre con'
print(kq)

a=float(input('nhap chieu cao '))
kq = 'cao' if(a>180) else 'khong cao'
print(kq)

a=int(input('nhap nhiet do'))
kq = 'nong' if(a>30) else 'khong nong'
print(kq)

a=input('nhap mat khau ')
kq = 'mat khau dung' if(a == 'python') else 'mat khau sai'
print(kq)

a=float(input('nhap so canh a '))
b=float(input('nhap so canh b '))
c=float(input('nhap so canh c '))

if(a+b>c and a+c>b and b+c>a):
    if(a==b==c): print('tam giac deu')
    elif(a==b or a==c or b==c): print('tam giac can')
    else: print('tam giac thuong')
else: ('nhap du lieu khong dung')

a=int(input('nhap thu trong tuan '))
if(a>=1 and a<=7):
    if(a==1): print('thu 2')
    elif(a==2): print('thu 3')
    elif(a==3): print('thu 4')
    elif(a==4): print('thu 5')
    elif(a==5): print('thu 6')
    elif(a==6): print('thu 7')
    else: print('chu nhat')
else: print('nhap sai du lieu')

a=int(input('nhap so diem cua ban '))
if(a<50): print('trung binh')
elif(a>= 50 and a<=69): print('kha')
elif(a>=70 and a<=89): print('gioi')
else: print('xuat sac')

a=int(input('nhap so gio '))
if(a>= 0 and a<=24):
    if(a>=5 and a<12): print('buoi sang')
    elif(a>=12 and a<18): print('buoi chieu')
    elif(a>=18 and a<=22): print('buoi toi')
    else: print('ban dem')
else: print('nhap du lieu sai')

a=int(input('nhap chieu cao '))
if(a<150): print('thap')
elif(a>=150 and a<=180): print('trung binh')
else: print('cao')
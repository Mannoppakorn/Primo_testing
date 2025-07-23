 Project Setup

To set up the project:  
git clone https://github.com/Mannoppakorn/Primo_testing.git  

## 1. Install dependencies  
```
npm install
```

## 2. Run the unit tests  
```
npm test
```

## (Optional) Handling test case  
Edit `main.ts`, then run:
```
npm run build
node dist/src/main.js
```

---

## Test Cases

1. **Basic Merge** – รวมอาร์เรย์ 3 ชุดที่เรียงลำดับแล้วตามเงื่อนไข  
2. **Empty Arrays** – รองรับอาร์เรย์ว่าง  
3. **Duplicate Values** – จัดการกับค่าที่ซ้ำกันได้ถูกต้อง  
4. **Negative Numbers** – รองรับตัวเลขติดลบ  
5. **Floating Points** – รองรับเลขทศนิยม  
6. **Unequal Sizes** – อาร์เรย์ขนาดไม่เท่ากัน ก็ยังรวมและเรียงได้  
7. **Large Arrays** – รองรับข้อมูลขนาดใหญ่ได้อย่างมีประสิทธิภาพ  

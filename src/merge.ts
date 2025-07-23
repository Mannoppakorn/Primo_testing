export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    
    // เตรียม array สำหรับเก็บผลลัพธ์
    const result: number[] = [];

    // แปลง collection_2 ให้เป็นลำดับจากน้อยไปมาก
    const fixedCollection2: number[] = [];
    for (let i = collection_2.length - 1; i >= 0; i--) {
        fixedCollection2.push(collection_2[i]);
    }

    // รวมทุกตัวเลขไว้ใน array เดียว
    const combined: number[] = [];

    for (let i = 0; i < collection_1.length; i++) {
        combined.push(collection_1[i]);
    }
    for (let i = 0; i < fixedCollection2.length; i++) {
        combined.push(fixedCollection2[i]);
    }
    for (let i = 0; i < collection_3.length; i++) {
        combined.push(collection_3[i]);
    }

    // bubble sort
    for (let i = 0; i < combined.length; i++) {
        for (let j = i + 1; j < combined.length; j++) {
            if (combined[i] > combined[j]) {
                // สลับค่า
                const temp = combined[i];
                combined[i] = combined[j];
                combined[j] = temp;
            }
        }
    }

    return combined;
}

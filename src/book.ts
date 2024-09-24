export interface Book {
    id: number;
    name: string;
    status: 'Đã đọc' | 'Chưa đọc';
    editing: boolean;
    purchaseDate: string;
    createdAt?: Date;
  }
  
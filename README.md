# Project_FrontEnd_2026

## 1. Giới thiệu dự án

Dự án phát triển giao diện WebChat sử dụng ReactJS và Vite.

## 2. Công nghệ sử dụng

| Công nghệ | Mục đích |
|---|---|
| ReactJS | Xây dựng giao diện |
| Vite | Build và chạy dự án |
| JavaScript | Ngôn ngữ lập trình |
| Redux Toolkit | Quản lý trạng thái |
| React Redux | Kết nối React với Redux |
| React Router DOM | Điều hướng trang |
| Axios | Gọi API Backend |
| Lucide React | Hiển thị icon |
| CSS | Thiết kế giao diện |

## 3. Yêu cầu môi trường

Cần cài đặt:
- Node.js
- npm
- Git
- Visual Studio Code

Kiểm tra phiên bản:

```bash
node -v
npm -v
git --version
```

## 4. Cài đặt dependencies

Sau khi có source code trên máy, mở Terminal tại thư mục `webchat` (thư mục chứa file `package.json`).

Chạy lệnh:

```bash
npm install
```

Lệnh này tự động cài đặt các thư viện được khai báo trong `package.json`.

## 5. Chạy dự án

Mở thư mục dự án bằng VS Code:

```bash
code .
```

Khởi chạy ứng dụng:

```bash
npm run dev
```

Truy cập đường dẫn hiển thị trong Terminal.

Ví dụ:

```text
http://localhost:5173/chat
```

## 6. Kiểm tra build

Để kiểm tra dự án có thể build thành công hay không:

```bash
npm run build
```

## 7. Các lệnh Git thường dùng

| Lệnh | Chức năng |
|---|---|
| `git status` | Kiểm tra trạng thái thay đổi |
| `git pull` | Cập nhật code |
| `git add .` | Đưa thay đổi vào staging |
| `git commit -m "message"` | Tạo commit |
| `git push` | Đẩy code lên repository |
| `git branch` | Kiểm tra nhánh hiện tại |

## 8. Lưu ý

1. Không đưa thư mục `node_modules` lên GitHub.
2. Không xóa file `package.json` và `package-lock.json`.
3. Khi có thay đổi dependencies, cần chạy lại `npm install`.
4. Trước khi phát triển chức năng, cần cập nhật code mới nhất.
5. Mỗi thành viên nên làm việc trên nhánh được phân công.
6. Kiểm tra build trước khi commit và push code.

---

**Project:** Project_FrontEnd_2026  
**Frontend:** ReactJS + Vite  
**Package Manager:** npm  
**Version Control:** Git / GitHub

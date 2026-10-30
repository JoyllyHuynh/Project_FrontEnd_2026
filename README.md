# Project_FrontEnd_2026

## 1. Giới thiệu dự án

Dự án phát triển giao diện WebChat sử dụng ReactJS, phục vụ chức năng nhắn tin cá nhân, nhóm và các tính năng liên quan.

### Công nghệ sử dụng

| Công nghệ | Mục đích |
|---|---|
| ReactJS | Xây dựng giao diện |
| Vite | Khởi tạo và chạy dự án |
| JavaScript | Ngôn ngữ lập trình |
| Redux Toolkit | Quản lý trạng thái ứng dụng |
| React Redux | Kết nối React với Redux |
| React Router DOM | Điều hướng trang |
| Axios | Gọi API Backend |
| Lucide React | Thư viện icon |
| CSS | Thiết kế giao diện |

---

## 2. Yêu cầu môi trường

Trước khi bắt đầu, cần cài đặt các công cụ sau:

- **Node.js:** Môi trường chạy JavaScript.
- **npm:** Quản lý thư viện.
- **Git:** Quản lý mã nguồn.
- **Visual Studio Code:** IDE dùng để lập trình.

Kiểm tra cài đặt bằng các lệnh:

```bash
node -v
npm -v
git --version
```

Nếu các lệnh hiển thị phiên bản tương ứng thì môi trường đã sẵn sàng.

---

## 3. Khởi tạo dự án React bằng Vite

*Phần này dành cho thành viên muốn tìm hiểu hoặc tự khởi tạo một dự án React mới. Nếu chỉ muốn lấy source code hiện tại của nhóm, chuyển đến mục 4.*

### Bước 1: Tạo dự án

```bash
npm create vite@latest webchat -- --template react
```

### Bước 2: Di chuyển vào thư mục dự án

```bash
cd webchat
```

### Bước 3: Cài đặt thư viện mặc định

```bash
npm install
```

### Bước 4: Cài đặt các thư viện sử dụng trong dự án

```bash
npm install @reduxjs/toolkit react-redux
npm install react-router-dom
npm install axios
npm install lucide-react
```

### Bước 5: Mở dự án bằng VS Code

```bash
code .
```

### Bước 6: Chạy thử dự án

```bash
npm run dev
```

Mở địa chỉ được hiển thị trong Terminal, thông thường là:

```text
http://localhost:5173/
```

---

## 4. Clone source code từ GitHub

*Đây là quy trình dành cho thành viên tham gia phát triển dự án WebChat của nhóm.*

### Bước 1: Lấy đường dẫn repository

Truy cập repository GitHub của nhóm:

1. Chọn nút **Code**.
2. Chọn HTTPS.
3. Sao chép đường dẫn repository.

### Bước 2: Clone dự án

Mở Terminal tại thư mục muốn lưu dự án:

```bash
git clone <REPOSITORY_URL>
```

Thay `<REPOSITORY_URL>` bằng đường dẫn GitHub của nhóm.

### Bước 3: Di chuyển vào thư mục repository

```bash
cd Project_FrontEnd_2026
```

### Bước 4: Chuyển đến thư mục WebChat

Nếu source code WebChat nằm trong thư mục `webchat`:

```bash
cd webchat
```

### Bước 5: Kiểm tra các nhánh Git

```bash
git branch -a
```

### Bước 6: Chuyển sang nhánh được phân công

```bash
git switch <TEN_NHANH>
```

Nếu nhánh chưa tồn tại ở máy local nhưng đã có trên GitHub:

```bash
git switch -c <TEN_NHANH> origin/<TEN_NHANH>
```

### Bước 7: Cài đặt thư viện

```bash
npm install
```

Lệnh này sẽ tự động cài đặt các dependency được khai báo trong `package.json`.

**Lưu ý:** Không cần copy thư mục `node_modules` từ máy của thành viên khác.

### Bước 8: Mở dự án bằng VS Code

```bash
code .
```

### Bước 9: Khởi chạy dự án

```bash
npm run dev
```

Truy cập địa chỉ được hiển thị trong Terminal.

Để mở trực tiếp giao diện Chat, truy cập:

```text
http://localhost:5173/chat
```

Nếu Vite sử dụng cổng khác, hãy thay bằng địa chỉ thực tế được hiển thị trong Terminal.

---

## 5. Cập nhật source code mới nhất

Sau lần clone đầu tiên, khi muốn lấy code mới nhất từ GitHub, thực hiện:

### Bước 1: Kiểm tra nhánh hiện tại

```bash
git branch
```

### Bước 2: Chuyển sang nhánh cần cập nhật

```bash
git switch <TEN_NHANH>
```

### Bước 3: Pull code mới nhất

```bash
git pull origin <TEN_NHANH>
```

### Bước 4: Đồng bộ thư viện nếu có thay đổi

```bash
npm install
```

### Bước 5: Khởi chạy dự án

```bash
npm run dev
```

---

## 6. Các lệnh Git thường sử dụng

| Lệnh | Chức năng |
|---|---|
| `git status` | Kiểm tra trạng thái file |
| `git branch` | Xem nhánh hiện tại |
| `git branch -a` | Xem tất cả nhánh local và remote |
| `git switch <branch>` | Chuyển nhánh |
| `git pull origin <branch>` | Lấy code mới nhất |
| `git add <file>` | Đưa file vào staging |
| `git add .` | Đưa các thay đổi trong thư mục hiện tại vào staging |
| `git commit -m "message"` | Tạo commit |
| `git push origin <branch>` | Đẩy code lên GitHub |
| `git log --oneline -5` | Xem 5 commit gần nhất |

### Quy trình làm việc và đẩy code

```bash
git status

git add <FILE_CAN_COMMIT>

git commit -m "mo ta noi dung thay doi"

git push origin <TEN_NHANH>
```

**Lưu ý:** Trước khi pull hoặc chuyển nhánh, cần xử lý các thay đổi chưa commit để tránh mất dữ liệu.

---

## 7. Kiểm tra dự án trước khi hoàn thành công việc

### Kiểm tra lỗi build

```bash
npm run build
```

Nếu build thành công, Vite sẽ tạo thư mục `dist`.

### Chạy dự án ở chế độ phát triển

```bash
npm run dev
```

### Kiểm tra trạng thái Git

```bash
git status
```

---

## 8. Một số lưu ý quan trọng

1. Không đưa thư mục `node_modules` lên GitHub.
2. Không tự ý xóa file `package-lock.json`.
3. Không commit các file không thuộc phạm vi công việc được phân công.
4. Mỗi thành viên nên làm việc trên nhánh cá nhân được phân công.
5. Không tự ý push trực tiếp lên nhánh chính.
6. Trước khi bắt đầu làm việc, nên pull code mới nhất từ nhánh tương ứng.
7. Khi có thay đổi dependency, cần cập nhật `package.json` và `package-lock.json`.
8. Khi gặp lỗi trong quá trình chạy dự án, cần kiểm tra Terminal và Console của trình duyệt.

---

## 9. Quy trình làm việc tổng quát

```text
Cài đặt Node.js, Git, VS Code
              |
              v
       Clone Repository
              |
              v
       Chuyển sang nhánh
              |
              v
         npm install
              |
              v
         Mở VS Code
              |
              v
          npm run dev
              |
              v
       Phát triển chức năng
              |
              v
          Kiểm tra lỗi
              |
              v
          Git Commit
              |
              v
          Git Push
```

---

**Project:** Project_FrontEnd_2026  
**Frontend:** ReactJS + Vite  
**Package Manager:** npm  
**Version Control:** Git / GitHub

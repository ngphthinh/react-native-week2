# React Native - Week 2 Exercises

Dự án bài tập tuần 2 khóa học React Native, xây dựng bằng Expo (Expo Router) + TypeScript. Mỗi bài tập là một route riêng trong `src/app`, tập trung vào layout, accessibility, component tái sử dụng và form validation.

## Yêu cầu

- Node.js
- npm
- Expo Go (thiết bị thật) hoặc Android/iOS simulator

## Cài đặt & chạy

```bash
npm install
npx expo start
```

Từ output của Expo CLI, chọn cách mở app:

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go)

Hoặc chạy riêng từng nền tảng:

```bash
npm run android
npm run ios
npm run web
```

## Danh sách bài tập

Route của mỗi bài tập là `exercise-<n>`, ví dụ `/exercise-2`.

| Route      | File page       | Nội dung                                                                                                  |
| ---------- | --------------- | --------------------------------------------------------------------------------------------------------- |
| exercise-2 | `Exercise2Page` | Text wrapping: label dài, tăng fontSize, không dùng height cố định cho container chứa text                |
| exercise-3 | `Exercise3Page` | `CourseCard`: xử lý ảnh local/remote, ảnh lỗi, ảnh decorative vs informative, trường hợp không có ảnh     |
| exercise-4 | `Exercise4Page` | Bộ button dùng chung: `PrimaryButton`, `SecondaryButton`, `IconButton` với state default/disabled/loading |
| exercise-5 | `Exercise5Page` | `AnnouncementList`: danh sách thông báo có phân loại (category)                                           |
| exercise-6 | `Exercise6Page` | `AnnouncementSections`: nhóm và sắp xếp thông báo theo thời gian tạo                                      |
| exercise-7 | `Exercise7Page` | `CourseGrid`: so sánh layout dùng `flexBasis` và manual width                                             |
| exercise-8 | `Exercise8Page` | Form: đối chiếu `BrokenForm` (lỗi) và `FixedForm` (đã sửa)                                                |
| exercise-9 | `Exercise9Page` | `ValidationFormPage`: form có validate input theo `src/constants/validation.ts`                           |

## Cấu trúc thư mục

```
src/
├── app/          # Route Expo Router (exercise-2 → exercise-9, _layout)
├── page/         # Page component tương ứng mỗi route
├── components/
│   ├── exercise/ # Component riêng cho từng bài tập
│   └── ui/        # Component UI dùng chung
├── hooks/        # Custom hooks (color scheme, theme)
└── constants/    # Theme, validation rules, dữ liệu chia sẻ
```

## Ghi chú thêm

- Dùng [file-based routing](https://docs.expo.dev/router/introduction) của Expo Router.
- `npm run lint` để chạy ESLint (`expo lint`).
- `npm run reset-project` sẽ chuyển code hiện tại sang `app-example` và tạo `app` trống nếu muốn làm lại từ đầu.

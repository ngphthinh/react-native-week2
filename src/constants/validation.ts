// validation.ts
type ValidationResult = { valid: boolean; message?: string };

function validateName(name: string): ValidationResult {
  const trimmed = name.trim();
  if (trimmed.length === 0) {
    return {
      valid: false,
      message: "Họ tên không được để trống hoặc chỉ chứa khoảng trắng.",
    };
  }
  return { valid: true };
}

function validateStudentId(id: string): ValidationResult {
  const isEightDigits = /^\d{8}$/.test(id);
  if (!isEightDigits) {
    return {
      valid: false,
      message: `Mã sinh viên phải gồm đúng 8 chữ số, ví dụ: 21520123. Bạn đã nhập: "${id}".`,
    };
  }
  return { valid: true };
}

function validateEmail(email: string): ValidationResult {
  const basicShape = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!basicShape.test(email)) {
    return {
      valid: false,
      message:
        "Email chưa đúng định dạng. Vui lòng nhập theo dạng ten@truongdaihoc.edu.vn.",
    };
  }
  if (!email.endsWith("@student.edu.vn")) {
    return {
      valid: false,
      message:
        "Vui lòng dùng email trường (@student.edu.vn) để xác thực tài khoản sinh viên.",
    };
  }
  return { valid: true };
}

function validateSummary(summary: string, maxLength = 200): ValidationResult {
  if (summary.length > maxLength) {
    return {
      valid: false,
      message: `Ghi chú đang dài ${summary.length}/${maxLength} ký tự. Vui lòng rút gọn thêm ${
        summary.length - maxLength
      } ký tự.`,
    };
  }
  return { valid: true };
}

export { validateEmail, validateName, validateStudentId, validateSummary };

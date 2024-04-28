export default function authHeader() {
  if (typeof window !== "undefined" && window.localStorage) {
    const token = JSON.parse(localStorage.getItem("secretkey"));
    if (token) {
      return token;
    }
  }
  return null;
}

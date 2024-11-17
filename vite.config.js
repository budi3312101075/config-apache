import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  // this
  base: "/react-app", // Subfolder tempat aplikasi Anda dihosting
  plugins: [react()],
});

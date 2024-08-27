/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 5173, // Use the port provided by Render or fallback to 5173 locally
    host: true, // Expose the server to the network
  },
});

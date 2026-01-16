import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    server: {
      host: "::",
      port: 8080,
      hmr: {
        overlay: false,
      },
    },
    define: {
      'import.meta.env.VITE_SUPABASE_URL': JSON.stringify(env.VITE_SUPABASE_URL || 'https://sbhdxktqkcnovyoujjuo.supabase.co'),
      'import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY': JSON.stringify(env.VITE_SUPABASE_PUBLISHABLE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNiaGR4a3Rxa2Nub3Z5b3VqanVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg0NTk3MDYsImV4cCI6MjA4NDAzNTcwNn0.1RTlDHG_388z9WcegYrHESpCUpQwx9LXJ0FhvwqGK2c'),
      'import.meta.env.VITE_SUPABASE_PROJECT_ID': JSON.stringify(env.VITE_SUPABASE_PROJECT_ID || 'sbhdxktqkcnovyoujjuo'),
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (!id.includes("node_modules")) {
              return;
            }
            if (id.includes("react")) {
              return "react-vendor";
            }
            if (id.includes("@radix-ui")) {
              return "radix-ui";
            }
            if (id.includes("supabase")) {
              return "supabase";
            }
            if (id.includes("i18next")) {
              return "i18n";
            }
            return "vendor";
          },
        },
      },
    },
  };
});

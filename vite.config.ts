import { defineConfig, loadEnv, UserConfigExport, ConfigEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default ({ mode }: ConfigEnv): UserConfigExport => {
  process.env = {
    ...process.env,
    ...loadEnv(mode, process.cwd()),
  };

  return defineConfig({
    // Required for Capacitor / Android
    base: './',

    plugins: [react()],

    build: {
      outDir: 'dist',
      chunkSizeWarningLimit: 2000,
      rollupOptions: {
        output: {
          manualChunks: {
            lodash: ['lodash'],
            vendor: ['react', 'react-dom'],
          },
        },
      },
    },

    server: {
      port: parseInt(process.env.VITE_PORT || '5173'),
      open: true,
    },
  });
};

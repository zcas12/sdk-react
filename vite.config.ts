import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
    server: {
        port: 3000, // 사용하고자 하는 포트 번호로 변경
    },
    plugins: [react(),dts()],
    resolve: {
        alias: {
            '@': '/src',
        },
    },
})
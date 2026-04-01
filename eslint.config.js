import eslint from "eslint"
import { defineConfig } from "eslint/config"
import tseslint from 'typescript-eslint'

export default defineConfig({
    extends: [
        eslint.configs.recommended,
        tseslint.configs.recommended
    ]
})
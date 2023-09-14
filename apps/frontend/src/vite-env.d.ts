/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_PUBLIC_NESTJS_SERVER: string
    readonly VITE_REPO_URL: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
export { }

declare global {
    type T_Image = {
        alt: string;
        src: string;
        title: string;
    }

    type T_Link = {
        label: string;
        uri: string;
    }

    type T_ServiceVariant = 'seo' | 'website' | 'automate'

    type T_ThemeMode = 'light' | 'dark' | 'system'

    type T_ProgrammingLanguage = 'javascript' | 'typescript' | 'python' | 'java' | 'c' | 'cpp' | 'csharp' | 'php' | 'ruby' | 'go' | 'swift' | 'kotlin' | 'rust' | 'sql' | 'bash' | 'html' | 'css' | 'json' | 'yaml' | 'xml' | 'powershell' | 'perl' | 'r' | 'dart' | 'lua' | 'tsx' | 'jsx' | 'scss' | 'sass' | 'less' | 'stylus' | 'markdown' | 'json5' | 'toml' | 'ini' | 'react_tsx' | 'react_jsx'
}
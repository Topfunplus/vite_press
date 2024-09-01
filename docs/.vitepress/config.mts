import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: '😎Study React Quickly',
    description: '该文档能够帮你快速入门React开发',
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: '首页', link: '/'},
            {text: 'React 语法学习', link: '/markdown-examples'},
            {text: 'React API学习', link: '/api-examples'},
            {text: 'echarts 学习', link: '/echarts'},
        ],

        sidebar: [
            {
                text: '目录',
                items: [
                    {text: 'React 语法学习', link: '/markdown-examples'},
                    {text: 'React API学习', link: '/api-examples'},
                    {text: 'echarts 学习', link: '/echarts'},
                ],
            },
        ],

        socialLinks: [{icon: 'github', link: 'https://github.com/Topfunplus'}],
    },
})

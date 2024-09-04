// @ts-ignore
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '天明的博客😎',
  description: '"action speaks louder than words"',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: 'React 语法学习', link: '/markdown-examples' },
      { text: 'React API学习', link: '/api-examples' },
      { text: 'echarts 学习', link: '/echarts' },
      { text: 'jenkins', link: '/jenkins' },
      { text: 'docker', link: '/docker' },
    ],

    sidebar: [
      {
        text: '目录',
        items: [
          { text: 'React 语法学习', link: '/markdown-examples' },
          { text: 'React API学习', link: '/api-examples' },
          { text: 'echarts 学习', link: '/echarts' },
          { text: 'jenkins 学习', link: '/jenkins' },
          { text: 'docker 学习', link: '/docker' },
          { text: 'xhr_fetch', link: '/xhr_fetch' },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/Topfunplus' }],
  },
})

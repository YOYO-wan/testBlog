import {NavItem} from "vuepress/config";

export default [
    {
        text: "前端基础知识",
        link: '/前端基础知识/',
        items: [
            {
                text: "前端工程化", link: "/前端基础知识/#前端工程化",
            },
            {
                text: "JavaScript", link: "/前端基础知识/#javascript",
            },
        ]
    },
    {
        text: "vue3学习笔记",
        link: '/vue3学习笔记/'
    },
    {
        text: "工具用法",
        link: '/工具用法/'
    },
] as NavItem[];

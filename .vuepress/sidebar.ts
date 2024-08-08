import {SidebarConfig4Multiple} from "vuepress/config";

import basicKnowledgeSideBar from "./sidebars/basicKnowledgeSideBar";
import toolUsageSideBar from "./sidebars/toolUsageSideBar";
import frameVueSideBar from "./sidebars/frameVueSideBar";

// @ts-ignore
export default {
    "/前端基础知识/": basicKnowledgeSideBar,
    "/vue3学习笔记/": frameVueSideBar,
    "/工具用法/": toolUsageSideBar,
    // 降级，默认根据文章标题渲染侧边栏
    "/": "auto",
} as SidebarConfig4Multiple;

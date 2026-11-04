// 文件：js/tab.js — 可复用的 Tab 选项卡组件
// 规范：全部变量与函数名以 nzw_ 开头（课程命名规范）
// 复用方法：页面里放任意多个 class="nzw_tabGroup" 的容器，
// 每个容器内包含 .nzw_tabBtn 按钮（用 data-nzw-panel 指向对应面板 id）
// 与 .nzw_tabPanel 面板，脚本会自动逐一初始化，无需重复写逻辑。

// 初始化一个选项卡组件：为 root 容器内的每个选项卡按钮绑定监听事件
function nzw_initTabs(nzw_root) {
    var nzw_btns = nzw_root.querySelectorAll(".nzw_tabBtn");
    var nzw_panels = nzw_root.querySelectorAll(".nzw_tabPanel");

    // 切换选中状态：先清除所有选项卡与面板的选中状态，再设置当前元素的选中状态
    function nzw_activate(nzw_btn) {
        nzw_btns.forEach(function (nzw_b) {
            nzw_b.classList.remove("nzw_isActive");
            nzw_b.setAttribute("aria-selected", "false");
        });
        nzw_panels.forEach(function (nzw_p) {
            nzw_p.classList.remove("nzw_isActive");
        });

        nzw_btn.classList.add("nzw_isActive");
        nzw_btn.setAttribute("aria-selected", "true");

        var nzw_target = nzw_root.querySelector("#" + nzw_btn.getAttribute("data-nzw-panel"));
        if (nzw_target) {
            nzw_target.classList.add("nzw_isActive");
        }
    }

    // 监听事件：点击选项卡按钮即触发切换
    nzw_btns.forEach(function (nzw_btn) {
        nzw_btn.addEventListener("click", function () {
            nzw_activate(nzw_btn);
        });
    });

    return { activate: nzw_activate };
}

// 自动初始化页面上所有选项卡组件（可复用的关键：遍历每个分组容器）
document.querySelectorAll(".nzw_tabGroup").forEach(function (nzw_group) {
    nzw_initTabs(nzw_group);
});

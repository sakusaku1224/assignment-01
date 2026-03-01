// タブを取得
const tabs = document.querySelectorAll(".ai-system__tab");
const panels = document.querySelectorAll(".ai-system__panel");

// クリックイベントを追加
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // 全部のタブから active を外す
    tabs.forEach((t) => t.classList.remove("is-active"));

    // 全部のパネルを非表示にする
    panels.forEach((p) => p.classList.remove("is-active"));

    // クリックしたタブに active を付ける
    tab.classList.add("is-active");

    // 対応するパネルを表示する
    const target = tab.dataset.tab;
    const panel = document.querySelector(`[data-panel="${target}"]`);
    panel.classList.add("is-active");
  });
});

async function updateStats() {
            try {
                // 讀取由 GitHub Action 每小時更新的 data.json
                const res = await fetch('./data.json?t=' + Date.now());
                const data = await res.json();

                if (data.games) {
                    // 更新 VALORANT
                    document.getElementById('val-rank').innerText = data.games.valorant || "Unranked";
                    document.getElementById('val-elo').innerText = data.games.val_elo || "0";

                    // 更新 Minecraft
                    document.getElementById('mc-server').innerText = "InySMP";
                    document.getElementById('mc-status-text').innerText = "● " + (data.games.minecraft || "Offline");
                    document.getElementById('mc-motd').innerText = data.games.mc_motd || "Server details updated daily.";
                    
                    // 更新時間
                    document.getElementById('last-updated').innerText = "Last Sync: " + data.last_updated;
                }
            } catch (err) {
                console.error("無法載入即時數據:", err);
                document.getElementById('mc-status-text').innerText = "● Status Sync Error";
            }
        }

        window.onload = updateStats;

// 每 30 秒前端檢查一次本地 data.json 是否更新
setInterval(refreshGameData, 30000);
window.onload = refreshGameData;
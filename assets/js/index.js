fetch('./data.json').then(res => res.json()).then(data => {
            const container = document.getElementById('activity-log');
            container.innerHTML = data.github_activity.map(event => `
                <div class="group border-l-2 border-white/20 pl-4 py-2 hover:border-purple-300 transition-all">
                    <div class="text-xs text-purple-200/70">${event.created_at.split('T')[0]}</div>
                    <div class="text-white/90 group-hover:text-white transition">${event.payload.commits[0].message}</div>
                </div>
            `).join('');
        });
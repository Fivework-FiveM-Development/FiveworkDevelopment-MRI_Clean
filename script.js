// Fivework Hub - Interactive Visual Master Script

const scriptData = {
    fivework: [
        { name: 'fivework_combat', desc: 'Sistema de Sling (armas no corpo) com gerenciamento de danos e integração Ox.' },
        { name: 'fivework_horarioassalto', desc: 'Controle estratégico de roubos por zonas e horários in-game.' },
        { name: 'fivework_shop', desc: 'Portal de vendas automático com entrega de Coins via gateway.' },
        { name: 'fivework_loadscreen', desc: 'Tela de carregamento moderna e editável com identidade Fivework.' }
    ],
    mri: [
        { name: 'mri_Qbackpack', desc: 'Sistema de mochilas persistentes com metadados e limites de peso realistas.' },
        { name: 'mri_Qpets', desc: 'Interatividade avançada com animais de estimação, ordens e lealdade.' },
        { name: 'mri_Qjobcenter', desc: 'Central de empregos modular com progressão, fardamento e ranks.' },
        { name: 'mri_Qcrafting', desc: 'Bancadas de criação para itens legais e ilegais com blueprints raros.' },
        { name: 'mri_Qfleecaheist', desc: 'Heist de bancos Fleeca com hacking, termite e recompensas dinâmicas.' },
        { name: 'mri_Qminigames', desc: 'Suíte de minijogos exclusivos para interações, heists e invasões.' },
        { name: 'mri_Qpaints', desc: 'Pintura automotiva avançada com cores metálicas e peroladas.' },
        { name: 'mri_Qsafezones', desc: 'Zonas seguras com controle de velocidade e restrição total de armas.' },
        { name: 'mri_Qstorerobbery', desc: 'Roubos a lojas sincronizados com alarmes e reforços policiais.' },
        { name: 'mri_Qcarkeys', desc: 'Chaves de veículos com trava remota e sistema de hotwire.' }
    ],
    core: [
        { name: 'qbx_core', desc: 'Núcleo otimizado com Bridge QB, garantindo compatibilidade total.' },
        { name: 'qbx_adminmenu', desc: 'Menu administrativo premium com logs de webhook e moderação.' },
        { name: 'qbx_bankrobbery', desc: 'Configuração master de assaltos a banco com sincronização.' },
        { name: 'qbx_properties', desc: 'Imóveis com sistema de móveis in-game e garagens próprias.' },
        { name: 'qbx_radialmenu', desc: 'Menu circular rápido para emotes e ações de veículo.' },
        { name: 'qbx_management', desc: 'Sistema de faturas e contratações para empresas.' },
        { name: 'qbx_vehicleshop', desc: 'Concessionária com suporte a veículos Addon e financiamento.' },
        { name: 'qbx_idcard', desc: 'Documentos visuais integrados ao sistema de licenças.' }
    ],
    visual: [
        { name: 'burguershot_map', desc: 'Interior detalhado com cozinha funcional e balcão.' },
        { name: 'fib_interior', desc: 'Sede da FIB com andares completos para roleplay de investigação.' },
        { name: 'sasp_hq', desc: 'Mapeamento premium para o Comando Geral da Polícia.' },
        { name: 'goe_training', desc: 'Campo de treinamento tático para operações especiais.' },
        { name: 'mafia_mansion', desc: 'Mansão fortificada com arsenal escondido e bunker.' }
    ],
    standalone: [
        { name: 'npwd', desc: 'Smartphone ultra-moderno (NPWD) com suporte a aplicativos e mídias.' },
        { name: 'ps-hud', desc: 'HUD circular otimizada com indicador de direção e estresse.' },
        { name: 'pma-voice', desc: 'Sistema de voz cristalino com suporte a rádio de 1000 canais.' },
        { name: 'ox_inventory', desc: 'Inventário profissional com suporte a metadados e craft.' },
        { name: 'illenium-appearance', desc: 'Menu de criação de personagem definitivo com suporte a Addon.' }
    ]
};

const terminalLogs = [
    "[INFO] Starting Fivework Hub Bootstrap...",
    "[SUCCESS] SQL Connection Stablished: MariaDB 10.11",
    "[INFO] Initializing [Fivework] Resource Suite...",
    "[FIVEWORK] fivework_combat: Loaded version 2.4.1",
    "[FIVEWORK] fivework_shop: Payment Gateway [Active]",
    "[INFO] Loading MRI Modules (52 resources)...",
    "[MRI] mri_Qbox: Framework Sync [OK]",
    "[MRI] mri_Qinventory: Settings (50 slots, 85kg) Loaded",
    "[INFO] Checking Game-Build Support: 3251 Verified",
    "[SUCCESS] Fivework Hub Initialized in 34ms.",
    "------------------------------------------",
    "ROOT@FW-HUB:~$ system_status --check",
    "Resmon: 0.3ms [OPTIMAL]",
    "Uptime: 99.98% / SLA Active",
    "Fivework Hub READY."
];

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mouse Tracking Glow & Custom Dot
    const cursorGlow = document.getElementById('cursor-glow');
    const cursorDot = document.getElementById('cursor-dot');
    
    document.addEventListener('mousemove', (e) => {
        // Smooth positioning
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
        
        cursorDot.style.left = e.clientX + 'px';
        cursorDot.style.top = e.clientY + 'px';
    });

    // Hover Scaling for Interactive Elements
    const interactives = document.querySelectorAll('a, button, .tab-btn, .exclusive-card');
    interactives.forEach(el => {
        el.addEventListener('mouseenter', () => cursorDot.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursorDot.classList.remove('hover'));
    });

    // 2. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. Library Tab Handling
    const tabBtns = document.querySelectorAll('.tab-btn');
    const container = document.getElementById('script-container');

    function loadScripts(category) {
        container.innerHTML = '';
        scriptData[category].forEach((s, index) => {
            const el = document.createElement('div');
            el.className = 'script-box card-glass';
            el.style.animationDelay = `${index * 0.1}s`;
            el.innerHTML = `<h4>${s.name}</h4><p>${s.desc}</p>`;
            container.appendChild(el);
        });
    }

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            loadScripts(btn.getAttribute('data-tab'));
        });
    });

    loadScripts('fivework');

    // 4. Terminal Simulation
    const terminalBody = document.getElementById('terminal-logs');
    let logIndex = 0;

    function typeLog() {
        if (logIndex < terminalLogs.length) {
            const line = document.createElement('div');
            line.className = 'terminal-line';
            line.innerHTML = `<span class="prompt">></span> ${terminalLogs[logIndex]}`;
            terminalBody.appendChild(line);
            terminalBody.scrollTop = terminalBody.scrollHeight;
            logIndex++;
            setTimeout(typeLog, 250);
        }
    }

    // 5. Scroll Reveal Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                if (entry.target.id === 'features') {
                    typeLog(); // Start terminal logs when section visible
                }
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section').forEach(s => observer.observe(s));
});

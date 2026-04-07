// Fivework Hub - Feature Complete Interaction Script

const scriptData = {
    mri: [
        { name: 'mri_Qbackpack', desc: 'Sistema de mochilas persistentes com metadados e limites de peso.' },
        { name: 'mri_Qpets', desc: 'Interatividade avançada com animais de estimação, ordens e lealdade.' },
        { name: 'mri_Qjobcenter', desc: 'Central de empregos modular com progressão e ranks.' },
        { name: 'mri_Qcrafting', desc: 'Bancadas de criação para itens legais e ilegais com blueprints.' },
        { name: 'mri_Qfleecaheist', desc: 'Sistema de roubo a bancos Fleeca com hacking e recompensas dinâmicas.' },
        { name: 'mri_Qminigames', desc: 'Suíte de minijogos exclusivos para interações e invasões.' },
        { name: 'mri_Qpaints', desc: 'Sistema de pintura automotiva avançado com cores metálicas e foscas.' },
        { name: 'mri_Qsafezones', desc: 'Zonas seguras com controle de velocidade e restrição de armas.' },
        { name: 'mri_Qstorerobbery', desc: 'Roubos a lojas de conveniência sincronizados e imersivos.' },
        { name: 'mri_Qcarkeys', desc: 'Sistema de chaves de veículos com trava remota e alarmes.' }
    ],
    core: [
        { name: 'qbx_core', desc: 'Núcleo do framework QBox, otimizado para alta performance e modularidade.' },
        { name: 'qbx_adminmenu', desc: 'Menu administrativo completo para gestão de jogadores e servidor.' },
        { name: 'qbx_bankrobbery', desc: 'Gerenciador de assaltos a banco com sincronização global.' },
        { name: 'qbx_properties', desc: 'Sistema de moradias com decoração in-game e garagens.' },
        { name: 'qbx_radialmenu', desc: 'Menu radial intuitivo para interações rápidas e emotes.' },
        { name: 'qbx_management', desc: 'Gestão de empresas, faturas e contratações para empregos.' },
        { name: 'qbx_vehicleshop', desc: 'Concessionária completa com test-drive e parcelamento.' },
        { name: 'qbx_idcard', desc: 'Sistema de identidades visuais e documentos de motorista.' }
    ],
    visual: [
        { name: 'addon_mapaburguershot', desc: 'Mapeamento premium para o restaurante Burguer Shot.' },
        { name: 'fibv', desc: 'Interior completo para a sede da Polícia Federal.' },
        { name: 'gabz_sheriff', desc: 'Delegacia do Sheriff (SASP) detalhada para Roleplay policial.' },
        { name: 'dp_rdshop_goe', desc: 'Centro de treinamento e base para operações especiais (GOE).' },
        { name: 'ballasint / vaggosint', desc: 'Interiores exclusivos para as sedes das gangues principais.' },
        { name: 'addon_motoburguershot', desc: 'Veículo exclusivo para entregas do Burguer Shot.' }
    ],
    standalone: [
        { name: 'lb-phone', desc: 'Smartphone premium com diversos aplicativos e suporte a mídias.' },
        { name: 'ps-hud', desc: 'HUD moderna e minimalista com indicadores de saúde e veículos.' },
        { name: 'pma-voice', desc: 'Sistema de voz com áudio nativo 3D e rádios configuráveis.' },
        { name: 'illenium-appearance', desc: 'Customização avançada de personagem com suporte a roupas addon.' },
        { name: 'Renewed-Weathersync', desc: 'Sincronização de clima e horário com transições suaves.' },
        { name: 'ox_inventory', desc: 'O melhor sistema de inventário atual, com metadados e segurança total.' }
    ]
};

const commandData = {
    staff: [
        { cmd: '/admin', desc: 'Abre o menu administrativo principal' },
        { cmd: '/report [msg]', desc: 'Envia um reporte direto para a Staff' },
        { cmd: '/tp [id]', desc: 'Teleporta para um jogador ou coordenada' },
        { cmd: '/tpm', desc: 'Teleporta para o ponto marcado no GPS' },
        { cmd: '/car [modelo]', desc: 'Cria um veículo pelo nome do modelo' },
        { cmd: '/dv', desc: 'Deleta o veículo atual ou próximo' },
        { cmd: '/fix', desc: 'Repara o veículo completamente' },
        { cmd: '/givemoney [id] [valor]', desc: 'Dá dinheiro a um jogador específico' },
        { cmd: '/setjob [id] [job] [rank]', desc: 'Define o emprego de um cidadão' },
        { cmd: '/setgang [id] [gang] [rank]', desc: 'Define a gangue de um cidadão' }
    ],
    player: [
        { cmd: '/ooc [msg]', desc: 'Chat Global Fora de Personagem' },
        { cmd: '/me [ação]', desc: 'Descreve uma ação do personagem localmente' },
        { cmd: '/id', desc: 'Mostra seu número de identificação atual' },
        { cmd: '/job', desc: 'Exibe seu emprego e cargo atual no chat' },
        { cmd: '/gang', desc: 'Exibe sua organização criminosa atual' },
        { cmd: '/photomode', desc: 'Ativa o modo fotografia com controles de câmera' },
        { cmd: '/vol [0-100]', desc: 'Define o volume geral da voz de terceiros' },
        { cmd: '/cycleproximity', desc: 'Alterna entre Grave, Normal e Grito' },
        { cmd: '/logout', desc: 'Retorna para a tela de seleção de personagens' }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Library Tab Population
    const tabBtns = document.querySelectorAll('.tab-btn');
    const scriptGrid = document.getElementById('script-container');

    function populateLibrary(category) {
        scriptGrid.innerHTML = '';
        scriptData[category].forEach(script => {
            const el = document.createElement('div');
            el.className = 'script-box results-fade';
            el.innerHTML = `<h4>${script.name}</h4><p>${script.desc}</p>`;
            scriptGrid.appendChild(el);
        });
    }

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            populateLibrary(btn.getAttribute('data-tab'));
        });
    });

    // Initial Load
    populateLibrary('mri');

    // Scroll Reveal
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section').forEach(s => sectionObserver.observe(s));
});

// Terminal Simulation Logic
function showCommands(type) {
    const resultsDiv = document.getElementById('command-results');
    resultsDiv.innerHTML = '';
    
    // Typing simulation
    const loadingLine = document.createElement('div');
    loadingLine.className = 'line';
    resultsDiv.appendChild(loadingLine);
    
    let text = `$ fetch-data --category=${type.toUpperCase()}...`;
    let i = 0;
    
    const interval = setInterval(() => {
        loadingLine.textContent += text[i];
        i++;
        if (i >= text.length) {
            clearInterval(interval);
            setTimeout(() => {
                renderTable(type);
            }, 300);
        }
    }, 20);

    function renderTable(type) {
        let html = '<table class="terminal-table results-fade"><thead><tr><th>COMANDO</th><th>DETALHE</th></tr></thead><tbody>';
        commandData[type].forEach(item => {
            html += `<tr><td>${item.cmd}</td><td>${item.desc}</td></tr>`;
        });
        html += '</tbody></table>';
        resultsDiv.innerHTML += html;
    }
}

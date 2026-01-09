/**
 * BPSDA PREMIUM SYSTEM - MULTI-LEVEL (RECURSIVE)
 * Support Infinite Nesting Menus (OP -> DI -> Menu -> Data)
 */

// ==========================================
// 1. ICON LIBRARY
// ==========================================
const iconLibrary = {
    'map': '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
    'database': '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>',
    'calendar': '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
    'check-circle': '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
    'trending-up': '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>',
    'bar-chart': '<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>',
    'activity': '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',
    'box': '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>',
    'wind': '<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/>',
    'cloud-rain': '<line x1="16" y1="13" x2="16" y2="21"/><line x1="8" y1="13" x2="8" y2="21"/><line x1="12" y1="15" x2="12" y2="23"/><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"/>',
    'file-text': '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>',
    'map-pin': '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
    'alert-triangle': '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
    'users': '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    'info': '<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>',
    'package': '<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>',
    'layers': '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
    'dollar-sign': '<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
    'globe': '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
    'target': '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
    'inbox': '<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>',
    'send': '<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>',
    'clipboard': '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>'
};

const getIcon = (name) => iconLibrary[name] || iconLibrary['box'];

// ==========================================
// 2. HELPER UNTUK GENERATE MENU (Biar kodingan tidak panjang)
// ==========================================

// Daftar 13 Daerah Irigasi
const daftarDI = [
    'Andongbang', 'Arca', 'Banjaran', 'Bodag', 'Buniayu', 'Cijalu', 
    'Cilemeuh', 'Dwicupaksari', 'Embung Danasri', 'Kalisapi', 'Kebasen', 'Krenceng', 'Piasa'
];

// Template Menu di dalam setiap DI (OP)
const menuDalamDI = [
    { 
        id: 'data_irigasi', label: 'Data Irigasi', icon: 'database',
        subMenus: [
            { id: 'peta_irigasi', label: 'Peta Irigasi', icon: 'map' },
            { id: 'sistem_irigasi', label: 'Sistem Irigasi', icon: 'layers' },
            { id: 'skema_bangunan', label: 'Skema Bangunan', icon: 'file-text' },
            { id: 'inventaris_bangunan', label: 'Inventaris Bangunan', icon: 'box' },
            { id: 'intek_irigasi', label: 'Intek Irigasi', icon: 'target' }
        ]
    },
    { 
        id: 'pola_tanam', label: 'Pola Tanam', icon: 'calendar',
        subMenus: [
            // Menu Tahun sederhana
            { id: 'rencana_tanam', label: 'Rencana Tanam', icon: 'file-text' },
            { id: 'realisasi_tanam', label: 'Realisasi Tanam', icon: 'check-circle' }
        ]
    },
    { 
        id: 'realisasi_tanam_menu', label: 'Realisasi Tanam', icon: 'check-circle',
        subMenus: [
            { id: 'bagan_realisasi', label: 'Bagan Realisasi', icon: 'bar-chart' },
            { id: 'data_realisasi', label: 'Data Realisasi', icon: 'database' }
        ]
    },
    { 
        id: 'produktivitas', label: 'Produktivitas', icon: 'trending-up',
        subMenus: [
            { id: 'hasil_pertanian', label: 'Hasil Pertanian', icon: 'package' },
            { id: 'realisasi_prod', label: 'Realisasi Tanam', icon: 'check-circle' },
            { id: 'indeks_pertanaman', label: 'Indeks Pertanaman', icon: 'activity' }
        ]
    },
    { 
        id: 'iksi', label: 'IKSI & Kondisi Fisik', icon: 'activity',
        subMenus: [
            { id: 'sistem_irigasi_iksi', label: 'Sistem Irigasi', icon: 'layers' }
        ]
    },
    { 
        id: 'inventarisasi_tanaman', label: 'Inventarisasi Tanaman', icon: 'clipboard',
        subMenus: [
            { id: 'kerusakan_irigasi', label: 'Kerusakan Irigasi', icon: 'alert-triangle' }
        ]
    }
];

// Fungsi Helper membuat struktur DI
const generateDIMenus = () => {
    return daftarDI.map((nama, index) => ({
        id: nama.toLowerCase().replace(/\s+/g, '_'),
        label: `D.I. ${nama}`,
        icon: 'map-pin',
        subMenus: menuDalamDI // Masukkan menu dalam (Data Irigasi dll) ke setiap DI
    }));
};

// ==========================================
// 3. DATABASE CONFIGURATION (NESTED)
// ==========================================
const db = {
    // === OP (OPERASI & PEMELIHARAAN) ===
    op: {
        id: 'op',
        title: 'OP',
        fullName: 'Operasi & Pemeliharaan',
        desc: 'Manajemen 13 Daerah Irigasi & Infrastruktur.',
        theme: 'op',
        icon: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
        // Level 2: 13 Daerah Irigasi
        subMenus: generateDIMenus() 
    },

    // === DALGUNA (PENGENDALIAN & PENGGUNAAN) ===
    dalguna: {
        id: 'dalguna',
        title: 'DALGUNA',
        fullName: 'Pengendalian & Penggunaan',
        desc: 'Perijinan, Rekomtek & Kebencanaan.',
        theme: 'dalguna',
        icon: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>',
        subMenus: [
            { 
                id: 'inv_bencana', label: 'Inventarisasi Bencana', icon: 'alert-triangle',
                subMenus: [
                    { id: 'sungai', label: 'Data Kejadian Bencana', icon: 'wind' },
                    { id: 'inv_pertahun', label: ' Data Penanganan', icon: 'calendar' }
                ]
            },
            { 
                id: 'hidrologi', label: 'Hidrologi', icon: 'cloud-rain',
                subMenus: [
                    { id: 'debit', label: 'Debit Air', icon: 'activity' },
                    { id: 'pdab', label: 'PDAB', icon: 'database' },
                    { id: 'curah_hujan', label: 'Curah Hujan', icon: 'cloud-rain' },
                    { id: 'kualitas_air', label: 'Kualitas Air', icon: 'check-circle' }
                ]
            },
            { 
                id: 'perizinan', label: 'Perizinan', icon: 'file-text'
                // Tidak ada subMenus, berarti langsung tabel data
            },
            { 
                id: 'tata_ruang', label: 'Tata Ruang', icon: 'map',
                // Tata ruang berisi 13 DI juga
                subMenus: daftarDI.map(nama => ({
                    id: `tr_${nama.toLowerCase().replace(/\s+/g, '_')}`,
                    label: `Tata Ruang ${nama}`,
                    icon: 'map-pin'
                }))
            }
        ]
    },

    // === TU (TATA USAHA) - Tetap Standar ===
    tu: {
        id: 'tu',
        title: 'TATA USAHA',
        fullName: 'Tata Usaha & Kepegawaian',
        desc: 'Administrasi, Kepegawaian & Aset.',
        theme: 'tu',
        icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>',
        subMenus: [
            { id: 'pegawai', label: 'Data Pegawai', icon: 'users' },
            { id: 'profil', label: 'Profil Balai', icon: 'info' },
            { id: 'barang', label: 'Inventarisasi Barang', icon: 'package' }
        ]
    },

    // === PETA GIS - Tetap Standar ===
    peta: {
        id: 'peta',
        title: 'PETA LIVE',
        fullName: 'Sistem Informasi Geografis',
        desc: 'Peta Tematik & Sebaran Aset.',
        theme: 'peta',
        icon: '<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/>',
        isMapParent: true,
        subMenus: [
            { id: 'map_irigasi', label: 'Peta Irigasi', icon: 'map' },
            { id: 'map_sungai', label: 'Peta Sungai', icon: 'wind' },
            { id: 'map_hidro', label: 'Peta Hidrologi', icon: 'cloud-rain' },
            { id: 'inv_asset', label: 'Inventarisasi Aset', icon: 'target' },
            { id: 'inv_asset', label: 'Peta Tata Ruang ', icon: 'map' },
            { id: 'inv_asset', label: 'Ploating PPA APBD', icon: 'users' },
            { id: 'inv_asset', label: 'Ploating PPA APBN ', icon: 'users' }
        ]
    },

    // === ARSIP - Tetap Standar ===
    arsip: {
        id: 'arsip',
        title: 'ARSIP BALAI',
        fullName: 'E-Arsip Digital',
        desc: 'Penyimpanan & Manajemen Dokumen.',
        theme: 'arsip',
        icon: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>',
        subMenus: [
            { id: 'surat_masuk', label: 'Surat Masuk', icon: 'inbox' },
            { id: 'surat_keluar', label: 'Surat Keluar', icon: 'send' },
            { id: 'laporan', label: 'Laporan Bulanan', icon: 'clipboard' }
        ]
    }
};

// ==========================================
// 4. APPLICATION LOGIC (RECURSIVE ENGINE)
// ==========================================
const app = {
    state: {
        currentView: 'dashboard', 
        historyStack: [], // Tumpukan navigasi untuk Back Button Logic
        mapInstance: null
    },

    els: {},

    init() {
        this.els = {
            dashSection: document.getElementById('view-dashboard'),
            subSection: document.getElementById('view-subag'),
            nav: document.getElementById('nav-controls'),
            breadcrumb: document.getElementById('breadcrumb-active'),
            subagListContainer: document.getElementById('subag-list-container'),
            subagMenuContainer: document.getElementById('subag-menu-container'),
            mapContainer: document.getElementById('map-container'),
            dashboardGrid: document.getElementById('dashboard-grid'),
            modal: document.getElementById('modal-detail'),
            modalTitle: document.getElementById('modal-title'),
            modalBody: document.getElementById('modal-body')
        };

          this.initScrollObserver();

        if (!this.els.dashSection) return;

        // Start App
        this.handleRouting();

        // System Back Button
        window.addEventListener('popstate', () => this.handleRouting());

        this.updateDateBadge();
      
    },

    initScrollObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        // Observe elemen yang ada saat init
        const els = document.querySelectorAll('.card, .hero-card');
        els.forEach(el => {
            el.classList.add('reveal-on-scroll');
            observer.observe(el);
        });
        
        // Simpan observer di state untuk dipakai nanti saat render dynamic
        this.state.observer = observer;
    },

    // --- ROUTING ENGINE ---
    handleRouting() {
        const params = new URLSearchParams(window.location.search);
        const path = params.get('path'); // Format: op/andongbang/data_irigasi

        if (!path) {
            this.renderDashboard();
            return;
        }

        const keys = path.split('/');
        const rootKey = keys[0];
        const rootData = db[rootKey];

        if (!rootData) {
            this.renderDashboard();
            return;
        }

        // Traverse (Menelusuri) data berdasarkan path
        let currentItem = rootData;
        let breadcrumbs = [rootData.fullName];
        let found = true;

        for (let i = 1; i < keys.length; i++) {
            if (currentItem.subMenus) {
                const nextItem = currentItem.subMenus.find(m => m.id === keys[i]);
                if (nextItem) {
                    currentItem = nextItem;
                    breadcrumbs.push(nextItem.label);
                } else {
                    found = false;
                    break;
                }
            } else {
                found = false;
                break;
            }
        }

        if (found) {
            // Tentukan mau render Grid Menu atau Data Tabel
            if (currentItem.subMenus) {
                this.renderSubMenuGrid(currentItem, breadcrumbs, rootData.theme);
            } else {
                if (rootData.isMapParent) {
                    this.renderMap(currentItem, breadcrumbs);
                } else {
                    this.renderDataTable(currentItem, breadcrumbs);
                }
            }
        } else {
            this.renderDashboard();
        }
    },

    // --- NAVIGATOR HELPER ---
    navigateTo(newPath) {
        const url = `${window.location.pathname}?path=${newPath}`;
        window.history.pushState({ path: newPath }, '', url);
        this.handleRouting();
    },

    goBack() {
        window.history.back();
    },

    // --- RENDERERS ---

    renderDashboard() {
        this.state.currentView = 'dashboard';
        this.els.dashSection.classList.add('active');
        this.els.subSection.classList.remove('active');
        this.els.nav.classList.remove('active');
        this.els.breadcrumb.textContent = 'Dashboard';

        const grid = this.els.dashboardGrid;
        grid.innerHTML = '';

        Object.values(db).forEach((item, index) => {
            const card = document.createElement('div');
            card.className = `card ${item.theme} reveal-on-scroll`;
            card.style.animationDelay = `${index * 100}ms`;
            
            // Hitung total item jika ada
            let countLabel = item.subMenus ? `${item.subMenus.length} Menu` : 'Data';
            if (item.id === 'op') countLabel = '13 D.I.';

            card.innerHTML = `
                <div class="card-header-logo">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
                </div>
                <div class="card-content">
                    <div class="card-icon-box">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${item.icon}</svg>
                    </div>
                    <div class="card-meta">
                        <h3>${item.title}</h3>
                        <span style="opacity: 0.8;">${countLabel}</span>
                    </div>
                </div>
                <div class="card-arrow">→</div>
            `;
            card.onclick = () => this.navigateTo(item.id);
            grid.appendChild(card);
            
            if(this.state.observer) this.state.observer.observe(card);
        });
    },

    renderSubMenuGrid(item, breadcrumbs, theme) {
        this.state.currentView = 'submenu';
        this.els.dashSection.classList.remove('active');
        this.els.subSection.classList.add('active');
        this.els.nav.classList.add('active');
        
        // Update Breadcrumb
        this.els.breadcrumb.innerHTML = breadcrumbs.map((txt, i) => 
            i === breadcrumbs.length - 1 ? txt : `<span style="opacity:0.6">${txt}</span>`
        ).join(' <span style="margin:0 6px; opacity:0.4">/</span> ');

        // Show Grid, Hide Others
        this.els.subagMenuContainer.style.display = 'grid';
        this.els.subagListContainer.style.display = 'none';
        this.els.mapContainer.style.display = 'none';
        
        this.els.subagMenuContainer.innerHTML = '';
        let classList = `submenu-grid ${theme}`;
        if (item.id === 'op') {
            classList += ' op-di-list';
        }
        this.els.subagMenuContainer.className = classList;
        const params = new URLSearchParams(window.location.search);
        const currentPath = params.get('path');

        item.subMenus.forEach((sub, idx) => {
            const el = document.createElement('div');
            el.className = 'submenu-card reveal-on-scroll';
            el.style.animationDelay = `${idx * 50}ms`;
            el.innerHTML = `
                <div class="submenu-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${getIcon(sub.icon)}</svg>
                </div>
                <span>${sub.label}</span>
            `;
            el.onclick = () => this.navigateTo(`${currentPath}/${sub.id}`);
            
            this.els.subagMenuContainer.appendChild(el);
            if(this.state.observer) this.state.observer.observe(el);
        });
    },

    renderDataTable(item, breadcrumbs) {
        this.state.currentView = 'list';
        this.els.dashSection.classList.remove('active');
        this.els.subSection.classList.add('active');
        this.els.nav.classList.add('active');

        this.els.breadcrumb.innerHTML = breadcrumbs.map((txt, i) => 
            i === breadcrumbs.length - 1 ? txt : `<span style="opacity:0.6">${txt}</span>`
        ).join(' <span style="margin:0 6px; opacity:0.4">/</span> ');

        this.els.subagMenuContainer.style.display = 'none';
        this.els.mapContainer.style.display = 'none';
        this.els.subagListContainer.style.display = 'grid';
        this.els.subagListContainer.innerHTML = '';

        // Dummy Data Generator based on Menu Name
        // (Karena backend belum ada, kita buat data dummy agar tabel terlihat)
        const dummyData = [
            { col1: 'Data Contoh 1', col2: 'Lokasi A', col3: 'Baik', col4: '2024', col5: 'Aktif' },
            { col1: 'Data Contoh 2', col2: 'Lokasi B', col3: 'Rusak Ringan', col4: '2023', col5: 'Perbaikan' },
            { col1: 'Data Contoh 3', col2: 'Lokasi C', col3: 'Baik', col4: '2025', col5: 'Aktif' }
        ];

        if (dummyData.length === 0) {
            this.els.subagListContainer.innerHTML = `<div class="empty-state">Data belum tersedia.</div>`;
            return;
        }

        dummyData.forEach((row, idx) => {
            const statusClass = this.getStatusBadgeClass(row.col5);
            const el = document.createElement('div');
            el.className = 'list-item reveal-on-scroll';
            el.style.animationDelay = `${idx * 50}ms`;
            el.innerHTML = `
                <div class="list-item-table">
                    <div class="list-main">
                        <h4>${row.col1}</h4>
                        <span class="list-subtitle">${row.col2}</span>
                    </div>
                    <div>${row.col3}</div>
                    <div>${row.col4}</div>
                    <div><span class="status-badge ${statusClass}">${row.col5}</span></div>
                    <div><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg></div>
                </div>
            `;
            el.onclick = () => this.openDetailModal(row);
            this.els.subagListContainer.appendChild(el);
            if(this.state.observer) this.state.observer.observe(el);
        });
    },

    renderMap(item, breadcrumbs) {
        this.state.currentView = 'map';
        this.els.breadcrumb.innerHTML = breadcrumbs.join(' / ');
        this.els.subagMenuContainer.style.display = 'none';
        this.els.subagListContainer.style.display = 'none';
        this.els.mapContainer.style.display = 'block';

        if (!this.state.mapInstance && typeof L !== 'undefined') {
            this.state.mapInstance = L.map('map-container').setView([-7.424, 109.230], 10);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.state.mapInstance);
        }
        
        if(this.state.mapInstance) {
            setTimeout(() => this.state.mapInstance.invalidateSize(), 200);
            this.state.mapInstance.closePopup();
            L.popup()
                .setLatLng([-7.424, 109.230])
                .setContent(`<b>Layer Aktif:</b><br>${item.label}`)
                .openOn(this.state.mapInstance);
        }
    },

    // --- UTILS ---
    updateDateBadge() {
        const badge = document.querySelector('.date-badge span');
        if(badge) {
            const date = new Date();
            badge.textContent = date.toLocaleDateString('id-ID', { weekday:'long', day:'2-digit', month:'long', year:'numeric' });
        }
    },

    getStatusBadgeClass(status) {
        if (!status) return '';
        const s = status.toLowerCase();
        if (s.includes('aktif') || s.includes('baik')) return 'status-aktif';
        if (s.includes('perbaikan') || s.includes('rusak')) return 'status-perbaikan';
        return 'status-kritis';
    },

    openDetailModal(item) {
        if(this.els.modal) {
            this.els.modalTitle.textContent = item.col1;
            this.els.modalBody.innerHTML = `Detail data untuk ${item.col1} di lokasi ${item.col2}. Kondisi saat ini ${item.col3}.`;
            this.els.modal.classList.add('active');
        }
    },

    closeModal(e) {
        if (this.els.modal) this.els.modal.classList.remove('active');
    }
};

window.addEventListener('click', (e) => {
    if (app.els.modal && e.target === app.els.modal) app.closeModal(e);
});

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => app.init());
} else {
    app.init();
}
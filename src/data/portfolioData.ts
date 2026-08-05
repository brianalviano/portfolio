export type Language = "en" | "id";

export interface ProjectCaseStudy {
	id: string;
	category: { en: string; id: string };
	title: string;
	subtitle: { en: string; id: string };
	brief: { en: string; id: string };
	meta: Array<{
		label: { en: string; id: string };
		value: { en: string; id: string };
	}>;
	handles: Array<{ en: string; id: string }>;
	stack: string[];
	previewType?: string;
	screens?: Array<{
		title: string;
		subtitle: { en: string; id: string };
		accentColor: string;
		type?: "overview" | "inventory" | "procurement";
		kpi1?: { label: string; val: string };
		kpi2?: { label: string; val: string };
		kpi3?: { label: string; val: string };
		tableRows?: Array<{ name: string; loc: string; qty: string }>;
		pipeline?: Array<{ step: string; code: string; amt: string; bg: string }>;
		lowStock?: string;
	}>;
}

export const portfolioData = {
	hero: {
		badge: {
			en: "Surabaya, ID · Full-Stack Engineer",
			id: "Surabaya, ID · Full-Stack Developer",
		},
		headline: {
			en: "Custom ERPs & scalable software built for real operations.",
			id: "Sistem ERP & aplikasi bisnis khusus untuk operasional riil.",
		},
		subhead: {
			en: "Brian Alviano is a full-stack developer crafting custom ERP platforms, REST APIs, internal tools, and high-performance business applications.",
			id: "Brian Alviano adalah full-stack developer yang membangun sistem ERP kustom, REST API, alat manajemen internal, dan aplikasi bisnis berkinerja tinggi.",
		},
		ctaButton: {
			en: "Selected Work",
			id: "Lihat Portfolio",
		},
		cardProfileTitle: {
			en: "Developer profile",
			id: "Profil Developer",
		},
		location: "Surabaya, ID",
		primaryStackLabel: {
			en: "Primary stack",
			id: "Tech stack utama",
		},
		primaryStack: "Laravel · Svelte · PostgreSQL",
		marquee: [
			"Backend Engineering ✦ REST API ✦ ERP Systems ✦ Frontend Development ✦ Database Design ✦ DevOps ✦",
			"Backend Engineering ✦ REST API ✦ ERP Systems ✦ Frontend Development ✦ Database Design ✦ DevOps ✦",
		],
	},

	about: {
		eyebrow: "01 — About me",
		heading: {
			en: "Engineering background & track record.",
			id: "Latar belakang & rekam jejak rekayasa perangkat lunak.",
		},
		subtext: {
			en: "6 years of hands-on experience taking business applications from architectural design to production deployment and maintenance.",
			id: "6 tahun pengalaman membangun, merilis, dan memelihara aplikasi bisnis skala produksi.",
		},
		bio: {
			en: "I’m **Brian Alviano**, a Full-Stack Developer with 6 years of experience specializing in **Laravel** & **Svelte**. I build custom ERP systems, internal tools, REST APIs, and scalable web applications from architecture to deployment and production support.",
			id: "Saya **Brian Alviano**, Full-Stack Developer dengan 6 tahun pengalaman berfokus pada **Laravel** & **Svelte**. Saya membangun sistem ERP kustom, alat manajemen internal, REST API, dan aplikasi web dari tahap arsitektur hingga perilisian dan dukungan produksi.",
		},
		stats: [
			{
				count: 23,
				label: { en: "Completed projects", id: "Proyek selesai" },
				accent: true,
			},
			{ count: 6, label: { en: "Years developing", id: "Tahun pengalaman" } },
			{ count: 18, label: { en: "Clients served", id: "Klien dilayani" } },
			{ count: 5000, label: { en: "Platform users", id: "Pengguna platform" } },
		],
		contactQuickList: [
			{
				label: { en: "Location", id: "Lokasi" },
				value: "Surabaya, East Java, Indonesia",
			},
			{
				label: { en: "Phone / WA", id: "Telepon / WA" },
				value: "+62 813-7000-4025",
				href: "tel:+6281370004025",
			},
			{
				label: { en: "Email", id: "Email" },
				value: "brianalviano.official@gmail.com",
				href: "mailto:brianalviano.official@gmail.com",
			},
		],
		connectOnline: {
			en: "Connect Online",
			id: "Terhubung Online",
		},
	},

	services: {
		eyebrow: "02 — Services",
		heading: {
			en: "Core technical capabilities.",
			id: "Layanan & kapabilitas teknis utama.",
		},
		list: [
			{
				num: "01",
				icon: "ti-building-factory-2",
				title: { en: "ERP Systems", id: "Sistem ERP" },
				desc: {
					en: "Unified HR, finance, logistics, procurement, inventory, and sales modules tailored to your actual operational workflows.",
					id: "Modul HR, keuangan, logistik, pengadaan, inventaris, dan penjualan yang disesuaikan dengan alur kerja operasional Anda.",
				},
			},
			{
				num: "02",
				icon: "ti-adjustments-code",
				title: { en: "Custom Systems", id: "Sistem Kustom" },
				desc: {
					en: "Purpose-built web applications that eliminate repetitive manual tasks and connect your operational teams.",
					id: "Aplikasi web khusus yang mengeliminasi pekerjaan manual berulang dan menghubungkan tim operasional Anda.",
				},
			},
			{
				num: "03",
				icon: "ti-world-www",
				title: { en: "Company Websites", id: "Website Perusahaan" },
				desc: {
					en: "Fast, SEO-optimized corporate websites and web portals designed for market credibility and lead capture.",
					id: "Website perusahaan dan portal web cepat berstandar SEO yang kredibel dan siap mengkonversi prospek.",
				},
			},
			{
				num: "04",
				icon: "ti-plug-connected",
				title: { en: "API & Modernization", id: "API & Modernisasi" },
				desc: {
					en: "Predictable REST APIs, third-party integrations, database performance tuning, and legacy system refactoring.",
					id: "REST API yang terprediksi, integrasi pihak ketiga, optimasi performa database, dan refactoring sistem legacy.",
				},
			},
		],
	},

	process: {
		eyebrow: "03 — Process",
		heading: {
			en: "A structured engineering workflow.",
			id: "Alur kerja rekayasa yang terstruktur.",
		},
		subtext: {
			en: "A transparent development process designed to minimize technical risk, clarify requirements early, and ensure predictable milestone delivery.",
			id: "Proses pengembangan transparan untuk meminimalkan risiko teknis, memperjelas kebutuhan sejak awal, dan memastikan pengiriman proyek secara tepat waktu.",
		},
		steps: [
			{
				num: "01",
				tag: { en: "Understand first", id: "Pahami Kebutuhan" },
				title: { en: "Discover", id: "Riset & Analisis" },
				desc: {
					en: "Clarify business goals, user constraints, existing bottlenecks, and measurable project outcomes.",
					id: "Memperjelas tujuan bisnis, kendala pengguna, kendala sistem yang ada, dan target proyek yang terukur.",
				},
			},
			{
				num: "02",
				tag: { en: "Design the system", id: "Rancang Sistem" },
				title: { en: "Architect", id: "Arsitektur" },
				desc: {
					en: "Define data structures, API endpoints, module boundaries, technical stack, and milestone roadmaps.",
					id: "Menentukan struktur data, endpoint API, batasan modul, stack teknis, dan tahapan peluncuran.",
				},
			},
			{
				num: "03",
				tag: { en: "Iterate visibly", id: "Iterasi Transparan" },
				title: { en: "Build & Validate", id: "Pengembangan & Uji" },
				desc: {
					en: "Develop in focused sprints, validate core user flows, incorporate feedback, and maintain code quality.",
					id: "Mengembangkan dalam iterasi terfokus, menguji alur kerja utama, dan menerapkan masukan secara bertahap.",
				},
			},
			{
				num: "04",
				tag: { en: "Operate with confidence", id: "Peluncuran Aman" },
				title: { en: "Launch & Support", id: "Rilis & Pemeliharaan" },
				desc: {
					en: "Deploy safely to production servers, configure monitoring, document workflows, and ensure ongoing stability.",
					id: "Merilis aplikasi ke server produksi secara aman, mengkonfigurasi pemantauan, dan memastikan stabilitas sistem.",
				},
			},
		],
	},

	skills: {
		eyebrow: "04 — Complete stack",
		heading: {
			en: "Production tech stack & tooling.",
			id: "Stack teknologi & alat produksi.",
		},
		subtext: {
			en: "Field-tested tools for modern full-stack development, database architecture, caching, and server deployment.",
			id: "Perangkat kerja yang teruji untuk pengembangan full-stack modern, arsitektur database, caching, dan rilis server.",
		},
	},

	projects: {
		eyebrow: "05 — Selected work",
		heading: {
			en: "Featured case studies.",
			id: "Studi kasus pilihan.",
		},
		subtext: {
			en: "Real operational systems explaining client context, system requirements, technical contribution, and business outcomes.",
			id: "Sistem operasional riil yang menjelaskan konteks klien, kebutuhan sistem, kontribusi teknis, dan hasil bisnis.",
		},
		drawerTrigger: {
			en: "SEE DETAILS",
			id: "LIHAT DETAIL",
		},
		items: [
			{
				id: "daki-pet-shop",
				category: {
					en: "ERP CASE STUDY · Retail · Multi-branch",
					id: "STUDI KASUS ERP · Retail · Multi-cabang",
				},
				title: "DAKI Pet Shop",
				subtitle: {
					en: "Custom retail operations platform",
					id: "Platform operasional retail kustom",
				},
				brief: {
					en: "A unified multi-branch ERP replacing manual records with single-source inventory, purchasing, sales, and revenue tracking.",
					id: "Sistem ERP multi-cabang yang menggantikan pencatatan manual dengan visibilitas stok, pembelian, penjualan, dan pendapatan terpusat.",
				},
				meta: [
					{
						label: { en: "Role", id: "Peran" },
						value: { en: "Full-stack lead", id: "Full-stack lead" },
					},
					{
						label: { en: "Focus", id: "Fokus" },
						value: {
							en: "Operational visibility",
							id: "Visibilitas operasional",
						},
					},
					{
						label: { en: "Format", id: "Format" },
						value: { en: "Product system", id: "Sistem produk" },
					},
				],
				handles: [
					{
						en: "Branch inventory, stock movement, returns, and stock-opname workflows.",
						id: "Manajemen stok cabang, mutasi barang, retur, dan proses opname.",
					},
					{
						en: "Purchase requests, supplier orders, receiving, and purchase history.",
						id: "Permintaan pembelian, order supplier, penerimaan barang, dan riwayat PO.",
					},
					{
						en: "Sales reporting with branch-level visibility and role-based access.",
						id: "Laporan penjualan dengan visibilitas antar-cabang dan hak akses pengguna.",
					},
				],
				stack: [
					"Laravel",
					"Svelte",
					"Tailwind CSS",
					"PostgreSQL",
					"Redis",
					"REST API",
					"Docker",
					"Nginx",
				],
			},
			{
				id: "simetik",
				category: {
					en: "RESEARCH SYSTEM · University · Workflow",
					id: "SISTEM PENELITIAN · Universitas · Alur Kerja",
				},
				title: "SIMETIK",
				subtitle: {
					en: "Medical research management portal",
					id: "Portal manajemen etik penelitian medis",
				},
				brief: {
					en: "A secure academic portal digitizing ethical-clearance administration for researchers, reviewers, and committee heads.",
					id: "Portal akademik aman yang mendigitalisasi administrasi etik penelitian medis untuk peneliti, reviewer, dan pimpinan komisi.",
				},
				meta: [
					{
						label: { en: "Role", id: "Peran" },
						value: { en: "Full-stack developer", id: "Full-stack developer" },
					},
					{
						label: { en: "Focus", id: "Fokus" },
						value: {
							en: "Workflow digitization",
							id: "Digitalisasi alur kerja",
						},
					},
					{
						label: { en: "Format", id: "Format" },
						value: { en: "Product system", id: "Sistem produk" },
					},
				],
				handles: [
					{
						en: "Structured submissions for human, animal, and non-clinical studies.",
						id: "Pengajuan terstruktur untuk studi manusia, hewan, dan non-klinis.",
					},
					{
						en: "Role-based review, revision history, and document validation.",
						id: "Penilaian berbasis peran, riwayat revisi, dan validasi dokumen.",
					},
					{
						en: "Payment tracking, meeting schedules, progress status, and reporting.",
						id: "Pelacakan pembayaran, jadwal sidang, status progres, dan pelaporan.",
					},
				],
				stack: [
					"PHP",
					"Laravel",
					"MySQL",
					"JavaScript",
					"REST API",
					"Role access",
					"Nginx",
				],
			},
			{
				id: "pelangi-uv",
				category: { en: "CORPORATE WEBSITE", id: "WEBSITE PERUSAHAAN" },
				title: "Pelangi UV",
				subtitle: {
					en: "Printing-finishing company site",
					id: "Website perusahaan cetak & finishing",
				},
				brief: {
					en: "Corporate web profile with interactive printing services catalog, performance tuning, and automated customer inquiry capture.",
					id: "Profil web perusahaan dengan katalog layanan cetak interaktif, optimasi performa, dan penangkapan prospek otomatis.",
				},
				meta: [
					{
						label: { en: "Role", id: "Peran" },
						value: { en: "Full-stack developer", id: "Full-stack developer" },
					},
					{
						label: { en: "Focus", id: "Fokus" },
						value: {
							en: "Corporate web presence",
							id: "Profil web perusahaan",
						},
					},
					{
						label: { en: "Format", id: "Format" },
						value: { en: "Company profile", id: "Profil perusahaan" },
					},
				],
				handles: [
					{
						en: "Full service catalog and printing-finishing capabilities showcase.",
						id: "Katalog layanan lengkap dan keunggulan mesin finishing cetak.",
					},
					{
						en: "High-converting inquiry & quote request contact flows.",
						id: "Formulir kontak & permintaan penawaran harga yang efektif.",
					},
					{
						en: "Search engine optimization (SEO) and fast page load performance.",
						id: "Optimasi mesin pencari (SEO) dan kecepatan muat halaman.",
					},
				],
				stack: [
					"Laravel",
					"Tailwind CSS",
					"JavaScript",
					"SEO",
					"Responsive UI",
				],
			},
			{
				id: "maha-koding",
				category: { en: "AGENCY WEBSITE", id: "WEBSITE AGENSI" },
				title: "Maha Koding",
				subtitle: {
					en: "Software agency landing portal",
					id: "Portal landing page agensi software",
				},
				brief: {
					en: "Software agency web portal featuring transparent package tier comparisons, interactive FAQs, and direct WhatsApp lead capture.",
					id: "Portal agensi software yang menampilkan perbandingan paket layanan transparan, FAQ interaktif, dan rute kontak WhatsApp.",
				},
				meta: [
					{
						label: { en: "Role", id: "Peran" },
						value: { en: "Full-stack developer", id: "Full-stack developer" },
					},
					{
						label: { en: "Focus", id: "Fokus" },
						value: { en: "Lead conversion", id: "Konversi prospek" },
					},
					{
						label: { en: "Format", id: "Format" },
						value: { en: "Landing page", id: "Landing page" },
					},
				],
				handles: [
					{
						en: "Transparent service package pricing calculator & tier comparison.",
						id: "Kalkulator paket layanan & perbandingan tingkat harga.",
					},
					{
						en: "Interactive FAQ accordion and client testimonial showcase.",
						id: "Accordion FAQ interaktif dan tampilan testimoni klien.",
					},
					{
						en: "Lead conversion funnel directly connected to WhatsApp inquiry.",
						id: "Alur konversi prospek yang terhubung langsung ke WhatsApp.",
					},
				],
				stack: ["Laravel", "Tailwind CSS", "Alpine.js", "Responsive UI"],
			},
		],
	},

	testimonials: {
		eyebrow: "06 — Testimonials",
		heading: {
			en: "What client partners say.",
			id: "Testimoni & masukan klien.",
		},
		subtext: {
			en: "Direct feedback from business owners, project leads, and teams who rely on custom systems built for real operations.",
			id: "Masukan langsung dari pemilik bisnis, project lead, dan tim yang mengandalkan sistem kustom untuk operasional mereka.",
		},
		list: [
			{
				quote: {
					en: "Brian rebuilt our entire multi-branch retail management system with Laravel and Svelte. Stock synchronization across 9 stores is now instantaneous, saving our operations team hours every day.",
					id: "Brian membangun ulang seluruh sistem manajemen toko multi-cabang kami dengan Laravel dan Svelte. Sinkronisasi stok di 9 cabang kini berjalan instan dan menghemat jam kerja tim operasional kami.",
				},
				author: "Operations Lead",
				company: "DAKI Pet Shop",
				role: { en: "Retail & Supply Chain", id: "Retail & Rantai Pasok" },
				accentBg: "bg-[#f4d9d0]",
			},
			{
				quote: {
					en: "Working with Brian on SIMETIK streamlined our medical ethical clearance portal immensely. His clear system architecture and attention to workflow security were top notch.",
					id: "Bekerja bersama Brian dalam proyek SIMETIK sangat menyederhanakan portal etik penelitian kami. Arsitektur sistem yang jelas dan perhatiannya terhadap keamanan alur kerja sangat luar biasa.",
				},
				author: "Research Coordinator",
				company: "FKG Universitas Airlangga",
				role: {
					en: "Academic & Medical Research",
					id: "Akademik & Penelitian Medis",
				},
				accentBg: "bg-[#dce7f4]",
			},
			{
				quote: {
					en: "Brian transformed our company profile into a modern corporate website with seamless lead generation. Inquiries increased significantly within weeks of launch.",
					id: "Brian mengubah profil perusahaan kami menjadi website korporat modern dengan alur kontak yang rapi. Permintaan penawaran meningkat secara signifikan sejak rilis.",
				},
				author: "Managing Director",
				company: "Pelangi UV",
				role: { en: "Printing & Manufacturing", id: "Percetakan & Manufaktur" },
				accentBg: "bg-[#f5e0a9]",
			},
		],
	},

	insights: {
		eyebrow: "07 — Insights",
		heading: {
			en: "Notes from building real systems.",
			id: "Catatan dari pengalaman membangun sistem.",
		},
		subtext: {
			en: "Technical write-ups on Laravel architecture, ERP system design, and REST API best practices.",
			id: "Tulisan teknis mengenai arsitektur Laravel, perancangan sistem ERP, dan best practice REST API.",
		},
		viewAll: {
			en: "View all articles",
			id: "Lihat semua artikel",
		},
		readArticle: {
			en: "Read article",
			id: "Baca artikel",
		},
		articles: [
			{
				title: {
					en: "Structuring Laravel applications for long-term maintenance.",
					id: "Membangun struktur aplikasi Laravel untuk pemeliharaan jangka panjang.",
				},
				desc: {
					en: "A practical approach to boundaries, services, validation, data access, and keeping business logic clean as a product grows.",
					id: "Pendekatan praktis untuk batasan modul, layanan, validasi, dan menjaga logika bisnis tetap bersih seiring pertumbuhan produk.",
				},
				category: { en: "Engineering Note", id: "Catatan Rekayasa" },
				readTime: "8 min read",
				link: "/insights/laravel-maintainable-architecture",
				theme: "bg-ink text-white",
			},
			{
				title: {
					en: "Custom ERP or off-the-shelf software?",
					id: "Sistem ERP Kustom atau Software Siap Pakai?",
				},
				desc: {
					en: "A decision framework based on workflow fit, integration needs, ownership, cost, and operational complexity.",
					id: "Kerangka keputusan berdasarkan kesesuaian alur kerja, integrasi, kepemilikan data, biaya, dan kompleksitas operasional.",
				},
				category: { en: "Business Guide", id: "Panduan Bisnis" },
				readTime: "6 min read",
				link: "/insights/custom-erp-vs-off-the-shelf",
				theme: "bg-accent text-white",
			},
			{
				title: {
					en: "Designing REST APIs that remain predictable.",
					id: "Merancang REST API yang Terprediksi & Stabil.",
				},
				desc: {
					en: "Consistency in resources, error handling, validation schemas, pagination, authorization, and API versioning.",
					id: "Konsistensi pada resource, penanganan error, skema validasi, paginasi, otorisasi, dan versi API.",
				},
				category: { en: "API Design", id: "Desain API" },
				readTime: "7 min read",
				link: "/insights/reliable-rest-api-design",
				theme: "bg-white text-ink",
			},
		],
	},

	clients: {
		eyebrow: "08 — Selected clients",
		heading: {
			en: "Built across different industries.",
			id: "Dipercaya oleh berbagai industri.",
		},
		subtext: {
			en: "Software solutions delivered across multi-branch retail, logistics, higher education, research institutions, and financial operations.",
			id: "Solusi perangkat lunak yang dirilis untuk retail multi-cabang, logistik, perguruan tinggi, lembaga penelitian, dan operasional keuangan.",
		},
		items: [
			{
				name: "Pelangi UV",
				industry: {
					en: "Printing & Manufacturing",
					id: "Percetakan & Manufaktur",
				},
				icon: "ti-printer",
				bg: "bg-[#f4d9d0]",
			},
			{
				name: "Awniraya",
				industry: { en: "Logistics & Freight", id: "Logistik & Ekspedisi" },
				icon: "ti-truck-delivery",
				bg: "bg-[#dce7f4]",
			},
			{
				name: "DAKI Pet Shop",
				industry: { en: "Multi-branch Retail", id: "Retail Multi-Cabang" },
				icon: "ti-paw",
				bg: "bg-[#f5e0a9]",
			},
			{
				name: "Universitas Airlangga",
				industry: { en: "Education & Research", id: "Pendidikan & Penelitian" },
				icon: "ti-school",
				bg: "bg-[#dcebdc]",
			},
			{
				name: "GAPALA",
				industry: { en: "Financial Operations", id: "Operasional Keuangan" },
				icon: "ti-building-bank",
				bg: "bg-[#eadcf1]",
			},
			{
				name: "Burningroom",
				industry: { en: "Technology Partner", id: "Mitra Teknologi" },
				icon: "ti-code",
				bg: "bg-ink text-white",
			},
		],
	},

	cta: {
		eyebrow: "Get in touch",
		heading: {
			en: "Let’s discuss your next project.",
			id: "Mari diskusikan proyek Anda berikutnya.",
		},
		subtext: {
			en: "Have a workflow to automate, an ERP to build, or a product to launch? Share the context below and I’ll reply with a practical next step.",
			id: "Memiliki alur kerja yang ingin diotomatisasi, ERP yang ingin dibangun, atau produk yang akan dirilis? Bagikan konteksnya di bawah dan saya akan membalas dengan langkah teknis berikutnya.",
		},
		asideTitle: {
			en: "A good project brief is simple and direct.",
			id: "Brief proyek yang baik cukup sederhana dan jelas.",
		},
		asideSub: {
			en: "Tell me the problem, who will use the system, and what a successful result looks like.",
			id: "Beritahu saya masalahnya, siapa pengguna sistem tersebut, dan seperti apa target hasil yang sukses.",
		},
		asidePoints: [
			{
				num: "01",
				text: {
					en: "Business problem or product goal",
					id: "Masalah bisnis atau target produk",
				},
			},
			{
				num: "02",
				text: {
					en: "Users and current workflow",
					id: "Pengguna dan alur kerja saat ini",
				},
			},
			{
				num: "03",
				text: {
					en: "Timeline and existing tech stack",
					id: "Target waktu dan tech stack yang ada",
				},
			},
		],
		preferDirect: {
			en: "Prefer direct contact?",
			id: "Lebih suka kontak langsung?",
		},
		labels: {
			name: { en: "Your name", id: "Nama Anda" },
			namePlaceholder: { en: "Your name", id: "Nama Anda" },
			email: { en: "Email address", id: "Alamat Email" },
			emailPlaceholder: { en: "you@company.com", id: "nama@perusahaan.com" },
			type: { en: "Project type", id: "Jenis Proyek" },
			typeChoose: { en: "Choose one", id: "Pilih salah satu" },
			typeOptions: [
				"ERP / Business System",
				"Custom Web Application",
				"Company Website / Landing Page",
				"API / System Integration",
				"Maintenance / Modernization",
				"Other",
			],
			timeline: { en: "Target timeline", id: "Target Waktu" },
			timelineOptions: [
				"Flexible / Not decided",
				"Less than 1 month",
				"1–3 months",
				"3–6 months",
				"More than 6 months",
			],
			message: {
				en: "Tell me about the project",
				id: "Ceritakan tentang proyek ini",
			},
			messagePlaceholder: {
				en: "What are you trying to build or improve? Who will use it, and what is currently slowing you down?",
				id: "Apa yang ingin Anda bangun atau tingkatkan? Siapa penggunanya, dan kendala apa yang sedang dihadapi?",
			},
			formStatus: {
				en: "Submitting will generate your project brief and open your default email app.",
				id: "Mengirimkan form akan menyiapkan brief proyek dan membuka aplikasi email Anda.",
			},
			submitButton: {
				en: "Send project brief",
				id: "Kirim brief proyek",
			},
		},
	},

	footer: {
		tagline: {
			en: "Independent full-stack developer",
			id: "Full-stack developer independen",
		},
		desc: {
			en: "ERP systems, custom web applications, integrations, and dependable product delivery from Indonesia.",
			id: "Sistem ERP, aplikasi web kustom, integrasi API, dan perilisian produk terpercaya dari Indonesia.",
		},
		links: [
			{ label: "Email", href: "mailto:brianalviano.official@gmail.com" },
			{ label: "GitHub", href: "https://github.com/brianalviano" },
			{ label: "LinkedIn", href: "https://linkedin.com/in/brianalviano" },
			{ label: "Instagram", href: "https://instagram.com/vinnoo_" },
		],
		backToTop: {
			en: "Back to top ↑",
			id: "Ke atas ↑",
		},
		rights: {
			en: "All rights reserved.",
			id: "Hak cipta dilindungi.",
		},
	},
};

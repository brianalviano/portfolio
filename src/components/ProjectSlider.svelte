<script lang="ts">
	import {
		IconChevronLeft,
		IconChevronRight,
		IconExternalLink,
		IconLayoutDashboard,
		IconDatabase,
		IconServer,
		IconCheck,
		IconBuildingStore
	} from '@tabler/icons-svelte';

	interface ProjectSlide {
		id: string;
		title: string;
		type: string;
		description: string;
		kpis: { label: string; value: string }[];
		features: string[];
	}

	const projects: ProjectSlide[] = [
		{
			id: 'erp',
			title: 'Multi-Branch Inventory & ERP System',
			type: 'Enterprise ERP',
			description: 'Real-time multi-location warehouse sync, automated purchase orders, and audit trail for 50k+ daily SKUs.',
			kpis: [
				{ label: 'Sync Speed', value: '< 120ms' },
				{ label: 'Daily SKU Flow', value: '50,000+' },
				{ label: 'Uptime', value: '99.98%' }
			],
			features: ['PostgreSQL Partitioning', 'Redis Caching Layer', 'InertiaJS + Svelte UI', 'Role Policies']
		},
		{
			id: 'pos',
			title: 'High-Throughput Retail POS & Rest API',
			type: 'POS & API Integration',
			description: 'Offline-first POS integration with central REST API, transaction queuing, and IDR currency calculation.',
			kpis: [
				{ label: 'Throughput', value: '1,500 req/min' },
				{ label: 'POS Terminal Sync', value: 'Instant' },
				{ label: 'Failure Rate', value: '0.001%' }
			],
			features: ['Laravel Actions Pattern', 'Idempotent API Tokens', 'Atomic Transactions', 'Queue Worker Sync']
		},
		{
			id: 'analytics',
			title: 'Executive Logistics & Financial Dashboard',
			type: 'Analytics & Reporting',
			description: 'Real-time margin calculation, shipment tracking status, and exportable financial reports.',
			kpis: [
				{ label: 'Report Generation', value: 'Instant' },
				{ label: 'Live Data Feeds', value: 'Realtime' },
				{ label: 'Data Points', value: '1M+' }
			],
			features: ['Sorted Sets Caching', 'Custom Chart Renderer', 'Excel & PDF Export', 'Role Guard Access']
		}
	];

	let currentIndex = $state(0);
	let startX = $state(0);

	let currentProject = $derived(projects[currentIndex]);

	function prevSlide() {
		currentIndex = (currentIndex - 1 + projects.length) % projects.length;
	}

	function nextSlide() {
		currentIndex = (currentIndex + 1) % projects.length;
	}

	function goToSlide(index: number) {
		currentIndex = index;
	}

	function handlePointerDown(e: PointerEvent) {
		startX = e.clientX;
	}

	function handlePointerUp(e: PointerEvent) {
		const distance = e.clientX - startX;
		if (Math.abs(distance) > 50) {
			if (distance < 0) nextSlide();
			else prevSlide();
		}
	}
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="project-gallery border-t-2 border-ink bg-ink p-4 sm:p-6 rounded-2xl text-white">
	<div
		class="project-slider relative max-w-5xl mx-auto overflow-hidden border border-white/20 rounded-2xl bg-[#24211d]"
		role="region"
		aria-label="Project Slider"
		onpointerdown={handlePointerDown}
		onpointerup={handlePointerUp}
	>
		<!-- Slides Track -->
		<div
			class="project-slider-track flex transition-transform duration-500 ease-out"
			style="transform: translateX(-{currentIndex * 100}%);"
		>
			{#each projects as project (project.id)}
				<div class="project-slide min-w-full p-4 sm:p-6">
					<div class="project-screen min-h-[300px] sm:min-h-[360px] rounded-xl overflow-hidden bg-white text-ink grid grid-cols-[70px_1fr] sm:grid-cols-[100px_1fr] shadow-2xl border border-ink/10">
						<!-- Mini App Sidebar -->
						<div class="project-screen-sidebar bg-[#172033] text-white p-3 flex flex-col justify-between items-center">
							<div class="space-y-4">
								<div class="w-8 h-8 rounded-lg bg-accent grid place-items-center font-bold text-xs">BA</div>
								<div class="space-y-3 opacity-60 text-center">
									<IconLayoutDashboard size={20} class="mx-auto" />
									<IconDatabase size={20} class="mx-auto" />
									<IconServer size={20} class="mx-auto" />
								</div>
							</div>
							<div class="w-3 h-3 rounded-full bg-emerald-400"></div>
						</div>

						<!-- Mini App Content -->
						<div class="project-screen-main p-4 sm:p-6 bg-paper/30 flex flex-col justify-between">
							<div>
								<div class="flex justify-between items-start gap-4 mb-4">
									<div>
										<span class="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-accent">{project.type}</span>
										<h3 class="display text-base sm:text-xl font-bold text-ink">{project.title}</h3>
									</div>
									<span class="inline-flex items-center gap-1 text-xs font-bold bg-ink/5 px-2.5 py-1 rounded-full text-ink/70">
										Active <IconCheck size={14} class="text-emerald-600" />
									</span>
								</div>

								<p class="text-xs sm:text-sm text-ink/70 mb-4">{project.description}</p>

								<!-- KPIs Grid -->
								<div class="project-screen-kpis grid grid-cols-3 gap-2 sm:gap-3">
									{#each project.kpis as kpi}
										<div class="bg-white p-2 sm:p-3 rounded-xl border border-ink/10 shadow-sm">
											<p class="text-[10px] uppercase font-bold text-ink/40 tracking-wider">{kpi.label}</p>
											<p class="display text-xs sm:text-base font-bold text-accent">{kpi.value}</p>
										</div>
									{/each}
								</div>
							</div>

							<!-- Feature Badges -->
							<div class="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-ink/10">
								{#each project.features as feature}
									<span class="text-[10px] font-bold bg-white px-2 py-1 rounded-md border border-ink/10 text-ink/80">
										{feature}
									</span>
								{/each}
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<!-- Bottom Gallery Navigation Meta -->
		<div class="project-gallery-meta flex items-center justify-between gap-4 p-4 text-white border-t border-white/10">
			<div class="flex items-center gap-3">
				<span class="display text-sm font-bold text-accent">0{currentIndex + 1} / 0{projects.length}</span>
				<span class="text-xs font-semibold text-white/70 hidden sm:inline">{currentProject.title}</span>
			</div>

			<!-- Controls & Dots -->
			<div class="flex items-center gap-4">
				<!-- Dots -->
				<div class="project-slider-dots flex items-center gap-1.5">
					{#each projects as _, idx}
						<button
							type="button"
							class="h-2 rounded-full transition-all duration-300 {idx === currentIndex ? 'w-6 bg-accent' : 'w-2 bg-white/30'}"
							onclick={() => goToSlide(idx)}
							aria-label="Go to slide {idx + 1}"
						></button>
					{/each}
				</div>

				<!-- Prev / Next Buttons -->
				<div class="project-slider-controls flex items-center gap-2">
					<button
						type="button"
						class="w-9 h-9 rounded-full border border-white/30 grid place-items-center hover:bg-accent hover:border-accent transition-colors"
						onclick={prevSlide}
						aria-label="Previous Project"
					>
						<IconChevronLeft size={18} />
					</button>
					<button
						type="button"
						class="w-9 h-9 rounded-full border border-white/30 grid place-items-center hover:bg-accent hover:border-accent transition-colors"
						onclick={nextSlide}
						aria-label="Next Project"
					>
						<IconChevronRight size={18} />
					</button>
				</div>
			</div>
		</div>
	</div>
</div>

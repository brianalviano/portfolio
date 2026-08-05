declare global {
	interface Window {
		gsap?: any;
		ScrollTrigger?: any;
	}
}

export function initUI(initialLang: "en" | "id" = "en") {
	const run = () => {
		const yearEl = document.getElementById("year");
		if (yearEl) yearEl.textContent = new Date().getFullYear().toString();

		const scrollTopButton = document.getElementById("scroll-top");
		const floatingWhatsapp = document.getElementById("floating-whatsapp");
		const updateFloatingActions = () => {
			const isScrolled = window.scrollY > 180;
			if (scrollTopButton && floatingWhatsapp) {
				scrollTopButton.classList.toggle("opacity-0", !isScrolled);
				scrollTopButton.classList.toggle("translate-y-4", !isScrolled);
				scrollTopButton.classList.toggle("scale-90", !isScrolled);
				scrollTopButton.classList.toggle("pointer-events-none", !isScrolled);
				scrollTopButton.classList.toggle("opacity-100", isScrolled);
				scrollTopButton.classList.toggle("translate-y-0", isScrolled);
				scrollTopButton.classList.toggle("scale-100", isScrolled);
				floatingWhatsapp.style.transform = isScrolled
					? "translateY(-68px)"
					: "translateY(0)";
			}
		};
		updateFloatingActions();
		window.addEventListener("scroll", updateFloatingActions, { passive: true });
		scrollTopButton?.addEventListener("click", (event) => {
			event.preventDefault();
			window.scrollTo({ top: 0, behavior: "smooth" });
		});

		const contactForm = document.getElementById(
			"contact-form",
		) as HTMLFormElement | null;
		const formStatus = document.getElementById("form-status");
		contactForm?.addEventListener("submit", (event) => {
			event.preventDefault();
			if (!contactForm.checkValidity()) {
				contactForm.reportValidity();
				if (formStatus)
					formStatus.textContent = "Please complete the required fields first.";
				return;
			}

			const data = new FormData(contactForm);
			const subject = `Project inquiry — ${data.get("type")}`;
			const body = [
				`Hi Brian,`,
				``,
				`My name is ${data.get("name")}.`,
				`Email: ${data.get("email")}`,
				`Project type: ${data.get("type")}`,
				`Target timeline: ${data.get("timeline")}`,
				``,
				`Project details:`,
				`${data.get("message")}`,
			].join("\n");

			if (formStatus) formStatus.textContent = "Opening your email app…";
			window.location.href = `mailto:brianalviano.official@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
		});

		document
			.querySelectorAll<HTMLElement>("[data-project-slider]")
			.forEach((slider) => {
				const track = slider.querySelector<HTMLElement>(
					".project-slider-track",
				);
				const slides = Array.from(
					slider.querySelectorAll<HTMLElement>(".project-slide"),
				);
				const dots = Array.from(
					slider.querySelectorAll<HTMLElement>(".project-slider-dot"),
				);
				const caption = slider.querySelector<HTMLElement>(
					"[data-slider-caption]",
				);
				let index = 0;
				let startX = 0;

				const update = (nextIndex: number) => {
					if (slides.length === 0) return;
					index = (nextIndex + slides.length) % slides.length;
					if (track) track.style.transform = `translateX(-${index * 100}%)`;
					dots.forEach((dot, dotIndex) =>
						dot.classList.toggle("is-active", dotIndex === index),
					);
					const screenTitle = slides[index]?.querySelector<HTMLElement>(
						".project-screen-title",
					);
					if (caption && screenTitle)
						caption.textContent = screenTitle.textContent || "";
				};

				slider
					.querySelector("[data-slider-prev]")
					?.addEventListener("click", () => update(index - 1));
				slider
					.querySelector("[data-slider-next]")
					?.addEventListener("click", () => update(index + 1));
				dots.forEach((dot, dotIndex) =>
					dot.addEventListener("click", () => update(dotIndex)),
				);
				slider.addEventListener("pointerdown", (event: PointerEvent) => {
					startX = event.clientX;
				});
				slider.addEventListener("pointerup", (event: PointerEvent) => {
					const distance = event.clientX - startX;
					if (Math.abs(distance) > 55) update(index + (distance < 0 ? 1 : -1));
				});
			});

		// Auto-redirect first-time Indonesian visitors arriving at root '/' to '/id' (only if no explicit preference saved)
		const isRoot = window.location.pathname === "/";
		if (isRoot) {
			const saved = localStorage.getItem("preferred_lang");
			if (!saved) {
				const browserLang = (navigator.language || "").toLowerCase();
				if (browserLang.startsWith("id")) {
					localStorage.setItem("preferred_lang", "id");
					window.location.replace("/id" + window.location.hash);
				} else {
					localStorage.setItem("preferred_lang", "en");
				}
			}
		}

		// Dynamic i18n Engine (URL Subpath Routing)
		const applyLanguage = (lang: "en" | "id") => {
			document.documentElement.lang = lang;
			localStorage.setItem("preferred_lang", lang);

			// Update element text
			document
				.querySelectorAll<HTMLElement>("[data-i18n-en][data-i18n-id]")
				.forEach((el) => {
					const text = el.getAttribute(`data-i18n-${lang}`);
					if (text !== null && text !== undefined) {
						if (el.children.length > 0) {
							el.innerHTML = text;
						} else {
							el.textContent = text;
						}
					}
				});

			// Update placeholders
			document
				.querySelectorAll<HTMLElement>("[data-i18n-ph-en][data-i18n-ph-id]")
				.forEach((el) => {
					const ph = el.getAttribute(`data-i18n-ph-${lang}`);
					if (ph) el.setAttribute("placeholder", ph);
				});

			// Update links href
			document
				.querySelectorAll<HTMLAnchorElement>(
					"[data-i18n-href-en][data-i18n-href-id]",
				)
				.forEach((el) => {
					const href = el.getAttribute(`data-i18n-href-${lang}`);
					if (href) el.setAttribute("href", href);
				});
		};

		applyLanguage(initialLang);

		// Standalone Custom Cursor (GPU translate3d, 0% stuck at top-left)
		const cursor = document.getElementById("cursor");
		if (cursor && window.innerWidth >= 1024) {
			let isVisible = false;
			let posX = -100;
			let posY = -100;

			window.addEventListener(
				"pointermove",
				(e: PointerEvent) => {
					posX = e.clientX - 10;
					posY = e.clientY - 10;
					cursor.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;
					if (!isVisible) {
						isVisible = true;
						cursor.style.opacity = "0.7";
					}
				},
				{ passive: true },
			);

			document.addEventListener("pointerleave", () => {
				cursor.style.opacity = "0";
				isVisible = false;
			});

			document.addEventListener(
				"mouseover",
				(e: MouseEvent) => {
					const target = e.target as HTMLElement | null;
					if (
						target &&
						target.closest(
							"a, button, [data-lang-btn], .skill-card, .service-card, .process-card, .project, .testimonial-card, .insight-card",
						)
					) {
						cursor.style.transform = `translate3d(${posX}px, ${posY}px, 0) scale(1.75)`;
						cursor.style.opacity = "0.9";
					}
				},
				{ passive: true },
			);

			document.addEventListener(
				"mouseout",
				(e: MouseEvent) => {
					const target = e.target as HTMLElement | null;
					if (
						target &&
						target.closest(
							"a, button, [data-lang-btn], .skill-card, .service-card, .process-card, .project, .testimonial-card, .insight-card",
						)
					) {
						cursor.style.transform = `translate3d(${posX}px, ${posY}px, 0) scale(1)`;
						cursor.style.opacity = "0.7";
					}
				},
				{ passive: true },
			);
		}

		// Native IntersectionObserver for 120fps GPU scroll reveal
		const reducedMotion = window.matchMedia(
			"(prefers-reduced-motion: reduce)",
		).matches;
		if (!reducedMotion && "IntersectionObserver" in window) {
			const revealObserver = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							entry.target.classList.add("is-revealed");
							revealObserver.unobserve(entry.target);
						}
					});
				},
				{ rootMargin: "0px 0px -30px 0px", threshold: 0.05 },
			);

			document
				.querySelectorAll(
					".skill-card, .service-card, .process-card, .testimonial-card, .experience-card, .project, .cta-panel, .insight-card",
				)
				.forEach((el) => {
					el.classList.add("reveal-item");
					revealObserver.observe(el);
				});
		}

		// Animated Counter via IntersectionObserver (bulletproof & 120fps smooth)
		if (!reducedMotion && "IntersectionObserver" in window) {
			const statObserver = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							const el = entry.target as HTMLElement;
							const target = Number(el.dataset.count) || 0;
							if (target > 0) {
								const duration = 1600;
								const startTime = performance.now();
								const animate = (currentTime: number) => {
									const elapsed = currentTime - startTime;
									const progress = Math.min(elapsed / duration, 1);
									const easeOut = 1 - Math.pow(1 - progress, 3);
									const currentVal = Math.round(target * easeOut);
									el.textContent = currentVal.toLocaleString() + "+";

									if (progress < 1) {
										requestAnimationFrame(animate);
									}
								};
								requestAnimationFrame(animate);
							}
							statObserver.unobserve(el);
						}
					});
				},
				{ rootMargin: "0px 0px -40px 0px", threshold: 0.15 },
			);

			document
				.querySelectorAll<HTMLElement>("[data-count]")
				.forEach((el) => statObserver.observe(el));
		} else {
			document
				.querySelectorAll<HTMLElement>("[data-count]")
				.forEach((el) => {
					const target = Number(el.dataset.count) || 0;
					el.textContent = target.toLocaleString() + "+";
				});
		}

		const footerName = document.querySelector<HTMLElement>(".footer-name");
		const footerShine = document.querySelector<HTMLElement>(".footer-shine");
		if (footerName && footerShine) {
			footerName.addEventListener(
				"pointermove",
				(event: PointerEvent) => {
					const rect = footerName.getBoundingClientRect();
					const x = Math.max(
						0,
						Math.min(100, ((event.clientX - rect.left) / rect.width) * 100),
					);
					const y = Math.max(
						0,
						Math.min(100, ((event.clientY - rect.top) / rect.height) * 100),
					);
					footerShine.style.setProperty("--shine-x", `${x}%`);
					footerShine.style.setProperty("--shine-y", `${y}%`);
				},
				{ passive: true },
			);
		}
	};

	if (document.readyState === "loading") {
		window.addEventListener("DOMContentLoaded", run);
	} else {
		run();
	}
}

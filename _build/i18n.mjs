// Тексты сайта на 9 языков. Английский — корень, остальные в /<код>/.
// Тексты из Figma (RU) и прежней EN-версии, без точки в конце одиночных фраз
export const LANGS = ['en', 'ru', 'id', 'fr', 'es', 'uk', 'it', 'tr', 'nl'];
export const NATIVE = { en: 'English', ru: 'Русский', id: 'Bahasa Indonesia', fr: 'Français', es: 'Español', uk: 'Українська', it: 'Italiano', tr: 'Türkçe', nl: 'Nederlands' };
export const LOCALE = { en: 'en_US', ru: 'ru_RU', id: 'id_ID', fr: 'fr_FR', es: 'es_ES', uk: 'uk_UA', it: 'it_IT', tr: 'tr_TR', nl: 'nl_NL' };

const U = '<i class="u5">UNIT.</i>';

export const T = {
  en: {
    nav_services: 'Services', nav_directions: 'Directions', nav_label: 'Main', lang_label: 'Language',
    cta: 'Hand over property',
    hero_alt: 'UNIT. Space City residence among rice fields in Bali',
    hero_sub: 'Professional hospitality management and premium service in Bali. We turn your property into a profitable, flawlessly run asset by taking on 100% of operations',
    hero_cta1: 'Hand over your property', hero_cta2: 'Find a stay in Bali',
    svc_h2: 'A complete approach to management',
    s1_t: 'Operations management', s1_p: 'The full cycle, from hiring and training staff to daily quality control and housekeeping',
    s2_t: 'Revenue Management', s2_p: 'Dynamic pricing and strategies that maximise revenue (RevPAR), based on market analytics',
    s3_t: 'Marketing and distribution', s3_p: 'Promotion on international (Booking, Airbnb) and local platforms, reputation and review management',
    s4_t: 'Guest service 24/7', s4_p: 'Transfers, concierge and quick answers to any guest request for the highest ratings',
    dir_h2: 'Choose your direction',
    d1_tag: 'For property owners', d1_t: 'Management company',
    d1_p: `Hand your hotel or villa over to ${U} Management and receive income without day-to-day tasks`,
    d2_tag: 'For guests', d2_t: 'Find and book', d2_p: 'Villas and apartments in Bali directly on the unit.now platform', d2_cta: 'Choose a stay',
    eco_label: 'UNIT. ecosystem'
  },
  ru: {
    nav_services: 'Услуги', nav_directions: 'Направления', nav_label: 'Основное меню', lang_label: 'Язык',
    cta: 'Передать объект',
    hero_alt: 'Резиденция UNIT. Space City среди рисовых полей на Бали',
    hero_sub: 'Профессиональное управление гостиничным бизнесом и премиальный сервис на Бали. Мы превращаем вашу недвижимость в прибыльный, безупречно работающий актив, беря на себя 100% операционных задач',
    hero_cta1: 'Передать объект в управление', hero_cta2: 'Найти жильё на Бали',
    svc_h2: 'Комплексный подход к управлению',
    s1_t: 'Операционное управление', s1_p: 'Полный цикл от найма и обучения персонала до ежедневного контроля качества и обслуживания номеров',
    s2_t: 'Revenue Management', s2_p: 'Динамическое ценообразование и стратегии максимизации дохода (RevPAR) на основе аналитики рынка',
    s3_t: 'Маркетинг и дистрибуция', s3_p: 'Продвижение объектов на международных (Booking, Airbnb) и локальных платформах, управление репутацией и отзывами',
    s4_t: 'Гостевой сервис 24/7', s4_p: 'Организация трансферов, консьерж‑сервис и решение любых вопросов гостей для высочайшего рейтинга',
    dir_h2: 'Выберите ваше направление',
    d1_tag: 'Для владельцев недвижимости', d1_t: 'Управляющая компания',
    d1_p: `Передайте отель или виллу в ${U} Management и получайте доход без операционной рутины`,
    d2_tag: 'Для гостей', d2_t: 'Найти и забронировать', d2_p: 'Виллы и апартаменты на Бали напрямую на платформе unit.now', d2_cta: 'Выбрать жильё',
    eco_label: 'Экосистема UNIT.'
  },
  id: {
    nav_services: 'Layanan', nav_directions: 'Arah', nav_label: 'Menu utama', lang_label: 'Bahasa',
    cta: 'Serahkan properti',
    hero_alt: 'Hunian UNIT. Space City di tengah sawah di Bali',
    hero_sub: 'Manajemen perhotelan profesional dan layanan premium di Bali. Kami menjadikan properti Anda aset yang menguntungkan dan berjalan sempurna dengan menangani 100% operasional',
    hero_cta1: 'Serahkan properti untuk dikelola', hero_cta2: 'Cari penginapan di Bali',
    svc_h2: 'Pendekatan menyeluruh dalam pengelolaan',
    s1_t: 'Manajemen operasional', s1_p: 'Siklus penuh, mulai dari merekrut dan melatih staf hingga kontrol kualitas harian dan housekeeping',
    s2_t: 'Revenue Management', s2_p: 'Harga dinamis dan strategi untuk memaksimalkan pendapatan (RevPAR) berdasarkan analitik pasar',
    s3_t: 'Pemasaran dan distribusi', s3_p: 'Promosi di platform internasional (Booking, Airbnb) dan lokal, pengelolaan reputasi dan ulasan',
    s4_t: 'Layanan tamu 24/7', s4_p: 'Transfer, concierge, dan respons cepat untuk setiap permintaan tamu demi rating tertinggi',
    dir_h2: 'Pilih arah Anda',
    d1_tag: 'Untuk pemilik properti', d1_t: 'Perusahaan manajemen',
    d1_p: `Serahkan hotel atau vila Anda kepada ${U} Management dan terima penghasilan tanpa urusan operasional sehari‑hari`,
    d2_tag: 'Untuk tamu', d2_t: 'Cari dan pesan', d2_p: 'Vila dan apartemen di Bali langsung di platform unit.now', d2_cta: 'Pilih penginapan',
    eco_label: 'Ekosistem UNIT.'
  },
  fr: {
    nav_services: 'Services', nav_directions: 'Orientations', nav_label: 'Menu principal', lang_label: 'Langue',
    cta: 'Confier mon bien',
    hero_alt: 'Résidence UNIT. Space City au milieu des rizières à Bali',
    hero_sub: 'Gestion hôtelière professionnelle et service haut de gamme à Bali. Nous faisons de votre bien un actif rentable et parfaitement géré en prenant en charge 100 % des opérations',
    hero_cta1: 'Confier mon bien en gestion', hero_cta2: 'Trouver un séjour à Bali',
    svc_h2: 'Une approche globale de la gestion',
    s1_t: 'Gestion opérationnelle', s1_p: 'Le cycle complet, du recrutement et de la formation du personnel au contrôle qualité quotidien et à l’entretien des chambres',
    s2_t: 'Revenue Management', s2_p: 'Tarification dynamique et stratégies de maximisation des revenus (RevPAR) fondées sur l’analyse du marché',
    s3_t: 'Marketing et distribution', s3_p: 'Promotion sur les plateformes internationales (Booking, Airbnb) et locales, gestion de la réputation et des avis',
    s4_t: 'Service aux clients 24h/24', s4_p: 'Transferts, conciergerie et réponses rapides à chaque demande des clients pour les meilleures notes',
    dir_h2: 'Choisissez votre voie',
    d1_tag: 'Pour les propriétaires', d1_t: 'Société de gestion',
    d1_p: `Confiez votre hôtel ou votre villa à ${U} Management et percevez des revenus sans gestion au quotidien`,
    d2_tag: 'Pour les voyageurs', d2_t: 'Trouver et réserver', d2_p: 'Villas et appartements à Bali, directement sur la plateforme unit.now', d2_cta: 'Choisir un logement',
    eco_label: 'Écosystème UNIT.'
  },
  es: {
    nav_services: 'Servicios', nav_directions: 'Direcciones', nav_label: 'Menú principal', lang_label: 'Idioma',
    cta: 'Confiar mi propiedad',
    hero_alt: 'Residencia UNIT. Space City entre arrozales en Bali',
    hero_sub: 'Gestión hotelera profesional y servicio premium en Bali. Convertimos su propiedad en un activo rentable y gestionado a la perfección, asumiendo el 100 % de la operación',
    hero_cta1: 'Confiar mi propiedad en gestión', hero_cta2: 'Encontrar alojamiento en Bali',
    svc_h2: 'Un enfoque integral de la gestión',
    s1_t: 'Gestión operativa', s1_p: 'El ciclo completo, desde la contratación y formación del personal hasta el control de calidad diario y la limpieza de habitaciones',
    s2_t: 'Revenue Management', s2_p: 'Precios dinámicos y estrategias para maximizar los ingresos (RevPAR) basadas en el análisis del mercado',
    s3_t: 'Marketing y distribución', s3_p: 'Promoción en plataformas internacionales (Booking, Airbnb) y locales, gestión de la reputación y las reseñas',
    s4_t: 'Atención al huésped 24/7', s4_p: 'Traslados, conserjería y respuestas rápidas a cualquier petición de los huéspedes para lograr las mejores valoraciones',
    dir_h2: 'Elija su camino',
    d1_tag: 'Para propietarios', d1_t: 'Empresa gestora',
    d1_p: `Confíe su hotel o villa a ${U} Management y reciba ingresos sin la rutina operativa`,
    d2_tag: 'Para huéspedes', d2_t: 'Buscar y reservar', d2_p: 'Villas y apartamentos en Bali directamente en la plataforma unit.now', d2_cta: 'Elegir alojamiento',
    eco_label: 'Ecosistema UNIT.'
  },
  uk: {
    nav_services: 'Послуги', nav_directions: 'Напрями', nav_label: 'Основне меню', lang_label: 'Мова',
    cta: 'Передати об’єкт',
    hero_alt: 'Резиденція UNIT. Space City серед рисових полів на Балі',
    hero_sub: 'Професійне управління готельним бізнесом і преміальний сервіс на Балі. Ми перетворюємо вашу нерухомість на прибутковий актив, що працює бездоганно, і беремо на себе 100% операційних завдань',
    hero_cta1: 'Передати об’єкт в управління', hero_cta2: 'Знайти житло на Балі',
    svc_h2: 'Комплексний підхід до управління',
    s1_t: 'Операційне управління', s1_p: 'Повний цикл: від найму та навчання персоналу до щоденного контролю якості й прибирання номерів',
    s2_t: 'Revenue Management', s2_p: 'Динамічне ціноутворення та стратегії максимізації доходу (RevPAR) на основі аналітики ринку',
    s3_t: 'Маркетинг і дистрибуція', s3_p: 'Просування на міжнародних (Booking, Airbnb) і локальних платформах, управління репутацією та відгуками',
    s4_t: 'Сервіс для гостей 24/7', s4_p: 'Трансфери, консьєрж‑сервіс і швидке вирішення будь‑яких питань гостей для найвищого рейтингу',
    dir_h2: 'Оберіть ваш напрям',
    d1_tag: 'Для власників нерухомості', d1_t: 'Керуюча компанія',
    d1_p: `Передайте готель або віллу в ${U} Management і отримуйте дохід без операційної рутини`,
    d2_tag: 'Для гостей', d2_t: 'Знайти й забронювати', d2_p: 'Вілли та апартаменти на Балі напряму на платформі unit.now', d2_cta: 'Обрати житло',
    eco_label: 'Екосистема UNIT.'
  },
  it: {
    nav_services: 'Servizi', nav_directions: 'Direzioni', nav_label: 'Menu principale', lang_label: 'Lingua',
    cta: 'Affida l’immobile',
    hero_alt: 'Residenza UNIT. Space City tra le risaie di Bali',
    hero_sub: 'Gestione alberghiera professionale e servizio premium a Bali. Trasformiamo il vostro immobile in un asset redditizio e gestito alla perfezione, occupandoci del 100% delle operazioni',
    hero_cta1: 'Affida l’immobile in gestione', hero_cta2: 'Trova un alloggio a Bali',
    svc_h2: 'Un approccio completo alla gestione',
    s1_t: 'Gestione operativa', s1_p: 'L’intero ciclo, dalla selezione e formazione del personale al controllo qualità quotidiano e alla pulizia delle camere',
    s2_t: 'Revenue Management', s2_p: 'Prezzi dinamici e strategie per massimizzare i ricavi (RevPAR) basate sull’analisi di mercato',
    s3_t: 'Marketing e distribuzione', s3_p: 'Promozione sulle piattaforme internazionali (Booking, Airbnb) e locali, gestione della reputazione e delle recensioni',
    s4_t: 'Servizio ospiti 24/7', s4_p: 'Transfer, concierge e risposte rapide a ogni richiesta degli ospiti per le valutazioni più alte',
    dir_h2: 'Scegli la tua direzione',
    d1_tag: 'Per i proprietari', d1_t: 'Società di gestione',
    d1_p: `Affidate il vostro hotel o la vostra villa a ${U} Management e ricevete un reddito senza la gestione quotidiana`,
    d2_tag: 'Per gli ospiti', d2_t: 'Trova e prenota', d2_p: 'Ville e appartamenti a Bali direttamente sulla piattaforma unit.now', d2_cta: 'Scegli un alloggio',
    eco_label: 'Ecosistema UNIT.'
  },
  tr: {
    nav_services: 'Hizmetler', nav_directions: 'Yönler', nav_label: 'Ana menü', lang_label: 'Dil',
    cta: 'Mülkü devredin',
    hero_alt: 'Bali’de pirinç tarlaları arasında UNIT. Space City rezidansı',
    hero_sub: 'Bali’de profesyonel otel yönetimi ve premium hizmet. Operasyonların %100’ünü üstlenerek mülkünüzü kârlı ve kusursuz işleyen bir varlığa dönüştürüyoruz',
    hero_cta1: 'Mülkünüzü yönetime verin', hero_cta2: 'Bali’de konaklama bulun',
    svc_h2: 'Yönetime bütünsel yaklaşım',
    s1_t: 'Operasyon yönetimi', s1_p: 'Personel alımı ve eğitiminden günlük kalite kontrolüne ve oda temizliğine kadar tüm süreç',
    s2_t: 'Revenue Management', s2_p: 'Pazar analizine dayalı dinamik fiyatlandırma ve geliri (RevPAR) en üst düzeye çıkaran stratejiler',
    s3_t: 'Pazarlama ve dağıtım', s3_p: 'Uluslararası (Booking, Airbnb) ve yerel platformlarda tanıtım, itibar ve yorum yönetimi',
    s4_t: '7/24 misafir hizmeti', s4_p: 'En yüksek puanlar için transferler, konsiyerj ve her misafir talebine hızlı yanıt',
    dir_h2: 'Yönünüzü seçin',
    d1_tag: 'Mülk sahipleri için', d1_t: 'Yönetim şirketi',
    d1_p: `Otelinizi veya villanızı ${U} Management’a devredin, günlük operasyonla uğraşmadan gelir elde edin`,
    d2_tag: 'Misafirler için', d2_t: 'Bulun ve rezerve edin', d2_p: 'Bali’deki villa ve daireler doğrudan unit.now platformunda', d2_cta: 'Konaklama seçin',
    eco_label: 'UNIT. ekosistemi'
  },
  nl: {
    nav_services: 'Diensten', nav_directions: 'Richtingen', nav_label: 'Hoofdmenu', lang_label: 'Taal',
    cta: 'Woning overdragen',
    hero_alt: 'UNIT. Space City-residentie tussen de rijstvelden op Bali',
    hero_sub: 'Professioneel hospitalitymanagement en premium service op Bali. Wij maken van uw woning een winstgevende, vlekkeloos draaiende investering door 100% van de operatie over te nemen',
    hero_cta1: 'Woning in beheer geven', hero_cta2: 'Verblijf vinden op Bali',
    svc_h2: 'Een complete aanpak van beheer',
    s1_t: 'Operationeel beheer', s1_p: 'De volledige cyclus, van werving en training van personeel tot dagelijkse kwaliteitscontrole en housekeeping',
    s2_t: 'Revenue Management', s2_p: 'Dynamische prijzen en strategieën die de omzet (RevPAR) maximaliseren, op basis van marktanalyse',
    s3_t: 'Marketing en distributie', s3_p: 'Promotie op internationale (Booking, Airbnb) en lokale platforms, reputatie- en reviewbeheer',
    s4_t: 'Gastenservice 24/7', s4_p: 'Transfers, conciërge en snelle antwoorden op elk verzoek van gasten voor de hoogste beoordelingen',
    dir_h2: 'Kies uw richting',
    d1_tag: 'Voor eigenaren', d1_t: 'Beheermaatschappij',
    d1_p: `Draag uw hotel of villa over aan ${U} Management en ontvang inkomsten zonder dagelijkse beslommeringen`,
    d2_tag: 'Voor gasten', d2_t: 'Zoeken en boeken', d2_p: 'Villa’s en appartementen op Bali, rechtstreeks via het platform unit.now', d2_cta: 'Verblijf kiezen',
    eco_label: 'UNIT.-ecosysteem'
  }
};

// Короткие слова не висят в конце строки: клеим к следующему (RU/UK без «где/что/кто/это/как»)
const KEEP = new Set(['где', 'что', 'кто', 'это', 'как', 'де', 'що', 'хто', 'як']);
export function glue(s, l) {
  const g = t => t.replace(/(^|[\s>(« ])([\p{L}\d]{1,3})\.? (?=[\p{L}\d(«])/gu, (m, a, w) => KEEP.has(w.toLowerCase()) ? m : m.slice(0, -1) + ' ');
  s = g(g(s));
  s = s.replace(/(\d) (%|лет|років|years|ans|años|anni|jaar|yıl)/g, '$1 $2');
  if (l === 'fr') s = s.replace(/ ([:;?!»])/g, ' $1').replace(/« /g, '« ');
  return s;
}

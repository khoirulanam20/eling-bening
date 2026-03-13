export const EB_ROOMS_KEY = 'eb_rooms';
export const EB_TICKETS_KEY = 'eb_tickets';
export const EB_BOOKINGS_KEY = 'eb_bookings';

export const DEFAULT_ROOMS = [
    {
        id: 1,
        name: 'Deluxe Mountain View',
        price: 1250000,
        capacity: 2,
        stock: 5,
        bed: 'King Bed',
        size: 32,
        desc: 'Kamar dengan panorama gunung yang memukau, dirancang untuk pengalaman menginap yang tenang dan nyaman.',
        amenities: ['Sarapan Gratis', 'Free Mini Bar', 'Akses Kolam Renang'],
        status: 'available',
        image: '/images/resort-room.png',
    },
    {
        id: 2,
        name: 'Executive Lake Suite',
        price: 1850000,
        capacity: 2,
        stock: 2,
        bed: 'King Bed',
        size: 45,
        desc: 'Suite premium menghadap Danau Rawa Pening dengan balkon pribadi dan fasilitas bintang lima.',
        amenities: ['Sarapan Gratis', 'Private Balcony', 'Smart TV 55"'],
        status: 'available',
        image: '/images/resort-room.png',
    },
    {
        id: 3,
        name: 'Grand Villa Family',
        price: 3500000,
        capacity: 4,
        stock: 0,
        bed: '2 King Bed',
        size: 90,
        desc: 'Villa luas cocok untuk keluarga besar, dengan ruang tamu, dapur kecil, dan pemandangan alam bebas.',
        amenities: ['Sarapan Gratis', 'Private Pool', 'Full Kitchen'],
        status: 'full',
        image: '/images/resort-room.png',
    },
];

export const DEFAULT_TICKETS = [
    {
        id: 1,
        name: 'Tiket Masuk Reguler (Weekday)',
        price: 25000,
        days: 'Weekday',
        desc: 'Akses penuh area wisata, wahana air, dan parkir gratis. Berlaku Senin – Jumat.',
        status: 'active',
    },
    {
        id: 2,
        name: 'Tiket Masuk Reguler (Weekend)',
        price: 30000,
        days: 'Weekend',
        desc: 'Akses penuh area wisata, wahana air, dan parkir gratis. Berlaku Sabtu & Minggu.',
        status: 'active',
    },
    {
        id: 3,
        name: 'Paket Promo Rombongan (>20 org)',
        price: 20000,
        days: 'Semua Hari',
        desc: 'Khusus grup ≥20 orang, termasuk pemandu wisata gratis dan area piknik eksklusif.',
        status: 'inactive',
    },
];

export function getRooms() {
    try {
        const stored = localStorage.getItem(EB_ROOMS_KEY);
        return stored ? JSON.parse(stored) : DEFAULT_ROOMS;
    } catch { return DEFAULT_ROOMS; }
}

export function saveRooms(rooms) {
    localStorage.setItem(EB_ROOMS_KEY, JSON.stringify(rooms));
}

export function getTickets() {
    try {
        const stored = localStorage.getItem(EB_TICKETS_KEY);
        return stored ? JSON.parse(stored) : DEFAULT_TICKETS;
    } catch { return DEFAULT_TICKETS; }
}

export function saveTickets(tickets) {
    localStorage.setItem(EB_TICKETS_KEY, JSON.stringify(tickets));
}

export function getBookings() {
    try {
        const stored = localStorage.getItem(EB_BOOKINGS_KEY);
        return stored ? JSON.parse(stored) : [];
    } catch { return []; }
}

export function saveBookings(bookings) {
    localStorage.setItem(EB_BOOKINGS_KEY, JSON.stringify(bookings));
}

export function formatRupiah(n) {
    return 'Rp ' + Number(n).toLocaleString('id-ID');
}

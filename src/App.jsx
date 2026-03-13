import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import GuestLayout from './layouts/GuestLayout';
import AdminLayout from './layouts/AdminLayout';

import Home from './pages/guest/Home';
import About from './pages/guest/About';
import Gallery from './pages/guest/Gallery';
import Facilities from './pages/guest/Facilities';
import Contact from './pages/guest/Contact';
import Ticketing from './pages/guest/Ticketing';
import Rooms from './pages/guest/Rooms';
import RoomDetails from './pages/guest/RoomDetails';
import Booking from './pages/guest/Booking';
import History from './pages/guest/History';
import Payment from './pages/guest/Payment';
import BookingDetails from './pages/guest/BookingDetails';

import Dashboard from './pages/admin/Dashboard';
import AdminRooms from './pages/admin/Rooms';
import AdminTickets from './pages/admin/Tickets';
// Admin Stubs
import AdminBookings from './pages/admin/Bookings';
import AdminPackages from './pages/admin/Packages';
import AdminPromos from './pages/admin/Promos';
import AdminReschedule from './pages/admin/Reschedule';
import AdminSeo from './pages/admin/Seo';
import AdminScanner from './pages/admin/Scanner';
import AdminFinance from './pages/admin/Finance';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Guest Routes */}
        <Route path="/" element={<GuestLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="facilities" element={<Facilities />} />
          <Route path="contact" element={<Contact />} />
          <Route path="ticketing" element={<Ticketing />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="rooms/:id" element={<RoomDetails />} />
          <Route path="booking" element={<Booking />} />
          <Route path="payment" element={<Payment />} />
          <Route path="booking-details" element={<BookingDetails />} />
          <Route path="history" element={<History />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="rooms" element={<AdminRooms />} />
          <Route path="tickets" element={<AdminTickets />} />
          <Route path="bookings" element={<AdminBookings />} />
          <Route path="packages" element={<AdminPackages />} />
          <Route path="promos" element={<AdminPromos />} />
          <Route path="reschedule" element={<AdminReschedule />} />
          <Route path="seo" element={<AdminSeo />} />
          <Route path="scanner" element={<AdminScanner />} />
          <Route path="finance" element={<AdminFinance />} />
          <Route path="*" element={<Navigate to="/admin" replace />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './utils/AuthContext';
import GuestLayout from './layouts/GuestLayout';
import AdminLayout from './layouts/AdminLayout';
import { ContentProvider } from './context/ContentContext';
import { Toaster } from 'react-hot-toast';

import Home from './pages/guest/Home';
import About from './pages/guest/About';
import Gallery from './pages/guest/Gallery';
import Facilities from './pages/guest/Facilities';
import Contact from './pages/guest/Contact';
import Ticketing from './pages/guest/Ticketing';
import Rooms from './pages/guest/Rooms';
import RoomDetails from './pages/guest/RoomDetails';
import Booking from './pages/guest/Booking';
import Profile from './pages/guest/Profile';
import Payment from './pages/guest/Payment';
import BookingDetails from './pages/guest/BookingDetails';
import Login from './pages/guest/Login';
import Register from './pages/guest/Register';
import Events from './pages/guest/Events';

import Dashboard from './pages/admin/Dashboard';
import AdminRooms from './pages/admin/Rooms';
import AdminAddRoom from './pages/admin/rooms/AddRoom';
import AdminEditRoom from './pages/admin/rooms/EditRoom';
import AdminTickets from './pages/admin/Tickets';
import AdminAddTicket from './pages/admin/tickets/AddTicket';
import AdminEditTicket from './pages/admin/tickets/EditTicket';
import AdminTicketOrders from './pages/admin/tickets/TicketOrders';
import AdminEvents from './pages/admin/Events';
import AdminAddEvent from './pages/admin/events/AddEvent';
import AdminEditEvent from './pages/admin/events/EditEvent';
// Admin Stubs
import AdminBookings from './pages/admin/Bookings';
import AdminPackages from './pages/admin/Packages';
import AdminPromos from './pages/admin/Promos';
import AdminAddPromo from './pages/admin/promos/AddPromo';
import AdminEditPromo from './pages/admin/promos/EditPromo';
import AdminReschedule from './pages/admin/Reschedule';
import AdminSeo from './pages/admin/Seo';
import AdminScanner from './pages/admin/Scanner';
import AdminFinance from './pages/admin/Finance';
import AdminExpenses from './pages/admin/Expenses';
import AdminFinanceRecap from './pages/admin/FinanceRecap';
import AdminFinanceTickets from './pages/admin/FinanceTickets';
import AdminFinanceResort from './pages/admin/FinanceResort';
import AdminStats from './pages/admin/Stats';
import AdminContent from './pages/admin/AdminContent';
import AdminSettings from './pages/admin/Settings';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

function App() {
  return (
    <ContentProvider>
      <Toaster position="top-right" />
      <BrowserRouter>
        <Routes>
          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Guest Routes */}
          <Route path="/" element={<GuestLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="facilities" element={<Facilities />} />
            <Route path="contact" element={<Contact />} />
            <Route path="rooms" element={<Rooms />} />
            <Route path="rooms/:id" element={<RoomDetails />} />
            <Route path="events" element={<Events />} />

            {/* Protected Guest Routes */}
            <Route path="ticketing" element={<ProtectedRoute><Ticketing /></ProtectedRoute>} />
            <Route path="booking" element={<ProtectedRoute><Booking /></ProtectedRoute>} />
            <Route path="payment" element={<ProtectedRoute><Payment /></ProtectedRoute>} />
            <Route path="booking-details" element={<ProtectedRoute><BookingDetails /></ProtectedRoute>} />
            <Route path="profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          </Route>

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="stats" element={<AdminStats />} />
            <Route path="rooms" element={<AdminRooms />} />
            <Route path="rooms/add" element={<AdminAddRoom />} />
            <Route path="rooms/edit/:id" element={<AdminEditRoom />} />
            <Route path="tickets" element={<AdminTickets />} />
            <Route path="tickets/add" element={<AdminAddTicket />} />
            <Route path="tickets/edit/:id" element={<AdminEditTicket />} />
            <Route path="tickets/orders" element={<AdminTicketOrders />} />
            <Route path="events" element={<AdminEvents />} />
            <Route path="events/add" element={<AdminAddEvent />} />
            <Route path="events/edit/:id" element={<AdminEditEvent />} />
            <Route path="bookings" element={<AdminBookings />} />
            <Route path="packages" element={<AdminPackages />} />
            <Route path="promos" element={<AdminPromos />} />
            <Route path="promos/add" element={<AdminAddPromo />} />
            <Route path="promos/edit/:id" element={<AdminEditPromo />} />
            <Route path="reschedule" element={<AdminReschedule />} />
            <Route path="seo" element={<AdminSeo />} />
            <Route path="scanner" element={<AdminScanner />} />
            <Route path="finance" element={<AdminFinance />} />
            <Route path="finance/expenses" element={<AdminExpenses />} />
            <Route path="finance/recap" element={<AdminFinanceRecap />} />
            <Route path="finance/tickets" element={<AdminFinanceTickets />} />
            <Route path="finance/resort" element={<AdminFinanceResort />} />
            <Route path="content" element={<AdminContent />} />
            <Route path="settings" element={<AdminSettings />} />
            <Route path="*" element={<Navigate to="/admin" replace />} />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ContentProvider>
  );
}

export default App;

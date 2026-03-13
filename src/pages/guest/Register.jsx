import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../utils/AuthContext';
import { Mail, Lock, User, ArrowLeft } from 'lucide-react';

export default function Register() {
    const { register, loginWithGoogle } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const from = location.state?.from?.pathname || '/';

    const handleRegister = (e) => {
        e.preventDefault();
        // Simulate registration
        register({ id: Date.now(), name: name, email: email });
        navigate(from, { replace: true });
    };

    const handleGoogleRegister = () => {
        loginWithGoogle();
        navigate(from, { replace: true });
    };

    return (
        <div className="min-h-screen flex text-gray-900 bg-gray-50">
            {/* Left side: Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-24 bg-white relative order-2 lg:order-1">
                {/* Mobile back button */}
                <Link to="/" className="lg:hidden absolute top-8 left-8 text-gray-500 hover:text-gray-900 font-bold flex items-center gap-2 transition">
                    <ArrowLeft size={20} /> Beranda
                </Link>

                <div className="w-full max-w-md">
                    <div className="text-center lg:text-left mb-12">
                        <img src="/images/logo.png" className="h-16 mx-auto lg:mx-0 mb-6 lg:hidden" alt="Logo" />
                        <h1 className="text-4xl font-bold font-serif mb-4 text-gray-900">Buat Akun</h1>
                        <p className="text-gray-500">Dapatkan kemudahan dan penawaran menarik khusus member Eling Bening.</p>
                    </div>

                    <button onClick={handleGoogleRegister} className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-200 text-gray-700 font-bold py-3.5 px-4 rounded-2xl hover:bg-gray-50 hover:border-gray-300 transition shadow-sm mb-6">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="h-5" />
                        Daftar dengan Google
                    </button>

                    <div className="flex items-center gap-4 mb-6">
                        <hr className="flex-1 border-gray-200" />
                        <span className="text-gray-400 text-sm font-bold uppercase tracking-widest">atau daftar manual</span>
                        <hr className="flex-1 border-gray-200" />
                    </div>

                    <form onSubmit={handleRegister} className="space-y-5">
                        <div className="relative">
                            <label className="block text-sm font-bold text-gray-700 mb-2">Nama Lengkap</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl pl-12 pr-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-eling-green/50 focus:border-eling-green focus:bg-white transition"
                                    placeholder="Budi Santoso"
                                />
                            </div>
                        </div>

                        <div className="relative">
                            <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl pl-12 pr-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-eling-green/50 focus:border-eling-green focus:bg-white transition"
                                    placeholder="nama@email.com"
                                />
                            </div>
                        </div>

                        <div className="relative">
                            <label className="block text-sm font-bold text-gray-700 mb-2">Password</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl pl-12 pr-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-eling-green/50 focus:border-eling-green focus:bg-white transition"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <button type="submit" className="w-full bg-eling-green text-white font-bold py-4 rounded-xl hover:bg-green-800 transition shadow-lg text-lg mt-6">
                            Daftar Sekarang
                        </button>
                    </form>

                    <p className="text-center mt-8 text-gray-600">
                        Sudah punya akun? <Link to="/login" className="font-bold text-eling-green hover:underline underline-offset-4">Masuk di sini</Link>
                    </p>
                </div>
            </div>

            {/* Right side: Image */}
            <div className="hidden lg:flex w-1/2 bg-gray-900 relative order-1 lg:order-2">
                <img src="/images/resort-room.png" className="w-full h-full object-cover opacity-60" alt="Register bg" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900/50"></div>

                <Link to="/" className="absolute top-10 right-10 text-white font-bold flex items-center gap-2 hover:opacity-80 transition bg-black/20 px-6 py-3 rounded-full backdrop-blur-md">
                    Kembali ke Beranda <ArrowLeft size={20} className="rotate-180" />
                </Link>
            </div>
        </div>
    );
}

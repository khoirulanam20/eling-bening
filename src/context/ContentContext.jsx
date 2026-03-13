import React, { createContext, useContext, useState, useEffect } from 'react';

const ContentContext = createContext();

export const useContent = () => useContext(ContentContext);

const defaultContent = {
    home: {
        heroBadge: 'WISATA ALAM & RESORT',
        heroTitleLine1: 'Nikmati Keindahan Alam',
        heroTitleLine2: 'Terbaik di Ambarawa',
        heroSubtitle: 'Eling Bening menawarkan pemandangan Rawa Pening yang menakjubkan dengan fasilitas resort mewah, kolam renang, dan restoran berkualitas untuk liburan keluarga Anda.',
        ctaPrimary: 'Booking Kamar',
        ctaSecondary: 'Lihat Tiket'
    },
    about: {
        heroTitle: 'Tentang Eling Bening',
        heroDesc: 'Destinasi wisata terpadu yang menggabungkan keindahan pemandangan Rawa Pening dengan fasilitas modern.',
        storyTitle: 'Sejarah & Visi Kami',
        storyP1: 'Berawal dari kecintaan akan keindahan alam Ambarawa, Eling Pening dibangun untuk menjadi ikon wisata Jawa Tengah yang ramah keluarga.',
        storyP2: 'Kami terus berkomitmen memberikan pelayanan terbaik dan menjaga kelestarian alam sekitar untuk dinikmati generasi mendatang.'
    },
    contact: {
        title: 'Hubungi Kami',
        subtitle: 'Tim kami siap membantu kebutuhan informasi dan reservasi Anda.',
        email: 'info@elingbening.com',
        phone: '+62 812 3456 7890',
        address: 'Jl. Sarjono, Ambarawa, Jawa Tengah, Indonesia'
    }
};

export const ContentProvider = ({ children }) => {
    const [content, setContent] = useState(() => {
        const saved = localStorage.getItem('eb_content');
        return saved ? JSON.parse(saved) : defaultContent;
    });

    useEffect(() => {
        localStorage.setItem('eb_content', JSON.stringify(content));
    }, [content]);

    const updateContent = (tab, key, value) => {
        setContent(prev => ({
            ...prev,
            [tab]: {
                ...prev[tab],
                [key]: value
            }
        }));
    };

    return (
        <ContentContext.Provider value={{ content, updateContent }}>
            {children}
        </ContentContext.Provider>
    );
};

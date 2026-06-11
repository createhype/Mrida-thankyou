'use client';

export default function WhatsAppButton({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'block',
        width: '100%',
        backgroundColor: '#25a244',
        color: '#ffffff',
        textAlign: 'center',
        padding: '18px 24px',
        borderRadius: '10px',
        fontWeight: 800,
        fontSize: '16px',
        letterSpacing: '0.5px',
        textDecoration: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.2s ease',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#1a8c3a';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#25a244';
      }}
    >
      JOIN WHATSAPP GROUP NOW
    </a>
  );
}

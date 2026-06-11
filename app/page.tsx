import WhatsAppButton from './WhatsAppButton';

export default function ThankYouPage() {
  return (
    <main style={styles.main}>
      <div style={styles.card}>
        <h1 style={styles.heading}>धन्यवाद!</h1>

        <h2 style={styles.subheading}>
          Free Fertility Demo WhatsApp Group ला<br />
          ताबडतोब join करा.
        </h2>

        <div style={styles.divider} />

        <p style={styles.sectionLabel}>
          👉 WhatsApp Group मध्ये तुम्हाला काय मिळेल?
        </p>

        <ul style={styles.list}>
          <li style={styles.listItem}>
            <span style={styles.checkmark}>✅</span>
            <span>Demo Class ची Zoom link</span>
          </li>
          <li style={styles.listItem}>
            <span style={styles.checkmark}>✅</span>
            <span>Demo आधीच्या important instructions</span>
          </li>
          <li style={styles.listItem}>
            <span style={styles.checkmark}>✅</span>
            <span>Fertility readiness tips (stress, anxiety support)</span>
          </li>
        </ul>

        <WhatsAppButton href="https://chat.whatsapp.com/GelIFrhKZaq427IY4a6YBr" />
      </div>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  main: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 20px',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '48px 52px',
    maxWidth: '580px',
    width: '100%',
    boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
  },
  heading: {
    fontSize: '48px',
    fontWeight: 800,
    color: '#111111',
    marginBottom: '16px',
    lineHeight: 1.1,
  },
  subheading: {
    fontSize: '22px',
    fontWeight: 700,
    color: '#222222',
    lineHeight: 1.5,
    marginBottom: '32px',
  },
  divider: {
    height: '2px',
    backgroundColor: '#e8e8e8',
    marginBottom: '28px',
  },
  sectionLabel: {
    fontSize: '17px',
    fontWeight: 700,
    color: '#222222',
    marginBottom: '18px',
  },
  list: {
    listStyle: 'none',
    marginBottom: '36px',
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
  },
  listItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
    fontSize: '16px',
    color: '#333333',
    lineHeight: 1.5,
  },
  checkmark: {
    flexShrink: 0,
    fontSize: '18px',
    marginTop: '1px',
  },
};

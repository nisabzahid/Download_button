// Importing necessary modules and components
import styles from "./page.module.css";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

// Component for the Home page
export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.center}>
        {/* Using a Stack component for layout */}
        <Stack spacing={2} direction="column">
    
          <Button
            href='/rom.jpg'
            download="/rom.jpg"
            variant="contained"
            target='_blank'
          >
            Download
          </Button>
        </Stack>
      </section>
    </main>
  );
}

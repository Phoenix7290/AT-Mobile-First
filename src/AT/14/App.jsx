import Header from './components/Header';
import MainPost from './components/MainPost';
import ContributionsList from './components/ContributionsList';
import ReplyForm from './components/ReplyForm';
import TopTopics from './components/TopTopics';
import styles from './App.module.css';

const contributions = [
  { author: 'Maria', date: '23/09/2024', likes: 20, content: 'Caramba o que eu acabei de ler...' },
  { author: 'Pedro', date: '23/09/2024', likes: 15, content: 'Vamos Batman! Bora' },
  { author: 'Ana', date: '22/09/2024', likes: 10, content: 'Esse povo é complicado.' },
  { author: 'Carlos', date: '22/09/2024', likes: 8, content: 'Vamos Destemido, continue!' },
  { author: 'Lucia', date: '21/09/2024', likes: 5, content: 'EU quero o Batman aquii' }
];

const recentTopics = ['Israel', 'Cade o café', 'EUA', 'Gustavo Lima', 'Bets'];
const mostReplied = ['Gustavo Lima', 'Bets', 'EUA', 'Como se proteger', 'Estudar programação'];
const mostLiked = ['Cade o café', 'Gustavo Lima', 'O amor', 'Infnet', 'O que é esse Batman?'];

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.content}>
        <MainPost title="Eu descobri que sou o Batman" subtitle="Isso mesmo que você leu" content="Eu (Homem de 14 anos) descobri que sou o Batman, eu sou um morcego que vive na escuridão e vai na caça contra o crime. Eu salvarei o mundo!" author="Destemido" date="23/09/2024" likes="80" repost="5"/>
        <ContributionsList contributions={contributions}/>
        <ReplyForm />
        <TopTopics recentTopics={recentTopics} mostReplied={mostReplied} mostLiked={mostLiked}/>
      </main>
    </div>
  );
}

export default App;

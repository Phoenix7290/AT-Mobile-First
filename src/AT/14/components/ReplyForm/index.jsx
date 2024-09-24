import { useState } from 'react';
import styles from './ReplyForm.module.css';

const ReplyForm = () => {
  const [reply, setReply] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Resposta enviada:', reply);
    setReply('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        value={reply}
        onChange={(e) => setReply(e.target.value)}
        placeholder="Escreva sua resposta..."
        required
      />
      <button type="submit">Enviar Resposta</button>
      <p>Usuário autenticado: João Silva</p>
    </form>
  );
};

export default ReplyForm;

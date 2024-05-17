import React, { useEffect } from 'react';
import '../../pages/sakura/sakura.css';

const SakuraFalling = () => {
  useEffect(() => {
    const sakuraContainer = document.getElementById('sakura-container');
    const containerWidth = sakuraContainer.offsetWidth;
    const containerHeight = sakuraContainer.offsetHeight;
    const leafSize = 20; // Tamanho da folha

    const createLeaf = () => {
      const leaf = document.createElement('div');
      leaf.className = 'sakura';
      let leftPosition, topPosition;

      // Gerar posição horizontal aleatória fora da tela
      do {
        leftPosition = Math.random() * containerWidth;
      } while (leftPosition + leafSize > containerWidth); // Garante que a folha não ultrapasse a largura do contêiner

      // Gerar posição vertical aleatória fora da tela
      do {
        topPosition = Math.random() * containerHeight;
      } while (topPosition + leafSize > containerHeight); // Garante que a folha não ultrapasse a altura do contêiner

      leaf.style.left = `${leftPosition}px`;
      leaf.style.top = `${topPosition}px`;
      sakuraContainer.appendChild(leaf);

      setTimeout(() => {
        leaf.style.top = '100vh'; // Define a posição no topo da tela
        leaf.style.left = `${Math.random() * containerWidth}px`; // Define uma nova posição horizontal aleatória
      }, 10000); // Tempo após o qual a folha reaparece no topo (10 segundos)
    };

    // Cria mais folhas inicialmente de forma espaçada
    const initialIntervalId = setInterval(() => {
      createLeaf();
    }, 100); // Intervalo de 0.1 segundos entre cada folha

    // Limpa o intervalo de criação inicial de folhas após um tempo
    setTimeout(() => {
      clearInterval(initialIntervalId);
    }, 5000); // Após 5 segundos, interrompe a criação inicial de folhas

    // Cria novas folhas periodicamente
    const intervalId = setInterval(createLeaf, 500); // Intervalo de 0.5 segundos

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(intervalId);
  }, []);

  return <div id="sakura-container" className="sakura-container"></div>;
};

export default SakuraFalling;

// import styled from 'styled-components';
// import useStats from '../utils/useStats';

// const StatGrid = styled.div`
//   display: flex;
// `;
// const StatBlock = styled.div`
//   h3{
//     margin: 0 0 18px 0;
//   }
//   background: #f2f2f2;

//   width: 7rem;
//   height: 7rem;

//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;

// `;

// export default function Stats({ url }) {
//   const { stats, loading, error } = useStats(url);

//   if (loading) return <p>Carregando...</p>;
//   if (error) return <p>Error...</p>;

//   return (
//     <StatGrid>
//       <StatBlock>
//         <h3>Confirmados</h3>
//         <span>{stats.confirmed.value}</span>
//       </StatBlock>

//       <StatBlock>
//         <h3>Mortos</h3>
//         <span>{stats.deaths.value}</span>
//       </StatBlock>

//       <StatBlock>
//         <h3>Recuperados</h3>
//         <span>{stats.recovered.value}</span>
//       </StatBlock>

//     </StatGrid>
//   );
// }
